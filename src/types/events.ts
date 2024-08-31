type Request = {
	Action: string;
	Queue?: string;
	ActionID: number;
};

type BaseEvent = {
	TimeEvent: number;
	Request?: Request;
};

/**
 * Represents the data structure for the AGIExecEnd event in Asterisk.
 *
 * **Synopsis**: Raised when an AGI command finishes execution.
 *
 * **Syntax**:
 * - `Event: AGIExecEnd`
 * - `Channel: string`
 * - `CommandId: string`
 * - `Result: string`
 */
/**
 * Represents the data structure for the AGIExecEnd event in Asterisk.
 *
 * **Synopsis**: Description for AGIExecEnd event.
 *
 * **Syntax**:
 * - `Event: "AGIExecEnd"`
 * - `Channel: string`
 * - `ChannelState: number`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: string`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 * - `Command: string`
 * - `CommandId: string`
 * - `ResultCode: string`
 * - `Result: string`
 */
export type AGIExecEnd = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Command: string;
	CommandId: string;
	ResultCode: string;
	Result: string;
};

/**
 * Represents the data structure for the AGIExecStart event in Asterisk.
 *
 * **Synopsis**: Raised when an AGI command starts execution.
 *
 * **Syntax**:
 * - `Event: AGIExecStart`
 * - `Channel: string`
 * - `CommandId: string`
 * - `Command: string`
 */
/**
 * Represents the data structure for the AGIExecStart event in Asterisk.
 *
 * **Synopsis**: Description for AGIExecStart event.
 *
 * **Syntax**:
 * - `Event: "AGIExecStart"`
 * - `Channel: string`
 * - `ChannelState: number`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: string`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 * - `Command: string`
 * - `CommandId: string`
 */
export type AGIExecStart = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Command: string;
	CommandId: string;
};

/**
 * Represents the data structure for the AOCD event in Asterisk.
 *
 * **Synopsis**: Raised when an Advice of Charge (AOC-D) message is received.
 *
 * **Syntax**:
 * - `Event: AOCD`
 * - `Channel: string`
 * - `AOCAmount: string`
 */
/**
 * Represents the data structure for the AOCD event in Asterisk.
 *
 * **Synopsis**: Description for AOCD event.
 *
 * **Syntax**:
 * - `Event: "AOC-D"`
 * - `Channel: string`
 * - `ChannelState: number`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: string`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 * - `Charge: string`
 * - `Type: string`
 * - `BillingID: string`
 * - `TotalType: string`
 * - `Currency: string`
 * - `Name: string`
 * - `Cost: string`
 * - `Multiplier: string`
 * - `Units: string`
 * - `NumberOf: string`
 * - `TypeOf: string`
 */
export type AOCD = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
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

/**
 * Represents the data structure for the AOCE event in Asterisk.
 *
 * **Synopsis**: Raised when an Advice of Charge (AOC-E) message is received.
 *
 * **Syntax**:
 * - `Event: AOCE`
 * - `Channel: string`
 * - `AOCAmount: string`
 */
/**
 * Represents the data structure for the AOCE event in Asterisk.
 *
 * **Synopsis**: Description for AOCE event.
 *
 * **Syntax**:
 * - `Event: "AOC-E"`
 * - `Channel: string`
 * - `ChannelState: number`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: string`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 * - `ChargingAssociation: string`
 * - `Number: string`
 * - `Plan: string`
 * - `ID: string`
 * - `Charge: string`
 * - `Type: string`
 * - `BillingID: string`
 * - `TotalType: string`
 * - `Currency: string`
 * - `Name: string`
 * - `Cost: string`
 * - `Multiplier: string`
 * - `Units: string`
 * - `NumberOf: string`
 * - `TypeOf: string`
 */
export type AOCE = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
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

/**
 * Represents the data structure for the AOCS event in Asterisk.
 *
 * **Synopsis**: Raised when an Advice of Charge (AOC-S) message is received.
 *
 * **Syntax**:
 * - `Event: AOCS`
 * - `Channel: string`
 * - `AOCAmount: string`
 */
/**
 * Represents the data structure for the AOCS event in Asterisk.
 *
 * **Synopsis**: Description for AOCS event.
 *
 * **Syntax**:
 * - `Event: "AOC-S"`
 * - `Channel: string`
 * - `ChannelState: number`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: string`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 * - `Chargeable: string`
 * - `RateType: string`
 * - `Currency: string`
 * - `Name: string`
 * - `Cost: string`
 * - `Multiplier: string`
 * - `ChargingType: string`
 * - `StepFunction: string`
 * - `Granularity: string`
 * - `Length: string`
 * - `Scale: string`
 * - `Unit: string`
 * - `SpecialCode: string`
 */
export type AOCS = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
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

/**
 * Represents the data structure for the AgentCalled event in Asterisk.
 *
 * **Synopsis**: Raised when a queue member is rung.
 *
 * **Syntax**:
 * - `Event: AgentCalled`
 * - `Channel: string`
 * - `AgentCalled: string`
 * - `Queue: string`
 * - `MemberName: string`
 * - `Interface: string`
 */
/**
 * Represents the data structure for the AgentCalled event in Asterisk.
 *
 * **Synopsis**: Description for AgentCalled event.
 *
 * **Syntax**:
 * - `Event: "AgentCalled"`
 * - `Channel: string`
 * - `ChannelState: number`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: string`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 * - `DestChannel: string`
 * - `DestChannelState: number`
 * - `DestChannelStateDesc: string`
 * - `DestCallerIDNum: string`
 * - `DestCallerIDName: string`
 * - `DestConnectedLineNum: string`
 * - `DestConnectedLineName: string`
 * - `DestLanguage: string`
 * - `DestAccountCode: string`
 * - `DestContext: string`
 * - `DestExten: string`
 * - `DestPriority: string`
 * - `DestUniqueid: string`
 * - `DestLinkedid: string`
 * - `Queue: string`
 * - `MemberName: string`
 * - `Interface: string`
 */
export type AgentCalled = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
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
	DestUniqueid: string | number;
	DestLinkedid: number | string;
	Queue: string;
	MemberName: string;
	Interface: string;
};

/**
 * Represents the data structure for the AgentComplete event in Asterisk.
 *
 * **Synopsis**: Raised when a queue member finishes a call.
 *
 * **Syntax**:
 * - `Event: AgentComplete`
 * - `Channel: string`
 * - `Queue: string`
 * - `MemberName: string`
 * - `Interface: string`
 * - `HoldTime: number`
 * - `TalkTime: number`
 */
/**
 * Represents the data structure for the AgentComplete event in Asterisk.
 *
 * **Synopsis**: Description for AgentComplete event.
 *
 * **Syntax**:
 * - `Event: "AgentComplete"`
 * - `Channel: string`
 * - `ChannelState: number`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: string`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 * - `DestChannel: string`
 * - `DestChannelState: number`
 * - `DestChannelStateDesc: string`
 * - `DestCallerIDNum: string`
 * - `DestCallerIDName: string`
 * - `DestConnectedLineNum: string`
 * - `DestConnectedLineName: string`
 * - `DestLanguage: string`
 * - `DestAccountCode: string`
 * - `DestContext: string`
 * - `DestExten: string`
 * - `DestPriority: string`
 * - `DestUniqueid: string`
 * - `DestLinkedid: string`
 * - `Queue: string`
 * - `MemberName: string`
 * - `Interface: string`
 * - `HoldTime: string`
 * - `TalkTime: string`
 * - `Reason: string`
 */
export type AgentComplete = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
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
	DestUniqueid: string | number;
	DestLinkedid: number | string;
	Queue: string;
	MemberName: string;
	Interface: string;
	HoldTime: number;
	TalkTime: number;
	Reason: string;
};

/**
 * Represents the data structure for the AgentConnect event in Asterisk.
 *
 * **Synopsis**: Raised when a queue member answers and is bridged to a caller in the queue.
 *
 * **Syntax**:
 * - `Event: AgentConnect`
 * - `Channel: string`
 * - `ChannelState: number`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: number`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 * - `DestChannel: string`
 * - `DestChannelState: number`
 * - `DestChannelStateDesc: string`
 * - `DestCallerIDNum: string`
 * - `DestCallerIDName: string`
 * - `DestConnectedLineNum: string`
 * - `DestConnectedLineName: string`
 * - `DestLanguage: string`
 * - `DestAccountCode: string`
 * - `DestContext: string`
 * - `DestExten: string`
 * - `DestPriority: number`
 * - `DestUniqueid: string`
 * - `DestLinkedid: string`
 * - `Queue: string`
 * - `MemberName: string`
 * - `Interface: string`
 * - `RingTime: number`
 * - `HoldTime: number`
 */
/**
 * Represents the data structure for the AgentConnect event in Asterisk.
 *
 * **Synopsis**: Description for AgentConnect event.
 *
 * **Syntax**:
 * - `Event: "AgentConnect"`
 * - `Channel: string`
 * - `ChannelState: number`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: string`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 * - `DestChannel: string`
 * - `DestChannelState: number`
 * - `DestChannelStateDesc: string`
 * - `DestCallerIDNum: string`
 * - `DestCallerIDName: string`
 * - `DestConnectedLineNum: string`
 * - `DestConnectedLineName: string`
 * - `DestLanguage: string`
 * - `DestAccountCode: string`
 * - `DestContext: string`
 * - `DestExten: string`
 * - `DestPriority: string`
 * - `DestUniqueid: string`
 * - `DestLinkedid: string`
 * - `Queue: string`
 * - `MemberName: string`
 * - `Interface: string`
 * - `RingTime: number`
 * - `HoldTime: number`
 */
export type AgentConnect = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
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
	DestUniqueid: string | number;
	DestLinkedid: number | string;
	Queue: string;
	MemberName: string;
	Interface: string;
	RingTime: number;
	HoldTime: number;
};

