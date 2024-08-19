//A user defined event raised from the dialplan.
//Event may contain additional arbitrary parameters in addition to optional bridge and endpoint snapshots.
// Multiple snapshots of the same type are prefixed with a numeric value.
export interface I_UserEvent {
	Event: "UserEvent"
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
	//The event name, as specified in the dialplan.

	UserEvent: string
}