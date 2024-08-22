// noinspection ES6UnusedImports,JSUnusedGlobalSymbols

import type {
	AGIExecEnd,
	AGIExecStart,
	AMIEvent,
	AOCD,
	AOCE,
	AOCS,
	AgentCalled,
	AgentComplete,
	AgentConnect,
	AgentDump,
	AgentLogin,
	AgentLogoff,
	AgentRingNoAnswer,
	Agents,
	AgentsComplete,
	Alarm,
	AlarmClear,
	AorDetail,
	AorList,
	AorListComplete,
	AsyncAGIEnd,
	AsyncAGIExec,
	AsyncAGIStart,
	AttendedTransfer,
	AuthDetail,
	AuthList,
	AuthListComplete,
	AuthMethodNotAllowed,
	BlindTransfer,
	BridgeCreate,
	BridgeDestroy,
	BridgeEnter,
	BridgeInfoChannel,
	BridgeInfoComplete,
	BridgeLeave,
	BridgeMerge,
	BridgeVideoSourceUpdate,
	CEL,
	Cdr,
	ChallengeResponseFailed,
	ChallengeSent,
	ChanSpyStart,
	ChanSpyStop,
	ChannelTalkingStart,
	ChannelTalkingStop,
	ConfbridgeEnd,
	ConfbridgeJoin,
	ConfbridgeLeave,
	ConfbridgeList,
	ConfbridgeListRooms,
	ConfbridgeMute,
	ConfbridgeRecord,
	ConfbridgeStart,
	ConfbridgeStopRecord,
	ConfbridgeTalking,
	ConfbridgeUnmute,
	ContactList,
	ContactListComplete,
	ContactStatus,
	ContactStatusDetail,
	CoreShowChannel,
	CoreShowChannelMapComplete,
	CoreShowChannelsComplete,
	DAHDIChannel,
	DNDState,
	DTMFBegin,
	DTMFEnd,
	DeadlockStart,
	DeviceStateChange,
	DeviceStateListComplete,
	DialBegin,
	DialEnd,
	DialState,
	EndpointDetail,
	EndpointDetailComplete,
	EndpointList,
	EndpointListComplete,
	ExtensionStateListComplete,
	ExtensionStatus,
	FAXSession,
	FAXSessionsComplete,
	FAXSessionsEntry,
	FAXStats,
	FAXStatus,
	FailedACL,
	Flash,
	FullyBooted,
	Hangup,
	HangupHandlerPop,
	HangupHandlerPush,
	HangupHandlerRun,
	HangupRequest,
	Hold,
	IdentifyDetail,
	InvalidAccountID,
	InvalidPassword,
	InvalidTransport,
	Load,
	LoadAverageLimit,
	LocalBridge,
	LocalOptimizationBegin,
	LocalOptimizationEnd,
	LogChannel,
	MCID,
	MWIGet,
	MWIGetComplete,
	MeetmeEnd,
	MeetmeJoin,
	MeetmeLeave,
	MeetmeList,
	MeetmeListRooms,
	MeetmeMute,
	MeetmeTalkRequest,
	MeetmeTalking,
	MemoryLimit,
	MessageWaiting,
	MiniVoiceMail,
	MixMonitorMute,
	MixMonitorStart,
	MixMonitorStop,
	MonitorStart,
	MonitorStop,
	MusicOnHoldStart,
	MusicOnHoldStop,
	NewAccountCode,
	NewCallerid,
	NewConnectedLine,
	NewExten,
	Newchannel,
	Newstate,
	OriginateResponse,
	ParkedCall,
	ParkedCallGiveUp,
	ParkedCallSwap,
	ParkedCallTimeOut,
	PeerStatus,
	Pickup,
	PresenceStateChange,
	PresenceStateListComplete,
	PresenceStatus,
	QueueCallerAbandon,
	QueueCallerJoin,
	QueueCallerLeave,
	QueueEntry,
	QueueMemberAdded,
	QueueMemberPause,
	QueueMemberPenalty,
	QueueMemberRemoved,
	QueueMemberRinginuse,
	QueueMemberStatus,
	QueueParams,
	RTCPReceived,
	RTCPSent,
	ReceiveFAX,
	Registry,
	Reload,
	Rename,
	RequestBadFormat,
	RequestNotAllowed,
	RequestNotSupported,
	SIPQualifyPeerDone,
	SendFAX,
	SessionLimit,
	SessionTimeout,
	Shutdown,
	SoftHangupRequest,
	SpanAlarm,
	SpanAlarmClear,
	Status,
	StatusComplete,
	SuccessfulAuth,
	TransportDetail,
	UnParkedCall,
	UnexpectedAddress,
	Unhold,
	Unload,
	UserEvent,
	VarSet,
	VoicemailPasswordChange,
	Wink,
} from "./types/events.js";

