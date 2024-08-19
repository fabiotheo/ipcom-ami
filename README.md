# @ipcom/asterisk-ami

**@ipcom/asterisk-ami** é um cliente AMI (Asterisk Manager Interface) desenvolvido em TypeScript. Ele permite que você se conecte ao Asterisk através da porta 5038/TCP ou qualquer outra porta configurada no `manager.conf`, escutando eventos padrão do Asterisk e realizando requisições de ações.

## Sumário

- [Instalação](#instalação)
- [Uso Básico](#uso-básico)
- [Configuração do Asterisk](#configuração-do-asterisk)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Exemplos de Código](#exemplos-de-código)
- [API e Tipagem](#api-e-tipagem)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato e Suporte](#contato-e-suporte)

## Instalação

Para instalar o módulo, você pode usar npm ou yarn:

```bash
npm install @ipcom/asterisk-ami
# ou
yarn add @ipcom/asterisk-ami
```

## Uso Básico
### Conectando ao Asterisk
```typescript
import { eAmi as Eami } from '@ipcom/asterisk-ami';

export const ami = new Eami({
    host: '192.168.0.10',
    port: 5038,
    userName: 'amiIpcom',
    password: 'amiIpcomPass',
    additionalOptions: {
        debug: false,
        emitAllEvents: true,
        reconnect: true,
        resendAction: false,
     },
    });
```

### Criando uma Ação para Originar uma Ligação
```typescript
try {
    const originateCall = await ami.actions
        .Originate({
            Channel: `PJSIP/1000`,
            CallerID: Number(4531225150),
            Context: 'default',
            Priority: 1,
            Async: true,
            ChannelId: '123456789',
            Exten: Number(4531225150),
            Timeout: 30000, // Em milisegundos
            Variable: `variable1=myVariable1,variable2=myVariable2`,
            ActionID: '123456789',
            Action: 'Originate',
        });
    console.log(originateCall);
} catch (e) {
    console.log(e);
}
```

### Escutando Eventos
```typescript
ami.events.on('events', async (evt) => {
    if (evt.Event === 'AgentComplete') {
        console.log(evt);
    }
});

// Ou
// Usando Type Guards para eventos específicos:
import { type isAgentComplete } from '@ipcom/asterisk-ami';

ami.events.on('events', async (evt) => {
    if (isAgentComplete(evt)) {
        console.log(evt);
    }
});
```

## Configuração do Asterisk
Para utilizar o módulo @ipcom/asterisk-ami, é necessário configurar o manager.conf no Asterisk:
```ini
[general]
enabled = yes
port = 5038
bindaddr = 0.0.0.0

[amiIpcom]
secret = amiIpcomPass
deny=0.0.0.0/0.0.0.0
permit=127.0.0.1/255.0.0.0
permit=192.168.0.1/255.255.255.255
writetimeout = 5000
read = system,call,log,verbose,command,agent,user,config,command,dtmf,reporting,cdr,dialplan,originate
write = system,call,log,verbose,command,agent,user,config,command,dtmf,reporting,cdr,dialplan,originate
displayconnects = no
```

Para verificar se o Asterisk está conectado corretamente, execute o seguinte comando na CLI do Asterisk:

```bash
manager show connected
```
Isso deve retornar algo como:
```bash
ipcomcloud*CLI> manager show connected
Username         IP Address        Start       Elapsed   FileDes   HttpCnt   Read   Write
amiIpcom         192.168.0.1       1723835531  12074     11        0         08191  08191
1 users connected.
```
### Funcionalidades Principais
**Escutar Eventos:** O módulo pode escutar uma ampla variedade de eventos do Asterisk, como AgentDump, AgentLogin, AgentLogoff, QueueMember, entre outros.

**Executar Ações:** Execute ações no Asterisk como PJSIPHangup, PJSIPNotify, Originate, e muitas outras.

**Tipagem Completa:** Feito em TypeScript, garantindo tipagem completa para todos os eventos e ações.

### Exemplos de Código
Os exemplos já foram incluídos nas seções anteriores de uso básico.

### API e Tipagem
Ainda em desenvolvimento. A documentação completa da API será lançada em breve, incluindo detalhes sobre todos os eventos e ações suportadas.

### Contribuição
Estamos abertos a contribuições! Se você deseja ajudar a melhorar este módulo, sinta-se à vontade para fazer um fork e enviar pull requests. Estamos especialmente interessados em adicionar mais tipagens e exemplos de uso. Diretrizes mais detalhadas serão publicadas em breve.

### Licença
Este projeto é licenciado sob a MIT License.

### Contato e Suporte
Para suporte, entre em contato via Twitter.
Link para meu perfil [@real_fftheodoro](https://x.com/real_fftheodoro/).
