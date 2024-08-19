export interface I_DTMFBegin {
	Event: string
	Channel: string
	ChannelState: string
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
	//DTMF digit received or transmitted (0-9, A-E, # or *
	Digit: string
	Direction: "Received" | "Sent"
}
export interface I_DTMFEnd {
	Event: string
	Channel: string
	ChannelState: string
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
	//DTMF digit received or transmitted (0-9, A-E, # or *
	Digit: string
	//Duration (in milliseconds) DTMF was sent/received
	DurationMs: number
	Direction: "Received" | "Sent"
}