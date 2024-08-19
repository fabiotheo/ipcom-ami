export interface I_BridgeEnter {
    Event: string;
    Privilege: string;
    BridgeUniqueid: string;
    BridgeType: string;
    BridgeTechnology: string;
    BridgeCreator: string;
    BridgeName: string;
    BridgeNumChannels: number;
    BridgeVideoSourceMode: "talker" | "single" | string;
    BridgeVideoSource: string;
    Channel: string;
    ChannelState: number;
    ChannelStateDesc: "Down" | "Rsrvd" | "offHook" | "Diealing" | "Ring" | "Ringing" | "Up" | "Busy" | "Dialing Offhook" | "Pre-ring" | "Unknown" | string;
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
    SwapUniqueid: number;
}
export interface I_BridgeCreate {
    Event: string;
    BridgeUniqueid: string;
    BridgeType: string;
    BridgeTechnology: string;
    BridgeCreator: string;
    BridgeName: string;
    BridgeNumChannels: number;
    BridgeVideoSourceMode: "talker" | "single" | string;
    BridgeVideoSource: string;
}
export interface I_BridgeLeave {
    Event: string;
    Privilege: string;
    BridgeUniqueid: string;
    BridgeType: string;
    BridgeTechnology: string;
    BridgeCreator: string;
    BridgeName: string;
    BridgeNumChannels: number;
    BridgeVideoSourceMode: "talker" | "single" | string;
    BridgeVideoSource: string;
    Channel: string;
    ChannelState: number;
    ChannelStateDesc: "Down" | "Rsrvd" | "offHook" | "Diealing" | "Ring" | "Ringing" | "Up" | "Busy" | "Dialing Offhook" | "Pre-ring" | "Unknown" | string;
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
    SwapUniqueid?: number;
}
export interface I_BridgeDestroy {
    Event: string;
    BridgeUniqueid: string;
    BridgeType: string;
    BridgeTechnology: string;
    BridgeCreator: string;
    BridgeName: string;
    BridgeNumChannels: number;
    BridgeVideoSourceMode: "talker" | "single" | string;
    BridgeVideoSource: string;
}
export interface I_BridgeMerge {
    Event: string;
    ToBridgeUniqueid: string;
    ToBridgeType: string;
    ToBridgeTechnology: string;
    ToBridgeCreator: string;
    ToBridgeName: string;
    ToBridgeNumChannels: number;
    ToBridgeVideoSourceMode: string;
    ToBridgeVideoSource: string;
    FromBridgeUniqueid: string;
    FromBridgeType: string;
    FromBridgeTechnology: string;
    FromBridgeCreator: string;
    FromBridgeName: string;
    FromBridgeNumChannels: number;
    FromBridgeVideoSourceMode: string;
    FromBridgeVideoSource: string;
}
export interface I_BridgeInfoComplete {
    Event: string;
    BridgeUniqueid: string;
    BridgeType: string;
    BridgeTechnology: string;
    BridgeCreator: string;
    BridgeName: string;
    BridgeNumChannels: number;
    BridgeVideoSourceMode: string;
    BridgeVideoSource: string;
}
export interface I_BridgeInfoChannel {
    Event: string;
    Channel: string;
    ChannelState: number;
    ChannelStateDesc: "Down" | "Rsrvd" | "offHook" | "Diealing" | "Ring" | "Ringing" | "Up" | "Busy" | "Dialing Offhook" | "Pre-ring" | "Unknown" | string;
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
export interface I_BridgeListComplete {
    Event: string;
    ActionID: string | number;
    EventList: 'Complete' | string;
    ListItems: number;
}
export interface I_BridgeListItem {
    Event: string;
    ActionID: string | number;
    BridgeUniqueid: string;
    BridgeType: string;
    BridgeTechnology: string;
    BridgeCreator: string;
    BridgeName: string;
    BridgeNumChannels: number;
    BridgeVideoSourceMode: string;
}