export function isAGIExecEnd(evt: AMIEvent): evt is AGIExecEnd {
	return evt.Event === "AGIExecEnd";
}

export function isAGIExecStart(evt: AMIEvent): evt is AGIExecStart {
	return evt.Event === "AGIExecStart";
}

export function isAOCD(evt: AMIEvent): evt is AOCD {
	return evt.Event === "AOC-D";
}

export function isAOCE(evt: AMIEvent): evt is AOCE {
	return evt.Event === "AOC-E";
}

export function isAOCS(evt: AMIEvent): evt is AOCS {
	return evt.Event === "AOC-S";
}

export function isAgentCalled(evt: AMIEvent): evt is AgentCalled {
	return evt.Event === "AgentCalled";
}

export function isAgentComplete(evt: AMIEvent): evt is AgentComplete {
	return evt.Event === "AgentComplete";
}

export function isAgentConnect(evt: AMIEvent): evt is AgentConnect {
	return evt.Event === "AgentConnect";
}

export function isAgentDump(evt: AMIEvent): evt is AgentDump {
	return evt.Event === "AgentDump";
}

export function isAgentLogin(evt: AMIEvent): evt is AgentLogin {
	return evt.Event === "AgentLogin";
}

export function isAgentLogoff(evt: AMIEvent): evt is AgentLogoff {
	return evt.Event === "AgentLogoff";
}

export function isAgentRingNoAnswer(evt: AMIEvent): evt is AgentRingNoAnswer {
	return evt.Event === "AgentRingNoAnswer";
}

export function isAgents(evt: AMIEvent): evt is Agents {
	return evt.Event === "Agents";
}

export function isAgentsComplete(evt: AMIEvent): evt is AgentsComplete {
	return evt.Event === "AgentsComplete";
}

export function isAlarm(evt: AMIEvent): evt is Alarm {
	return evt.Event === "Alarm";
}

export function isAlarmClear(evt: AMIEvent): evt is AlarmClear {
	return evt.Event === "AlarmClear";
}

export function isAorDetail(evt: AMIEvent): evt is AorDetail {
	return evt.Event === "AorDetail";
}

export function isAorList(evt: AMIEvent): evt is AorList {
	return evt.Event === "AorList";
}

export function isAorListComplete(evt: AMIEvent): evt is AorListComplete {
	return evt.Event === "AorListComplete";
}

export function isAsyncAGIEnd(evt: AMIEvent): evt is AsyncAGIEnd {
	return evt.Event === "AsyncAGIEnd";
}

export function isAsyncAGIExec(evt: AMIEvent): evt is AsyncAGIExec {
	return evt.Event === "AsyncAGIExec";
}

export function isAsyncAGIStart(evt: AMIEvent): evt is AsyncAGIStart {
	return evt.Event === "AsyncAGIStart";
}

export function isAttendedTransfer(evt: AMIEvent): evt is AttendedTransfer {
	return evt.Event === "AttendedTransfer";
}

export function isAuthDetail(evt: AMIEvent): evt is AuthDetail {
	return evt.Event === "AuthDetail";
}

export function isAuthList(evt: AMIEvent): evt is AuthList {
	return evt.Event === "AuthList";
}

export function isAuthListComplete(evt: AMIEvent): evt is AuthListComplete {
	return evt.Event === "AuthListComplete";
}

export function isAuthMethodNotAllowed(
	evt: AMIEvent,
): evt is AuthMethodNotAllowed {
	return evt.Event === "AuthMethodNotAllowed";
}

