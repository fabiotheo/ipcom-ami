export type AGIExecEnd = {
	Event: "AGIExecEnd";
	Channel: string;
	ChannelState: number;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Command: string;
	CommandId: string;
	ResultCode: string;
	Result: string;
};

export type AGIExecStart = {
	Event: "AGIExecStart";
	Channel: string;
	ChannelState: number;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Command: string;
	CommandId: string;
};

export type AOCD = {
	Event: "AOC-D";
	Channel: string;
	ChannelState: number;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Charge: string;
	Type: string;
	BillingID: string;
	TotalType: string;
	Currency: string;
	Name: string;
	Cost: string;
	Multiplier: string;
	Units: string;
	NumberOf: string;
	TypeOf: string;
};

export type AOCE = {
	Event: "AOC-E";
	Channel: string;
	ChannelState: number;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	ChargingAssociation: string;
	Number: string;
	Plan: string;
	ID: string;
	Charge: string;
	Type: string;
	BillingID: string;
	TotalType: string;
	Currency: string;
	Name: string;
	Cost: string;
	Multiplier: string;
	Units: string;
	NumberOf: string;
	TypeOf: string;
};

export type AOCS = {
	Event: "AOC-S";
	Channel: string;
	ChannelState: number;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Chargeable: string;
	RateType: string;
	Currency: string;
	Name: string;
	Cost: string;
	Multiplier: string;
	ChargingType: string;
	StepFunction: string;
	Granularity: string;
	Length: string;
	Scale: string;
	Unit: string;
	SpecialCode: string;
};

export type AgentCalled = {
	Event: "AgentCalled";
	Channel: string;
	ChannelState: number;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	DestChannel: string;
	DestChannelState: number;
	DestChannelStateDesc: string;
	DestCallerIDNum: string;
	DestCallerIDName: string;
	DestConnectedLineNum: string;
	DestConnectedLineName: string;
	DestLanguage: string;
	DestAccountCode: string;
	DestContext: string;
	DestExten: string;
	DestPriority: string;
	DestUniqueid: string;
	DestLinkedid: string;
	Queue: string;
	MemberName: string;
	Interface: string;
};

export type AgentComplete = {
	Event: "AgentComplete";
	Channel: string;
	ChannelState: number;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	DestChannel: string;
	DestChannelState: number;
	DestChannelStateDesc: string;
	DestCallerIDNum: string;
	DestCallerIDName: string;
	DestConnectedLineNum: string;
	DestConnectedLineName: string;
	DestLanguage: string;
	DestAccountCode: string;
	DestContext: string;
	DestExten: string;
	DestPriority: string;
	DestUniqueid: string;
	DestLinkedid: string;
	Queue: string;
	MemberName: string;
	Interface: string;
	HoldTime: string;
	TalkTime: string;
	Reason: string;
};

// AgentConnect
export type AgentConnect = {
	Event: "AgentConnect";
	Channel: string;
	ChannelState: number;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	DestChannel: string;
	DestChannelState: number;
	DestChannelStateDesc: string;
	DestCallerIDNum: string;
	DestCallerIDName: string;
	DestConnectedLineNum: string;
	DestConnectedLineName: string;
	DestLanguage: string;
	DestAccountCode: string;
	DestContext: string;
	DestExten: string;
	DestPriority: string;
	DestUniqueid: string;
	DestLinkedid: string;
	Queue: string;
	MemberName: string;
	Interface: string;
	RingTime: number;
	HoldTime: number;
};

// AgentDump
export type AgentDump = {
	Event: "AgentDump";
	Channel: string;
	ChannelState: number;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	DestChannel: string;
	DestChannelState: number;
	DestChannelStateDesc: string;
	DestCallerIDNum: string;
	DestCallerIDName: string;
	DestConnectedLineNum: string;
	DestConnectedLineName: string;
	DestLanguage: string;
	DestAccountCode: string;
	DestContext: string;
	DestExten: string;
	DestPriority: string;
	DestUniqueid: string;
	DestLinkedid: string;
	Queue: string;
	MemberName: string;
	Interface: string;
};

// AgentLogin
export type AgentLogin = {
	Event: "AgentLogin";
	Channel: string;
	ChannelState: number;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Agent: string;
};

// AgentLogoff
export type AgentLogoff = {
	Event: "AgentLogoff";
	Agent: string;
	Logintime: number;
};

// AgentRingNoAnswer
export type AgentRingNoAnswer = {
	Event: "AgentRingNoAnswer";
	Channel: string;
	ChannelState: number;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	DestChannel: string;
	DestChannelState: number;
	DestChannelStateDesc: string;
	DestCallerIDNum: string;
	DestCallerIDName: string;
	DestConnectedLineNum: string;
	DestConnectedLineName: string;
	DestLanguage: string;
	DestAccountCode: string;
	DestContext: string;
	DestExten: string;
	DestPriority: string;
	DestUniqueid: string;
	DestLinkedid: string;
	Queue: string;
	MemberName: string;
	Interface: string;
	RingTime: number;
};

// Agents
export type Agents = {
	Event: "Agents";
	Agent: string;
	Name: string;
	Status: string;
	TalkingToChan?: string;
	CallStarted?: number;
	LoggedInTime?: number;
	Channel?: string;
	ChannelState?: number;
	ChannelStateDesc?: string;
	CallerIDNum?: string;
	CallerIDName?: string;
	ConnectedLineNum?: string;
	ConnectedLineName?: string;
	Language?: string;
	AccountCode?: string;
	Context?: string;
	Exten?: string;
	Priority?: string;
	Uniqueid?: string;
	Linkedid?: string;
	ActionID: string;
};

// AgentsComplete
export type AgentsComplete = {
	Event: "AgentsComplete";
	ActionID: string;
};

export type Alarm = {
	Event: "Alarm";
	DAHDIChannel: string;
	Alarm: string;
};

export type AlarmClear = {
	Event: "AlarmClear";
	DAHDIChannel: string;
};

export type AorDetail = {
	Event: "AorDetail";
	ObjectType: "aor";
	ObjectName: string;
	MinimumExpiration: string;
	MaximumExpiration: string;
	DefaultExpiration: string;
	QualifyFrequency: string;
	AuthenticateQualify: string;
	MaxContacts: string;
	RemoveExisting: string;
	RemoveUnavailable: string;
	Mailboxes: string;
	OutboundProxy: string;
	SupportPath: string;
	TotalContacts: string;
	ContactsRegistered: string;
	EndpointName: string;
};

export type AorList = {
	Event: "AorList";
	ObjectType: "aor";
	ObjectName: string;
	MinimumExpiration: string;
	MaximumExpiration: string;
	DefaultExpiration: string;
	QualifyFrequency: string;
	AuthenticateQualify: string;
	MaxContacts: string;
	RemoveExisting: string;
	RemoveUnavailable: string;
	Mailboxes: string;
	OutboundProxy: string;
	SupportPath: string;
};

export type AorListComplete = {
	Event: "AorListComplete";
	EventList: string;
	ListItems: string;
};

export type AsyncAGIEnd = {
	Event: "AsyncAGIEnd";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
};

export type AsyncAGIExec = {
	Event: "AsyncAGIExec";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	CommandID?: string;
	Result: string;
};

export type AsyncAGIStart = {
	Event: "AsyncAGIStart";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Env: string;
};

