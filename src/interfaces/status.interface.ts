//Raised in response to a Status command.
export interface I_Status {
	Event: string                       //'Status',
	Privilege: string                   //'Call',
	Channel: string                     //'SIP/mtt-out-00042248',
	ChannelState: string                // 6
	ChannelStateDesc: string            //'Up',
	CallerIDNum: string                 // 8********67
	CallerIDName: string                // null
	ConnectedLineNum: string            // null
	ConnectedLineName: string           // null
	Language: string                    //'ru',
	AccountCode: number                 // ,
	Context: string                     //'menuivr',
	Exten: number                       // null,
	Priority: string                    // 8
	Uniqueid: string                    // 1527247624.556805',
	Linkedid: string                    // 1527247624.556805',
	Type: string                        //'SIP',
	//Dialed number identifier
	DNID: string                        // 2****57
	//Absolute lifetime of the channel
	TimeToHangup: string                // 0
	// Identifier of the bridge the channel is in, may be empty if not in one
	BridgeID: string                    //'07a1f7e2-ed60-4223-a57f-d2f983ade5dd',
	//Application currently executing on the channel
	Application: string                 //'Queue',
	//Data given to the currently executing channel
	Data: string                        //'callcenter_q,t',
	//Media formats the connected party is willing to send or receive
	Nativeformats: string               //'(ulaw)',
	//Media formats that frames from the channel are received in
	Readformat: string                  //'ulaw',
	//Translation path for media received in native formats
	Readtrans: string                   // null
	// Media formats that frames to the channel are accepted in
	Writeformat: string                 //'alaw',
	// Translation path for media sent to the connected party
	Writetrans: string                  //'(alaw@8000)->(ulaw@8000)',
	//Configured call group on the channel
	Callgroup: string                   // 0
	//Configured pickup group on the channel
	Pickupgroup: string                 // 0
	//Number of seconds the channel has been active
	Seconds: string                     // 51
	Variable: string                    //'SIPURI=sip:79*******67@80.**.**.83:5060',
	ActionID: string                    //'--spec_1527247555970'
}