export interface I_HangupRequest {
	Event: string               //'HangupRequest',
	Privilege: string           //'call,all',
	Channel: string             //'IAX2/aster-25439',
	ChannelState: number        // 5
	ChannelStateDesc: string    //'Ringing',
	CallerIDNum: number         // 89*****4387
	CallerIDName: string        // null
	ConnectedLineNum: number    // 110
	ConnectedLineName: string   //'110 test',
	Language: string            //'en',
	AccountCode: number         // null,
	Context: string             //'callcenter',
	Exten: number               // 89*****4387
	Priority: number            // 1
	Uniqueid: number            // 1527245623.556767
	Linkedid: number            // 1527245623.556766
}

export interface I_Hangup {
	Event: string               //'Hangup',
	Privilege: string           //'call,all',
	Channel: string             //'IAX2/aster-25439',
	ChannelState: number        // 5
	ChannelStateDesc: string    //'Ringing',
	CallerIDNum: number         // 89*****4387
	CallerIDName: string        // null
	ConnectedLineNum: number    // 110
	ConnectedLineName: string   //'110 test',
	Language: string            //'en',
	AccountCode: number         // null,
	Context: string             //'callcenter',
	Exten: number               // 89*****4387
	Priority: number            // 1
	Uniqueid: number            // 1527245623.556767
	Linkedid: number            // 1527245623.556766
}

export interface I_DualHangup {
	hangup: I_Hangup | null;
	hangupRequest: I_HangupRequest | null;
}