export type AttendedTransfer = {
	Event: "AttendedTransfer";
	Result: "Fail" | "Invalid" | "Not Permitted" | "Success";
	OrigTransfererChannel: string;
	OrigTransfererChannelState: string;
	OrigTransfererChannelStateDesc: string;
	OrigTransfererCallerIDNum: string;
	OrigTransfererCallerIDName: string;
	OrigTransfererConnectedLineNum: string;
	OrigTransfererConnectedLineName: string;
	OrigTransfererLanguage: string;
	OrigTransfererAccountCode: string;
	OrigTransfererContext: string;
	OrigTransfererExten: string;
	OrigTransfererPriority: string;
	OrigTransfererUniqueid: string;
	OrigTransfererLinkedid: string;
	OrigBridgeUniqueid: string;
	OrigBridgeType: string;
	OrigBridgeTechnology: string;
	OrigBridgeCreator: string;
	OrigBridgeName: string;
	OrigBridgeNumChannels: string;
	OrigBridgeVideoSourceMode: "none" | "talker" | "single";
	OrigBridgeVideoSource?: string;
	SecondTransfererChannel: string;
	SecondTransfererChannelState: string;
	SecondTransfererChannelStateDesc: string;
	SecondTransfererCallerIDNum: string;
	SecondTransfererCallerIDName: string;
	SecondTransfererConnectedLineNum: string;
	SecondTransfererConnectedLineName: string;
	SecondTransfererLanguage: string;
	SecondTransfererAccountCode: string;
	SecondTransfererContext: string;
	SecondTransfererExten: string;
	SecondTransfererPriority: string;
	SecondTransfererUniqueid: string;
	SecondTransfererLinkedid: string;
	SecondBridgeUniqueid: string;
	SecondBridgeType: string;
	SecondBridgeTechnology: string;
	SecondBridgeCreator: string;
	SecondBridgeName: string;
	SecondBridgeNumChannels: string;
	SecondBridgeVideoSourceMode: "none" | "talker" | "single";
	SecondBridgeVideoSource?: string;
	DestType: "Bridge" | "App" | "Link" | "Threeway" | "Fail";
	DestBridgeUniqueid?: string;
	DestApp?: string;
	LocalOneChannel: string;
	LocalOneChannelState: string;
	LocalOneChannelStateDesc: string;
	LocalOneCallerIDNum: string;
	LocalOneCallerIDName: string;
	LocalOneConnectedLineNum: string;
	LocalOneConnectedLineName: string;
	LocalOneLanguage: string;
	LocalOneAccountCode: string;
	LocalOneContext: string;
	LocalOneExten: string;
	LocalOnePriority: string;
	LocalOneUniqueid: string;
	LocalOneLinkedid: string;
	LocalTwoChannel: string;
	LocalTwoChannelState: string;
	LocalTwoChannelStateDesc: string;
	LocalTwoCallerIDNum: string;
	LocalTwoCallerIDName: string;
	LocalTwoConnectedLineNum: string;
	LocalTwoConnectedLineName: string;
	LocalTwoLanguage: string;
	LocalTwoAccountCode: string;
	LocalTwoContext: string;
	LocalTwoExten: string;
	LocalTwoPriority: string;
	LocalTwoUniqueid: string;
	LocalTwoLinkedid: string;
	DestTransfererChannel?: string;
	TransfereeChannel: string;
	TransfereeChannelState: string;
	TransfereeChannelStateDesc: string;
	TransfereeCallerIDNum: string;
	TransfereeCallerIDName: string;
	TransfereeConnectedLineNum: string;
	TransfereeConnectedLineName: string;
	TransfereeLanguage: string;
	TransfereeAccountCode: string;
	TransfereeContext: string;
	TransfereeExten: string;
	TransfereePriority: string;
	TransfereeUniqueid: string;
	TransfereeLinkedid: string;
};

export type AuthDetail = {
	Event: "AuthDetail";
	ObjectType: "auth";
	ObjectName: string;
	Username: string;
	Password: string;
	Md5Cred: string;
	Realm: string;
	NonceLifetime: string;
	AuthType: string;
	EndpointName: string;
};

export type AuthList = {
	Event: "AuthList";
	ObjectType: "auth";
	ObjectName: string;
	Username: string;
	Md5Cred: string;
	Realm: string;
	AuthType: string;
	Password: string;
	NonceLifetime: string;
};

export type AuthListComplete = {
	Event: "AuthListComplete";
	EventList: string;
	ListItems: string;
};

export type AuthMethodNotAllowed = {
	Event: "AuthMethodNotAllowed";
	EventTV: string;
	Severity: "Informational" | "Error";
	Service: string;
	EventVersion: string;
	AccountID: string;
	SessionID: string;
	LocalAddress: string;
	RemoteAddress: string;
	AuthMethod: string;
	Module?: string;
	SessionTV?: string;
};

export type BlindTransfer = {
	Event: "BlindTransfer";
	Result: "Fail" | "Invalid" | "Not Permitted" | "Success";
	TransfererChannel: string;
	TransfererChannelState: number;
	TransfererChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	TransfererCallerIDNum: string;
	TransfererCallerIDName: string;
	TransfererConnectedLineNum: string;
	TransfererConnectedLineName: string;
	TransfererLanguage: string;
	TransfererAccountCode: string;
	TransfererContext: string;
	TransfererExten: string;
	TransfererPriority: string;
	TransfererUniqueid: string;
	TransfererLinkedid: string;
	TransfereeChannel: string;
	TransfereeChannelState: number;
	TransfereeChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	TransfereeCallerIDNum: string;
	TransfereeCallerIDName: string;
	TransfereeConnectedLineNum: string;
	TransfereeConnectedLineName: string;
	TransfereeLanguage: string;
	TransfereeAccountCode: string;
	TransfereeContext: string;
	TransfereeExten: string;
	TransfereePriority: string;
	TransfereeUniqueid: string;
	TransfereeLinkedid: string;
	BridgeUniqueid: string;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: number;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
	IsExternal: "Yes" | "No";
	Context: string;
	Extension: string;
};

export type BridgeCreate = {
	Event: "BridgeCreate";
	BridgeUniqueid: string;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: number;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
};

export type BridgeDestroy = {
	Event: "BridgeDestroy";
	BridgeUniqueid: string;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: number;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
};

export type BridgeEnter = {
	Event: "BridgeEnter";
	BridgeUniqueid: string;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: number;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
	Channel: string;
	ChannelState: number;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	SwapUniqueid?: string;
};

export type BridgeInfoChannel = {
	Event: "BridgeInfoChannel";
	Channel: string;
	ChannelState: number;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
};

export type BridgeInfoComplete = {
	Event: "BridgeInfoComplete";
	BridgeUniqueid: string;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: number;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
};

export type BridgeLeave = {
	Event: "BridgeLeave";
	BridgeUniqueid: string;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: number;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
	Channel: string;
	ChannelState: number;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
};

export type BridgeMerge = {
	Event: "BridgeMerge";
	ToBridgeUniqueid: string;
	ToBridgeType: string;
	ToBridgeTechnology: string;
	ToBridgeCreator: string;
	ToBridgeName: string;
	ToBridgeNumChannels: number;
	ToBridgeVideoSourceMode: "none" | "talker" | "single";
	ToBridgeVideoSource?: string;
	FromBridgeUniqueid: string;
	FromBridgeType: string;
	FromBridgeTechnology: string;
	FromBridgeCreator: string;
	FromBridgeName: string;
	FromBridgeNumChannels: number;
	FromBridgeVideoSourceMode: "none" | "talker" | "single";
	FromBridgeVideoSource?: string;
};

export type BridgeVideoSourceUpdate = {
	Event: "BridgeVideoSourceUpdate";
	BridgeUniqueid: string;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: number;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
	BridgePreviousVideoSource: string;
};

export type CEL = {
	Event: "CEL";
	EventName:
		| "CHAN_START"
		| "CHAN_END"
		| "ANSWER"
		| "HANGUP"
		| "BRIDGE_ENTER"
		| "BRIDGE_EXIT"
		| "APP_START"
		| "APP_END"
		| "PARK_START"
		| "PARK_END"
		| "BLINDTRANSFER"
		| "ATTENDEDTRANSFER"
		| "PICKUP"
		| "FORWARD"
		| "LINKEDID_END"
		| "LOCAL_OPTIMIZE"
		| "USER_DEFINED";
	AccountCode: string;
	CallerIDnum: string;
	CallerIDname: string;
	CallerIDani: string;
	CallerIDrdnis: string;
	CallerIDdnid: string;
	Exten: string;
	Context: string;
	Application: string;
	AppData: string;
	EventTime: string;
	AMAFlags: "OMIT" | "BILLING" | "DOCUMENTATION";
	UniqueID: string;
	LinkedID: string;
	UserField: string;
	Peer: string;
	PeerAccount: string;
	Extra: string;
};

export type Cdr = {
	Event: "Cdr";
	AccountCode: string;
	Source: string;
	Destination: string;
	DestinationContext: string;
	CallerID: string;
	Channel: string;
	DestinationChannel: string;
	LastApplication: string;
	LastData: string;
	StartTime: string;
	AnswerTime: string;
	EndTime: string;
	Duration: string;
	BillableSeconds: string;
	Disposition: "NO ANSWER" | "FAILED" | "BUSY" | "ANSWERED" | "CONGESTION";
	AMAFlags: "OMIT" | "BILLING" | "DOCUMENTATION";
	UniqueID: string;
	UserField: string;
};

