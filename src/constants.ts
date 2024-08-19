export const _AMI_EVENTS = {
	BRIDGE_CREATE: "BridgeCreate",
	BRIDGE_DESTROY: "BridgeDestroy",
	BRIDGE_ENTER: "BridgeEnter",
	BRIDGE_INFO_CHANNEL: "BridgeInfoChannel",
	BRIDGE_INFO: "BridgeInfoComplete",
	BRIDGE_LEAVE: "BridgeLeave",
	BRIDGE_MERGE: "BridgeMerge",
	BRIDGE_LIST_ITEM: "BridgeListItem",
	BRIDGE_LIST_COMPLETE: "BridgeListComplete",

	CEL: "CEL",

	CORE_SHOW_CHANNEL: "CoreShowChannel",
	CORE_SHOW_CHANNEL_COMPLETE: "CoreShowChannelsComplete",

	DIAL1: "DialBegin",
	DIAL2: "DialEnd",
	DIAL_STATE: "DialState",

	DTMF1: "DTMFBegin",
	DTMF2: "DTMFEnd",

	HANGUP: "Hangup",
	HANGUP_REQUEST: "HangupRequest",

	HOLD: "Hold",

	NEW_CALLERID: "NewCallerid",
	NEW_CHANNEL: "Newchannel",
	NEW_CONNECTED_LINE: "NewConnectedLine",
	NEW_EXTEN: "NewExten",
	NEW_STATE: "NewState",

	ORIGINATE_RESPONSE: "OriginateResponse",

	Q_SUMMARY: "QueueSummary",
	Q_PARAMS: "QueueParams",
	Q_MEMBER_ADDED: "QueueMemberAdded",
	Q_MEMBER_PAUSE: "QueueMemberPause",
	Q_MEMBER_REMOVED: "QueueMemberRemoved",
	Q_MEMBER_PENALTY: "QueuePenalty",
	Q_MEMBER_RING_IN_USE: "QueueMemberRinginuse",
	Q_MEMBER: "QueueMember",
	Q_MEMBER_STATUS: "QueueMemberStatus",

	RTCP_SENT: "RTCPSent",
	RTCP_RECEIVED: "RTCPReceived",

	STATUS: "Status",
};


export const DEFAULT_PORT: number = 5038;
export const CRLF: string = "\r\n";
export const END: string = "\r\n\r\n";
export const RESEND_TIMEOUT: number = 3;
export const HEARTBEAT_INTERVAL: number = 2;
export const MAX_RECONNECT_COUNT: number = 10;

export const _eAMI_EVENTS = {
	CONNECT: "connect",
	DO_RECONNECT: "do_reconnect",
	RECONNECTED: "reconnected",
	MAX_RECONNECT_REACH: "max-reconnect-reach",
	MAX_AUTH_REACH: "max-auth-reach",

	DO_LOGIN: "login",
	RE_LOGIN: "re-login",
	LOGGED_IN: "loggedin",

	SEND: "send",
	EVENTS: "events",
	RESPONSE: "response",

	ERROR_CONNECT: "error.connect",
	ERROR_LOGIN: "error.login",
	ERROR_LOGOUT: "error.logout",
	ERROR_RECONNECT: "error.reconnect",
};