export function isBlindTransfer(evt: AMIEvent): evt is BlindTransfer {
	return evt.Event === "BlindTransfer";
}

export function isBridgeCreate(evt: AMIEvent): evt is BridgeCreate {
	return evt.Event === "BridgeCreate";
}

export function isBridgeDestroy(evt: AMIEvent): evt is BridgeDestroy {
	return evt.Event === "BridgeDestroy";
}

export function isBridgeEnter(evt: AMIEvent): evt is BridgeEnter {
	return evt.Event === "BridgeEnter";
}

export function isBridgeInfoChannel(evt: AMIEvent): evt is BridgeInfoChannel {
	return evt.Event === "BridgeInfoChannel";
}

export function isBridgeInfoComplete(evt: AMIEvent): evt is BridgeInfoComplete {
	return evt.Event === "BridgeInfoComplete";
}

export function isBridgeLeave(evt: AMIEvent): evt is BridgeLeave {
	return evt.Event === "BridgeLeave";
}

export function isBridgeMerge(evt: AMIEvent): evt is BridgeMerge {
	return evt.Event === "BridgeMerge";
}

export function isBridgeVideoSourceUpdate(
	evt: AMIEvent,
): evt is BridgeVideoSourceUpdate {
	return evt.Event === "BridgeVideoSourceUpdate";
}

export function isCEL(evt: AMIEvent): evt is CEL {
	return evt.Event === "CEL";
}

export function isCdr(evt: AMIEvent): evt is Cdr {
	return evt.Event === "Cdr";
}

export function isChallengeResponseFailed(
	evt: AMIEvent,
): evt is ChallengeResponseFailed {
	return evt.Event === "ChallengeResponseFailed";
}

export function isChallengeSent(evt: AMIEvent): evt is ChallengeSent {
	return evt.Event === "ChallengeSent";
}

export function isChanSpyStart(evt: AMIEvent): evt is ChanSpyStart {
	return evt.Event === "ChanSpyStart";
}

export function isChanSpyStop(evt: AMIEvent): evt is ChanSpyStop {
	return evt.Event === "ChanSpyStop";
}

export function isChannelTalkingStart(
	evt: AMIEvent,
): evt is ChannelTalkingStart {
	return evt.Event === "ChannelTalkingStart";
}

export function isChannelTalkingStop(evt: AMIEvent): evt is ChannelTalkingStop {
	return evt.Event === "ChannelTalkingStop";
}

export function isConfbridgeEnd(evt: AMIEvent): evt is ConfbridgeEnd {
	return evt.Event === "ConfbridgeEnd";
}

export function isConfbridgeJoin(evt: AMIEvent): evt is ConfbridgeJoin {
	return evt.Event === "ConfbridgeJoin";
}

export function isConfbridgeLeave(evt: AMIEvent): evt is ConfbridgeLeave {
	return evt.Event === "ConfbridgeLeave";
}

export function isConfbridgeList(evt: AMIEvent): evt is ConfbridgeList {
	return evt.Event === "ConfbridgeList";
}

export function isConfbridgeListRooms(
	evt: AMIEvent,
): evt is ConfbridgeListRooms {
	return evt.Event === "ConfbridgeListRooms";
}

export function isConfbridgeMute(evt: AMIEvent): evt is ConfbridgeMute {
	return evt.Event === "ConfbridgeMute";
}

export function isConfbridgeRecord(evt: AMIEvent): evt is ConfbridgeRecord {
	return evt.Event === "ConfbridgeRecord";
}

export function isConfbridgeStart(evt: AMIEvent): evt is ConfbridgeStart {
	return evt.Event === "ConfbridgeStart";
}

export function isConfbridgeStopRecord(
	evt: AMIEvent,
): evt is ConfbridgeStopRecord {
	return evt.Event === "ConfbridgeStopRecord";
}

export function isConfbridgeTalking(evt: AMIEvent): evt is ConfbridgeTalking {
	return evt.Event === "ConfbridgeTalking";
}

export function isConfbridgeUnmute(evt: AMIEvent): evt is ConfbridgeUnmute {
	return evt.Event === "ConfbridgeUnmute";
}

export function isContactList(evt: AMIEvent): evt is ContactList {
	return evt.Event === "ContactList";
}

