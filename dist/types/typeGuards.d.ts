import type { AMIEvent, AgentComplete, AgentCalled } from './types/events.js';
export declare function isAgentComplete(evt: AMIEvent): evt is AgentComplete;
export declare function isAgentCalled(evt: AMIEvent): evt is AgentCalled;