/**
 * Represents the data structure for the AgentDump event in Asterisk.
 *
 * **Synopsis**: Raised when a queue member hangs up on a caller in the queue.
 *
 * **Syntax**:
 * - `Event: AgentDump`
 * - `Channel: string`
 * - `ChannelState: number`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: number`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 * - `DestChannel: string`
 * - `DestChannelState: number`
 * - `DestChannelStateDesc: string`
 * - `DestCallerIDNum: string`
 * - `DestCallerIDName: string`
 * - `DestConnectedLineNum: string`
 * - `DestConnectedLineName: string`
 * - `DestLanguage: string`
 * - `DestAccountCode: string`
 * - `DestContext: string`
 * - `DestExten: string`
 * - `DestPriority: number`
 * - `DestUniqueid: string`
 * - `DestLinkedid: string`
 * - `Queue: string`
 * - `MemberName: string`
 * - `Interface: string`
 */
/**
 * Represents the data structure for the AgentDump event in Asterisk.
 *
 * **Synopsis**: Description for AgentDump event.
 *
 * **Syntax**:
 * - `Event: "AgentDump"`
 * - `Channel: string`
 * - `ChannelState: number`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: string`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 * - `DestChannel: string`
 * - `DestChannelState: number`
 * - `DestChannelStateDesc: string`
 * - `DestCallerIDNum: string`
 * - `DestCallerIDName: string`
 * - `DestConnectedLineNum: string`
 * - `DestConnectedLineName: string`
 * - `DestLanguage: string`
 * - `DestAccountCode: string`
 * - `DestContext: string`
 * - `DestExten: string`
 * - `DestPriority: string`
 * - `DestUniqueid: string`
 * - `DestLinkedid: string`
 * - `Queue: string`
 * - `MemberName: string`
 * - `Interface: string`
 */
export type AgentDump = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
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
	DestUniqueid: string | number;
	DestLinkedid: number | string;
	Queue: string;
	MemberName: string;
	Interface: string;
};

/**
 * Represents the data structure for the AgentLogin event in Asterisk.
 *
 * **Synopsis**: Raised when a queue member logs in.
 *
 * **Syntax**:
 * - `Event: AgentLogin`
 * - `Channel: string`
 * - `Queue: string`
 * - `MemberName: string`
 * - `Interface: string`
 */
/**
 * Represents the data structure for the AgentLogin event in Asterisk.
 *
 * **Synopsis**: Description for AgentLogin event.
 *
 * **Syntax**:
 * - `Event: "AgentLogin"`
 * - `Channel: string`
 * - `ChannelState: number`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: string`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 * - `Agent: string`
 */
export type AgentLogin = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Agent: string;
};

/**
 * Represents the data structure for the AgentLogoff event in Asterisk.
 *
 * **Synopsis**: Raised when a queue member logs off.
 *
 * **Syntax**:
 * - `Event: AgentLogoff`
 * - `Channel: string`
 * - `Queue: string`
 * - `MemberName: string`
 * - `Interface: string`
 * - `LogoffReason: string`
 */
/**
 * Represents the data structure for the AgentLogoff event in Asterisk.
 *
 * **Synopsis**: Description for AgentLogoff event.
 *
 * **Syntax**:
 * - `Event: "AgentLogoff"`
 * - `Agent: string`
 * - `Logintime: number`
 */
export type AgentLogoff = BaseEvent & {
	Event: "AgentLogoff";
	Agent: string;
	Logintime: number;
};

/**
 * Represents the data structure for the AgentRingNoAnswer event in Asterisk.
 *
 * **Synopsis**: Raised when a queue member does not answer a call.
 *
 * **Syntax**:
 * - `Event: AgentRingNoAnswer`
 * - `Channel: string`
 * - `Queue: string`
 * - `MemberName: string`
 * - `Interface: string`
 * - `RingTime: number`
 */
/**
 * Represents the data structure for the AgentRingNoAnswer event in Asterisk.
 *
 * **Synopsis**: Description for AgentRingNoAnswer event.
 *
 * **Syntax**:
 * - `Event: "AgentRingNoAnswer"`
 * - `Channel: string`
 * - `ChannelState: number`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: string`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 * - `DestChannel: string`
 * - `DestChannelState: number`
 * - `DestChannelStateDesc: string`
 * - `DestCallerIDNum: string`
 * - `DestCallerIDName: string`
 * - `DestConnectedLineNum: string`
 * - `DestConnectedLineName: string`
 * - `DestLanguage: string`
 * - `DestAccountCode: string`
 * - `DestContext: string`
 * - `DestExten: string`
 * - `DestPriority: string`
 * - `DestUniqueid: string`
 * - `DestLinkedid: string`
 * - `Queue: string`
 * - `MemberName: string`
 * - `Interface: string`
 * - `RingTime: number`
 */
export type AgentRingNoAnswer = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
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
	DestUniqueid: string | number;
	DestLinkedid: number | string;
	Queue: string;
	MemberName: string;
	Interface: string;
	RingTime: number;
};

/**
 * Represents the data structure for the Agents event in Asterisk.
 *
 * **Synopsis**: Raised in response to an Agents command, listing active agents.
 *
 * **Syntax**:
 * - `Event: Agents`
 * - `Agent: string`
 * - `Name: string`
 * - `Status: string`
 * - `LoggedInTime: string`
 * - `TalkingTo: string`
 */
export type Agents = BaseEvent & {
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
	ActionID: number;
};

/**
 * Represents the data structure for the AgentsComplete event in Asterisk.
 *
 * **Synopsis**: Raised after all Agents have been reported in response to an Agents command.
 *
 * **Syntax**:
 * - `Event: AgentsComplete`
 * - `ListItems: number`
 */
/**
 * Represents the data structure for the AgentsComplete event in Asterisk.
 *
 * **Synopsis**: Description for AgentsComplete event.
 *
 * **Syntax**:
 * - `Event: "AgentsComplete"`
 * - `ActionID: number`
 */
export type AgentsComplete = BaseEvent & {
	Event: "AgentsComplete";
	ActionID: number;
};

/**
 * Represents the data structure for the Alarm event in Asterisk.
 *
 * **Synopsis**: Raised when a DAHDI channel reports an alarm condition.
 *
 * **Syntax**:
 * - `Event: Alarm`
 * - `Channel: string`
 * - `Alarm: string`
 */
/**
 * Represents the data structure for the Alarm event in Asterisk.
 *
 * **Synopsis**: Description for Alarm event.
 *
 * **Syntax**:
 * - `Event: "Alarm"`
 * - `DAHDIChannel: string`
 * - `Alarm: string`
 */
export type Alarm = BaseEvent & {
	Event: "Alarm";
	DAHDIChannel: string;
	Alarm: string;
};

/**
 * Represents the data structure for the AlarmClear event in Asterisk.
 *
 * **Synopsis**: Raised when a DAHDI channel clears an alarm condition.
 *
 * **Syntax**:
 * - `Event: AlarmClear`
 * - `Channel: string`
 * - `Alarm: string`
 */
/**
 * Represents the data structure for the AlarmClear event in Asterisk.
 *
 * **Synopsis**: Description for AlarmClear event.
 *
 * **Syntax**:
 * - `Event: "AlarmClear"`
 * - `DAHDIChannel: string`
 */
export type AlarmClear = BaseEvent & {
	Event: "AlarmClear";
	DAHDIChannel: string;
};

/**
 * Represents the data structure for the AorDetail event in Asterisk.
 *
 * **Synopsis**: Provides information about an AOR (Address of Record).
 *
 * **Syntax**:
 * - `Event: AorDetail`
 * - `AOR: string`
 * - `Contact: string`
 * - `Status: string`
 */
/**
 * Represents the data structure for the AorDetail event in Asterisk.
 *
 * **Synopsis**: Description for AorDetail event.
 *
 * **Syntax**:
 * - `Event: "AorDetail"`
 * - `ObjectType: "aor"`
 * - `ObjectName: string`
 * - `MinimumExpiration: string`
 * - `MaximumExpiration: string`
 * - `DefaultExpiration: string`
 * - `QualifyFrequency: number`
 * - `AuthenticateQualify: string`
 * - `MaxContacts: string`
 * - `RemoveExisting: string`
 * - `RemoveUnavailable: string`
 * - `Mailboxes: string`
 * - `OutboundProxy: string`
 * - `SupportPath: string`
 * - `TotalContacts: string`
 * - `ContactsRegistered: string`
 * - `EndpointName: string`
 */