export function isContactListComplete(
	evt: AMIEvent,
): evt is ContactListComplete {
	return evt.Event === "ContactListComplete";
}

export function isContactStatus(evt: AMIEvent): evt is ContactStatus {
	return evt.Event === "ContactStatus";
}

export function isContactStatusDetail(
	evt: AMIEvent,
): evt is ContactStatusDetail {
	return evt.Event === "ContactStatusDetail";
}

export function isCoreShowChannel(evt: AMIEvent): evt is CoreShowChannel {
	return evt.Event === "CoreShowChannel";
}

export function isCoreShowChannelMapComplete(
	evt: AMIEvent,
): evt is CoreShowChannelMapComplete {
	return evt.Event === "CoreShowChannelMapComplete";
}

export function isCoreShowChannelsComplete(
	evt: AMIEvent,
): evt is CoreShowChannelsComplete {
	return evt.Event === "CoreShowChannelsComplete";
}

export function isDAHDIChannel(evt: AMIEvent): evt is DAHDIChannel {
	return evt.Event === "DAHDIChannel";
}

export function isDNDState(evt: AMIEvent): evt is DNDState {
	return evt.Event === "DNDState";
}

export function isDTMFBegin(evt: AMIEvent): evt is DTMFBegin {
	return evt.Event === "DTMFBegin";
}

export function isDTMFEnd(evt: AMIEvent): evt is DTMFEnd {
	return evt.Event === "DTMFEnd";
}

export function isDeadlockStart(evt: AMIEvent): evt is DeadlockStart {
	return evt.Event === "DeadlockStart";
}

export function isDeviceStateChange(evt: AMIEvent): evt is DeviceStateChange {
	return evt.Event === "DeviceStateChange";
}

export function isDeviceStateListComplete(
	evt: AMIEvent,
): evt is DeviceStateListComplete {
	return evt.Event === "DeviceStateListComplete";
}

export function isDialBegin(evt: AMIEvent): evt is DialBegin {
	return evt.Event === "DialBegin";
}

export function isDialEnd(evt: AMIEvent): evt is DialEnd {
	return evt.Event === "DialEnd";
}

export function isDialState(evt: AMIEvent): evt is DialState {
	return evt.Event === "DialState";
}

export function isEndpointDetail(evt: AMIEvent): evt is EndpointDetail {
	return evt.Event === "EndpointDetail";
}

export function isEndpointDetailComplete(
	evt: AMIEvent,
): evt is EndpointDetailComplete {
	return evt.Event === "EndpointDetailComplete";
}

export function isEndpointList(evt: AMIEvent): evt is EndpointList {
	return evt.Event === "EndpointList";
}

export function isEndpointListComplete(
	evt: AMIEvent,
): evt is EndpointListComplete {
	return evt.Event === "EndpointListComplete";
}

export function isExtensionStateListComplete(
	evt: AMIEvent,
): evt is ExtensionStateListComplete {
	return evt.Event === "ExtensionStateListComplete";
}

export function isExtensionStatus(evt: AMIEvent): evt is ExtensionStatus {
	return evt.Event === "ExtensionStatus";
}

export function isFAXSession(evt: AMIEvent): evt is FAXSession {
	return evt.Event === "FAXSession";
}

export function isFAXSessionsComplete(
	evt: AMIEvent,
): evt is FAXSessionsComplete {
	return evt.Event === "FAXSessionsComplete";
}

export function isFAXSessionsEntry(evt: AMIEvent): evt is FAXSessionsEntry {
	return evt.Event === "FAXSessionsEntry";
}

export function isFAXStats(evt: AMIEvent): evt is FAXStats {
	return evt.Event === "FAXStats";
}

export function isFAXStatus(evt: AMIEvent): evt is FAXStatus {
	return evt.Event === "FAXStatus";
}

export function isFailedACL(evt: AMIEvent): evt is FailedACL {
	return evt.Event === "FailedACL";
}

export function isFlash(evt: AMIEvent): evt is Flash {
	return evt.Event === "Flash";
}

export function isFullyBooted(evt: AMIEvent): evt is FullyBooted {
	return evt.Event === "FullyBooted";
}

