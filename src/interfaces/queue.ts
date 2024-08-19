//Response by QueueStatus action
//Вызывается для каждого оператора очереди
export interface I_QueueMember {
	Event: string
	//The name of the queue.
	Queue: string
	//The name of the queue member.
	MemberName: string
	//The queue member's channel technology or location.
	Interface: string
	//Channel technology or location from which to read device state changes.
	StateInterface: string

	Membership: "dynamic" | "realtime" | "static" | string

	//The penalty associated with the queue member.
	Penalty: number
	//The number of calls this queue member has serviced.
	CallsTaken: number
	//The time this member last took a call, expressed in seconds since 00:00, Jan 1, 1970 UTC.
	LastCall: number
	//The time when started last paused the queue member.
	LastPause: number
	// Set to 1 if member is in call. Set to 0 after LastCall time is updated.
	InCall: 0 | 1
	//The numeric device state status of the queue member.
	Status:  0 // AST_DEVICE_UNKNOWN
			|1 // AST_DEVICE_NOT_INUSE
			|2 // AST_DEVICE_INUSE
			|3 // AST_DEVICE_BUSY
			|4 // AST_DEVICE_INVALID
			|5 // AST_DEVICE_UNAVAILABLE
			|6 // AST_DEVICE_RINGING
			|7 // AST_DEVICE_RINGINUSE
			|8 // AST_DEVICE_ONHOLD

	Paused: 0 | 1
	//If set when paused, the reason the queue member was paused.
	PausedReason: string
	Ringinuse: 0 | 1
}

//Raised when a member is added to the queue.
export interface I_QueueMemberAdded {
	Event: "QueueMemberAdded"
	Queue: string
	MemberName: string
	Interface: string
	StateInterface: string
	Membership: "dynamic" | "realtime" | "static" | string
	Penalty: number
	CallsTaken: number
	LastCall: number
	Status: number
	Paused: boolean
	Ringinuse: 0 | 1
}

//Raised when a member is removed from the queue.
export interface I_QueueMemberRemoved {
	Event: "QueueMemberRemoved"
	Queue: string
	MemberName: string
	Interface: string
	StateInterface: string
	Membership: "dynamic" | "realtime" | "static" | string
	Penalty: number
	CallsTaken: number
	LastCall: number
	Status: number
	Paused: boolean
	Ringinuse: 0 | 1
}

//Raised when a member's penalty is changed.
export interface I_QueueMemberPenalty {
	Event: "QueueMemberPenalty"
	Queue: string
	MemberName: string
	Interface: string
	StateInterface: string
	Membership: "dynamic" | "realtime" | "static" | string
	Penalty: number
	CallsTaken: number
	LastCall: number
	Status: number
	Paused: boolean
	Ringinuse: 0 | 1
}


//Raised when a Queue member's status has changed.
export interface I_QueueMemberStatus {
	Event: string
	//The name of the queue.
	Queue: string
	//The name of the queue member.
	MemberName: string
	//The queue member's channel technology or location.
	Interface: string
	//Channel technology or location from which to read device state changes.
	StateInterface: string

	Membership: "dynamic" | "realtime" | "static" | string

	//The penalty associated with the queue member.
	Penalty: number
	//The number of calls this queue member has serviced.
	CallsTaken: number
	//The time this member last took a call, expressed in seconds since 00:00, Jan 1, 1970 UTC.
	LastCall: number
	//The time when started last paused the queue member.
	LastPause: number
	// Set to 1 if member is in call. Set to 0 after LastCall time is updated.
	InCall: 0 | 1
	//The numeric device state status of the queue member.
	Status:  0 // AST_DEVICE_UNKNOWN
			|1 // AST_DEVICE_NOT_INUSE
			|2 // AST_DEVICE_INUSE
			|3 // AST_DEVICE_BUSY
			|4 // AST_DEVICE_INVALID
			|5 // AST_DEVICE_UNAVAILABLE
			|6 // AST_DEVICE_RINGING
			|7 // AST_DEVICE_RINGINUSE
			|8 // AST_DEVICE_ONHOLD

	Paused: 0 | 1
	//If set when paused, the reason the queue member was paused.
	PausedReason: string
	Ringinuse: 0 | 1
}

//Raised when a member is paused/unpaused in the queue.
export interface I_QueueMemberPause {
	Event: string
	//The name of the queue.
	Queue: string
	//The name of the queue member.
	MemberName: string
	//The queue member's channel technology or location.
	Interface: string
	//Channel technology or location from which to read device state changes.
	StateInterface: string

	Membership: "dynamic" | "realtime" | "static" | string

	//The penalty associated with the queue member.
	Penalty: number
	//The number of calls this queue member has serviced.
	CallsTaken: number
	//The time this member last took a call, expressed in seconds since 00:00, Jan 1, 1970 UTC.
	LastCall: number
	//The time when started last paused the queue member.
	LastPause: number
	// Set to 1 if member is in call. Set to 0 after LastCall time is updated.
	InCall: 0 | 1
	//The numeric device state status of the queue member.
	Status:  0 // AST_DEVICE_UNKNOWN
			|1 // AST_DEVICE_NOT_INUSE
			|2 // AST_DEVICE_INUSE
			|3 // AST_DEVICE_BUSY
			|4 // AST_DEVICE_INVALID
			|5 // AST_DEVICE_UNAVAILABLE
			|6 // AST_DEVICE_RINGING
			|7 // AST_DEVICE_RINGINUSE
			|8 // AST_DEVICE_ONHOLD

	Paused: 0 | 1
	//If set when paused, the reason the queue member was paused.
	PausedReason: string
	Ringinuse: 0 | 1
	// The reason a member was paused.
	Reason: string;
}

//Response by QueueSummary action
export interface I_QueueSummary {
	Available: number
	Callers: number
	HoldTime: number
	TalkTime: number
	LoggedIn: number
	LongestHoldTime: number
}

export interface I_QueueParams {
	Event: string				//QueueParams
	Queue: string				//'callcenter_q',
	Max: number					//50
	Strategy: string 			//'rrmemory',
	Calls: number				//0,
	Holdtime: number  			//13,
	TalkTime: number  			//182,
	Completed: number 			//5427,
	Abandoned: number			//1162,
	ServiceLevel: number		//0,
	ServicelevelPerf: number 	//0.2,
	Weight: number				//0,
	ActionID: number | string 	//'1529582822906'
	Response?: string;
}