export type AorDetail = BaseEvent & {
	Event: "AorDetail";
	ObjectType: "aor";
	ObjectName: string;
	MinimumExpiration: string;
	MaximumExpiration: string;
	DefaultExpiration: string;
	QualifyFrequency: number;
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

/**
 * Represents the data structure for the AorList event in Asterisk.
 *
 * **Synopsis**: Provides a list of AORs (Address of Records).
 *
 * **Syntax**:
 * - `Event: AorList`
 * - `ObjectType: string`
 * - `ObjectName: string`
 * - `AOR: string`
 */
/**
 * Represents the data structure for the AorList event in Asterisk.
 *
 * **Synopsis**: Description for AorList event.
 *
 * **Syntax**:
 * - `Event: "AorList"`
 * - `ObjectType: "aor"`
 * - `ObjectName: string`
 * - `MinimumExpiration: string`
 * - `MaximumExpiration: string`
 * - `DefaultExpiration: string`
 * - `QualifyFrequency: number`
 * - `AuthenticateQualify: string`
 * - `MaxContacts: string`
 * - `RemoveExisting: string`
 * - `RemoveUnavailable: string`
 * - `Mailboxes: string`
 * - `OutboundProxy: string`
 * - `SupportPath: string`
 */
export type AorList = BaseEvent & {
	Event: "AorList";
	ObjectType: "aor";
	ObjectName: string;
	MinimumExpiration: string;
	MaximumExpiration: string;
	DefaultExpiration: string;
	QualifyFrequency: number;
	AuthenticateQualify: string;
	MaxContacts: string;
	RemoveExisting: string;
	RemoveUnavailable: string;
	Mailboxes: string;
	OutboundProxy: string;
	SupportPath: string;
};

/**
 * Represents the data structure for the AorListComplete event in Asterisk.
 *
 * **Synopsis**: Indicates that the list of AORs is complete.
 *
 * **Syntax**:
 * - `Event: AorListComplete`
 * - `ListItems: number`
 */
/**
 * Represents the data structure for the AorListComplete event in Asterisk.
 *
 * **Synopsis**: Description for AorListComplete event.
 *
 * **Syntax**:
 * - `Event: "AorListComplete"`
 * - `EventList: string`
 * - `ListItems: number`
 */
export type AorListComplete = BaseEvent & {
	Event: "AorListComplete";
	EventList: string;
	ListItems: number;
};

/**
 * Represents the data structure for the AsyncAGIEnd event in Asterisk.
 *
 * **Synopsis**: Raised when an Async AGI command finishes execution.
 *
 * **Syntax**:
 * - `Event: AsyncAGIEnd`
 * - `Channel: string`
 * - `CommandId: string`
 * - `Result: string`
 */
/**
 * Represents the data structure for the AsyncAGIEnd event in Asterisk.
 *
 * **Synopsis**: Description for AsyncAGIEnd event.
 *
 * **Syntax**:
 * - `Event: "AsyncAGIEnd"`
 * - `Channel: string`
 * - `ChannelState: string`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: string`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 */
export type AsyncAGIEnd = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
};

/**
 * Represents the data structure for the AsyncAGIExec event in Asterisk.
 *
 * **Synopsis**: Raised during the execution of an Async AGI command.
 *
 * **Syntax**:
 * - `Event: AsyncAGIExec`
 * - `Channel: string`
 * - `CommandId: string`
 * - `Command: string`
 */
export type AsyncAGIExec = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	CommandID?: string;
	Result: string;
};

/**
 * Represents the data structure for the AsyncAGIStart event in Asterisk.
 *
 * **Synopsis**: Raised when an Async AGI command starts execution.
 *
 * **Syntax**:
 * - `Event: AsyncAGIStart`
 * - `Channel: string`
 * - `CommandId: string`
 * - `Command: string`
 */
/**
 * Represents the data structure for the AsyncAGIStart event in Asterisk.
 *
 * **Synopsis**: Description for AsyncAGIStart event.
 *
 * **Syntax**:
 * - `Event: "AsyncAGIStart"`
 * - `Channel: string`
 * - `ChannelState: string`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: string`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 * - `Env: string`
 */
export type AsyncAGIStart = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Env: string;
};

/**
 * Represents the data structure for the AttendedTransfer event in Asterisk.
 *
 * **Synopsis**: Raised when an attended transfer is attempted.
 *
 * **Syntax**:
 * - `Event: AttendedTransfer`
 * - `TransfererChannel: string`
 * - `TransfererUniqueid: number | string`
 * - `TransfereeChannel: string`
 * - `TransfereeUniqueid: number | string`
 * - `TransferTargetChannel: string`
 * - `TransferTargetUniqueid: string`
 * - `TransfererContext: string`
 * - `TransfererExten: number | string`
 * - `TransfererPriority: number | number`
 * - `TransferTargetContext: string`
 * - `TransferTargetExten: string`
 * - `TransferTargetPriority: number`
 * - `Result: string`
 */
export type AttendedTransfer = BaseEvent & {
	Event: "AttendedTransfer";
	Result: "Fail" | "Invalid" | "Not Permitted" | "Success";
	OrigTransfererChannel: string;
	OrigTransfererChannelState: number;
	OrigTransfererChannelStateDesc: string;
	OrigTransfererCallerIDNum: number | string;
	OrigTransfererCallerIDName: string;
	OrigTransfererConnectedLineNum: number | string;
	OrigTransfererConnectedLineName: string;
	OrigTransfererLanguage: string;
	OrigTransfererAccountCode: number | string;
	OrigTransfererContext: string;
	OrigTransfererExten: number | string;
	OrigTransfererPriority: number;
	OrigTransfererUniqueid: number | string;
	OrigTransfererLinkedid: number | string;
	OrigBridgeUniqueid: string | number;
	OrigBridgeType: string;
	OrigBridgeTechnology: string;
	OrigBridgeCreator: string;
	OrigBridgeName: string;
	OrigBridgeNumChannels: number;
	OrigBridgeVideoSourceMode: "none" | "talker" | "single";
	OrigBridgeVideoSource?: string;
	SecondTransfererChannel: string;
	SecondTransfererChannelState: number;
	SecondTransfererChannelStateDesc: string;
	SecondTransfererCallerIDNum: number | string;
	SecondTransfererCallerIDName: string;
	SecondTransfererConnectedLineNum: number | string;
	SecondTransfererConnectedLineName: string;
	SecondTransfererLanguage: string;
	SecondTransfererAccountCode: number | string;
	SecondTransfererContext: string;
	SecondTransfererExten: number | string;
	SecondTransfererPriority: number;
	SecondTransfererUniqueid: number | string;
	SecondTransfererLinkedid: number | string;
	SecondBridgeUniqueid: string | number;
	SecondBridgeType: string;
	SecondBridgeTechnology: string;
	SecondBridgeCreator: string;
	SecondBridgeName: string;
	SecondBridgeNumChannels: number;
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
	LocalOneUniqueid: string | number;
	LocalOneLinkedid: number | string;
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
	LocalTwoUniqueid: string | number;
	LocalTwoLinkedid: number | string;
	DestTransfererChannel?: string;
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
	TransfereeCallerIDNum: number | string;
	TransfereeCallerIDName: string;
	TransfereeConnectedLineNum: number | string;
	TransfereeConnectedLineName: string;
	TransfereeLanguage: string;
	TransfereeAccountCode: number | string;
	TransfereeContext: string;
	TransfereeExten: number | string;
	TransfereePriority: number;
	TransfereeUniqueid: number | string;
	TransfereeLinkedid: number | string;
	TransferTargetChannel: string;
	TransferTargetChannelState: number;
	TransferTargetChannelStateDesc: string;
	TransferTargetCallerIDNum: string | number;
	TransferTargetCallerIDName: string;
	TransferTargetConnectedLineName: string;
	TransferTargetAccountCode: string | number;
	TransferTargetContext: string;
	TransferTargetExten: number | string;
	TransferTargetPriority: number;
	TransferTargetUniqueid: string | number;
	TransferTargetLinkedid: string | number;
	IsExternal: string;
};

/**
 * Represents the data structure for the AuthDetail event in Asterisk.
 *
 * **Synopsis**: Provides details about an authentication.
 *
 * **Syntax**:
 * - `Event: AuthDetail`
 * - `ObjectType: string`
 * - `ObjectName: string`
 * - `AuthType: string`
 * - `Password: string`
 * - `Realm: string`
 */
/**
 * Represents the data structure for the AuthDetail event in Asterisk.
 *
 * **Synopsis**: Description for AuthDetail event.
 *
 * **Syntax**:
 * - `Event: "AuthDetail"`
 * - `ObjectType: "auth"`
 * - `ObjectName: string`
 * - `Username: string`
 * - `Password: string`
 * - `Md5Cred: string`
 * - `Realm: string`
 * - `NonceLifetime: string`
 * - `AuthType: string`
 * - `EndpointName: string`
 */