export function isHangup(evt: AMIEvent): evt is Hangup {
	return evt.Event === "Hangup";
}

export function isHangupHandlerPop(evt: AMIEvent): evt is HangupHandlerPop {
	return evt.Event === "HangupHandlerPop";
}

export function isHangupHandlerPush(evt: AMIEvent): evt is HangupHandlerPush {
	return evt.Event === "HangupHandlerPush";
}

export function isHangupHandlerRun(evt: AMIEvent): evt is HangupHandlerRun {
	return evt.Event === "HangupHandlerRun";
}

export function isHangupRequest(evt: AMIEvent): evt is HangupRequest {
	return evt.Event === "HangupRequest";
}

export function isHold(evt: AMIEvent): evt is Hold {
	return evt.Event === "Hold";
}

export function isIdentifyDetail(evt: AMIEvent): evt is IdentifyDetail {
	return evt.Event === "IdentifyDetail";
}

export function isInvalidAccountID(evt: AMIEvent): evt is InvalidAccountID {
	return evt.Event === "InvalidAccountID";
}

export function isInvalidPassword(evt: AMIEvent): evt is InvalidPassword {
	return evt.Event === "InvalidPassword";
}

export function isInvalidTransport(evt: AMIEvent): evt is InvalidTransport {
	return evt.Event === "InvalidTransport";
}

export function isLoad(evt: AMIEvent): evt is Load {
	return evt.Event === "Load";
}

export function isLoadAverageLimit(evt: AMIEvent): evt is LoadAverageLimit {
	return evt.Event === "LoadAverageLimit";
}

export function isLocalBridge(evt: AMIEvent): evt is LocalBridge {
	return evt.Event === "LocalBridge";
}

export function isLocalOptimizationBegin(
	evt: AMIEvent,
): evt is LocalOptimizationBegin {
	return evt.Event === "LocalOptimizationBegin";
}

export function isLocalOptimizationEnd(
	evt: AMIEvent,
): evt is LocalOptimizationEnd {
	return evt.Event === "LocalOptimizationEnd";
}

export function isLogChannel(evt: AMIEvent): evt is LogChannel {
	return evt.Event === "LogChannel";
}

export function isMCID(evt: AMIEvent): evt is MCID {
	return evt.Event === "MCID";
}

export function isMWIGet(evt: AMIEvent): evt is MWIGet {
	return evt.Event === "MWIGet";
}

export function isMWIGetComplete(evt: AMIEvent): evt is MWIGetComplete {
	return evt.Event === "MWIGetComplete";
}

export function isMeetmeEnd(evt: AMIEvent): evt is MeetmeEnd {
	return evt.Event === "MeetmeEnd";
}

export function isMeetmeJoin(evt: AMIEvent): evt is MeetmeJoin {
	return evt.Event === "MeetmeJoin";
}

export function isMeetmeLeave(evt: AMIEvent): evt is MeetmeLeave {
	return evt.Event === "MeetmeLeave";
}

export function isMeetmeList(evt: AMIEvent): evt is MeetmeList {
	return evt.Event === "MeetmeList";
}

export function isMeetmeListRooms(evt: AMIEvent): evt is MeetmeListRooms {
	return evt.Event === "MeetmeListRooms";
}

export function isMeetmeMute(evt: AMIEvent): evt is MeetmeMute {
	return evt.Event === "MeetmeMute";
}

export function isMeetmeTalkRequest(evt: AMIEvent): evt is MeetmeTalkRequest {
	return evt.Event === "MeetmeTalkRequest";
}

export function isMeetmeTalking(evt: AMIEvent): evt is MeetmeTalking {
	return evt.Event === "MeetmeTalking";
}

export function isMemoryLimit(evt: AMIEvent): evt is MemoryLimit {
	return evt.Event === "MemoryLimit";
}

export function isMessageWaiting(evt: AMIEvent): evt is MessageWaiting {
	return evt.Event === "MessageWaiting";
}

export function isMiniVoiceMail(evt: AMIEvent): evt is MiniVoiceMail {
	return evt.Event === "MiniVoiceMail";
}

export function isMixMonitorMute(evt: AMIEvent): evt is MixMonitorMute {
	return evt.Event === "MixMonitorMute";
}

