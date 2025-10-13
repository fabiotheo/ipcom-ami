# 🔴 Relatório de Memory Leak - @ipcom/asterisk-ami@0.0.28

## **Contexto do Problema**

Aplicação Node.js com Asterisk AMI apresenta **JavaScript heap out of memory** após algumas horas em produção:

```
FATAL ERROR: Ineffective mark-compacts near heap limit
Allocation failed - JavaScript heap out of memory
```

**Sintomas observados**:
1. ❌ `MaxListenersExceededWarning: 11 Action_1760380363392 listeners added`
2. ❌ Heap cresce de ~200MB → 2GB → crash
3. ❌ GC (Garbage Collector) em loop sem conseguir liberar memória

---

## **🔍 Pontos Críticos para Análise na Biblioteca**

### **1. CRÍTICO: Listeners temporários `Action_<timestamp>` não são removidos**

**Evidência do problema**:
```
(node:584862) MaxListenersExceededWarning: Possible EventEmitter memory leak detected.
11 Action_1760380363392 listeners added to [EventEmitter].
MaxListeners is 10. Use emitter.setMaxListeners() to increase limit
```

**Padrão observado**: Cada chamada `ami.action()` cria um listener com nome `Action_<timestamp>`.

**Suspeita de implementação problemática**:
```typescript
// Exemplo de implementação problemática comum
class Eami {
  async action(params: ActionParams): Promise<ActionResponse> {
    const actionId = `Action_${Date.now()}`;

    // ❌ PROBLEMA: Listener é adicionado mas NUNCA removido
    this.events.once(actionId, (response) => {
      return response;
    });

    // Envia o comando AMI
    this.socket.write(`Action: ${params.Action}\r\nActionID: ${actionId}\r\n\r\n`);

    // ❌ FALTA: removeListener após timeout ou resposta
  }
}
```

**O que investigar**:
- ✅ Cada `Action_*` listener está sendo removido após receber resposta?
- ✅ Há timeout implementado? Se sim, o listener é removido no timeout?
- ✅ Em caso de erro/rejeição, o listener é limpo?
- ✅ Usar `once()` ao invés de `on()` para eventos únicos
- ✅ Implementar cleanup explícito: `this.events.removeListener(actionId, handler)`

**Volume de uso no nosso código**: ~50 chamadas `ami.action()` por minuto em alta carga.

---

### **2. CRÍTICO: EventEmitter global não é limpo em reconexões**

**Código do cliente**:
```typescript
// src/services/Asterisk/Ami/AmiInitialize.ts
export const ami = new Eami({ /* config */ });

// setupConnectionListeners é chamado MÚLTIPLAS vezes sem cleanup
const setupConnectionListeners = (Ami: Eami) => {
  Ami.events.on(eAMI_EVENTS.CONNECT, () => { /* ... */ });
  Ami.events.on(eAMI_EVENTS.CLOSE, () => { /* ... */ });
  // ... 6 eventos no total
};

// ❌ Chamado a cada reconexão SEM removeAllListeners antes
attemptReconnection() {
  setupConnectionListeners(ami); // Adiciona 6 listeners novos
}
```

**O que a biblioteca deve garantir**:
- ✅ `ami.connect()` deve fazer cleanup automático de listeners antigos?
- ✅ `ami.destroySocket()` remove todos os listeners internos?
- ✅ Há documentação clara sobre quando chamar `events.removeAllListeners()`?

**Pergunta**: A biblioteca deveria expor um método `ami.cleanup()` ou `ami.reset()` para uso antes de reconectar?

---

### **3. MÉDIO: Padrão de reconexão automática**

**Configuração atual**:
```typescript
additionalOptions: {
  reconnect: true,
  heartbeatInterval: 5,
}
```

**O que investigar**:
- ✅ A reconexão automática (`reconnect: true`) limpa todos os recursos antes de reconectar?
- ✅ O heartbeat cria listeners que se acumulam?
- ✅ Há um `maxReconnectAttempts` implementado? Se não, pode causar loop infinito.

---

### **4. MÉDIO: Estrutura interna do EventEmitter**

**Verificar internamente**:
```typescript
// A biblioteca usa EventEmitter nativo do Node.js?
import { EventEmitter } from 'events';

class Eami extends EventEmitter {
  // OU
  public events: EventEmitter;
}
```

**Padrões problemáticos comuns**:
❌ **Não usar `removeListener` após Promise resolver**
```typescript
return new Promise((resolve) => {
  this.events.once('response', resolve); // ← once() é bom
  // MAS: E se der timeout? O listener fica eternamente
});
```

✅ **Padrão correto**:
```typescript
return new Promise((resolve, reject) => {
  const handler = (data) => {
    clearTimeout(timeoutId);
    this.events.removeListener('response', handler); // ← Cleanup explícito
    resolve(data);
  };

  const timeoutId = setTimeout(() => {
    this.events.removeListener('response', handler); // ← Cleanup no timeout
    reject(new Error('Timeout'));
  }, 5000);

  this.events.once('response', handler);
});
```