export type AuthDetail = BaseEvent & {
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

/**
 * Represents the data structure for the AuthList event in Asterisk.
 *
 * **Synopsis**: Provides a list of authentications.
 *
 * **Syntax**:
 * - `Event: AuthList`
 * - `ObjectType: string`
 * - `ObjectName: string`
 * - `AuthType: string`
 */
/**
 * Represents the data structure for the AuthList event in Asterisk.
 *
 * **Synopsis**: Description for AuthList event.
 *
 * **Syntax**:
 * - `Event: "AuthList"`
 * - `ObjectType: "auth"`
 * - `ObjectName: string`
 * - `Username: string`
 * - `Md5Cred: string`
 * - `Realm: string`
 * - `AuthType: string`
 * - `Password: string`
 * - `NonceLifetime: string`
 */
export type AuthList = BaseEvent & {
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

/**
 * Represents the data structure for the AuthListComplete event in Asterisk.
 *
 * **Synopsis**: Indicates that the list of authentications is complete.
 *
 * **Syntax**:
 * - `Event: AuthListComplete`
 * - `ListItems: number`
 */
/**
 * Represents the data structure for the AuthListComplete event in Asterisk.
 *
 * **Synopsis**: Description for AuthListComplete event.
 *
 * **Syntax**:
 * - `Event: "AuthListComplete"`
 * - `EventList: string`
 * - `ListItems: number`
 */
export type AuthListComplete = BaseEvent & {
	Event: "AuthListComplete";
	EventList: string;
	ListItems: number;
};

/**
 * Represents the data structure for the AuthMethodNotAllowed event in Asterisk.
 *
 * **Synopsis**: Raised when an authentication method is not allowed.
 *
 * **Syntax**:
 * - `Event: AuthMethodNotAllowed`
 * - `Channel: string`
 * - `Method: string`
 */
export type AuthMethodNotAllowed = BaseEvent & {
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

/**
 * Represents the data structure for the BlindTransfer event in Asterisk.
 *
 * **Synopsis**: Raised when a blind transfer is attempted.
 *
 * **Syntax**:
 * - `Event: BlindTransfer`
 * - `TransfererChannel: string`
 * - `TransfererUniqueid: number | string`
 * - `TransfereeChannel: string`
 * - `TransfereeUniqueid: number | string`
 * - `TransfererContext: string`
 * - `TransfererExten: number | string`
 * - `TransfererPriority: number | number`
 * - `TransfereeContext: string`
 * - `TransfereeExten: number | string`
 * - `TransfereePriority: number`
 * - `Result: string`
 */
export type BlindTransfer = BaseEvent & {
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
	TransfererCallerIDNum: number | string;
	TransfererCallerIDName: string;
	TransfererConnectedLineNum: number | string;
	TransfererConnectedLineName: string;
	TransfererLanguage: string;
	TransfererAccountCode: number | string;
	TransfererContext: string;
	TransfererExten: number | string;
	TransfererPriority: number | string;
	TransfererUniqueid: number | string;
	TransfererLinkedid: number | string;
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
	TransfereeCallerIDNum: number | string;
	TransfereeCallerIDName: string;
	TransfereeConnectedLineNum: number | string;
	TransfereeConnectedLineName: string;
	TransfereeLanguage: string;
	TransfereeAccountCode: number | string;
	TransfereeContext: string;
	TransfereeExten: number | string;
	TransfereePriority: number;
	TransfereeUniqueid: number | string;
	TransfereeLinkedid: number | string;
	BridgeUniqueid: string | number;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: number;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
	IsExternal: "Yes" | "No";
	Context: string;
	Extension: string | number;
};

/**
 * Represents the data structure for the BridgeCreate event in Asterisk.
 *
 * **Synopsis**: Raised when a bridge is created.
 *
 * **Syntax**:
 * - `Event: BridgeCreate`
 * - `BridgeUniqueid: string`
 * - `BridgeType: string`
 * - `BridgeTechnology: string`
 * - `BridgeCreator: string`
 * - `BridgeName: string`
 * - `BridgeNumChannels: number`
 */
export type BridgeCreate = BaseEvent & {
	Event: "BridgeCreate";
	BridgeUniqueid: string | number;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: number;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
};

/**
 * Represents the data structure for the BridgeDestroy event in Asterisk.
 *
 * **Synopsis**: Raised when a bridge is destroyed.
 *
 * **Syntax**:
 * - `Event: BridgeDestroy`
 * - `BridgeUniqueid: string`
 * - `BridgeType: string`
 * - `BridgeTechnology: string`
 * - `BridgeCreator: string`
 * - `BridgeName: string`
 * - `BridgeNumChannels: number`
 */
export type BridgeDestroy = BaseEvent & {
	Event: "BridgeDestroy";
	BridgeUniqueid: string | number;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: number;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
};

/**
 * Represents the data structure for the BridgeEnter event in Asterisk.
 *
 * **Synopsis**: Raised when a channel enters a bridge.
 *
 * **Syntax**:
 * - `Event: BridgeEnter`
 * - `BridgeUniqueid: string`
 * - `BridgeType: string`
 * - `BridgeTechnology: string`
 * - `BridgeCreator: string`
 * - `BridgeName: string`
 * - `Channel: string`
 * - `Uniqueid: string`
 */
export type BridgeEnter = BaseEvent & {
	Event: "BridgeEnter";
	BridgeUniqueid: string | number;
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
	Uniqueid: string | number;
	Linkedid: number | string;
	SwapUniqueid?: string;
};

/**
 * Represents the data structure for the BridgeInfoChannel event in Asterisk.
 *
 * **Synopsis**: Provides information about channels in a bridge.
 *
 * **Syntax**:
 * - `Event: BridgeInfoChannel`
 * - `BridgeUniqueid: string`
 * - `BridgeType: string`
 * - `Channel: string`
 * - `Uniqueid: string`
 */
export type BridgeInfoChannel = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
};

/**
 * Represents the data structure for the BridgeInfoComplete event in Asterisk.
 *
 * **Synopsis**: Indicates that the list of channels in a bridge is complete.
 *
 * **Syntax**:
 * - `Event: BridgeInfoComplete`
 * - `BridgeUniqueid: string`
 * - `ListItems: number`
 */
export type BridgeInfoComplete = BaseEvent & {
	Event: "BridgeInfoComplete";
	BridgeUniqueid: string | number;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: number;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
};

/**
 * Represents the data structure for the BridgeLeave event in Asterisk.
 *
 * **Synopsis**: Raised when a channel leaves a bridge.
 *
 * **Syntax**:
 * - `Event: BridgeLeave`
 * - `BridgeUniqueid: string`
 * - `BridgeType: string`
 * - `BridgeTechnology: string`
 * - `BridgeCreator: string`
 * - `BridgeName: string`
 * - `Channel: string`
 * - `Uniqueid: string`
 */
export type BridgeLeave = BaseEvent & {
	Event: "BridgeLeave";
	BridgeUniqueid: string | number;
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
	Uniqueid: string | number;
	Linkedid: number | string;
};

/**
 * Represents the data structure for the BridgeMerge event in Asterisk.
 *
 * **Synopsis**: Raised when two bridges are merged.
 *
 * **Syntax**:
 * - `Event: BridgeMerge`
 * - `BridgeUniqueid: string`
 * - `BridgeType: string`
 * - `BridgeTechnology: string`
 * - `BridgeCreator: string`
 * - `BridgeName: string`
 * - `BridgeNumChannels: number`
 */
export type BridgeMerge = BaseEvent & {
	Event: "BridgeMerge";
	ToBridgeUniqueid: string | number;
	ToBridgeType: string;
	ToBridgeTechnology: string;
	ToBridgeCreator: string;
	ToBridgeName: string;
	ToBridgeNumChannels: number;
	ToBridgeVideoSourceMode: "none" | "talker" | "single";
	ToBridgeVideoSource?: string;
	FromBridgeUniqueid: string | number;
	FromBridgeType: string;
	FromBridgeTechnology: string;
	FromBridgeCreator: string;
	FromBridgeName: string;
	FromBridgeNumChannels: number;
	FromBridgeVideoSourceMode: "none" | "talker" | "single";
	FromBridgeVideoSource?: string;
};

/**
 * Represents the data structure for the BridgeVideoSourceUpdate event in Asterisk.
 *
 * **Synopsis**: Raised when the video source for a bridge is updated.
 *
 * **Syntax**:
 * - `Event: BridgeVideoSourceUpdate`
 * - `BridgeUniqueid: string`
 * - `BridgeType: string`
 * - `VideoSourceChannel: string`
 * - `VideoSourceUniqueid: string`
 */
export type BridgeVideoSourceUpdate = BaseEvent & {
	Event: "BridgeVideoSourceUpdate";
	BridgeUniqueid: string | number;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: number;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
	BridgePreviousVideoSource: string;
};

/**
 * Represents the data structure for the CEL event in Asterisk.
 *
 * **Synopsis**: Raised when a Channel Event Logging (CEL) event occurs.
 *
 * **Syntax**:
 * - `Event: CEL`
 * - `EventName: string`
 * - `AccountCode: string`
 * - `CallerIDnum: string`
 * - `CallerIDname: string`
 * - `CallerIDani: string`
 * - `CallerIDrdnis: string`
 * - `CallerIDdnid: string`
 * - `Exten: string`
 * - `Context: string`
 * - `Application: string`
 * - `AppData: string`
 * - `EventTime: string`
 * - `AMAFlags: string`
 * - `UniqueID: string`
 * - `LinkedID: string`
 * - `Userfield: string`
 * - `Peer: string`
 */
export type CEL = BaseEvent & {
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
	UniqueID: string | number;
	LinkedID: number | string;
	UserField: string;
	Peer: string;
	PeerAccount: string;
	Extra: string;
};

/**
 * Represents the data structure for the Cdr event in Asterisk.
 *
 * **Synopsis**: Raised when a Call Detail Record (CDR) is generated.
 *
 * **Syntax**:
 * - `Event: Cdr`
 * - `AccountCode: string`
 * - `Source: string`
 * - `Destination: string`
 * - `DestinationContext: string`
 * - `CallerIDnum: string`
 * - `CallerIDname: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Channel: string`
 * - `DestinationChannel: string`
 * - `LastApplication: string`
 * - `LastData: string`
 * - `StartTime: string`
 * - `AnswerTime: string`
 * - `EndTime: string`
 * - `Duration: string`
 * - `BillableSeconds: string`
 * - `Disposition: string`
 * - `AMAFlags: string`
 * - `UniqueID: string`
 * - `Userfield: string`
 * - `PeerAccount: string`
 */
/**
 * Represents the data structure for the Cdr event in Asterisk.
 *
 * **Synopsis**: Description for Cdr event.
 *
 * **Syntax**:
 * - `Event: "Cdr"`
 * - `AccountCode: string`
 * - `Source: string`
 * - `Destination: string`
 * - `DestinationContext: string`
 * - `CallerID: string`
 * - `Channel: string`
 * - `DestinationChannel: string`
 * - `LastApplication: string`
 * - `LastData: string`
 * - `StartTime: string`
 * - `AnswerTime: string`
 * - `EndTime: string`
 * - `Duration: string`
 * - `BillableSeconds: string`
 * - `Disposition: "NO ANSWER" | "FAILED" | "BUSY" | "ANSWERED" | "CONGESTION"`
 * - `AMAFlags: "OMIT" | "BILLING" | "DOCUMENTATION"`
 * - `UniqueID: string`
 * - `UserField: string`
 */
export type Cdr = BaseEvent & {
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
	UniqueID: string | number;
	UserField: string;
};

/**
 * Represents the data structure for the ChallengeResponseFailed event in Asterisk.
 *
 * **Synopsis**: Raised when a challenge response fails.
 *
 * **Syntax**:
 * - `Event: ChallengeResponseFailed`
 * - `Channel: string`
 * - `Peer: string`
 * - `Method: string`
 */
export type ChallengeResponseFailed = BaseEvent & {
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

/**
 * Represents the data structure for the ChallengeSent event in Asterisk.
 *
 * **Synopsis**: Raised when a challenge is sent.
 *
 * **Syntax**:
 * - `Event: ChallengeSent`
 * - `Channel: string`
 * - `Peer: string`
 * - `Method: string`
 */
export type ChallengeSent = BaseEvent & {
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

export type ChanSpyStart = BaseEvent & {
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
	SpyerUniqueid: string | number;
	SpyerLinkedid: number | string;
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
	SpyeeUniqueid: string | number;
	SpyeeLinkedid: number | string;
};

export type ChanSpyStop = BaseEvent & {
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
	SpyerUniqueid: string | number;
	SpyerLinkedid: number | string;
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
	SpyeeUniqueid: string | number;
	SpyeeLinkedid: number | string;
};

export type ChannelTalkingStart = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
};

export type ChannelTalkingStop = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Duration: string;
};

export type ConfbridgeEnd = BaseEvent & {
	Event: "ConfbridgeEnd";
	Conference: string;
	BridgeUniqueid: string | number;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: string;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
};

export type ConfbridgeJoin = BaseEvent & {
	Event: "ConfbridgeJoin";
	Conference: string;
	BridgeUniqueid: string | number;
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Admin: "Yes" | "No";
	Muted: "Yes" | "No";
};

export type ConfbridgeLeave = BaseEvent & {
	Event: "ConfbridgeLeave";
	Conference: string;
	BridgeUniqueid: string | number;
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Admin: "Yes" | "No";
};

export type ConfbridgeList = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
};

/**
 * Represents the data structure for the ConfbridgeListRooms event in Asterisk.
 *
 * **Synopsis**: Description for ConfbridgeListRooms event.
 *
 * **Syntax**:
 * - `Event: "ConfbridgeListRooms"`
 * - `Conference: string`
 * - `Parties: string`
 * - `Marked: string`
 * - `Locked: "Yes" | "No"`
 * - `Muted: "Yes" | "No"`
 */
export type ConfbridgeListRooms = BaseEvent & {
	Event: "ConfbridgeListRooms";
	Conference: string;
	Parties: string;
	Marked: string;
	Locked: "Yes" | "No";
	Muted: "Yes" | "No";
};

export type ConfbridgeMute = BaseEvent & {
	Event: "ConfbridgeMute";
	Conference: string;
	BridgeUniqueid: string | number;
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Admin: "Yes" | "No";
};

export type ConfbridgeRecord = BaseEvent & {
	Event: "ConfbridgeRecord";
	Conference: string;
	BridgeUniqueid: string | number;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: string;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
};

export type ConfbridgeStart = BaseEvent & {
	Event: "ConfbridgeStart";
	Conference: string;
	BridgeUniqueid: string | number;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: string;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
};

export type ConfbridgeStopRecord = BaseEvent & {
	Event: "ConfbridgeStopRecord";
	Conference: string;
	BridgeUniqueid: string | number;
	BridgeType: string;
	BridgeTechnology: string;
	BridgeCreator: string;
	BridgeName: string;
	BridgeNumChannels: string;
	BridgeVideoSourceMode: "none" | "talker" | "single";
	BridgeVideoSource?: string;
};

export type ConfbridgeTalking = BaseEvent & {
	Event: "ConfbridgeTalking";
	Conference: string;
	BridgeUniqueid: string | number;
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
	Uniqueid: string | number;
	Linkedid: number | string;
	TalkingStatus: "on" | "off";
	Admin: "Yes" | "No";
};

export type ConfbridgeUnmute = BaseEvent & {
	Event: "ConfbridgeUnmute";
	Conference: string;
	BridgeUniqueid: string | number;
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Admin: "Yes" | "No";
};

export type ContactList = BaseEvent & {
	Event: "ContactList";
	ObjectType: "contact";
	ObjectName: string;
	ViaAddr?: string;
	ViaPort?: number;
	QualifyTimeout: number;
	CallId?: string;
	RegServer: number;
	PruneOnBoot: boolean;
	Path: string;
	Endpoint: string | number;
	AuthenticateQualify: boolean;
	Uri: string;
	QualifyFrequency: number;
	UserAgent: string;
	ExpirationTime: number;
	OutboundProxy: string;
	Status: "Reachable" | "Unreachable" | "NonQualified" | "Unknown";
	RoundtripUsec: number;
};

/**
 * Represents the data structure for the ContactListComplete event in Asterisk.
 *
 * **Synopsis**: Description for ContactListComplete event.
 *
 * **Syntax**:
 * - `Event: "ContactListComplete"`
 * - `EventList: string`
 * - `ListItems: number`
 */
export type ContactListComplete = BaseEvent & {
	Event: "ContactListComplete";
	EventList: string;
	ListItems: number;
};

export type ContactStatus = BaseEvent & {
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
	RoundtripUsec: number;
};

export type ContactStatusDetail = BaseEvent & {
	Event: "ContactStatusDetail";
	AOR: string;
	URI: string;
	Status: "Reachable" | "Unreachable" | "NonQualified" | "Unknown";
	RoundtripUsec: number;
	EndpointName: string;
	UserAgent: string;
	RegExpire: string;
	ViaAddress?: string;
	CallID?: string;
	ID: string;
	AuthenticateQualify: boolean;
	OutboundProxy: string;
	Path: string;
	QualifyFrequency: number;
	QualifyTimeout: number;
};

export type CoreShowChannel = BaseEvent & {
	Event: "CoreShowChannel";
	ActionID: number;
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
	Uniqueid: string | number;
	Linkedid: number | string;
	BridgeId?: string;
	Application: string;
	ApplicationData: string;
	Duration: string;
};

/**
 * Represents the data structure for the CoreShowChannelMapComplete event in Asterisk.
 *
 * **Synopsis**: Description for CoreShowChannelMapComplete event.
 *
 * **Syntax**:
 * - `Event: "CoreShowChannelMapComplete"`
 * - `EventList: string`
 * - `ListItems: number`
 */
export type CoreShowChannelMapComplete = BaseEvent & {
	Event: "CoreShowChannelMapComplete";
	EventList: string;
	ListItems: number;
};

/**
 * Represents the data structure for the CoreShowChannelsComplete event in Asterisk.
 *
 * **Synopsis**: Description for CoreShowChannelsComplete event.
 *
 * **Syntax**:
 * - `Event: "CoreShowChannelsComplete"`
 * - `ActionID: number`
 * - `EventList: string`
 * - `ListItems: number`
 */
export type CoreShowChannelsComplete = BaseEvent & {
	Event: "CoreShowChannelsComplete";
	ActionID: number;
	EventList: string;
	ListItems: number;
};

export type DAHDIChannel = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	DAHDIGroup: string;
	DAHDISpan: string;
	DAHDIChannel: string;
};

