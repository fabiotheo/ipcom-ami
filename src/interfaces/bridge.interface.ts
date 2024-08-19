export interface I_BridgeEnter {
	Event: string                   //'BridgeEnter',
	Privilege: string               //'call,all',
	BridgeUniqueid: string          //'009e8c7a-7204-466b-bc08-83ed629669d6',
	//The type of bridge
	BridgeType: string              //'basic',
	//Technology in use by the bridge
	BridgeTechnology: string        //'simple_bridge',
	//Entity that created the bridge if applicable
	BridgeCreator: string           //null,
	//Name used to refer to the bridge by its BridgeCreator if applicable
	BridgeName: string              //null,
	// Number of channels in the bridge
	BridgeNumChannels: number       //1,                  2
	//The video source mode for the bridge.
	BridgeVideoSourceMode: "talker" | "single" | string   //'none',
	//If there is a video source for the bridge, the unique ID of the channel that is the video source.
	BridgeVideoSource: string
	Channel: string                 //'SIP/107-00042237',   SIP/mtt-out-00042236
	//A numeric code for the channel's current state, related to ChannelStateDesc
	ChannelState: number            //6,
	ChannelStateDesc: "Down" |
		"Rsrvd" |
		"offHook" |
		"Diealing" |
		"Ring" |
		"Ringing" |
		"Up" |
		"Busy" |
		"Dialing Offhook" |
		"Pre-ring" |
		"Unknown" |
		string        //'Up',
	CallerIDNum: number             //null,          89******353
	CallerIDName: string            //null,
	ConnectedLineNum: number        //89*******53,        null
	ConnectedLineName: string       //null,
	Language: string                //'ru',
	AccountCode: number             //'',
	Context: string                 //'callcenter',         menuivr
	Exten: number                   // null,
	Priority: number                // 1,                  8
	Uniqueid: number                //'1527245698.556770',  1527245675.556769
	//Uniqueid of the oldest channel associated with this channel.
	Linkedid: number                //'1527245675.556769'   1527245675.556769
	SwapUniqueid: number
}

export interface I_BridgeCreate {
	Event: string
	BridgeUniqueid: string
	BridgeType: string
	BridgeTechnology: string
	// Entity that created the bridge if applicable
	BridgeCreator: string
	//Name used to refer to the bridge by its BridgeCreator if applicable
	BridgeName: string
	BridgeNumChannels: number
	//The video source mode for the bridge.
	BridgeVideoSourceMode: "talker" | "single" | string   //'none',
	//If there is a video source for the bridge, the unique ID of the channel that is the video source.
	BridgeVideoSource: string
}

export interface I_BridgeLeave {
	Event: string                   //'BridgeLeave',
	Privilege: string               //'call,all',
	BridgeUniqueid: string          //'009e8c7a-7204-466b-bc08-83ed629669d6',
	//The type of bridge
	BridgeType: string              //'basic',
	//Technology in use by the bridge
	BridgeTechnology: string        //'simple_bridge',
	//Entity that created the bridge if applicable
	BridgeCreator: string           //null,
	//Name used to refer to the bridge by its BridgeCreator if applicable
	BridgeName: string              //null,
	// Number of channels in the bridge
	BridgeNumChannels: number       //1,                  2
	//The video source mode for the bridge.
	BridgeVideoSourceMode: "talker" | "single" | string   //'none',
	//If there is a video source for the bridge, the unique ID of the channel that is the video source.
	BridgeVideoSource: string
	Channel: string                 //'SIP/107-00042237',   SIP/mtt-out-00042236
	//A numeric code for the channel's current state, related to ChannelStateDesc
	ChannelState: number            //6,
	ChannelStateDesc: "Down" |
		"Rsrvd" |
		"offHook" |
		"Diealing" |
		"Ring" |
		"Ringing" |
		"Up" |
		"Busy" |
		"Dialing Offhook" |
		"Pre-ring" |
		"Unknown" |
		string        //'Up',
	CallerIDNum: number             //null,          891******53
	CallerIDName: string            //null,
	ConnectedLineNum: number        //89******53,        null
	ConnectedLineName: string       //null,
	Language: string                //'ru',
	AccountCode: number             //'',
	Context: string                 //'callcenter',         menuivr
	Exten: number                   // null,
	Priority: number                // 1,                  8
	Uniqueid: number                //'1527245698.556770',  1527245675.556769
	//Uniqueid of the oldest channel associated with this channel.
	Linkedid: number                //'1527245675.556769'   1527245675.556769
	SwapUniqueid?: number
}