export type ChallengeResponseFailed = {
	Event: "ChallengeResponseFailed";
	EventTV: string;
	Severity: "Informational" | "Error";
	Service: string;
	EventVersion: string;
	AccountID: string;
	SessionID: string;
	LocalAddress: string;
	RemoteAddress: string;
	Challenge: string;
	Response: string;
	ExpectedResponse: string;
	Module?: string;
	SessionTV?: string;
};

export type ChallengeSent = {
	Event: "ChallengeSent";
	EventTV: string;
	Severity: "Informational" | "Error";
	Service: string;
	EventVersion: string;
	AccountID: string;
	SessionID: string;
	LocalAddress: string;
	RemoteAddress: string;
	Challenge: string;
	Module?: string;
	SessionTV?: string;
};

export type ChanSpyStart = {
	Event: "ChanSpyStart";
	SpyerChannel: string;
	SpyerChannelState: string;
	SpyerChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	SpyerCallerIDNum: string;
	SpyerCallerIDName: string;
	SpyerConnectedLineNum: string;
	SpyerConnectedLineName: string;
	SpyerLanguage: string;
	SpyerAccountCode: string;
	SpyerContext: string;
	SpyerExten: string;
	SpyerPriority: string;
	SpyerUniqueid: string;
	SpyerLinkedid: string;
	SpyeeChannel: string;
	SpyeeChannelState: string;
	SpyeeChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	SpyeeCallerIDNum: string;
	SpyeeCallerIDName: string;
	SpyeeConnectedLineNum: string;
	SpyeeConnectedLineName: string;
	SpyeeLanguage: string;
	SpyeeAccountCode: string;
	SpyeeContext: string;
	SpyeeExten: string;
	SpyeePriority: string;
	SpyeeUniqueid: string;
	SpyeeLinkedid: string;
};

export type ChanSpyStop = {
	Event: "ChanSpyStop";
	SpyerChannel: string;
	SpyerChannelState: string;
	SpyerChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	SpyerCallerIDNum: string;
	SpyerCallerIDName: string;
	SpyerConnectedLineNum: string;
	SpyerConnectedLineName: string;
	SpyerLanguage: string;
	SpyerAccountCode: string;
	SpyerContext: string;
	SpyerExten: string;
	SpyerPriority: string;
	SpyerUniqueid: string;
	SpyerLinkedid: string;
	SpyeeChannel: string;
	SpyeeChannelState: string;
	SpyeeChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	SpyeeCallerIDNum: string;
	SpyeeCallerIDName: string;
	SpyeeConnectedLineNum: string;
	SpyeeConnectedLineName: string;
	SpyeeLanguage: string;
	SpyeeAccountCode: string;
	SpyeeContext: string;
	SpyeeExten: string;
	SpyeePriority: string;
	SpyeeUniqueid: string;
	SpyeeLinkedid: string;
};

export type ChannelTalkingStart = {
	Event: "ChannelTalkingStart";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
};

export type ChannelTalkingStop = {
	Event: "ChannelTalkingStop";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Duration: string;
};

export type ConfbridgeEnd = {
	Event: "ConfbridgeEnd";
	Conference: string;
	BridgeUniqueid: string;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: string;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
};

export type ConfbridgeJoin = {
	Event: "ConfbridgeJoin";
	Conference: string;
	BridgeUniqueid: string;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: string;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Admin: "Yes" | "No";
	Muted: "Yes" | "No";
};

export type ConfbridgeLeave = {
	Event: "ConfbridgeLeave";
	Conference: string;
	BridgeUniqueid: string;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: string;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Admin: "Yes" | "No";
};

export type ConfbridgeList = {
	Event: "ConfbridgeList";
	Conference: string;
	Admin: "Yes" | "No";
	MarkedUser: "Yes" | "No";
	WaitMarked: "Yes" | "No";
	EndMarked: "Yes" | "No";
	Waiting: "Yes" | "No";
	Muted: "Yes" | "No";
	Talking: "Yes" | "No";
	AnsweredTime: string;
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
};

export type ConfbridgeListRooms = {
	Event: "ConfbridgeListRooms";
	Conference: string;
	Parties: string;
	Marked: string;
	Locked: "Yes" | "No";
	Muted: "Yes" | "No";
};

export type ConfbridgeMute = {
	Event: "ConfbridgeMute";
	Conference: string;
	BridgeUniqueid: string;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: string;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Admin: "Yes" | "No";
};

export type ConfbridgeRecord = {
	Event: "ConfbridgeRecord";
	Conference: string;
	BridgeUniqueid: string;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: string;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
};

export type ConfbridgeStart = {
	Event: "ConfbridgeStart";
	Conference: string;
	BridgeUniqueid: string;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: string;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
};

export type ConfbridgeStopRecord = {
	Event: "ConfbridgeStopRecord";
	Conference: string;
	BridgeUniqueid: string;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: string;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
};

export type ConfbridgeTalking = {
	Event: "ConfbridgeTalking";
	Conference: string;
	BridgeUniqueid: string;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: string;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	TalkingStatus: "on" | "off";
	Admin: "Yes" | "No";
};

export type ConfbridgeUnmute = {
	Event: "ConfbridgeUnmute";
	Conference: string;
	BridgeUniqueid: string;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: string;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Admin: "Yes" | "No";
};

export type ContactList = {
	Event: "ContactList";
	ObjectType: "contact";
	ObjectName: string;
	ViaAddr?: string;
	ViaPort?: string;
	QualifyTimeout: string;
	CallId?: string;
	RegServer: string;
	PruneOnBoot: boolean;
	Path: string;
	Endpoint: string;
	AuthenticateQualify: boolean;
	Uri: string;
	QualifyFrequency: string;
	UserAgent: string;
	ExpirationTime: string;
	OutboundProxy: string;
	Status: "Reachable" | "Unreachable" | "NonQualified" | "Unknown";
	RoundtripUsec: string;
};

export type ContactListComplete = {
	Event: "ContactListComplete";
	EventList: string;
	ListItems: string;
};

export type ContactStatus = {
	Event: "ContactStatus";
	URI: string;
	ContactStatus:
		| "Unknown"
		| "Unreachable"
		| "Reachable"
		| "Unqualified"
		| "Removed"
		| "Updated";
	AOR: string;
	EndpointName: string;
	RoundtripUsec: string;
};

export type ContactStatusDetail = {
	Event: "ContactStatusDetail";
	AOR: string;
	URI: string;
	Status: "Reachable" | "Unreachable" | "NonQualified" | "Unknown";
	RoundtripUsec: string;
	EndpointName: string;
	UserAgent: string;
	RegExpire: string;
	ViaAddress?: string;
	CallID?: string;
	ID: string;
	AuthenticateQualify: boolean;
	OutboundProxy: string;
	Path: string;
	QualifyFrequency: string;
	QualifyTimeout: string;
};

export type CoreShowChannel = {
	Event: "CoreShowChannel";
	ActionID: string;
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	BridgeId?: string;
	Application: string;
	ApplicationData: string;
	Duration: string;
};

export type CoreShowChannelMapComplete = {
	Event: "CoreShowChannelMapComplete";
	EventList: string;
	ListItems: string;
};

export type CoreShowChannelsComplete = {
	Event: "CoreShowChannelsComplete";
	ActionID: string;
	EventList: string;
	ListItems: string;
};

export type DAHDIChannel = {
	Event: "DAHDIChannel";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	DAHDIGroup: string;
	DAHDISpan: string;
	DAHDIChannel: string;
};

export type DNDState = {
	Event: "DNDState";
	DAHDIChannel: string;
	Status: "enabled" | "disabled";
};

export type DTMFBegin = {
	Event: "DTMFBegin";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Digit: string; // Assuming string here because DTMF digits include characters like # and *
	Direction: "Received" | "Sent";
};

export type DTMFEnd = {
	Event: "DTMFEnd";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Digit: string;
	DurationMs: string;
	Direction: "Received" | "Sent";
};

export type DeadlockStart = {
	Event: "DeadlockStart";
	Mutex: string;
};

export type DeviceStateChange = {
	Event: "DeviceStateChange";
	Device: string;
	State: string;
};

export type DeviceStateListComplete = {
	Event: "DeviceStateListComplete";
	EventList: string;
	ListItems: string;
};

export type DialBegin = {
	Event: "DialBegin";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	DestChannel: string;
	DestChannelState: string;
	DestChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	DestCallerIDNum: string;
	DestCallerIDName: string;
	DestConnectedLineNum: string;
	DestConnectedLineName: string;
	DestLanguage: string;
	DestAccountCode: string;
	DestContext: string;
	DestExten: string;
	DestPriority: string;
	DestUniqueid: string;
	DestLinkedid: string;
	DialString: string;
};