/**
 * Represents the data structure for the DNDState event in Asterisk.
 *
 * **Synopsis**: Description for DNDState event.
 *
 * **Syntax**:
 * - `Event: "DNDState"`
 * - `DAHDIChannel: string`
 * - `Status: "enabled" | "disabled"`
 */
export type DNDState = BaseEvent & {
	Event: "DNDState";
	DAHDIChannel: string;
	Status: "enabled" | "disabled";
};

export type DTMFBegin = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Digit: string; // Assuming string here because DTMF digits include characters like # and *
	Direction: "Received" | "Sent";
};

export type DTMFEnd = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Digit: string;
	DurationMs: string;
	Direction: "Received" | "Sent";
};

/**
 * Represents the data structure for the DeadlockStart event in Asterisk.
 *
 * **Synopsis**: Description for DeadlockStart event.
 *
 * **Syntax**:
 * - `Event: "DeadlockStart"`
 * - `Mutex: string`
 */
export type DeadlockStart = BaseEvent & {
	Event: "DeadlockStart";
	Mutex: string;
};

/**
 * Represents the data structure for the DeviceStateChange event in Asterisk.
 *
 * **Synopsis**: Description for DeviceStateChange event.
 *
 * **Syntax**:
 * - `Event: "DeviceStateChange"`
 * - `Device: string`
 * - `State: string`
 */
export type DeviceStateChange = BaseEvent & {
	Event: "DeviceStateChange";
	Device: string;
	State: string;
};

/**
 * Represents the data structure for the DeviceStateListComplete event in Asterisk.
 *
 * **Synopsis**: Description for DeviceStateListComplete event.
 *
 * **Syntax**:
 * - `Event: "DeviceStateListComplete"`
 * - `EventList: string`
 * - `ListItems: number`
 */
export type DeviceStateListComplete = BaseEvent & {
	Event: "DeviceStateListComplete";
	EventList: string;
	ListItems: number;
};

export type DialBegin = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
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
	DestUniqueid: string | number;
	DestLinkedid: number | string;
	DialString: string;
};

export type DialEnd = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
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
	DestUniqueid: string | number;
	DestLinkedid: number | string;
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

export type DialState = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
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
	DestUniqueid: string | number;
	DestLinkedid: number | string;
	DialStatus: "RINGING" | "PROCEEDING" | "PROGRESS";
	Forward?: string;
};