---

### **5. BAIXO: Memory profiling do código da biblioteca**

**Sugestão de teste**:
```bash
# Rodar teste de stress com memory profiling
node --inspect --max-old-space-size=512 test-stress.js

# Conectar no Chrome DevTools e fazer heap snapshot
# chrome://inspect
```

**Script de teste sugerido** (para o desenvolvedor criar):
```javascript
const { eAmi } = require('@ipcom/asterisk-ami');

const ami = new eAmi({
  host: 'localhost',
  port: 5038,
  userName: 'admin',
  password: 'secret'
});

// Simular 10.000 chamadas ami.action()
async function stressTest() {
  for (let i = 0; i < 10000; i++) {
    await ami.action({ Action: 'QueueStatus' });

    if (i % 100 === 0) {
      console.log(`Iteração ${i}:`, {
        listeners: ami.events.listenerCount(),
        memory: process.memoryUsage().heapUsed / 1024 / 1024
      });
    }
  }
}

ami.connect().then(stressTest);
```

**Resultado esperado**:
- ✅ `listenerCount()` deve permanecer **constante** (~10-20 listeners fixos)
- ✅ Memória deve crescer <50MB

**Resultado problemático**:
- ❌ `listenerCount()` cresce linearmente: 100 → 500 → 1000+
- ❌ Memória cresce >500MB

---

## **📋 Checklist de Verificação para o Desenvolvedor**

### **Código-fonte da biblioteca**:
- [ ] Cada `ami.action()` usa `once()` ao invés de `on()`
- [ ] Todos os listeners temporários são removidos após resposta/timeout/erro
- [ ] `ami.destroySocket()` limpa todos os EventEmitters internos
- [ ] `ami.connect()` não acumula listeners em reconexões
- [ ] Implementar `ami.cleanup()` ou `ami.reset()` método público
- [ ] Heartbeat não cria listeners infinitos

### **Testes**:
- [ ] Teste de stress: 10.000 chamadas `ami.action()` consecutivas
- [ ] Teste de reconexão: 50 ciclos de connect/disconnect
- [ ] Memory profiling com heap snapshots
- [ ] Verificar `process.memoryUsage()` e `ami.events.eventNames().length`

### **Documentação**:
- [ ] Documentar quando chamar `removeAllListeners()`
- [ ] Exemplo de uso correto em reconexões
- [ ] Advertência sobre chamadas `ami.action()` em loops

---

## **🔧 Workarounds Temporários (Lado Cliente)**

Enquanto aguardamos correção da biblioteca, implementamos:

1. **Aumentar limite de listeners**: `ami.events.setMaxListeners(50)`
2. **Cleanup manual antes de reconectar**:
```typescript
const reconnect = () => {
  ami.events.removeAllListeners(); // ← Forçar limpeza
  ami.destroySocket();
  ami.connect();
};
```
3. **Limitar buffer de mensagens pendentes**: Max 100 mensagens

---

## **📊 Dados do Ambiente**

- **Node.js**: v22+ (com V8 otimizado)
- **Biblioteca**: `@ipcom/asterisk-ami@0.0.28`
- **Carga**: ~50 `ami.action()` por minuto
- **Reconexões**: ~5-10 por dia (Asterisk reinicia)
- **Tempo até crash**: 4-8 horas em produção

---

## **❓ Perguntas Específicas para o Desenvolvedor**

1. **A biblioteca usa `once()` ou `on()` para eventos temporários?**
2. **Existe um método `ami.cleanup()` ou similar para limpar recursos?**
3. **O `reconnect: true` automático faz cleanup antes de reconectar?**
4. **Qual o comportamento esperado de `ami.destroySocket()`? Ele limpa listeners?**
5. **Há algum teste de memória/stress na biblioteca?**
6. **É possível ter acesso ao código-fonte da biblioteca para análise?** (Se não for open source)

---

## **📂 Arquivos Relevantes do Cliente**

### Principais chamadas `ami.action()`:
- `src/services/UsersAgents/AddNewAgentToQueue.service.ts` - 12 chamadas
- `src/watchers/UseQueueMembers.ts` - 15 chamadas
- `src/sockets/message.socket.ts` - múltiplas chamadas em eventos

### Configuração AMI:
- `src/services/Asterisk/Ami/AmiInitialize.ts` - Setup e reconexão

---

## **🎯 Objetivo Final**

Eliminar o memory leak para permitir:
- ✅ Aplicação rodar **semanas** sem restart
- ✅ Heap estável em ~200-500MB
- ✅ Zero warnings de `MaxListenersExceeded`
- ✅ GC saudável com ciclos rápidos (<50ms)

---

**Data do relatório**: 2025-10-13
**Versão da biblioteca analisada**: @ipcom/asterisk-ami@0.0.28
**Ambiente**: Produção - PBX IPCOM Backend