export type DialEnd = {
	Event: "DialEnd";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	DestChannel: string;
	DestChannelState: string;
	DestChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	DestCallerIDNum: string;
	DestCallerIDName: string;
	DestConnectedLineNum: string;
	DestConnectedLineName: string;
	DestLanguage: string;
	DestAccountCode: string;
	DestContext: string;
	DestExten: string;
	DestPriority: string;
	DestUniqueid: string;
	DestLinkedid: string;
	DialStatus:
		| "ABORT"
		| "ANSWER"
		| "BUSY"
		| "CANCEL"
		| "CHANUNAVAIL"
		| "CONGESTION"
		| "CONTINUE"
		| "GOTO"
		| "NOANSWER";
	Forward?: string;
};

export type DialState = {
	Event: "DialState";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	DestChannel: string;
	DestChannelState: string;
	DestChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	DestCallerIDNum: string;
	DestCallerIDName: string;
	DestConnectedLineNum: string;
	DestConnectedLineName: string;
	DestLanguage: string;
	DestAccountCode: string;
	DestContext: string;
	DestExten: string;
	DestPriority: string;
	DestUniqueid: string;
	DestLinkedid: string;
	DialStatus: "RINGING" | "PROCEEDING" | "PROGRESS";
	Forward?: string;
};

export type EndpointDetail = {
	Event: "EndpointDetail";
	ObjectType: "endpoint";
	ObjectName: string;
	Context: string;
	Disallow: string;
	Allow: string;
	DtmfMode: string;
	RtpIpv6: string;
	RtpSymmetric: string;
	IceSupport: string;
	UsePtime: string;
	ForceRport: string;
	RewriteContact: string;
	Transport: string;
	OutboundProxy: string;
	MohSuggest: string;
	"100rel": string;
	Timers: string;
	TimersMinSe: string;
	TimersSessExpires: string;
	Auth: string;
	OutboundAuth: string;
	Aors: string;
	MediaAddress: string;
	IdentifyBy: string;
	DirectMedia: string;
	DirectMediaMethod: string;
	TrustConnectedLine: string;
	SendConnectedLine: string;
	ConnectedLineMethod: string;
	DirectMediaGlareMitigation: string;
	DisableDirectMediaOnNat: string;
	Callerid: string;
	CalleridPrivacy: string;
	CalleridTag: string;
	TrustIdInbound: string;
	TrustIdOutbound: string;
	SendPai: string;
	SendRpid: string;
	SendDiversion: string;
	Mailboxes: string;
	AggregateMwi: string;
	MediaEncryption: string;
	MediaEncryptionOptimistic: string;
	UseAvpf: string;
	ForceAvp: string;
	MediaUseReceivedTransport: string;
	OneTouchRecording: string;
	InbandProgress: string;
	CallGroup: string;
	PickupGroup: string;
	NamedCallGroup: string;
	NamedPickupGroup: string;
	DeviceStateBusyAt: string;
	T38Udptl: string;
	T38UdptlEc: string;
	T38UdptlMaxdatagram: string;
	FaxDetect: string;
	T38UdptlNat: string;
	T38UdptlIpv6: string;
	T38BindUdptlToMediaAddress: string;
	ToneZone: string;
	Language: string;
	RecordOnFeature: string;
	RecordOffFeature: string;
	AllowTransfer: string;
	UserEqPhone: string;
	MohPassthrough: string;
	SdpOwner: string;
	SdpSession: string;
	TosAudio: string;
	TosVideo: string;
	CosAudio: string;
	CosVideo: string;
	AllowSubscribe: string;
	SubMinExpiry: string;
	FromUser: string;
	FromDomain: string;
	MwiFromUser: string;
	RtpEngine: string;
	DtlsVerify: string;
	DtlsRekey: string;
	DtlsCertFile: string;
	DtlsPrivateKey: string;
	DtlsCipher: string;
	DtlsCaFile: string;
	DtlsCaPath: string;
	DtlsSetup: string;
	SrtpTag32: string;
	RedirectMethod: string;
	SetVar: string;
	MessageContext: string;
	Accountcode: string;
	PreferredCodecOnly: string;
	DeviceState: string;
	ActiveChannels: string;
	SubscribeContext: string;
	Allowoverlap: string;
	OverlapContext: string;
};

export type EndpointDetailComplete = {
	Event: "EndpointDetailComplete";
	EventList: string;
	ListItems: string;
};

export type EndpointList = {
	Event: "EndpointList";
	ObjectType: "endpoint";
	ObjectName: string;
	Transport: string;
	Aor: string;
	Auths: string;
	OutboundAuths: string;
	DeviceState: string;
	ActiveChannels: string;
};

export type EndpointListComplete = {
	Event: "EndpointListComplete";
	EventList: string;
	ListItems: string;
};

export type ExtensionStateListComplete = {
	Event: "ExtensionStateListComplete";
	EventList: string;
	ListItems: string;
};

export type ExtensionStatus = {
	Event: "ExtensionStatus";
	Exten: string;
	Context: string;
	Hint: string;
	Status: -2 | -1 | 0 | 1 | 2 | 4 | 8 | 9 | 16 | 17;
	StatusText:
		| "Idle"
		| "InUse"
		| "Busy"
		| "Unavailable"
		| "Ringing"
		| "InUse&Ringing"
		| "Hold"
		| "InUse&Hold"
		| "Unknown";
};

export type FAXSession = {
	Event: "FAXSession";
	ActionID?: string;
	SessionNumber: string;
	Operation: "gateway" | "V.21" | "send" | "receive" | "none";
	State:
		| "Uninitialized"
		| "Initialized"
		| "Open"
		| "Active"
		| "Complete"
		| "Reserved"
		| "Inactive"
		| "Unknown";
	ErrorCorrectionMode?: "yes" | "no";
	DataRate?: string;
	ImageResolution?: string;
	PageNumber?: string;
	FileName?: string;
	PagesTransmitted?: string;
	PagesReceived?: string;
	TotalBadLines?: string;
};

export type FAXSessionsComplete = {
	Event: "FAXSessionsComplete";
	ActionID?: string;
	Total: string;
};

export type FAXSessionsEntry = {
	Event: "FAXSessionsEntry";
	ActionID?: string;
	Channel: string;
	Technology: string;
	SessionNumber: string;
	SessionType: "G.711" | "T.38";
	Operation: "gateway" | "V.21" | "send" | "receive" | "none";
	State:
		| "Uninitialized"
		| "Initialized"
		| "Open"
		| "Active"
		| "Complete"
		| "Reserved"
		| "Inactive"
		| "Unknown";
	Files: string;
};

export type FAXStats = {
	Event: "FAXStats";
	ActionID?: string;
	CurrentSessions: string;
	ReservedSessions: string;
	TransmitAttempts: string;
	ReceiveAttempts: string;
	CompletedFAXes: string;
	FailedFAXes: string;
};

export type FAXStatus = {
	Event: "FAXStatus";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Operation: "gateway" | "receive" | "send";
	Status: string;
	LocalStationID: string;
	FileName: string;
};

export type FailedACL = {
	Event: "FailedACL";
	EventTV: string;
	Severity: "Informational" | "Error";
	Service: string;
	EventVersion: string;
	AccountID: string;
	SessionID: string;
	LocalAddress: string;
	RemoteAddress: string;
	Module?: string;
	ACLName?: string;
	SessionTV?: string;
};

export type Flash = {
	Event: "Flash";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
};

export type FullyBooted = {
	Event: "FullyBooted";
	Status: string;
	Uptime: string;
	LastReload: string;
};

export type Hangup = {
	Event: "Hangup";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Cause: string;
	"Cause-txt": string;
};

export type HangupHandlerPop = {
	Event: "HangupHandlerPop";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Handler: string;
};

export type HangupHandlerPush = {
	Event: "HangupHandlerPush";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Handler: string;
};

export type HangupHandlerRun = {
	Event: "HangupHandlerRun";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Handler: string;
};

export type HangupRequest = {
	Event: "HangupRequest";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Cause: string;
};

export type Hold = {
	Event: "Hold";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	MusicClass: string;
};

export type IdentifyDetail = {
	Event: "IdentifyDetail";
	ObjectType: "identify";
	ObjectName: string;
	Endpoint: string;
	SrvLookups: string;
	Match: string;
	MatchHeader: string;
	EndpointName: string;
};