export type EndpointDetail = BaseEvent & {
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

/**
 * Represents the data structure for the EndpointDetailComplete event in Asterisk.
 *
 * **Synopsis**: Description for EndpointDetailComplete event.
 *
 * **Syntax**:
 * - `Event: "EndpointDetailComplete"`
 * - `EventList: string`
 * - `ListItems: number`
 */
export type EndpointDetailComplete = BaseEvent & {
	Event: "EndpointDetailComplete";
	EventList: string;
	ListItems: number;
};

/**
 * Represents the data structure for the EndpointList event in Asterisk.
 *
 * **Synopsis**: Description for EndpointList event.
 *
 * **Syntax**:
 * - `Event: "EndpointList"`
 * - `ObjectType: "endpoint"`
 * - `ObjectName: string`
 * - `Transport: string`
 * - `Aor: string`
 * - `Auths: string`
 * - `OutboundAuths: string`
 * - `DeviceState: string`
 * - `ActiveChannels: string`
 */
export type EndpointList = BaseEvent & {
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

/**
 * Represents the data structure for the EndpointListComplete event in Asterisk.
 *
 * **Synopsis**: Description for EndpointListComplete event.
 *
 * **Syntax**:
 * - `Event: "EndpointListComplete"`
 * - `EventList: string`
 * - `ListItems: number`
 */
export type EndpointListComplete = BaseEvent & {
	Event: "EndpointListComplete";
	EventList: string;
	ListItems: number;
};

/**
 * Represents the data structure for the ExtensionStateListComplete event in Asterisk.
 *
 * **Synopsis**: Description for ExtensionStateListComplete event.
 *
 * **Syntax**:
 * - `Event: "ExtensionStateListComplete"`
 * - `EventList: string`
 * - `ListItems: number`
 */
export type ExtensionStateListComplete = BaseEvent & {
	Event: "ExtensionStateListComplete";
	EventList: string;
	ListItems: number;
};

export type ExtensionStatus = BaseEvent & {
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

export type FAXSession = BaseEvent & {
	Event: "FAXSession";
	ActionID?: number;
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

export type FAXSessionsComplete = BaseEvent & {
	Event: "FAXSessionsComplete";
	ActionID?: number;
	Total: string;
};

export type FAXSessionsEntry = BaseEvent & {
	Event: "FAXSessionsEntry";
	ActionID?: number;
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

export type FAXStats = BaseEvent & {
	Event: "FAXStats";
	ActionID?: number;
	CurrentSessions: string;
	ReservedSessions: string;
	TransmitAttempts: string;
	ReceiveAttempts: string;
	CompletedFAXes: string;
	FailedFAXes: string;
};

export type FAXStatus = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Operation: "gateway" | "receive" | "send";
	Status: string;
	LocalStationID: string;
	FileName: string;
};

export type FailedACL = BaseEvent & {
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

export type Flash = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
};

/**
 * Represents the data structure for the FullyBooted event in Asterisk.
 *
 * **Synopsis**: Description for FullyBooted event.
 *
 * **Syntax**:
 * - `Event: "FullyBooted"`
 * - `Status: string`
 * - `Uptime: string`
 * - `LastReload: string`
 */
export type FullyBooted = BaseEvent & {
	Event: "FullyBooted";
	Status: string;
	Uptime: string;
	LastReload: string;
};

export type Hangup = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Cause: string;
	"Cause-txt": string;
};

export type HangupHandlerPop = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Handler: string;
};

export type HangupHandlerPush = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Handler: string;
};

export type HangupHandlerRun = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Handler: string;
};

export type HangupRequest = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Cause: string;
};

export type Hold = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	MusicClass: string;
};

/**
 * Represents the data structure for the IdentifyDetail event in Asterisk.
 *
 * **Synopsis**: Description for IdentifyDetail event.
 *
 * **Syntax**:
 * - `Event: "IdentifyDetail"`
 * - `ObjectType: "identify"`
 * - `ObjectName: string`
 * - `Endpoint: string | number`
 * - `SrvLookups: string`
 * - `Match: string`
 * - `MatchHeader: string`
 * - `EndpointName: string`
 */
export type IdentifyDetail = BaseEvent & {
	Event: "IdentifyDetail";
	ObjectType: "identify";
	ObjectName: string;
	Endpoint: string | number;
	SrvLookups: string;
	Match: string;
	MatchHeader: string;
	EndpointName: string;
};

export type InvalidAccountID = BaseEvent & {
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

export type InvalidPassword = BaseEvent & {
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

export type InvalidTransport = BaseEvent & {
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

/**
 * Represents the data structure for the Load event in Asterisk.
 *
 * **Synopsis**: Description for Load event.
 *
 * **Syntax**:
 * - `Event: "Load"`
 * - `Module: string`
 * - `Status: "Failure" | "Success" | "Decline"`
 */
export type Load = BaseEvent & {
	Event: "Load";
	Module: string;
	Status: "Failure" | "Success" | "Decline";
};

export type LoadAverageLimit = BaseEvent & {
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

export type LocalBridge = BaseEvent & {
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
	LocalOneUniqueid: string | number;
	LocalOneLinkedid: number | string;
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
	LocalTwoUniqueid: string | number;
	LocalTwoLinkedid: number | string;
	Context: string;
	Exten: string;
	LocalOptimization: "Yes" | "No";
};

export type LocalOptimizationBegin = BaseEvent & {
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
	LocalOneUniqueid: string | number;
	LocalOneLinkedid: number | string;
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
	LocalTwoUniqueid: string | number;
	LocalTwoLinkedid: number | string;
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
	SourceUniqueid: string | number;
	SourceLinkedid: number | string;
	DestUniqueId: string | number;
	Id: string;
};

export type LocalOptimizationEnd = BaseEvent & {
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
	LocalOneUniqueid: string | number;
	LocalOneLinkedid: number | string;
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
	LocalTwoUniqueid: string | number;
	LocalTwoLinkedid: number | string;
	Success: string;
	Id: string;
};

export type LogChannel = BaseEvent & {
	Event: "LogChannel";
	Channel: string;
	Enabled?: string;
	Reason?: string;
};

export type MCID = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
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

export type MWIGet = BaseEvent & {
	Event: "MWIGet";
	ActionID?: number;
	Mailbox: string;
	OldMessages: string;
	NewMessages: string;
};

export type MWIGetComplete = BaseEvent & {
	Event: "MWIGetComplete";
	ActionID?: number;
	EventList: string;
	ListItems: number;
};

/**
 * Represents the data structure for the MeetmeEnd event in Asterisk.
 *
 * **Synopsis**: Description for MeetmeEnd event.
 *
 * **Syntax**:
 * - `Event: "MeetmeEnd"`
 * - `Meetme: string`
 */
export type MeetmeEnd = BaseEvent & {
	Event: "MeetmeEnd";
	Meetme: string;
};

export type MeetmeJoin = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
};

export type MeetmeLeave = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Duration: string;
};

/**
 * Represents the data structure for the MeetmeList event in Asterisk.
 *
 * **Synopsis**: Description for MeetmeList event.
 *
 * **Syntax**:
 * - `Event: "MeetmeList"`
 * - `Conference: string`
 * - `UserNumber: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Channel: string`
 * - `Admin: string`
 * - `Role: "Listen only" | "Talk only" | "Talk and listen"`
 * - `MarkedUser: string`
 * - `Muted: string`
 * - `Talking: string`
 */
export type MeetmeList = BaseEvent & {
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

/**
 * Represents the data structure for the MeetmeListRooms event in Asterisk.
 *
 * **Synopsis**: Description for MeetmeListRooms event.
 *
 * **Syntax**:
 * - `Event: "MeetmeListRooms"`
 * - `Conference: string`
 * - `Parties: string`
 * - `Marked: string`
 * - `Activity: string`
 * - `Creation: "Dynamic" | "Static"`
 * - `Locked: string`
 */
export type MeetmeListRooms = BaseEvent & {
	Event: "MeetmeListRooms";
	Conference: string;
	Parties: string;
	Marked: string;
	Activity: string;
	Creation: "Dynamic" | "Static";
	Locked: string;
};

export type MeetmeMute = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Duration: string;
	Status: "on" | "off";
};

export type MeetmeTalkRequest = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Duration: string;
	Status: "on" | "off";
};

export type MeetmeTalking = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Duration: string;
	Status: "on" | "off";
};

export type MemoryLimit = BaseEvent & {
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

export type MessageWaiting = BaseEvent & {
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

export type MiniVoiceMail = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Action: "SentNotification";
	Mailbox: string;
	Counter: string;
};

export type MixMonitorMute = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Direction: "read" | "write" | "both";
	State: 1 | 0; // 1 when muted, 0 when unmuted
};

export type MixMonitorStart = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
};

export type MixMonitorStop = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
};

export type MonitorStart = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
};

export type MonitorStop = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
};

export type MusicOnHoldStart = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Class: string;
};

export type MusicOnHoldStop = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
};

export type NewAccountCode = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	OldAccountCode: string;
};

export type NewCallerid = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	"CID-CallingPres": string;
};

export type NewConnectedLine = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
};

export type NewExten = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Extension: string | number;
	Application: string;
	AppData: string;
};

export type Newchannel = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
};

export type Newstate = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
};

export type OriginateResponse = BaseEvent & {
	Event: "OriginateResponse";
	ActionID?: number;
	Response: "Failure" | "Success";
	Channel: string;
	Context: string;
	Exten: string;
	Application: string;
	Data: string;
	Reason: string;
	Uniqueid: string | number;
	CallerIDNum: string;
	CallerIDName: string;
};

export type ParkedCall = BaseEvent & {
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
	ParkeeUniqueid: string | number;
	ParkeeLinkedid: number | string;
	ParkerDialString: string;
	Parkinglot: string;
	ParkingSpace: string;
	ParkingTimeout: string;
	ParkingDuration: string;
};

export type ParkedCallGiveUp = BaseEvent & {
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
	ParkeeUniqueid: string | number;
	ParkeeLinkedid: number | string;
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
	ParkerUniqueid: string | number;
	ParkerLinkedid: number | string;
	ParkerDialString: string;
	Parkinglot: string;
	ParkingSpace: string;
	ParkingTimeout: string;
	ParkingDuration: string;
};

export type ParkedCallSwap = BaseEvent & {
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
	ParkeeUniqueid: string | number;
	ParkeeLinkedid: number | string;
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
	ParkerUniqueid: string | number;
	ParkerLinkedid: number | string;
	ParkerDialString: string;
	Parkinglot: string;
	ParkingSpace: string;
	ParkingTimeout: string;
	ParkingDuration: string;
};