export interface I_BridgeDestroy {
	Event: string
	BridgeUniqueid: string
	BridgeType: string
	BridgeTechnology: string
	// Entity that created the bridge if applicable
	BridgeCreator: string
	//Name used to refer to the bridge by its BridgeCreator if applicable
	BridgeName: string
	BridgeNumChannels: number
	//The video source mode for the bridge.
	BridgeVideoSourceMode: "talker" | "single" | string   //'none',
	//If there is a video source for the bridge, the unique ID of the channel that is the video source.
	BridgeVideoSource: string
}

export interface I_BridgeMerge {
	Event: string
	ToBridgeUniqueid: string
	ToBridgeType: string
	ToBridgeTechnology: string
	//Entity that created the bridge if applicable
	ToBridgeCreator: string
	//Name used to refer to the bridge by its BridgeCreator if applicable
	ToBridgeName: string
	//Number of channels in the bridge
	ToBridgeNumChannels: number
	ToBridgeVideoSourceMode: string
	ToBridgeVideoSource: string
	FromBridgeUniqueid: string
	FromBridgeType: string
	FromBridgeTechnology: string
	FromBridgeCreator: string
	FromBridgeName: string
	FromBridgeNumChannels: number
	FromBridgeVideoSourceMode: string
	FromBridgeVideoSource: string
}

export interface I_BridgeInfoComplete {
	Event: string
	BridgeUniqueid: string
	BridgeType: string
	BridgeTechnology: string
	//Entity that created the bridge if applicable
	BridgeCreator: string
	//Name used to refer to the bridge by its BridgeCreator if applicable
	BridgeName: string
	//Number of channels in the bridge
	BridgeNumChannels: number
	BridgeVideoSourceMode: string
	BridgeVideoSource: string
}

export interface I_BridgeInfoChannel {
	Event: string
	Channel: string                 //'SIP/107-00042237',   SIP/mtt-out-00042236
	//A numeric code for the channel's current state, related to ChannelStateDesc
	ChannelState: number            //6,
	ChannelStateDesc: "Down" |
		"Rsrvd" |
		"offHook" |
		"Diealing" |
		"Ring" |
		"Ringing" |
		"Up" |
		"Busy" |
		"Dialing Offhook" |
		"Pre-ring" |
		"Unknown" |
		string        //'Up',
	CallerIDNum: number             //null,          89******353
	CallerIDName: string            //null,
	ConnectedLineNum: number        //89******353,        null
	ConnectedLineName: string       //null,
	Language: string                //'ru',
	AccountCode: number             //'',
	Context: string                 //'callcenter',         menuivr
	Exten: number                   // null,
	Priority: number                // 1,                  8
	Uniqueid: number                //'1527245698.556770',  1527245675.556769
	//Uniqueid of the oldest channel associated with this channel.
	Linkedid: number                //'1527245675.556769'   1527245675.556769
}


export interface I_BridgeListComplete {
	Event: string						// BridgeListComplete
	ActionID: string | number,			// 1528887557034
	EventList: 'Complete' | string,  	// Complete
	ListItems: number					// 2
}

export interface I_BridgeListItem {
	Event: string 					//'BridgeListItem',
	ActionID: string | number 		//'1528887557034',
	BridgeUniqueid: string 			//'13c53335-7c92-41e0-86f5-923c71fae6ad',
	BridgeType: string 				// 'basic',
	BridgeTechnology: string 		//'simple_bridge',
	BridgeCreator: string 			//null,
	BridgeName: string 				//null,
	BridgeNumChannels: number 		//2,
	BridgeVideoSourceMode: string 	//'none',
}

