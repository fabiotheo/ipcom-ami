export interface I_CoreShowChannel {
    Event: string;
    ActionID: number | string;
    Channel: string;
    ChannelState: number;
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
    BridgeId: string;
    Application: string;
    ApplicationData: string;
    Duration: string;
}
export interface I_CoreShowChannelsComplete {
    Event: string;
    ActionID: number | string;
    EventList: string;
    ListItems: number;
}
//# sourceMappingURL=core-interface.d.ts.map