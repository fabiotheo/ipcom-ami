export interface I_NewChannel {
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
export interface I_NewState {
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
export interface I_NewConnectedLine {
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
export interface I_NewExten {
    Event: string;
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
    Extension: string;
    Application: string;
    AppData: string;
}
