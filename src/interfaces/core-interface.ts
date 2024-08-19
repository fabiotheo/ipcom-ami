//Raised in response to a CoreShowChannels command.
export interface I_CoreShowChannel {
	Event: string
	ActionID: number | string
	Channel: string
	ChannelState: number
	ChannelStateDesc: string
	CallerIDNum: number
	CallerIDName: string
	ConnectedLineNum: number
	ConnectedLineName: string
	AccountCode: number
	Context: string
	Exten: number
	Priority: number
	Uniqueid: number
	Linkedid: number
	BridgeId: string
	Application: string
	ApplicationData: string
	//The amount of time the channel has existed
	Duration: string
}

//Raised at the end of the CoreShowChannel list produced by the CoreShowChannels command.
export interface I_CoreShowChannelsComplete {
	Event: string
	// ActionID for this transaction. Will be returned.
	ActionID: number | string
	//Conveys the status of the command reponse list
	EventList: string
	//The total number of list items produced
	ListItems: number
}