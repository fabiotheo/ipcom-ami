type Timer = ReturnType<typeof setTimeout>;
export interface I_Response {
    Event?: string;
    ActionID?: number | string;
    Response?: string;
    Request?: I_Request;
    TimeEvent?: number;
    [p: string]: string | number | boolean | I_Request | undefined;
}
export interface I_Request {
    ActionID?: number | string;
    Action?: string;
    TimeStart?: number;
    Completed?: boolean;
    timeOutHandler?: Timer | number;
    [field: string]: string | number | boolean | undefined | Timer;
}
export interface I_ActionBridge {
    Action?: "Bridge";
    ActionID?: number | string;
    Channel1: string;
    Channel2: string;
    Tone: "no" | "Channel1" | "Channel2" | "Both";
}
export interface I_ActionBridgeDestroy {
    Action: "BridgeDestroy";
    ActionID: number | string;
    BridgeUniqueid: string;
}
export interface I_ActionBridgeInfo extends I_Request {
    Action?: "BridgeInfo";
    ActionID?: number | string;
    BridgeUniqueid: string;
    timeOutHandler?: Timer | number;
    [field: string]: string | number | boolean | undefined | Timer;
}
export interface I_ActionBridgeKick {
    Action?: "BridgeKick";
    ActionID?: number | string;
    BridgeUniqueid?: string;
    Channel: string;
}
export interface I_ActionBridgeList extends I_Request {
    Action?: "BridgeList";
    ActionID?: number | string;
    BridgeType?: string;
}
export interface I_ActionCoreShowChannels extends I_Request {
    Action?: "CoreShowChannels";
    ActionID?: number | string;
}
export interface I_ActionHangup extends I_Request {
    Action?: "Hangup";
    ActionID?: number | string;
    Channel: string;
    Cause?: string;
}
export interface I_ActionLogin extends I_Request {
    Action?: "Login";
    ActionID?: number | string;
    Username: string;
    Secret: string;
}
export interface I_ActionLogout extends I_Request {
    Action?: "Logoff";
    ActionID?: number | string;
}
export interface I_ActionOriginate extends I_Request {
    Action?: "Originate";
    ActionID?: number | string;
    Channel: string;
    Exten: number;
    Context: string;
    Priority?: number;
    Application?: string;
    Data?: string;
    Timeout: number;
    CallerID?: number;
    Variable?: string;
    Account?: string;
    EarlyMedia?: boolean;
    Async?: boolean;
    Codecs?: string;
    ChannelId?: string;
    OtherChannelId?: string;
}
export interface I_ActionPing extends I_Request {
    Action?: "Ping";
    ActionID?: number | string;
}
export interface I_ActionQueueStatus extends I_Request {
    Action?: "QueueStatus";
    ActionID?: number | string;
    Queue: string;
    Member?: string;
    MembersCount?: number;
}
export interface I_ActionQueueSummary extends I_Request {
    Action?: "QueueSummary";
    ActionID?: number | string;
    Queue: string;
}
export interface I_ActionQueueAdd extends I_Request {
    Action?: "QueueAdd";
    ActionID?: number | string;
    Queue: string;
    Interface: string;
    Panalty: number;
    Paused: boolean;
    MemberName: string;
    StateInterface: string;
}
export interface I_ActionQueueRemove extends I_Request {
    Action?: "QueueRemove";
    ActionID?: number | string;
    Queue: string;
    Interface: string;
}
export interface I_ActionQueuePenalty extends I_Request {
    Action?: "QueuePenalty";
    ActionID?: number | string;
    Interface: string;
    Penalty: number;
    Queue: string;
}
export interface I_ActionQueues {
    Action?: "Queues";
}
export interface I_ActionQueuePause extends I_Request {
    Action?: "QueuePause";
    ActionID?: number | string;
    Interface: string;
    Paused: boolean;
    Queue: string;
    Reason?: string;
}
export interface I_ActionSIPpeers {
    Action?: "SIPpeers";
    ActionID?: number | string;
}
export interface I_ActonSIPpeerstatus {
    Action?: "SIPpeerstatus";
    ActionID?: number | string;
    Peer?: string;
}
export interface I_ActionSIPshowpeer {
    Action?: "SIPpeerstatus";
    ActionID?: number | string;
    Peer?: string;
}
export interface I_ActionSIPshowregistry {
    Action?: "SIPshowregistry";
    ActionID?: number | string;
}
export interface I_ActionStatus extends I_Request {
    Action?: "Status";
    ActionID?: number | string;
    Channel: string;
    Variables?: string;
    AllVariables?: boolean;
}
export interface I_ActionUserEvent {
    Action?: "UserEvent";
    ActionID?: number | string;
    UserEvent: string;
    Header1: string;
    [HeaderN: string]: string | number | boolean | I_Request | undefined;
}
export interface I_ActionWaitEvent {
    Action?: "waitEvent";
    ActionID?: number | string;
    Timeout: number;
}
export {};
//# sourceMappingURL=actions.interface.d.ts.map