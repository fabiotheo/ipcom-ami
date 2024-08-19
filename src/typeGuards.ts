import type {
    AMIEvent,
    AgentComplete,
    AgentCalled,
    AOCD,
    AOCE,
    AOCS,
    AGIExecEnd,
    AGIExecStart,
} from './types/events.js';

export function isAgentComplete(evt: AMIEvent): evt is AgentComplete {
    return evt.Event === 'AgentComplete';
}

export function isAgentCalled(evt: AMIEvent): evt is AgentCalled {
    return evt.Event === 'AgentCalled';
}