export type InvalidAccountID = {
	Event: "InvalidAccountID";
	EventTV: string;
	Severity: "Informational" | "Error";
	Service: string;
	EventVersion: string;
	AccountID: string;
	SessionID: string;
	LocalAddress: string;
	RemoteAddress: string;
	Module?: string;
	SessionTV?: string;
};

export type InvalidPassword = {
	Event: "InvalidPassword";
	EventTV: string;
	Severity: "Informational" | "Error";
	Service: string;
	EventVersion: string;
	AccountID: string;
	SessionID: string;
	LocalAddress: string;
	RemoteAddress: string;
	Module?: string;
	SessionTV?: string;
	Challenge?: string;
	ReceivedChallenge?: string;
	ReceivedHash?: string;
};

export type InvalidTransport = {
	Event: "InvalidTransport";
	EventTV: string;
	Severity: "Informational" | "Error";
	Service: string;
	EventVersion: string;
	AccountID: string;
	SessionID: string;
	LocalAddress: string;
	RemoteAddress: string;
	AttemptedTransport: string;
	Module?: string;
	SessionTV?: string;
};

export type Load = {
	Event: "Load";
	Module: string;
	Status: "Failure" | "Success" | "Decline";
};

export type LoadAverageLimit = {
	Event: "LoadAverageLimit";
	EventTV: string;
	Severity: "Informational" | "Error";
	Service: string;
	EventVersion: string;
	AccountID: string;
	SessionID: string;
	LocalAddress: string;
	RemoteAddress: string;
	Module?: string;
	SessionTV?: string;
};

export type LocalBridge = {
	Event: "LocalBridge";
	LocalOneChannel: string;
	LocalOneChannelState: string;
	LocalOneChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	LocalOneCallerIDNum: string;
	LocalOneCallerIDName: string;
	LocalOneConnectedLineNum: string;
	LocalOneConnectedLineName: string;
	LocalOneLanguage: string;
	LocalOneAccountCode: string;
	LocalOneContext: string;
	LocalOneExten: string;
	LocalOnePriority: string;
	LocalOneUniqueid: string;
	LocalOneLinkedid: string;
	LocalTwoChannel: string;
	LocalTwoChannelState: string;
	LocalTwoChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	LocalTwoCallerIDNum: string;
	LocalTwoCallerIDName: string;
	LocalTwoConnectedLineNum: string;
	LocalTwoConnectedLineName: string;
	LocalTwoLanguage: string;
	LocalTwoAccountCode: string;
	LocalTwoContext: string;
	LocalTwoExten: string;
	LocalTwoPriority: string;
	LocalTwoUniqueid: string;
	LocalTwoLinkedid: string;
	Context: string;
	Exten: string;
	LocalOptimization: "Yes" | "No";
};

export type LocalOptimizationBegin = {
	Event: "LocalOptimizationBegin";
	LocalOneChannel: string;
	LocalOneChannelState: string;
	LocalOneChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	LocalOneCallerIDNum: string;
	LocalOneCallerIDName: string;
	LocalOneConnectedLineNum: string;
	LocalOneConnectedLineName: string;
	LocalOneLanguage: string;
	LocalOneAccountCode: string;
	LocalOneContext: string;
	LocalOneExten: string;
	LocalOnePriority: string;
	LocalOneUniqueid: string;
	LocalOneLinkedid: string;
	LocalTwoChannel: string;
	LocalTwoChannelState: string;
	LocalTwoChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	LocalTwoCallerIDNum: string;
	LocalTwoCallerIDName: string;
	LocalTwoConnectedLineNum: string;
	LocalTwoConnectedLineName: string;
	LocalTwoLanguage: string;
	LocalTwoAccountCode: string;
	LocalTwoContext: string;
	LocalTwoExten: string;
	LocalTwoPriority: string;
	LocalTwoUniqueid: string;
	LocalTwoLinkedid: string;
	SourceChannel: string;
	SourceChannelState: string;
	SourceChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	SourceCallerIDNum: string;
	SourceCallerIDName: string;
	SourceConnectedLineNum: string;
	SourceConnectedLineName: string;
	SourceLanguage: string;
	SourceAccountCode: string;
	SourceContext: string;
	SourceExten: string;
	SourcePriority: string;
	SourceUniqueid: string;
	SourceLinkedid: string;
	DestUniqueId: string;
	Id: string;
};

export type LocalOptimizationEnd = {
	Event: "LocalOptimizationEnd";
	LocalOneChannel: string;
	LocalOneChannelState: string;
	LocalOneChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	LocalOneCallerIDNum: string;
	LocalOneCallerIDName: string;
	LocalOneConnectedLineNum: string;
	LocalOneConnectedLineName: string;
	LocalOneLanguage: string;
	LocalOneAccountCode: string;
	LocalOneContext: string;
	LocalOneExten: string;
	LocalOnePriority: string;
	LocalOneUniqueid: string;
	LocalOneLinkedid: string;
	LocalTwoChannel: string;
	LocalTwoChannelState: string;
	LocalTwoChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	LocalTwoCallerIDNum: string;
	LocalTwoCallerIDName: string;
	LocalTwoConnectedLineNum: string;
	LocalTwoConnectedLineName: string;
	LocalTwoLanguage: string;
	LocalTwoAccountCode: string;
	LocalTwoContext: string;
	LocalTwoExten: string;
	LocalTwoPriority: string;
	LocalTwoUniqueid: string;
	LocalTwoLinkedid: string;
	Success: string;
	Id: string;
};

export type LogChannel = {
	Event: "LogChannel";
	Channel: string;
	Enabled?: string;
	Reason?: string;
};

export type MCID = {
	Event: "MCID";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	MCallerIDNumValid: string;
	MCallerIDNum: string;
	MCallerIDton: string;
	MCallerIDNumPlan: string;
	MCallerIDNumPres: string;
	MCallerIDNameValid: string;
	MCallerIDName: string;
	MCallerIDNameCharSet: string;
	MCallerIDNamePres: string;
	MCallerIDSubaddr: string;
	MCallerIDSubaddrType: string;
	MCallerIDSubaddrOdd: string;
	MCallerIDPres: string;
	MConnectedIDNumValid: string;
	MConnectedIDNum: string;
	MConnectedIDton: string;
	MConnectedIDNumPlan: string;
	MConnectedIDNumPres: string;
	MConnectedIDNameValid: string;
	MConnectedIDName: string;
	MConnectedIDNameCharSet: string;
	MConnectedIDNamePres: string;
	MConnectedIDSubaddr: string;
	MConnectedIDSubaddrType: string;
	MConnectedIDSubaddrOdd: string;
	MConnectedIDPres: string;
};

export type MWIGet = {
	Event: "MWIGet";
	ActionID?: string;
	Mailbox: string;
	OldMessages: string;
	NewMessages: string;
};

export type MWIGetComplete = {
	Event: "MWIGetComplete";
	ActionID?: string;
	EventList: string;
	ListItems: string;
};

export type MeetmeEnd = {
	Event: "MeetmeEnd";
	Meetme: string;
};

export type MeetmeJoin = {
	Event: "MeetmeJoin";
	Meetme: string;
	User: string;
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
};

export type MeetmeLeave = {
	Event: "MeetmeLeave";
	Meetme: string;
	User: string;
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Duration: string;
};

export type MeetmeList = {
	Event: "MeetmeList";
	Conference: string;
	UserNumber: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Channel: string;
	Admin: string;
	Role: "Listen only" | "Talk only" | "Talk and listen";
	MarkedUser: string;
	Muted: string;
	Talking: string;
};

export type MeetmeListRooms = {
	Event: "MeetmeListRooms";
	Conference: string;
	Parties: string;
	Marked: string;
	Activity: string;
	Creation: "Dynamic" | "Static";
	Locked: string;
};

export type MeetmeMute = {
	Event: "MeetmeMute";
	Meetme: string;
	User: string;
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Duration: string;
	Status: "on" | "off";
};

export type MeetmeTalkRequest = {
	Event: "MeetmeTalkRequest";
	Meetme: string;
	User: string;
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Duration: string;
	Status: "on" | "off";
};

export type MeetmeTalking = {
	Event: "MeetmeTalking";
	Meetme: string;
	User: string;
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Duration: string;
	Status: "on" | "off";
};

export type MemoryLimit = {
	Event: "MemoryLimit";
	EventTV: string;
	Severity: "Informational" | "Error";
	Service: string;
	EventVersion: string;
	AccountID: string;
	SessionID: string;
	LocalAddress: string;
	RemoteAddress: string;
	Module?: string;
	SessionTV?: string;
};