export function isMixMonitorStart(evt: AMIEvent): evt is MixMonitorStart {
	return evt.Event === "MixMonitorStart";
}

export function isMixMonitorStop(evt: AMIEvent): evt is MixMonitorStop {
	return evt.Event === "MixMonitorStop";
}

export function isMonitorStart(evt: AMIEvent): evt is MonitorStart {
	return evt.Event === "MonitorStart";
}

export function isMonitorStop(evt: AMIEvent): evt is MonitorStop {
	return evt.Event === "MonitorStop";
}

export function isMusicOnHoldStart(evt: AMIEvent): evt is MusicOnHoldStart {
	return evt.Event === "MusicOnHoldStart";
}

export function isMusicOnHoldStop(evt: AMIEvent): evt is MusicOnHoldStop {
	return evt.Event === "MusicOnHoldStop";
}

export function isNewAccountCode(evt: AMIEvent): evt is NewAccountCode {
	return evt.Event === "NewAccountCode";
}

export function isNewCallerid(evt: AMIEvent): evt is NewCallerid {
	return evt.Event === "NewCallerid";
}

export function isNewConnectedLine(evt: AMIEvent): evt is NewConnectedLine {
	return evt.Event === "NewConnectedLine";
}

export function isNewExten(evt: AMIEvent): evt is NewExten {
	return evt.Event === "NewExten";
}

export function isNewchannel(evt: AMIEvent): evt is Newchannel {
	return evt.Event === "Newchannel";
}

export function isNewstate(evt: AMIEvent): evt is Newstate {
	return evt.Event === "Newstate";
}

export function isOriginateResponse(evt: AMIEvent): evt is OriginateResponse {
	return evt.Event === "OriginateResponse";
}

export function isParkedCall(evt: AMIEvent): evt is ParkedCall {
	return evt.Event === "ParkedCall";
}

export function isParkedCallGiveUp(evt: AMIEvent): evt is ParkedCallGiveUp {
	return evt.Event === "ParkedCallGiveUp";
}

export function isParkedCallSwap(evt: AMIEvent): evt is ParkedCallSwap {
	return evt.Event === "ParkedCallSwap";
}

export function isParkedCallTimeOut(evt: AMIEvent): evt is ParkedCallTimeOut {
	return evt.Event === "ParkedCallTimeOut";
}

export function isPeerStatus(evt: AMIEvent): evt is PeerStatus {
	return evt.Event === "PeerStatus";
}

export function isPickup(evt: AMIEvent): evt is Pickup {
	return evt.Event === "Pickup";
}

export function isPresenceStateChange(
	evt: AMIEvent,
): evt is PresenceStateChange {
	return evt.Event === "PresenceStateChange";
}

export function isPresenceStateListComplete(
	evt: AMIEvent,
): evt is PresenceStateListComplete {
	return evt.Event === "PresenceStateListComplete";
}

export function isPresenceStatus(evt: AMIEvent): evt is PresenceStatus {
	return evt.Event === "PresenceStatus";
}

export function isQueueCallerAbandon(evt: AMIEvent): evt is QueueCallerAbandon {
	return evt.Event === "QueueCallerAbandon";
}

export function isQueueCallerJoin(evt: AMIEvent): evt is QueueCallerJoin {
	return evt.Event === "QueueCallerJoin";
}

export function isQueueCallerLeave(evt: AMIEvent): evt is QueueCallerLeave {
	return evt.Event === "QueueCallerLeave";
}

export function isQueueEntry(evt: AMIEvent): evt is QueueEntry {
	return evt.Event === "QueueEntry";
}

export function isQueueMemberAdded(evt: AMIEvent): evt is QueueMemberAdded {
	return evt.Event === "QueueMemberAdded";
}

export function isQueueMemberPause(evt: AMIEvent): evt is QueueMemberPause {
	return evt.Event === "QueueMemberPause";
}

export function isQueueMemberPenalty(evt: AMIEvent): evt is QueueMemberPenalty {
	return evt.Event === "QueueMemberPenalty";
}

export function isQueueMemberRemoved(evt: AMIEvent): evt is QueueMemberRemoved {
	return evt.Event === "QueueMemberRemoved";
}

