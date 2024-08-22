export interface I_HangupRequest {
    Event: string;
    Privilege: string;
    Channel: string;
    ChannelState: number;
    ChannelStateDesc: string;
    CallerIDNum: number;
    CallerIDName: string;
    ConnectedLineNum: number;
    ConnectedLineName: string;
    Language: string;
    AccountCode: number;
    Context: string;
    Exten: number;
    Priority: number;
    Uniqueid: number;
    Linkedid: number;
}
export interface I_Hangup {
    Event: string;
    Privilege: string;
    Channel: string;
    ChannelState: number;
    ChannelStateDesc: string;
    CallerIDNum: number;
    CallerIDName: string;
    ConnectedLineNum: number;
    ConnectedLineName: string;
    Language: string;
    AccountCode: number;
    Context: string;
    Exten: number;
    Priority: number;
    Uniqueid: number;
    Linkedid: number;
}
export interface I_DualHangup {
    hangup: I_Hangup | null;
    hangupRequest: I_HangupRequest | null;
}
//# sourceMappingURL=hangup.interface.d.ts.map