export type MessageWaiting = {
	Event: "MessageWaiting";
	Channel?: string;
	ChannelState?: string;
	ChannelStateDesc?:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum?: string;
	CallerIDName?: string;
	ConnectedLineNum?: string;
	ConnectedLineName?: string;
	Language?: string;
	AccountCode?: string;
	Context?: string;
	Exten?: string;
	Priority?: string;
	Uniqueid?: string;
	Linkedid?: string;
	Mailbox: string;
	Waiting: string;
	New: string;
	Old: string;
};

export type MiniVoiceMail = {
	Event: "MiniVoiceMail";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Action: "SentNotification";
	Mailbox: string;
	Counter: string;
};

export type MixMonitorMute = {
	Event: "MixMonitorMute";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Direction: "read" | "write" | "both";
	State: 1 | 0; // 1 when muted, 0 when unmuted
};

export type MixMonitorStart = {
	Event: "MixMonitorStart";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
};

export type MixMonitorStop = {
	Event: "MixMonitorStop";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
};

export type MonitorStart = {
	Event: "MonitorStart";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
};

export type MonitorStop = {
	Event: "MonitorStop";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
};

export type MusicOnHoldStart = {
	Event: "MusicOnHoldStart";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Class: string;
};

export type MusicOnHoldStop = {
	Event: "MusicOnHoldStop";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
};

export type NewAccountCode = {
	Event: "NewAccountCode";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	OldAccountCode: string;
};

export type NewCallerid = {
	Event: "NewCallerid";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	"CID-CallingPres": string;
};

export type NewConnectedLine = {
	Event: "NewConnectedLine";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
};

export type NewExten = {
	Event: "NewExten";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Extension: string;
	Application: string;
	AppData: string;
};

export type Newchannel = {
	Event: "Newchannel";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
};

export type Newstate = {
	Event: "Newstate";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
};

export type OriginateResponse = {
	Event: "OriginateResponse";
	ActionID?: string;
	Response: "Failure" | "Success";
	Channel: string;
	Context: string;
	Exten: string;
	Application: string;
	Data: string;
	Reason: string;
	Uniqueid: string;
	CallerIDNum: string;
	CallerIDName: string;
};

export type ParkedCall = {
	Event: "ParkedCall";
	ParkeeChannel: string;
	ParkeeChannelState: string;
	ParkeeChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	ParkeeCallerIDNum: string;
	ParkeeCallerIDName: string;
	ParkeeConnectedLineNum: string;
	ParkeeConnectedLineName: string;
	ParkeeLanguage: string;
	ParkeeAccountCode: string;
	ParkeeContext: string;
	ParkeeExten: string;
	ParkeePriority: string;
	ParkeeUniqueid: string;
	ParkeeLinkedid: string;
	ParkerDialString: string;
	Parkinglot: string;
	ParkingSpace: string;
	ParkingTimeout: string;
	ParkingDuration: string;
};

export type ParkedCallGiveUp = {
	Event: "ParkedCallGiveUp";
	ParkeeChannel: string;
	ParkeeChannelState: string;
	ParkeeChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	ParkeeCallerIDNum: string;
	ParkeeCallerIDName: string;
	ParkeeConnectedLineNum: string;
	ParkeeConnectedLineName: string;
	ParkeeLanguage: string;
	ParkeeAccountCode: string;
	ParkeeContext: string;
	ParkeeExten: string;
	ParkeePriority: string;
	ParkeeUniqueid: string;
	ParkeeLinkedid: string;
	ParkerChannel: string;
	ParkerChannelState: string;
	ParkerChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	ParkerCallerIDNum: string;
	ParkerCallerIDName: string;
	ParkerConnectedLineNum: string;
	ParkerConnectedLineName: string;
	ParkerLanguage: string;
	ParkerAccountCode: string;
	ParkerContext: string;
	ParkerExten: string;
	ParkerPriority: string;
	ParkerUniqueid: string;
	ParkerLinkedid: string;
	ParkerDialString: string;
	Parkinglot: string;
	ParkingSpace: string;
	ParkingTimeout: string;
	ParkingDuration: string;
};

export type ParkedCallSwap = {
	Event: "ParkedCallSwap";
	ParkeeChannel: string;
	ParkeeChannelState: string;
	ParkeeChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	ParkeeCallerIDNum: string;
	ParkeeCallerIDName: string;
	ParkeeConnectedLineNum: string;
	ParkeeConnectedLineName: string;
	ParkeeLanguage: string;
	ParkeeAccountCode: string;
	ParkeeContext: string;
	ParkeeExten: string;
	ParkeePriority: string;
	ParkeeUniqueid: string;
	ParkeeLinkedid: string;
	ParkerChannel: string;
	ParkerChannelState: string;
	ParkerChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	ParkerCallerIDNum: string;
	ParkerCallerIDName: string;
	ParkerConnectedLineNum: string;
	ParkerConnectedLineName: string;
	ParkerLanguage: string;
	ParkerAccountCode: string;
	ParkerContext: string;
	ParkerExten: string;
	ParkerPriority: string;
	ParkerUniqueid: string;
	ParkerLinkedid: string;
	ParkerDialString: string;
	Parkinglot: string;
	ParkingSpace: string;
	ParkingTimeout: string;
	ParkingDuration: string;
};

export type ParkedCallTimeOut = {
	Event: "ParkedCallTimeOut";
	ParkeeChannel: string;
	ParkeeChannelState: string;
	ParkeeChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	ParkeeCallerIDNum: string;
	ParkeeCallerIDName: string;
	ParkeeConnectedLineNum: string;
	ParkeeConnectedLineName: string;
	ParkeeLanguage: string;
	ParkeeAccountCode: string;
	ParkeeContext: string;
	ParkeeExten: string;
	ParkeePriority: string;
	ParkeeUniqueid: string;
	ParkeeLinkedid: string;
	ParkerChannel: string;
	ParkerChannelState: string;
	ParkerChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	ParkerCallerIDNum: string;
	ParkerCallerIDName: string;
	ParkerConnectedLineNum: string;
	ParkerConnectedLineName: string;
	ParkerLanguage: string;
	ParkerAccountCode: string;
	ParkerContext: string;
	ParkerExten: string;
	ParkerPriority: string;
	ParkerUniqueid: string;
	ParkerLinkedid: string;
	ParkerDialString: string;
	Parkinglot: string;
	ParkingSpace: string;
	ParkingTimeout: string;
	ParkingDuration: string;
};

export type PeerStatus = {
	Event: "PeerStatus";
	ChannelType: string;
	Peer: string;
	PeerStatus: "Unknown" | "Registered" | "Unregistered" | "Rejected" | "Lagged";
	Cause: string;
	Address: string;
	Port: string;
	Time: string;
};

export type Pickup = {
	Event: "Pickup";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	TargetChannel: string;
	TargetChannelState: string;
	TargetChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	TargetCallerIDNum: string;
	TargetCallerIDName: string;
	TargetConnectedLineNum: string;
	TargetConnectedLineName: string;
	TargetLanguage: string;
	TargetAccountCode: string;
	TargetContext: string;
	TargetExten: string;
	TargetPriority: string;
	TargetUniqueid: string;
	TargetLinkedid: string;
};

export type PresenceStateChange = {
	Event: "PresenceStateChange";
	Presentity: string;
	Status: string;
	Subtype: string;
	Message: string;
};

export type PresenceStateListComplete = {
	Event: "PresenceStateListComplete";
	EventList: string;
	ListItems: string;
};

export type PresenceStatus = {
	Event: "PresenceStatus";
	Exten: string;
	Context: string;
	Hint: string;
	Status: string;
	Subtype: string;
	Message: string;
};

export type QueueCallerAbandon = {
	Event: "QueueCallerAbandon";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Queue: string;
	Position: string;
	OriginalPosition: string;
	HoldTime: string;
};

export type QueueCallerJoin = {
	Event: "QueueCallerJoin";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Queue: string;
	Position: string;
	Count: string;
};

export type QueueCallerLeave = {
	Event: "QueueCallerLeave";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Queue: string;
	Count: string;
	Position: string;
};

export type QueueEntry = {
	Event: "QueueEntry";
	Queue: string;
	Position: string;
	Channel: string;
	Uniqueid: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Wait: string;
	Priority: string;
};

