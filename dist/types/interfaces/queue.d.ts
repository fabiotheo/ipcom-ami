export interface I_QueueMember {
    Event: string;
    Queue: string;
    MemberName: string;
    Interface: string;
    StateInterface: string;
    Membership: "dynamic" | "realtime" | "static" | string;
    Penalty: number;
    CallsTaken: number;
    LastCall: number;
    LastPause: number;
    InCall: 0 | 1;
    Status: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    Paused: 0 | 1;
    PausedReason: string;
    Ringinuse: 0 | 1;
}
export interface I_QueueMemberAdded {
    Event: "QueueMemberAdded";
    Queue: string;
    MemberName: string;
    Interface: string;
    StateInterface: string;
    Membership: "dynamic" | "realtime" | "static" | string;
    Penalty: number;
    CallsTaken: number;
    LastCall: number;
    Status: number;
    Paused: boolean;
    Ringinuse: 0 | 1;
}
export interface I_QueueMemberRemoved {
    Event: "QueueMemberRemoved";
    Queue: string;
    MemberName: string;
    Interface: string;
    StateInterface: string;
    Membership: "dynamic" | "realtime" | "static" | string;
    Penalty: number;
    CallsTaken: number;
    LastCall: number;
    Status: number;
    Paused: boolean;
    Ringinuse: 0 | 1;
}
export interface I_QueueMemberPenalty {
    Event: "QueueMemberPenalty";
    Queue: string;
    MemberName: string;
    Interface: string;
    StateInterface: string;
    Membership: "dynamic" | "realtime" | "static" | string;
    Penalty: number;
    CallsTaken: number;
    LastCall: number;
    Status: number;
    Paused: boolean;
    Ringinuse: 0 | 1;
}
export interface I_QueueMemberStatus {
    Event: string;
    Queue: string;
    MemberName: string;
    Interface: string;
    StateInterface: string;
    Membership: "dynamic" | "realtime" | "static" | string;
    Penalty: number;
    CallsTaken: number;
    LastCall: number;
    LastPause: number;
    InCall: 0 | 1;
    Status: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    Paused: 0 | 1;
    PausedReason: string;
    Ringinuse: 0 | 1;
}
export interface I_QueueMemberPause {
    Event: string;
    Queue: string;
    MemberName: string;
    Interface: string;
    StateInterface: string;
    Membership: "dynamic" | "realtime" | "static" | string;
    Penalty: number;
    CallsTaken: number;
    LastCall: number;
    LastPause: number;
    InCall: 0 | 1;
    Status: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    Paused: 0 | 1;
    PausedReason: string;
    Ringinuse: 0 | 1;
    Reason: string;
}
export interface I_QueueSummary {
    Available: number;
    Callers: number;
    HoldTime: number;
    TalkTime: number;
    LoggedIn: number;
    LongestHoldTime: number;
}
export interface I_QueueParams {
    Event: string;
    Queue: string;
    Max: number;
    Strategy: string;
    Calls: number;
    Holdtime: number;
    TalkTime: number;
    Completed: number;
    Abandoned: number;
    ServiceLevel: number;
    ServicelevelPerf: number;
    Weight: number;
    ActionID: number | string;
    Response?: string;
}