export function isQueueMemberRinginuse(
	evt: AMIEvent,
): evt is QueueMemberRinginuse {
	return evt.Event === "QueueMemberRinginuse";
}

export function isQueueMemberStatus(evt: AMIEvent): evt is QueueMemberStatus {
	return evt.Event === "QueueMemberStatus";
}

export function isQueueParams(evt: AMIEvent): evt is QueueParams {
	return evt.Event === "QueueParams";
}

export function isRTCPReceived(evt: AMIEvent): evt is RTCPReceived {
	return evt.Event === "RTCPReceived";
}

export function isRTCPSent(evt: AMIEvent): evt is RTCPSent {
	return evt.Event === "RTCPSent";
}

export function isReceiveFAX(evt: AMIEvent): evt is ReceiveFAX {
	return evt.Event === "ReceiveFAX";
}

export function isRegistry(evt: AMIEvent): evt is Registry {
	return evt.Event === "Registry";
}

export function isReload(evt: AMIEvent): evt is Reload {
	return evt.Event === "Reload";
}

export function isRename(evt: AMIEvent): evt is Rename {
	return evt.Event === "Rename";
}

export function isRequestBadFormat(evt: AMIEvent): evt is RequestBadFormat {
	return evt.Event === "RequestBadFormat";
}

export function isRequestNotAllowed(evt: AMIEvent): evt is RequestNotAllowed {
	return evt.Event === "RequestNotAllowed";
}

export function isRequestNotSupported(
	evt: AMIEvent,
): evt is RequestNotSupported {
	return evt.Event === "RequestNotSupported";
}

export function isSIPQualifyPeerDone(evt: AMIEvent): evt is SIPQualifyPeerDone {
	return evt.Event === "SIPQualifyPeerDone";
}

export function isSendFAX(evt: AMIEvent): evt is SendFAX {
	return evt.Event === "SendFAX";
}

export function isSessionLimit(evt: AMIEvent): evt is SessionLimit {
	return evt.Event === "SessionLimit";
}

export function isSessionTimeout(evt: AMIEvent): evt is SessionTimeout {
	return evt.Event === "SessionTimeout";
}

export function isShutdown(evt: AMIEvent): evt is Shutdown {
	return evt.Event === "Shutdown";
}

export function isSoftHangupRequest(evt: AMIEvent): evt is SoftHangupRequest {
	return evt.Event === "SoftHangupRequest";
}

export function isSpanAlarm(evt: AMIEvent): evt is SpanAlarm {
	return evt.Event === "SpanAlarm";
}

export function isSpanAlarmClear(evt: AMIEvent): evt is SpanAlarmClear {
	return evt.Event === "SpanAlarmClear";
}

export function isStatus(evt: AMIEvent): evt is Status {
	return evt.Event === "Status";
}

export function isStatusComplete(evt: AMIEvent): evt is StatusComplete {
	return evt.Event === "StatusComplete";
}

export function isSuccessfulAuth(evt: AMIEvent): evt is SuccessfulAuth {
	return evt.Event === "SuccessfulAuth";
}

export function isTransportDetail(evt: AMIEvent): evt is TransportDetail {
	return evt.Event === "TransportDetail";
}

export function isUnParkedCall(evt: AMIEvent): evt is UnParkedCall {
	return evt.Event === "UnParkedCall";
}

export function isUnexpectedAddress(evt: AMIEvent): evt is UnexpectedAddress {
	return evt.Event === "UnexpectedAddress";
}

export function isUnhold(evt: AMIEvent): evt is Unhold {
	return evt.Event === "Unhold";
}

export function isUnload(evt: AMIEvent): evt is Unload {
	return evt.Event === "Unload";
}

export function isUserEvent(evt: AMIEvent): evt is UserEvent {
	return evt.Event === "UserEvent";
}

export function isVarSet(evt: AMIEvent): evt is VarSet {
	return evt.Event === "VarSet";
}

export function isVoicemailPasswordChange(
	evt: AMIEvent,
): evt is VoicemailPasswordChange {
	return evt.Event === "VoicemailPasswordChange";
}

export function isWink(evt: AMIEvent): evt is Wink {
	return evt.Event === "Wink";
}
