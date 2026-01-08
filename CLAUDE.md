# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**@ipcom/asterisk-ami** is a TypeScript client library for the Asterisk Manager Interface (AMI). It connects to Asterisk via TCP (default port 5038) to listen for AMI events and execute AMI actions. The library provides complete TypeScript typings for Asterisk 18 and 20 events and actions.

## Build System

The project uses a dual-format build system that produces both ESM and CommonJS outputs:

**Build the project:**
```bash
npm run build
```

This executes `build.js` which:
1. Generates TypeScript declaration files using `tsc --emitDeclarationOnly`
2. Bundles ESM format to `dist/esm/index.js` using esbuild
3. Bundles CommonJS format to `dist/cjs/index.cjs` using esbuild
4. All outputs include sourcemaps

**Run the built module:**
```bash
npm start
```

**Linting and Formatting:**
The project uses ESLint for linting and Prettier for code formatting.

```bash
# Linting
npm run lint          # Check for lint errors
npm run lint:fix      # Auto-fix lint errors

# Formatting
npm run format        # Format code with Prettier
npm run format:check  # Check formatting without changes
```

ESLint is configured with TypeScript support via `eslint.config.js` (flat config).
Prettier configuration is in `.prettierrc`.

## Architecture

### Core Components

**Main Class: `eAmi` (src/index.ts)**
The central connection manager that:
- Manages TCP socket connection to Asterisk AMI
- Handles authentication (login/logout)
- Maintains connection health via heartbeat mechanism
- Implements automatic reconnection logic
- Parses AMI protocol messages (CRLF-delimited key-value pairs)
- Dispatches events via Node.js EventEmitter
- Manages action request queue with timeout handling

**Actions Class: `eAmiActions` (src/e-ami-actions.ts)**
Provides typed methods for all AMI actions:
- Each action method returns a Promise with typed response
- Handles action-specific event listeners and cleanup
- Implements timeout handling (default 5 seconds)
- Examples: `Originate()`, `Hangup()`, `QueueStatus()`, `BridgeList()`, `Login()`, `Ping()`

**Event System:**
- Events are emitted via `eAmi.events` (EventEmitter)
- Listen to specific AMI events by name (e.g., `AgentComplete`, `Hangup`)
- Listen to all events via `'events'` listener if `emitAllEvents: true`
- All events include `TimeEvent` (timestamp) and `Request` (originating action if applicable)

### Type System

**Event Types (src/types/events.ts):**
- Complete TypeScript definitions for 180+ AMI events
- All event types extend `BaseEvent` which includes `TimeEvent` and optional `Request`
- Events are discriminated unions based on the `Event` property

**Type Guards (src/typeGuards.ts):**
- Exported functions like `isAgentComplete()`, `isHangup()`, etc.
- Enable type-safe event handling: `if (isAgentComplete(evt)) { /* evt is now typed as AgentComplete */ }`

**Interface Organization:**
- `interfaces/actions.interface.ts` - Action request/response types
- `interfaces/queue.ts` - Queue-related event types
- `interfaces/bridge.interface.ts` - Bridge event types
- `interfaces/hangup.interface.ts` - Hangup event types
- `interfaces/core-interface.ts` - Core channel event types
- Other specialized interfaces for different AMI subsystems

### Connection Lifecycle

1. **Initialization**: Create `eAmi` instance with host, port, credentials, and options
2. **Connect**: Call `connect()` which:
   - Establishes TCP socket connection
   - Performs AMI login authentication
   - Starts heartbeat interval (sends Ping actions)
   - Emits `CONNECT` event on success
3. **Operation**: Execute actions via `ami.actions.*` and listen for events via `ami.events.on()`
4. **Reconnection**: Automatic reconnection on connection loss (if `reconnect: true`)
   - Retries login up to `maxAuthCount` times (default 5)
   - Retries full reconnection up to `maxReconnectCount` times (default 5)