export type ParkedCallTimeOut = BaseEvent & {
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
	ParkeeUniqueid: string | number;
	ParkeeLinkedid: number | string;
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
	ParkerUniqueid: string | number;
	ParkerLinkedid: number | string;
	ParkerDialString: string;
	Parkinglot: string;
	ParkingSpace: string;
	ParkingTimeout: string;
	ParkingDuration: string;
};

/**
 * Represents the data structure for the PeerStatus event in Asterisk.
 *
 * **Synopsis**: Description for PeerStatus event.
 *
 * **Syntax**:
 * - `Event: "PeerStatus"`
 * - `ChannelType: string`
 * - `Peer: string`
 * - `PeerStatus: "Unknown" | "Registered" | "Unregistered" | "Rejected" | "Lagged"`
 * - `Cause: string`
 * - `Address: string`
 * - `Port: string`
 * - `Time: string`
 */
export type PeerStatus = BaseEvent & {
	Event: "PeerStatus";
	ChannelType: string;
	Peer: string;
	PeerStatus: "Unknown" | "Registered" | "Unregistered" | "Rejected" | "Lagged";
	Cause: string;
	Address: string;
	Port: string;
	Time: string;
};

export type Pickup = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
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
	TargetUniqueid: string | number;
	TargetLinkedid: number | string;
};

/**
 * Represents the data structure for the PresenceStateChange event in Asterisk.
 *
 * **Synopsis**: Description for PresenceStateChange event.
 *
 * **Syntax**:
 * - `Event: "PresenceStateChange"`
 * - `Presentity: string`
 * - `Status: string`
 * - `Subtype: string`
 * - `Message: string`
 */
export type PresenceStateChange = BaseEvent & {
	Event: "PresenceStateChange";
	Presentity: string;
	Status: string;
	Subtype: string;
	Message: string;
};

/**
 * Represents the data structure for the PresenceStateListComplete event in Asterisk.
 *
 * **Synopsis**: Description for PresenceStateListComplete event.
 *
 * **Syntax**:
 * - `Event: "PresenceStateListComplete"`
 * - `EventList: string`
 * - `ListItems: number`
 */
export type PresenceStateListComplete = BaseEvent & {
	Event: "PresenceStateListComplete";
	EventList: string;
	ListItems: number;
};

/**
 * Represents the data structure for the PresenceStatus event in Asterisk.
 *
 * **Synopsis**: Description for PresenceStatus event.
 *
 * **Syntax**:
 * - `Event: "PresenceStatus"`
 * - `Exten: string`
 * - `Context: string`
 * - `Hint: string`
 * - `Status: string`
 * - `Subtype: string`
 * - `Message: string`
 */
export type PresenceStatus = BaseEvent & {
	Event: "PresenceStatus";
	Exten: string;
	Context: string;
	Hint: string;
	Status: string;
	Subtype: string;
	Message: string;
};

export type QueueCallerAbandon = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Queue: string;
	Position: string;
	OriginalPosition: string;
	HoldTime: number;
};

export type QueueCallerJoin = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Queue: string;
	Position: string;
	Count: string;
};

export type QueueCallerLeave = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Queue: string;
	Count: string;
	Position: string;
};

/**
 * Represents the data structure for the QueueEntry event in Asterisk.
 *
 * **Synopsis**: Description for QueueEntry event.
 *
 * **Syntax**:
 * - `Event: "QueueEntry"`
 * - `Queue: string`
 * - `Position: string`
 * - `Channel: string`
 * - `Uniqueid: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Wait: string`
 * - `Priority: string`
 */
export type QueueEntry = BaseEvent & {
	Event: "QueueEntry";
	Queue: string;
	Position: string;
	Channel: string;
	Uniqueid: string | number;
	CallerIDNum: string;
	CallerIDName: string;
	ConnectedLineNum: string;
	ConnectedLineName: string;
	Wait: string;
	Priority: string;
};

export type QueueSummary = BaseEvent & {
	Event: "QueueSummary";
	Queue: string;
	LoggedIn: number;
	Available: number;
	Callers: number;
	HoldTime: number;
	TalkTime: number;
	LongestHoldTime: number;
	ActionID: number;
	TimeEvent: number;
};

export type QueueSummaryComplete = BaseEvent & {
	Event: "QueueSummaryComplete";
	ActionID: number;
	EventList: string;
	ListItems: number;
};

export type QueueMember = BaseEvent & {
	Event: "QueueMember";
	Queue: string;
	Name: string;
	Location: string;
	StateInterface: string;
	Membership: "dynamic" | "realtime" | "static";
	Penalty: number;
	CallsTaken: number;
	LastCall: number;
	LastPause: number;
	LoginTime: number;
	InCall: number;
	Status: number;
	Paused: number;
	PausedReason: number;
	Wrapuptime: number;
	ActionID: number;
};

export type QueueMemberAdded = BaseEvent & {
	Event: "QueueMemberAdded";
	Queue: string;
	MemberName: string;
	Interface: string;
	StateInterface: string;
	Membership: "dynamic" | "realtime" | "static";
	Penalty: number;
	CallsTaken: string;
	LastCall: number;
	LastPause: number;
	LoginTime: number;
	InCall: 0 | 1;
	Status: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
	Paused: 0 | 1;
	PausedReason?: string;
	Ringinuse: 0 | 1;
	Wrapuptime: number;
};

export type QueueMemberPause = BaseEvent & {
	Event: "QueueMemberPause";
	Queue: string;
	MemberName: string;
	Interface: string;
	StateInterface: string;
	Membership: "dynamic" | "realtime" | "static";
	Penalty: number;
	CallsTaken: string;
	LastCall: number;
	LastPause: number;
	LoginTime: number;
	InCall: 0 | 1;
	Status: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
	Paused: 0 | 1;
	PausedReason?: string;
	Ringinuse: 0 | 1;
	Wrapuptime: number;
};

export type QueueMemberPenalty = BaseEvent & {
	Event: "QueueMemberPenalty";
	Queue: string;
	MemberName: string;
	Interface: string;
	StateInterface: string;
	Membership: "dynamic" | "realtime" | "static";
	Penalty: number;
	CallsTaken: string;
	LastCall: number;
	LastPause: number;
	LoginTime: number;
	InCall: 0 | 1;
	Status: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
	Paused: 0 | 1;
	PausedReason?: string;
	Ringinuse: 0 | 1;
	Wrapuptime: number;
};

export type QueueMemberRemoved = BaseEvent & {
	Event: "QueueMemberRemoved";
	Queue: string;
	MemberName: string;
	Interface: string;
	StateInterface: string;
	Membership: "dynamic" | "realtime" | "static";
	Penalty: number;
	CallsTaken: string;
	LastCall: number;
	LastPause: number;
	LoginTime: number;
	InCall: 0 | 1;
	Status: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
	Paused: 0 | 1;
	PausedReason?: string;
	Ringinuse: 0 | 1;
	Wrapuptime: number;
};

export type QueueMemberRinginuse = BaseEvent & {
	Event: "QueueMemberRinginuse";
	Queue: string;
	MemberName: string;
	Interface: string;
	StateInterface: string;
	Membership: "dynamic" | "realtime" | "static";
	Penalty: number;
	CallsTaken: string;
	LastCall: number;
	LastPause: number;
	LoginTime: number;
	InCall: 0 | 1;
	Status: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
	Paused: 0 | 1;
	PausedReason?: string;
	Ringinuse: 0 | 1;
	Wrapuptime: number;
};

export type QueueMemberStatus = BaseEvent & {
	Event: "QueueMemberStatus";
	Queue: string;
	MemberName: string;
	Interface: string;
	StateInterface: string;
	Membership: "dynamic" | "realtime" | "static";
	Penalty: number;
	CallsTaken: string;
	LastCall: number;
	LastPause: number;
	LoginTime: number;
	InCall: 0 | 1;
	Status: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
	Paused: 0 | 1;
	PausedReason?: string;
	Ringinuse: 0 | 1;
	Wrapuptime: number;
};

/**
 * Represents the data structure for the QueueParams event in Asterisk.
 *
 * **Synopsis**: Description for QueueParams event.
 *
 * **Syntax**:
 * - `Event: "QueueParams"`
 * - `Max: string`
 * - `Strategy: string`
 * - `Calls: string`
 * - `Holdtime: string`
 * - `TalkTime: string`
 * - `Completed: string`
 * - `Abandoned: string`
 * - `ServiceLevelPerf: string`
 * - `ServiceLevelPerf2: string`
 */
export type QueueParams = BaseEvent & {
	Event: "QueueParams";
	Max: string;
	Strategy: string;
	Calls: number;
	Holdtime: number;
	TalkTime: number;
	Completed: number;
	Abandoned: number;
	ServiceLevelPerf: number;
	ServiceLevelPerf2: number;
};

export type RTCPReceived = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
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

export type RTCPSent = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
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

/**
 * Represents the data structure for the ReceiveFAX event in Asterisk.
 *
 * **Synopsis**: Description for ReceiveFAX event.
 *
 * **Syntax**:
 * - `Event: "ReceiveFAX"`
 * - `Channel: string`
 * - `ChannelState: string`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: string`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 * - `LocalStationID: string`
 * - `RemoteStationID: string`
 * - `PagesTransferred: string`
 * - `Resolution: string`
 * - `TransferRate: string`
 * - `FileName: string`
 */
export type ReceiveFAX = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	LocalStationID: string;
	RemoteStationID: string;
	PagesTransferred: string;
	Resolution: string;
	TransferRate: string;
	FileName: string;
};

export type Registry = BaseEvent & {
	Event: "Registry";
	ChannelType: string;
	Username: string;
	Domain: string;
	Status: "Registered" | "Unregistered" | "Rejected" | "Failed";
	Cause?: string;
};

