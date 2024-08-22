export interface I_DTMFBegin {
    Event: string;
    Channel: string;
    ChannelState: string;
    ChannelStateDesc: string;
    CallerIDNum: number;
    CallerIDName: string;
    ConnectedLineNum: number;
    ConnectedLineName: string;
    AccountCode: number;
    Context: string;
    Exten: number;
    Priority: number;
    Uniqueid: number;
    Linkedid: number;
    Digit: string;
    Direction: "Received" | "Sent";
}
export interface I_DTMFEnd {
    Event: string;
    Channel: string;
    ChannelState: string;
    ChannelStateDesc: string;
    CallerIDNum: number;
    CallerIDName: string;
    ConnectedLineNum: number;
    ConnectedLineName: string;
    AccountCode: number;
    Context: string;
    Exten: number;
    Priority: number;
    Uniqueid: number;
    Linkedid: number;
    Digit: string;
    DurationMs: number;
    Direction: "Received" | "Sent";
}
//# sourceMappingURL=dtmf.interface.d.ts.map