export type QueueMemberAdded = {
	Event: "QueueMemberAdded";
	Queue: string;
	MemberName: string;
	Interface: string;
	StateInterface: string;
	Membership: "dynamic" | "realtime" | "static";
	Penalty: string;
	CallsTaken: string;
	LastCall: string;
	LastPause: string;
	LoginTime: string;
	InCall: "0" | "1";
	Status: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
	Paused: "0" | "1";
	PausedReason?: string;
	Ringinuse: "0" | "1";
	Wrapuptime: string;
};

export type QueueMemberPause = {
	Event: "QueueMemberPause";
	Queue: string;
	MemberName: string;
	Interface: string;
	StateInterface: string;
	Membership: "dynamic" | "realtime" | "static";
	Penalty: string;
	CallsTaken: string;
	LastCall: string;
	LastPause: string;
	LoginTime: string;
	InCall: "0" | "1";
	Status: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
	Paused: "0" | "1";
	PausedReason?: string;
	Ringinuse: "0" | "1";
	Wrapuptime: string;
};

export type QueueMemberPenalty = {
	Event: "QueueMemberPenalty";
	Queue: string;
	MemberName: string;
	Interface: string;
	StateInterface: string;
	Membership: "dynamic" | "realtime" | "static";
	Penalty: string;
	CallsTaken: string;
	LastCall: string;
	LastPause: string;
	LoginTime: string;
	InCall: "0" | "1";
	Status: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
	Paused: "0" | "1";
	PausedReason?: string;
	Ringinuse: "0" | "1";
	Wrapuptime: string;
};

export type QueueMemberRemoved = {
	Event: "QueueMemberRemoved";
	Queue: string;
	MemberName: string;
	Interface: string;
	StateInterface: string;
	Membership: "dynamic" | "realtime" | "static";
	Penalty: string;
	CallsTaken: string;
	LastCall: string;
	LastPause: string;
	LoginTime: string;
	InCall: "0" | "1";
	Status: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
	Paused: "0" | "1";
	PausedReason?: string;
	Ringinuse: "0" | "1";
	Wrapuptime: string;
};

export type QueueMemberRinginuse = {
	Event: "QueueMemberRinginuse";
	Queue: string;
	MemberName: string;
	Interface: string;
	StateInterface: string;
	Membership: "dynamic" | "realtime" | "static";
	Penalty: string;
	CallsTaken: string;
	LastCall: string;
	LastPause: string;
	LoginTime: string;
	InCall: "0" | "1";
	Status: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
	Paused: "0" | "1";
	PausedReason?: string;
	Ringinuse: "0" | "1";
	Wrapuptime: string;
};

export type QueueMemberStatus = {
	Event: "QueueMemberStatus";
	Queue: string;
	MemberName: string;
	Interface: string;
	StateInterface: string;
	Membership: "dynamic" | "realtime" | "static";
	Penalty: string;
	CallsTaken: string;
	LastCall: string;
	LastPause: string;
	LoginTime: string;
	InCall: "0" | "1";
	Status: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
	Paused: "0" | "1";
	PausedReason?: string;
	Ringinuse: "0" | "1";
	Wrapuptime: string;
};

export type QueueParams = {
	Event: "QueueParams";
	Max: string;
	Strategy: string;
	Calls: string;
	Holdtime: string;
	TalkTime: string;
	Completed: string;
	Abandoned: string;
	ServiceLevelPerf: string;
	ServiceLevelPerf2: string;
};

export type RTCPReceived = {
	Event: "RTCPReceived";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc:
		| "Down"
		| "Rsrvd"
		| "OffHook"
		| "Dialing"
		| "Ring"
		| "Ringing"
		| "Up"
		| "Busy"
		| "Dialing Offhook"
		| "Pre-ring"
		| "Unknown";
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	SSRC: string;
	PT: "200(SR)" | "201(RR)";
	From: string;
	RTT: string;
	ReportCount: string;
	SentNTP?: string;
	SentRTP?: string;
	SentPackets?: string;
	SentOctets?: string;
	ReportXSourceSSRC: string;
	ReportXFractionLost: string;
	ReportXCumulativeLost: string;
	ReportXHighestSequence: string;
	ReportXSequenceNumberCycles: string;
	ReportXIAJitter: string;
	ReportXLSR: string;
	ReportXDLSR: string;
};

export type RTCPSent = {
	Event: "RTCPSent";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	SSRC: string;
	PT: "200(SR)" | "201(RR)";
	To: string;
	ReportCount: string;
	SentNTP?: string;
	SentRTP?: string;
	SentPackets?: string;
	SentOctets?: string;
	ReportXSourceSSRC: string;
	ReportXFractionLost: string;
	ReportXCumulativeLost: string;
	ReportXHighestSequence: string;
	ReportXSequenceNumberCycles: string;
	ReportXIAJitter: string;
	ReportXLSR: string;
	ReportXDLSR: string;
};

export type ReceiveFAX = {
	Event: "ReceiveFAX";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	LocalStationID: string;
	RemoteStationID: string;
	PagesTransferred: string;
	Resolution: string;
	TransferRate: string;
	FileName: string;
};

export type Registry = {
	Event: "Registry";
	ChannelType: string;
	Username: string;
	Domain: string;
	Status: "Registered" | "Unregistered" | "Rejected" | "Failed";
	Cause?: string;
};

export type Reload = {
	Event: "Reload";
	Module: string;
	Status: "0" | "1" | "2" | "3" | "4" | "5" | "6";
};

export type Rename = {
	Event: "Rename";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
};

export type RequestBadFormat = {
	Event: "RequestBadFormat";
	EventTV: string;
	Severity: "Informational" | "Error";
	Service: string;
	EventVersion: string;
	AccountID: string;
	SessionID: string;
	LocalAddress: string;
	RemoteAddress: string;
	RequestType: string;
	Module?: string;
	SessionTV?: string;
	RequestParams?: string;
};

export type RequestNotAllowed = {
	Event: "RequestNotAllowed";
	EventTV: string;
	Severity: "Informational" | "Error";
	Service: string;
	EventVersion: string;
	AccountID: string;
	SessionID: string;
	LocalAddress: string;
	RemoteAddress: string;
	RequestType: string;
	Module?: string;
	SessionTV?: string;
	RequestParams?: string;
};

export type RequestNotSupported = {
	Event: "RequestNotSupported";
	EventTV: string;
	Severity: "Informational" | "Error";
	Service: string;
	EventVersion: string;
	AccountID: string;
	SessionID: string;
	LocalAddress: string;
	RemoteAddress: string;
	RequestType: string;
	Module?: string;
	SessionTV?: string;
};

export type SIPQualifyPeerDone = {
	Event: "SIPQualifyPeerDone";
	Peer: string;
	ActionID?: string;
};

export type SendFAX = {
	Event: "SendFAX";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	LocalStationID: string;
	RemoteStationID: string;
	PagesTransferred: string;
	Resolution: string;
	TransferRate: string;
	FileName: string;
};

export type SessionLimit = {
	Event: "SessionLimit";
	EventTV: string;
	Severity: "Informational" | "Error";
	Service: string;
	EventVersion: string;
	AccountID: string;
	SessionID: string;
	LocalAddress: string;
	RemoteAddress: string;
	Module?: string;
	SessionTV?: string;
};

export type SessionTimeout = {
	Event: "SessionTimeout";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Source: "RTPTimeout" | "SIPSessionTimer";
};

export type Shutdown = {
	Event: "Shutdown";
	Shutdown: "Uncleanly" | "Cleanly";
	Restart: "True" | "False";
};

export type SoftHangupRequest = {
	Event: "SoftHangupRequest";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Cause: string;
};

export type SpanAlarm = {
	Event: "SpanAlarm";
	Span: string;
	Alarm: string;
};

export type SpanAlarmClear = {
	Event: "SpanAlarmClear";
	Span: string;
};

export type Status = {
	Event: "Status";
	ActionID?: string;
	Channel: string;
	ChannelState: string;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Type: string;
	DNID: string;
	EffectiveConnectedLineNum: string;
	EffectiveConnectedLineName: string;
	TimeToHangup: string;
	BridgeID: string;
	Application: string;
	Data: string;
	Nativeformats: string;
	Readformat: string;
	Readtrans: string;
	Writeformat: string;
	Writetrans: string;
	Callgroup: string;
	Pickupgroup: string;
	Seconds: string;
};

export type StatusComplete = {
	Event: "StatusComplete";
	Items: string;
};

