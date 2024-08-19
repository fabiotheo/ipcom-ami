//Raised when a new channel is created.
export interface I_NewChannel {
	Event: string               //'Newchannel',
	Privilege: string           //'call,all',
	Channel: string             //'SIP/110-00042242',
	ChannelState: number        // 0
	ChannelStateDesc: string    //'Down',
	CallerIDNum: number         // 110
	CallerIDName: string        //'110 test',
	ConnectedLineNum: number    // null
	ConnectedLineName: string   // null',
	Language: string            //'en',
	AccountCode: number         // null
	Context: string             //'callcenter',
	Exten: number               // 89*****4387
	Priority: number            // 1
	Uniqueid: number            // 1527247326.556790
	Linkedid: number            // 1527247326.556790
}

//Raised when a channel's state changes.
export interface I_NewState {
	Event: string               //'Newchannel',
	Privilege: string           //'call,all',
	Channel: string             //'SIP/110-00042242',
	ChannelState: number        // 0
	ChannelStateDesc: string    //'Down',
	CallerIDNum: number         // 110
	CallerIDName: string        //'110 test',
	ConnectedLineNum: number    // null
	ConnectedLineName: string   // null',
	Language: string            //'en',
	AccountCode: number         // null
	Context: string             //'callcenter',
	Exten: number               // 89*****4387
	Priority: number            // 1
	Uniqueid: number            // 1527247326.556790
	Linkedid: number            // 1527247326.556790
}

//Raised when a channel's connected line information is changed.
export interface I_NewConnectedLine {
	Event: string               //'NewConnectedLine',
	Privilege: string           //'call,all',
	Channel: string             //'SIP/110-00042242',
	ChannelState: number        // 0
	ChannelStateDesc: string    //'Down',
	CallerIDNum: number         // 110
	CallerIDName: string        //'110 test',
	ConnectedLineNum: number    // null
	ConnectedLineName: string   // null',
	Language: string            //'en',
	AccountCode: number         // null
	Context: string             //'callcenter',
	Exten: number               // 89*****4387
	Priority: number            // 1
	Uniqueid: number            // 1527247326.556790
	Linkedid: number            // 1527247326.556790
}

//Raised when a channel enters a new context, extension, priority.
export interface I_NewExten {
	Event: string               //'NewConnectedLine',
	Channel: string             //'SIP/110-00042242',
	ChannelState: number        // 0
	ChannelStateDesc: string    //'Down',
	CallerIDNum: number         // 110
	CallerIDName: string        //'110 test',
	ConnectedLineNum: number    // null
	ConnectedLineName: string   // null',
	AccountCode: number         // null
	Context: string             //'callcenter',
	Exten: number               // 89*****4387
	Priority: number            // 1
	Uniqueid: number            // 1527247326.556790
	Linkedid: number            // 1527247326.556790
	// Deprecated in 12, but kept for backward compatability. Please use 'Exten' instead.
	Extension: string
	//The application about to be executed
	Application: string
	//The data to be passed to the application.
	AppData: string
}