/**
 * Represents the data structure for the Reload event in Asterisk.
 *
 * **Synopsis**: Description for Reload event.
 *
 * **Syntax**:
 * - `Event: "Reload"`
 * - `Module: string`
 * - `Status: "0" | "1" | "2" | "3" | "4" | "5" | "6"`
 */
export type Reload = BaseEvent & {
	Event: "Reload";
	Module: string;
	Status: "0" | "1" | "2" | "3" | "4" | "5" | "6";
};

/**
 * Represents the data structure for the Rename event in Asterisk.
 *
 * **Synopsis**: Description for Rename event.
 *
 * **Syntax**:
 * - `Event: "Rename"`
 * - `Channel: string`
 * - `ChannelState: string`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: string`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 */
export type Rename = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
};

export type RequestBadFormat = BaseEvent & {
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

export type RequestNotAllowed = BaseEvent & {
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

export type RequestNotSupported = BaseEvent & {
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

export type SIPQualifyPeerDone = BaseEvent & {
	Event: "SIPQualifyPeerDone";
	Peer: string;
	ActionID?: number;
};

/**
 * Represents the data structure for the SendFAX event in Asterisk.
 *
 * **Synopsis**: Description for SendFAX event.
 *
 * **Syntax**:
 * - `Event: "SendFAX"`
 * - `Channel: string`
 * - `ChannelState: string`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: string`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 * - `LocalStationID: string`
 * - `RemoteStationID: string`
 * - `PagesTransferred: string`
 * - `Resolution: string`
 * - `TransferRate: string`
 * - `FileName: string`
 */
export type SendFAX = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	LocalStationID: string;
	RemoteStationID: string;
	PagesTransferred: string;
	Resolution: string;
	TransferRate: string;
	FileName: string;
};

export type SessionLimit = BaseEvent & {
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

/**
 * Represents the data structure for the SessionTimeout event in Asterisk.
 *
 * **Synopsis**: Description for SessionTimeout event.
 *
 * **Syntax**:
 * - `Event: "SessionTimeout"`
 * - `Channel: string`
 * - `ChannelState: string`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: string`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 * - `Source: "RTPTimeout" | "SIPSessionTimer"`
 */
export type SessionTimeout = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Source: "RTPTimeout" | "SIPSessionTimer";
};

/**
 * Represents the data structure for the Shutdown event in Asterisk.
 *
 * **Synopsis**: Description for Shutdown event.
 *
 * **Syntax**:
 * - `Event: "Shutdown"`
 * - `Shutdown: "Uncleanly" | "Cleanly"`
 * - `Restart: "True" | "False"`
 */
export type Shutdown = BaseEvent & {
	Event: "Shutdown";
	Shutdown: "Uncleanly" | "Cleanly";
	Restart: "True" | "False";
};

/**
 * Represents the data structure for the SoftHangupRequest event in Asterisk.
 *
 * **Synopsis**: Description for SoftHangupRequest event.
 *
 * **Syntax**:
 * - `Event: "SoftHangupRequest"`
 * - `Channel: string`
 * - `ChannelState: string`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: string`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 * - `Cause: string`
 */
export type SoftHangupRequest = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Cause: string;
};

/**
 * Represents the data structure for the SpanAlarm event in Asterisk.
 *
 * **Synopsis**: Description for SpanAlarm event.
 *
 * **Syntax**:
 * - `Event: "SpanAlarm"`
 * - `Span: string`
 * - `Alarm: string`
 */
export type SpanAlarm = BaseEvent & {
	Event: "SpanAlarm";
	Span: string;
	Alarm: string;
};

/**
 * Represents the data structure for the SpanAlarmClear event in Asterisk.
 *
 * **Synopsis**: Description for SpanAlarmClear event.
 *
 * **Syntax**:
 * - `Event: "SpanAlarmClear"`
 * - `Span: string`
 */
export type SpanAlarmClear = BaseEvent & {
	Event: "SpanAlarmClear";
	Span: string;
};

export type Status = BaseEvent & {
	Event: "Status";
	ActionID?: number;
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
	Uniqueid: string | number;
	Linkedid: number | string;
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

/**
 * Represents the data structure for the StatusComplete event in Asterisk.
 *
 * **Synopsis**: Description for StatusComplete event.
 *
 * **Syntax**:
 * - `Event: "StatusComplete"`
 * - `Items: string`
 */
export type StatusComplete = BaseEvent & {
	Event: "StatusComplete";
	Items: string;
};

export type SuccessfulAuth = BaseEvent & {
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

export type TransportDetail = BaseEvent & {
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

/**
 * Represents the data structure for the UnParkedCall event in Asterisk.
 *
 * **Synopsis**: Description for UnParkedCall event.
 *
 * **Syntax**:
 * - `Event: "UnParkedCall"`
 * - `ParkeeChannel: string`
 * - `ParkeeChannelState: string`
 * - `ParkeeChannelStateDesc: string`
 * - `ParkeeCallerIDNum: string`
 * - `ParkeeCallerIDName: string`
 * - `ParkeeConnectedLineNum: string`
 * - `ParkeeConnectedLineName: string`
 * - `ParkeeLanguage: string`
 * - `ParkeeAccountCode: string`
 * - `ParkeeContext: string`
 * - `ParkeeExten: string`
 * - `ParkeePriority: string`
 * - `ParkeeUniqueid: string`
 * - `ParkeeLinkedid: string`
 * - `ParkerChannel: string`
 * - `ParkerChannelState: string`
 * - `ParkerChannelStateDesc: string`
 * - `ParkerCallerIDNum: string`
 * - `ParkerCallerIDName: string`
 * - `ParkerConnectedLineNum: string`
 * - `ParkerConnectedLineName: string`
 * - `ParkerLanguage: string`
 * - `ParkerAccountCode: string`
 * - `ParkerContext: string`
 * - `ParkerExten: string`
 * - `ParkerPriority: string`
 * - `ParkerUniqueid: string`
 * - `ParkerLinkedid: string`
 * - `ParkerDialString: string`
 * - `Parkinglot: string`
 * - `ParkingSpace: string`
 * - `ParkingTimeout: string`
 * - `ParkingDuration: string`
 * - `RetrieverChannel: string`
 * - `RetrieverChannelState: string`
 * - `RetrieverChannelStateDesc: string`
 * - `RetrieverCallerIDNum: string`
 * - `RetrieverCallerIDName: string`
 * - `RetrieverConnectedLineNum: string`
 * - `RetrieverConnectedLineName: string`
 * - `RetrieverLanguage: string`
 * - `RetrieverAccountCode: string`
 * - `RetrieverContext: string`
 * - `RetrieverExten: string`
 * - `RetrieverPriority: string`
 * - `RetrieverUniqueid: string`
 * - `RetrieverLinkedid: string`
 */
export type UnParkedCall = BaseEvent & {
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
	ParkeeUniqueid: string | number;
	ParkeeLinkedid: number | string;
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
	ParkerUniqueid: string | number;
	ParkerLinkedid: number | string;
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
	RetrieverUniqueid: string | number;
	RetrieverLinkedid: number | string;
};

export type UnexpectedAddress = BaseEvent & {
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

/**
 * Represents the data structure for the Unhold event in Asterisk.
 *
 * **Synopsis**: Description for Unhold event.
 *
 * **Syntax**:
 * - `Event: "Unhold"`
 * - `Channel: string`
 * - `ChannelState: string`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: string`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 */
export type Unhold = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
};

/**
 * Represents the data structure for the Unload event in Asterisk.
 *
 * **Synopsis**: Description for Unload event.
 *
 * **Syntax**:
 * - `Event: "Unload"`
 * - `Module: string`
 * - `Status: "Success"`
 */
export type Unload = BaseEvent & {
	Event: "Unload";
	Module: string;
	Status: "Success";
};

/**
 * Represents the data structure for the UserEvent event in Asterisk.
 *
 * **Synopsis**: Description for UserEvent event.
 *
 * **Syntax**:
 * - `Event: "UserEvent"`
 * - `Channel: string`
 * - `ChannelState: string`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: string`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 * - `UserEvent: string`
 */
export type UserEvent = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	UserEvent: string;
};

/**
 * Represents the data structure for the VarSet event in Asterisk.
 *
 * **Synopsis**: Description for VarSet event.
 *
 * **Syntax**:
 * - `Event: "VarSet"`
 * - `Channel: string`
 * - `ChannelState: string`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: string`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 * - `Variable: string`
 * - `Value: string`
 */
export type VarSet = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
	Variable: string;
	Value: string;
};

/**
 * Represents the data structure for the VoicemailPasswordChange event in Asterisk.
 *
 * **Synopsis**: Description for VoicemailPasswordChange event.
 *
 * **Syntax**:
 * - `Event: "VoicemailPasswordChange"`
 * - `Context: string`
 * - `Mailbox: string`
 * - `NewPassword: string`
 */
export type VoicemailPasswordChange = BaseEvent & {
	Event: "VoicemailPasswordChange";
	Context: string;
	Mailbox: string;
	NewPassword: string;
};

/**
 * Represents the data structure for the Wink event in Asterisk.
 *
 * **Synopsis**: Description for Wink event.
 *
 * **Syntax**:
 * - `Event: "Wink"`
 * - `Channel: string`
 * - `ChannelState: string`
 * - `ChannelStateDesc: string`
 * - `CallerIDNum: string`
 * - `CallerIDName: string`
 * - `ConnectedLineNum: string`
 * - `ConnectedLineName: string`
 * - `Language: string`
 * - `AccountCode: string`
 * - `Context: string`
 * - `Exten: string`
 * - `Priority: string`
 * - `Uniqueid: string`
 * - `Linkedid: string`
 */
export type Wink = BaseEvent & {
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
	Uniqueid: string | number;
	Linkedid: number | string;
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
	| QueueSummary
	| QueueSummaryComplete
	| QueueMember
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