5. **Cleanup**: Call `destroySocket()` to forcibly terminate connection

### AMI Protocol Details

**Message Format:**
- Messages are key-value pairs separated by `\r\n` (CRLF constant)
- Messages end with double CRLF (`\r\n\r\n` - END constant)
- The `getData()` method in `eAmi` parses incoming buffers into typed response objects

**Action ID Handling:**
- Each action automatically gets an `ActionID` (timestamp if not provided)
- Responses are matched to requests via `ActionID`
- Action IDs can be numbers or strings (handled via `_toNumber()` utility)

**Event Filtering:**
- Configure `excludeEvents` array to ignore specific event types
- Set `emitAllEvents: true` to broadcast all events to the `'events'` listener

## Development Guidelines

### Adding New Events

1. Define the event type in `src/types/events.ts` extending `BaseEvent`
2. Add the type to the `AMIEvent` union export
3. Create a type guard function in `src/typeGuards.ts`
4. Add the event constant to `src/constants.ts` if it needs special handling

### Adding New Actions

1. Define request/response interfaces in `src/interfaces/actions.interface.ts`
2. Implement the action method in `src/e-ami-actions.ts`:
   - Set `options.Action` to the AMI action name
   - Generate `ActionID` if needed
   - Set up event listeners for the response
   - Call `this.eAmi.action<RequestType, ResponseType>(options)`
   - Implement proper timeout and error handling
   - Clean up listeners in all code paths

### TypeScript Configuration

- Target: ESNext
- Module: ESNext (native ES modules)
- Strict mode enabled
- Declarations generated in `dist/types/`
- Source maps and declaration maps enabled

### Module Format

This is a pure ESM package (`"type": "module"` in package.json):
- All imports must include `.js` extensions (even for `.ts` files)
- The build system handles both ESM and CJS output formats
- Main entry: `dist/cjs/index.cjs` (for CommonJS compatibility)
- Module entry: `dist/esm/index.js` (for ESM)
- Types entry: `dist/types/index.d.ts`

## Important Constants

From `src/constants.ts`:
- `DEFAULT_PORT`: 5038
- `HEARTBEAT_INTERVAL`: 5 seconds (configurable)
- `MAX_RECONNECT_COUNT`: 5 attempts (configurable)
- `RESEND_TIMEOUT`: 5 seconds (configurable)
- `CRLF`: `\r\n` (message delimiter)
- `END`: `\r\n\r\n` (message terminator)

## Common Patterns

**Listening for Events:**
```typescript
// Option 1: Type-safe with type guard
ami.events.on('events', (evt) => {
  if (isAgentComplete(evt)) {
    // evt is now typed as AgentComplete
    console.log(evt.TalkTime);
  }
});

// Option 2: Direct event name
ami.events.on('AgentComplete', (evt) => {
  console.log(evt);
});
```

**Executing Actions:**
```typescript
const result = await ami.actions.Originate({
  Channel: 'PJSIP/1000',
  CallerID: 4531225150,
  Context: 'default',
  Priority: 1,
  Exten: 4531225150,
  Async: true,
  Timeout: 30000
});
```

**Handling Action Responses:**
Most actions wait for specific AMI events (not just the immediate Response message). For example:
- `BridgeList()` waits for `BridgeListItem` events and `BridgeListComplete`
- `QueueStatus()` waits for `QueueMember` events based on count from `QueueSummary()`
- `Hangup()` waits for both `Hangup` and `HangupRequest` events

## Debugging

Enable debug logging:
```typescript
const ami = new Eami({
  host: '192.168.0.10',
  port: 5038,
  userName: 'amiIpcom',
  password: 'amiIpcomPass',
  additionalOptions: {
    debug: true  // Enables console.log output
  }
});
```

Debug mode logs:
- Connection lifecycle events
- Action requests and responses
- Heartbeat statistics
- Reconnection attempts
- Protocol-level message parsing