export type SuccessfulAuth = {
	Event: "SuccessfulAuth";
	EventTV: string;
	Severity: "Informational" | "Error";
	Service: string;
	EventVersion: string;
	AccountID: string;
	SessionID: string;
	LocalAddress: string;
	RemoteAddress: string;
	UsingPassword: string;
	Module?: string;
	SessionTV?: string;
};

export type TransportDetail = {
	Event: "TransportDetail";
	ObjectType: string; // Always 'transport'
	ObjectName: string;
	Protocol: string;
	Bind: string;
	AsycOperations: string; // Always '1'
	CaListFile: string;
	CaListPath: string;
	CertFile: string;
	PrivKeyFile: string;
	Password: string;
	ExternalSignalingAddress: string;
	ExternalSignalingPort: string;
	ExternalMediaAddress: string;
	Domain: string;
	VerifyServer: string;
	VerifyClient: string;
	RequireClientCert: string;
	Method: string;
	Cipher: string;
	LocalNet: string;
	Tos: string;
	Cos: string;
	WebsocketWriteTimeout: string;
	EndpointName: string;
};

export type UnParkedCall = {
	Event: "UnParkedCall";
	ParkeeChannel: string;
	ParkeeChannelState: string;
	ParkeeChannelStateDesc: string;
	ParkeeCallerIDNum: string;
	ParkeeCallerIDName: string;
	ParkeeConnectedLineNum: string;
	ParkeeConnectedLineName: string;
	ParkeeLanguage: string;
	ParkeeAccountCode: string;
	ParkeeContext: string;
	ParkeeExten: string;
	ParkeePriority: string;
	ParkeeUniqueid: string;
	ParkeeLinkedid: string;
	ParkerChannel: string;
	ParkerChannelState: string;
	ParkerChannelStateDesc: string;
	ParkerCallerIDNum: string;
	ParkerCallerIDName: string;
	ParkerConnectedLineNum: string;
	ParkerConnectedLineName: string;
	ParkerLanguage: string;
	ParkerAccountCode: string;
	ParkerContext: string;
	ParkerExten: string;
	ParkerPriority: string;
	ParkerUniqueid: string;
	ParkerLinkedid: string;
	ParkerDialString: string;
	Parkinglot: string;
	ParkingSpace: string;
	ParkingTimeout: string;
	ParkingDuration: string;
	RetrieverChannel: string;
	RetrieverChannelState: string;
	RetrieverChannelStateDesc: string;
	RetrieverCallerIDNum: string;
	RetrieverCallerIDName: string;
	RetrieverConnectedLineNum: string;
	RetrieverConnectedLineName: string;
	RetrieverLanguage: string;
	RetrieverAccountCode: string;
	RetrieverContext: string;
	RetrieverExten: string;
	RetrieverPriority: string;
	RetrieverUniqueid: string;
	RetrieverLinkedid: string;
};

export type UnexpectedAddress = {
	Event: "UnexpectedAddress";
	EventTV: string;
	Severity: "Informational" | "Error";
	Service: string;
	EventVersion: string;
	AccountID: string;
	SessionID: string;
	LocalAddress: string;
	RemoteAddress: string;
	ExpectedAddress: string;
	Module?: string;
	SessionTV?: string;
};

export type Unhold = {
	Event: "Unhold";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
};

export type Unload = {
	Event: "Unload";
	Module: string;
	Status: "Success";
};

export type UserEvent = {
	Event: "UserEvent";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	UserEvent: string;
};

export type VarSet = {
	Event: "VarSet";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
	Variable: string;
	Value: string;
};

export type VoicemailPasswordChange = {
	Event: "VoicemailPasswordChange";
	Context: string;
	Mailbox: string;
	NewPassword: string;
};

export type Wink = {
	Event: "Wink";
	Channel: string;
	ChannelState: string;
	ChannelStateDesc: string;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Language: string;
	AccountCode: string;
	Context: string;
	Exten: string;
	Priority: string;
	Uniqueid: string;
	Linkedid: string;
};

export type AMIEvent =
	| AGIExecEnd
	| AGIExecStart
	| AOCD
	| AOCE
	| AOCS
	| AgentCalled
	| AgentComplete
	| AgentConnect
	| AgentDump
	| AgentLogin
	| AgentLogoff
	| AgentRingNoAnswer
	| Agents
	| AgentsComplete
	| Alarm
	| AlarmClear
	| AorDetail
	| AorList
	| AorListComplete
	| AsyncAGIEnd
	| AsyncAGIExec
	| AsyncAGIStart
	| AttendedTransfer
	| AuthDetail
	| AuthList
	| AuthListComplete
	| AuthMethodNotAllowed
	| BlindTransfer
	| BridgeCreate
	| BridgeDestroy
	| BridgeEnter
	| BridgeInfoChannel
	| BridgeInfoComplete
	| BridgeLeave
	| BridgeMerge
	| BridgeVideoSourceUpdate
	| CEL
	| Cdr
	| ChallengeResponseFailed
	| ChallengeSent
	| ChanSpyStart
	| ChanSpyStop
	| ChannelTalkingStart
	| ChannelTalkingStop
	| ConfbridgeEnd
	| ConfbridgeJoin
	| ConfbridgeLeave
	| ConfbridgeList
	| ConfbridgeListRooms
	| ConfbridgeMute
	| ConfbridgeRecord
	| ConfbridgeStart
	| ConfbridgeStopRecord
	| ConfbridgeTalking
	| ConfbridgeUnmute
	| ContactList
	| ContactListComplete
	| ContactStatus
	| ContactStatusDetail
	| CoreShowChannel
	| CoreShowChannelMapComplete
	| CoreShowChannelsComplete
	| DAHDIChannel
	| DNDState
	| DTMFBegin
	| DTMFEnd
	| DeadlockStart
	| DeviceStateChange
	| DeviceStateListComplete
	| DialBegin
	| DialEnd
	| DialState
	| EndpointDetail
	| EndpointDetailComplete
	| EndpointList
	| EndpointListComplete
	| ExtensionStateListComplete
	| ExtensionStatus
	| FAXSession
	| FAXSessionsComplete
	| FAXSessionsEntry
	| FAXStats
	| FAXStatus
	| FailedACL
	| Flash
	| FullyBooted
	| Hangup
	| HangupHandlerPop
	| HangupHandlerPush
	| HangupHandlerRun
	| HangupRequest
	| Hold
	| IdentifyDetail
	| InvalidAccountID
	| InvalidPassword
	| InvalidTransport
	| Load
	| LoadAverageLimit
	| LocalBridge
	| LocalOptimizationBegin
	| LocalOptimizationEnd
	| LogChannel
	| MCID
	| MWIGet
	| MWIGetComplete
	| MeetmeEnd
	| MeetmeJoin
	| MeetmeLeave
	| MeetmeList
	| MeetmeListRooms
	| MeetmeMute
	| MeetmeTalkRequest
	| MeetmeTalking
	| MemoryLimit
	| MessageWaiting
	| MiniVoiceMail
	| MixMonitorMute
	| MixMonitorStart
	| MixMonitorStop
	| MonitorStart
	| MonitorStop
	| MusicOnHoldStart
	| MusicOnHoldStop
	| NewAccountCode
	| NewCallerid
	| NewConnectedLine
	| NewExten
	| Newchannel
	| Newstate
	| OriginateResponse
	| ParkedCall
	| ParkedCallGiveUp
	| ParkedCallSwap
	| ParkedCallTimeOut
	| PeerStatus
	| Pickup
	| PresenceStateChange
	| PresenceStateListComplete
	| PresenceStatus
	| QueueCallerAbandon
	| QueueCallerJoin
	| QueueCallerLeave
	| QueueEntry
	| QueueMemberAdded
	| QueueMemberPause
	| QueueMemberPenalty
	| QueueMemberRemoved
	| QueueMemberRinginuse
	| QueueMemberStatus
	| QueueParams
	| RTCPReceived
	| RTCPSent
	| ReceiveFAX
	| Registry
	| Reload
	| Rename
	| RequestBadFormat
	| RequestNotAllowed
	| RequestNotSupported
	| SIPQualifyPeerDone
	| SendFAX
	| SessionLimit
	| SessionTimeout
	| Shutdown
	| SoftHangupRequest
	| SpanAlarm
	| SpanAlarmClear
	| Status
	| StatusComplete
	| SuccessfulAuth
	| TransportDetail
	| UnParkedCall
	| UnexpectedAddress
	| Unhold
	| Unload
	| UserEvent
	| VarSet
	| VoicemailPasswordChange
	| Wink;
