import{EventEmitter as O}from"node:events";import{Socket as B}from"node:net";var S={BRIDGE_CREATE:"BridgeCreate",BRIDGE_DESTROY:"BridgeDestroy",BRIDGE_ENTER:"BridgeEnter",BRIDGE_INFO_CHANNEL:"BridgeInfoChannel",BRIDGE_INFO:"BridgeInfoComplete",BRIDGE_LEAVE:"BridgeLeave",BRIDGE_MERGE:"BridgeMerge",BRIDGE_LIST_ITEM:"BridgeListItem",BRIDGE_LIST_COMPLETE:"BridgeListComplete",CEL:"CEL",CORE_SHOW_CHANNEL:"CoreShowChannel",CORE_SHOW_CHANNEL_COMPLETE:"CoreShowChannelsComplete",DIAL1:"DialBegin",DIAL2:"DialEnd",DIAL_STATE:"DialState",DTMF1:"DTMFBegin",DTMF2:"DTMFEnd",HANGUP:"Hangup",HANGUP_REQUEST:"HangupRequest",HOLD:"Hold",NEW_CALLERID:"NewCallerid",NEW_CHANNEL:"Newchannel",NEW_CONNECTED_LINE:"NewConnectedLine",NEW_EXTEN:"NewExten",NEW_STATE:"NewState",ORIGINATE_RESPONSE:"OriginateResponse",Q_SUMMARY:"QueueSummary",Q_PARAMS:"QueueParams",Q_MEMBER_ADDED:"QueueMemberAdded",Q_MEMBER_PAUSE:"QueueMemberPause",Q_MEMBER_REMOVED:"QueueMemberRemoved",Q_MEMBER_PENALTY:"QueuePenalty",Q_MEMBER_RING_IN_USE:"QueueMemberRinginuse",Q_MEMBER:"QueueMember",Q_MEMBER_STATUS:"QueueMemberStatus",RTCP_SENT:"RTCPSent",RTCP_RECEIVED:"RTCPReceived",STATUS:"Status"},R=5038,m=`\r
`,L=`\r
\r
`,x=3,b=2,T=10,D={CONNECT:"connect",DO_RECONNECT:"do_reconnect",RECONNECTED:"reconnected",MAX_RECONNECT_REACH:"max-reconnect-reach",MAX_AUTH_REACH:"max-auth-reach",CLOSE:"connection.close",DO_LOGIN:"login",RE_LOGIN:"re-login",LOGGED_IN:"loggedin",SEND:"send",EVENTS:"events",RESPONSE:"response",ERROR_CONNECT:"error.connect",ERROR_LOGIN:"error.login",ERROR_LOGOUT:"error.logout",ERROR_RECONNECT:"error.reconnect"};function v(e){return e===void 0}function d(e){return e===null}function w(e){return d(e)||v(e)?!0:typeof e=="string"||Array.isArray(e)?e.length===0:typeof e=="object"&&e!==null?Object.keys(e).length===0:!1}function y(e){return Number.isNaN(e)}function P(e){return typeof e=="number"&&!Number.isNaN(e)}function p(e){if(d(e)||v(e)||y(e))return;let t=Number(e);return P(t)?t:void 0}function f(e){return e===null||v(e)||d(e)||y(e)?!1:Number.isFinite(e)}function _(e,t){for(let o=0;o<e.length;o++){let n=e[o];if(typeof n=="object"&&n!==null){for(let r in n)if(Object.prototype.hasOwnProperty.call(n,r)&&n[r]===t)return o}}return-1}var C=class{eAmi;timeOutAction;constructor(t){this.eAmi=t,this.timeOutAction=5e3}BridgeInfo(t){return new Promise((o,n)=>{(async()=>{t.Action="BridgeInfo",t.ActionID=new Date().getTime();let r=()=>{this.eAmi.events.removeListener(l.BRIDGE_INFO_CHANNEL,s)},s=i=>{o(i),r()};this.eAmi.events.once(l.BRIDGE_INFO_CHANNEL,s),setTimeout(()=>{n(`Timeout to '${t.Action}' action, try again later...`)},this.timeOutAction);try{let i=await this.eAmi.action(t);i?.Response?.toLowerCase()==="error"&&(n(i),r())}catch(i){n(i),r()}})()})}BridgeList(t){return new Promise((o,n)=>{(async()=>{v(t)&&n(new Error("Options are undefined")),t.Action="BridgeList",t.ActionID=new Date().getTime();let r=0,s=[],i=()=>{this.eAmi.events.removeListener(l.BRIDGE_LIST_COMPLETE,a),this.eAmi.events.removeListener(l.BRIDGE_LIST_ITEM,c)},c=u=>{s.push(u),r===s.length&&(o(s),i())},a=u=>{r=u.ListItems,r===s.length&&(o(s),i())};this.eAmi.events.once(l.BRIDGE_LIST_COMPLETE,a),this.eAmi.events.on(l.BRIDGE_LIST_ITEM,c),setTimeout(()=>{n(new Error(`Timeout to '${t.Action}' action, try again later...`))},this.timeOutAction);try{let u=await this.eAmi.action(t);u?.Response?.toLowerCase()==="error"&&(n(u),i())}catch(u){n(u),i()}})()})}CoreShowChannels(t){return new Promise((o,n)=>{(async()=>{v(t)&&n(new Error("Options are undefined")),t.Action="CoreShowChannels";let r=0,s=[],i=()=>{this.eAmi.events.removeListener(l.CORE_SHOW_CHANNEL,c),this.eAmi.events.removeListener(l.CORE_SHOW_CHANNEL_COMPLETE,a)},c=u=>{s.push(u),s.length===r&&(o(s),i())},a=u=>{r=u.ListItems,s.length===r&&(o(s),i())};this.eAmi.events.once(l.CORE_SHOW_CHANNEL_COMPLETE,a),this.eAmi.events.on(l.CORE_SHOW_CHANNEL,c),setTimeout(()=>{n(new Error(`Timeout to '${t.Action}' action, try again later...`))},this.timeOutAction);try{let u=await this.eAmi.action(t);u?.Response?.toLowerCase()==="error"&&(n(u),i())}catch(u){n(u),i()}})()})}Hangup(t){return new Promise((o,n)=>{(async()=>{v(t)&&n(new Error("Options are undefined")),t.Action="Hangup";let r={hangup:null,hangupRequest:null},s=()=>{this.eAmi.events.removeListener(l.HANGUP,i),this.eAmi.events.removeListener(l.HANGUP_REQUEST,c)},i=a=>{r.hangup=a,d(r.hangupRequest)||o(r),s()},c=a=>{r.hangupRequest=a,d(r.hangup)||o(r),s()};this.eAmi.events.once(l.HANGUP,i),this.eAmi.events.once(l.HANGUP_REQUEST,c),setTimeout(()=>{n(new Error(`Timeout to '${t.Action}' action, try again later...`))},this.timeOutAction);try{let a=await this.eAmi.action(t);a?.Response?.toLowerCase()==="error"&&(n(a),s())}catch(a){n(a),s()}})()})}Login(t){return new Promise((o,n)=>{(async()=>{v(t)&&n(new Error("Options are undefined")),t.Action="Login",t.ActionID=new Date().getTime(),setTimeout(()=>{n(new Error(`Timeout to '${t.Action}' action, try again later...`))},this.timeOutAction);try{let r=await this.eAmi.action(t);r.Response==="Success"?o(!0):r.Response==="Error"?n(r):o(!0)}catch(r){console.log("ERROR LOGIN",r),n(r)}})()})}Logout(){return new Promise((t,o)=>{(async()=>{let n=new Date().getTime();setTimeout(()=>{o(new Error("Timeout to 'Logoff' action, try again later..."))},this.timeOutAction);try{let r=await this.eAmi.action({Action:"Logoff",ActionID:n});this.eAmi.debug&&console.log("logout-response",r),v(r.Response)&&o(r),r.Response==="Goodbye"?t(!0):o(r)}catch(r){o(r)}})()})}Originate(t){return new Promise((o,n)=>{(async()=>{v(t)&&n(new Error("Options are undefined")),t.Action="Originate",t.ActionID=new Date().getTime();let r=()=>{this.eAmi.events.removeListener(`Action_${t.ActionID}`,s)},s=i=>{if(typeof i=="object"&&i!==null&&"Message"in i){let c=i.Message;if(v(c)){n(new Error("Message is undefined")),r();return}if(c.toString().toLowerCase().indexOf("failed")>=0){n(new Error("Action failed")),r();return}o(!0),r()}else n(new Error("Unexpected response format")),r()};this.eAmi.events.once(`Action_${t.ActionID}`,s),setTimeout(()=>{n(new Error(`Timeout to '${t.Action}' action, try again later...`))},this.timeOutAction);try{let i=await this.eAmi.action(t);i?.Response?.toLowerCase()==="error"&&(n(i),r())}catch(i){n(i),r()}})()})}Ping(){return new Promise((t,o)=>{let n=new Date().getTime(),r=null;r=setTimeout(()=>{o(new Error("Timeout to 'Ping' action, try again later..."))},this.timeOutAction),(async()=>{try{let s=await this.eAmi.action({Action:"Ping",ActionID:n});r&&clearTimeout(r),s.Response==="Success"||s.Request?.Completed?t(!0):o(new Error("Ping action failed"))}catch(s){r&&clearTimeout(r),o(s)}})()})}QueueMemberAdd(t){return new Promise((o,n)=>{(async()=>{v(t)&&n(new Error("Options are undefined")),t.Action="QueueAdd";let r=()=>{this.eAmi.events.removeListener(l.Q_MEMBER_ADDED,s)},s=i=>{o(i),r()};this.eAmi.events.once(l.Q_MEMBER_ADDED,s),setTimeout(()=>{n(new Error(`Timeout to '${t.Action}' action, try again later...`))},this.timeOutAction);try{let i=await this.eAmi.action(t);i?.Response?.toLowerCase()==="error"&&(n(i),r())}catch(i){n(i),r()}})()})}QueueMemberRemove(t){return new Promise((o,n)=>{(async()=>{v(t)&&n(new Error("Options are undefined")),t.Action="QueueRemove";let r=()=>{this.eAmi.events.removeListener(l.Q_MEMBER_REMOVED,s)},s=i=>{o(i),r()};this.eAmi.events.once(l.Q_MEMBER_REMOVED,s),setTimeout(()=>{n(new Error(`Timeout to '${t.Action}' action, try again later...`))},this.timeOutAction);try{let i=await this.eAmi.action(t);i?.Response?.toLowerCase()==="error"&&(r(),n(i))}catch(i){n(i),r()}})()})}QueueMemberPenalty(t){return new Promise((o,n)=>{(async()=>{v(t)&&n(new Error("Options are undefined")),t.Action="QueuePenalty";let r=()=>{this.eAmi.events.removeListener(l.Q_MEMBER_PENALTY,s)},s=i=>{o(i),r()};this.eAmi.events.once(l.Q_MEMBER_PENALTY,s),setTimeout(()=>{n(new Error(`Timeout to '${t.Action}' action, try again later...`))},this.timeOutAction);try{let i=await this.eAmi.action(t);i?.Response?.toLowerCase()==="error"&&(n(i),r())}catch(i){n(i),r()}})()})}QueueMemberPause(t){return new Promise((o,n)=>{(async()=>{v(t)&&n(new Error("Options are undefined")),t.Action="QueuePause";let r=()=>{this.eAmi.events.removeListener(l.Q_MEMBER_PAUSE,s)},s=i=>{o(i),r()};this.eAmi.events.once(l.Q_MEMBER_PAUSE,s),setTimeout(()=>{n(new Error(`Timeout to '${t.Action}' action, try again later...`))},this.timeOutAction);try{let i=await this.eAmi.action(t);i?.Response?.toLowerCase()==="error"&&(n(i),r())}catch(i){n(i),r()}})()})}QueueStatus(t){return new Promise((o,n)=>{(async()=>{v(t)&&n(new Error("Options are undefined")),t.Action="QueueStatus";let r=[],s=0,i=()=>{this.eAmi.events.removeListener(l.Q_MEMBER,c)},c=a=>{r.push(a),r.length===s&&(o(r),i())};this.eAmi.events.on(l.Q_MEMBER,c),setTimeout(()=>{n(new Error(`Timeout to '${t.Action}' action, try again later...`)),i(),this.QueueStatus(t)},this.timeOutAction);try{let a=await this.QueueSummary({Queue:t.Queue});s=a.Available+a.Callers+a.LoggedIn,t.MembersCount!==void 0&&t.MembersCount!==null?s=s===t.MembersCount?s:t.MembersCount:s=0,this.eAmi.debug&&console.log("Count queue members: available - %s, Callers - %s, LoggedIn - %s. Need count - %s",a.Available,a.Callers,a.LoggedIn,t.MembersCount??null);let u=await this.eAmi.action(t);typeof u=="object"&&u!==null&&"Response"in u&&(u.Response?.toLowerCase()==="error"?(n(u),i()):(this.eAmi.events.emit(l.Q_PARAMS,u),i()))}catch(a){n(a),i()}})()})}QueueSummary(t){return new Promise((o,n)=>{(async()=>{v(t)&&n(new Error("Options are undefined")),t.Action="QueueSummary";let r=()=>{this.eAmi.events.removeListener(l.Q_SUMMARY,s)},s=i=>{o(i),r()};this.eAmi.events.once(l.Q_SUMMARY,s),setTimeout(()=>{n(new Error(`Timeout to '${t.Action}' action, try again later...`))},this.timeOutAction);try{let i=await this.eAmi.action(t);i?.Response?.toLowerCase()==="error"&&(n(i),r())}catch(i){n(i),r()}})()})}Status(t){return new Promise((o,n)=>{(async()=>{v(t)&&n(new Error("Options are undefined")),t.Action="Status",t.ActionID=new Date().getTime();let r=()=>{this.eAmi.events.removeListener(l.STATUS,s)},s=i=>{o(i),r()};this.eAmi.events.once(l.STATUS,s),setTimeout(()=>{n(new Error(`Timeout to '${t.Action}' action, try again later...`))},this.timeOutAction);try{let i=await this.eAmi.action(t);i?.Response?.toLowerCase()==="error"&&(n(i),r())}catch(i){n(i),r()}})()})}};function U(e){return e.Event==="AGIExecEnd"}function q(e){return e.Event==="AGIExecStart"}function V(e){return e.Event==="AOC-D"}function X(e){return e.Event==="AOC-E"}function W(e){return e.Event==="AOC-S"}function $(e){return e.Event==="AgentCalled"}function J(e){return e.Event==="AgentComplete"}function z(e){return e.Event==="AgentConnect"}function Y(e){return e.Event==="AgentDump"}function K(e){return e.Event==="AgentLogin"}function Z(e){return e.Event==="AgentLogoff"}function j(e){return e.Event==="AgentRingNoAnswer"}function ee(e){return e.Event==="Agents"}function te(e){return e.Event==="AgentsComplete"}function ne(e){return e.Event==="Alarm"}function ie(e){return e.Event==="AlarmClear"}function re(e){return e.Event==="AorDetail"}function oe(e){return e.Event==="AorList"}function se(e){return e.Event==="AorListComplete"}function ue(e){return e.Event==="AsyncAGIEnd"}function ae(e){return e.Event==="AsyncAGIExec"}function ce(e){return e.Event==="AsyncAGIStart"}function le(e){return e.Event==="AttendedTransfer"}function ve(e){return e.Event==="AuthDetail"}function Ee(e){return e.Event==="AuthList"}function Ae(e){return e.Event==="AuthListComplete"}function me(e){return e.Event==="AuthMethodNotAllowed"}function de(e){return e.Event==="BlindTransfer"}function pe(e){return e.Event==="BridgeCreate"}function Ie(e){return e.Event==="BridgeDestroy"}function fe(e){return e.Event==="BridgeEnter"}function ge(e){return e.Event==="BridgeInfoChannel"}function Ce(e){return e.Event==="BridgeInfoComplete"}function Me(e){return e.Event==="BridgeLeave"}function he(e){return e.Event==="BridgeMerge"}function _e(e){return e.Event==="BridgeVideoSourceUpdate"}function Se(e){return e.Event==="CEL"}function Re(e){return e.Event==="Cdr"}function Le(e){return e.Event==="ChallengeResponseFailed"}function xe(e){return e.Event==="ChallengeSent"}function be(e){return e.Event==="ChanSpyStart"}function Te(e){return e.Event==="ChanSpyStop"}function De(e){return e.Event==="ChannelTalkingStart"}function we(e){return e.Event==="ChannelTalkingStop"}function ye(e){return e.Event==="ConfbridgeEnd"}function Ne(e){return e.Event==="ConfbridgeJoin"}function Pe(e){return e.Event==="ConfbridgeLeave"}function Oe(e){return e.Event==="ConfbridgeList"}function Be(e){return e.Event==="ConfbridgeListRooms"}function Qe(e){return e.Event==="ConfbridgeMute"}function He(e){return e.Event==="ConfbridgeRecord"}function ke(e){return e.Event==="ConfbridgeStart"}function Ge(e){return e.Event==="ConfbridgeStopRecord"}function Fe(e){return e.Event==="ConfbridgeTalking"}function Ue(e){return e.Event==="ConfbridgeUnmute"}function qe(e){return e.Event==="ContactList"}function Ve(e){return e.Event==="ContactListComplete"}function Xe(e){return e.Event==="ContactStatus"}function We(e){return e.Event==="ContactStatusDetail"}function $e(e){return e.Event==="CoreShowChannel"}function Je(e){return e.Event==="CoreShowChannelMapComplete"}function ze(e){return e.Event==="CoreShowChannelsComplete"}function Ye(e){return e.Event==="DAHDIChannel"}function Ke(e){return e.Event==="DNDState"}function Ze(e){return e.Event==="DTMFBegin"}function je(e){return e.Event==="DTMFEnd"}function et(e){return e.Event==="DeadlockStart"}function tt(e){return e.Event==="DeviceStateChange"}function nt(e){return e.Event==="DeviceStateListComplete"}function it(e){return e.Event==="DialBegin"}function rt(e){return e.Event==="DialEnd"}function ot(e){return e.Event==="DialState"}function st(e){return e.Event==="EndpointDetail"}function ut(e){return e.Event==="EndpointDetailComplete"}function at(e){return e.Event==="EndpointList"}function ct(e){return e.Event==="EndpointListComplete"}function lt(e){return e.Event==="ExtensionStateListComplete"}function vt(e){return e.Event==="ExtensionStatus"}function Et(e){return e.Event==="FAXSession"}function At(e){return e.Event==="FAXSessionsComplete"}function mt(e){return e.Event==="FAXSessionsEntry"}function dt(e){return e.Event==="FAXStats"}function pt(e){return e.Event==="FAXStatus"}function It(e){return e.Event==="FailedACL"}function ft(e){return e.Event==="Flash"}function gt(e){return e.Event==="FullyBooted"}function Ct(e){return e.Event==="Hangup"}function Mt(e){return e.Event==="HangupHandlerPop"}function ht(e){return e.Event==="HangupHandlerPush"}function _t(e){return e.Event==="HangupHandlerRun"}function St(e){return e.Event==="HangupRequest"}function Rt(e){return e.Event==="Hold"}function Lt(e){return e.Event==="IdentifyDetail"}function xt(e){return e.Event==="InvalidAccountID"}function bt(e){return e.Event==="InvalidPassword"}function Tt(e){return e.Event==="InvalidTransport"}function Dt(e){return e.Event==="Load"}function wt(e){return e.Event==="LoadAverageLimit"}function yt(e){return e.Event==="LocalBridge"}function Nt(e){return e.Event==="LocalOptimizationBegin"}function Pt(e){return e.Event==="LocalOptimizationEnd"}function Ot(e){return e.Event==="LogChannel"}function Bt(e){return e.Event==="MCID"}function Qt(e){return e.Event==="MWIGet"}function Ht(e){return e.Event==="MWIGetComplete"}function kt(e){return e.Event==="MeetmeEnd"}function Gt(e){return e.Event==="MeetmeJoin"}function Ft(e){return e.Event==="MeetmeLeave"}function Ut(e){return e.Event==="MeetmeList"}function qt(e){return e.Event==="MeetmeListRooms"}function Vt(e){return e.Event==="MeetmeMute"}function Xt(e){return e.Event==="MeetmeTalkRequest"}function Wt(e){return e.Event==="MeetmeTalking"}function $t(e){return e.Event==="MemoryLimit"}function Jt(e){return e.Event==="MessageWaiting"}function zt(e){return e.Event==="MiniVoiceMail"}function Yt(e){return e.Event==="MixMonitorMute"}function Kt(e){return e.Event==="MixMonitorStart"}function Zt(e){return e.Event==="MixMonitorStop"}function jt(e){return e.Event==="MonitorStart"}function en(e){return e.Event==="MonitorStop"}function tn(e){return e.Event==="MusicOnHoldStart"}function nn(e){return e.Event==="MusicOnHoldStop"}function rn(e){return e.Event==="NewAccountCode"}function on(e){return e.Event==="NewCallerid"}function sn(e){return e.Event==="NewConnectedLine"}function un(e){return e.Event==="NewExten"}function an(e){return e.Event==="Newchannel"}function cn(e){return e.Event==="Newstate"}function ln(e){return e.Event==="OriginateResponse"}function vn(e){return e.Event==="ParkedCall"}function En(e){return e.Event==="ParkedCallGiveUp"}function An(e){return e.Event==="ParkedCallSwap"}function mn(e){return e.Event==="ParkedCallTimeOut"}function dn(e){return e.Event==="PeerStatus"}function pn(e){return e.Event==="Pickup"}function In(e){return e.Event==="PresenceStateChange"}function fn(e){return e.Event==="PresenceStateListComplete"}function gn(e){return e.Event==="PresenceStatus"}function Cn(e){return e.Event==="QueueCallerAbandon"}function Mn(e){return e.Event==="QueueCallerJoin"}function hn(e){return e.Event==="QueueCallerLeave"}function _n(e){return e.Event==="QueueEntry"}function Sn(e){return e.Event==="QueueMemberAdded"}function Rn(e){return e.Event==="QueueMemberPause"}function Ln(e){return e.Event==="QueueMemberPenalty"}function xn(e){return e.Event==="QueueMemberRemoved"}function bn(e){return e.Event==="QueueMemberRinginuse"}function Tn(e){return e.Event==="QueueMemberStatus"}function Dn(e){return e.Event==="QueueParams"}function wn(e){return e.Event==="RTCPReceived"}function yn(e){return e.Event==="RTCPSent"}function Nn(e){return e.Event==="ReceiveFAX"}function Pn(e){return e.Event==="Registry"}function On(e){return e.Event==="Reload"}function Bn(e){return e.Event==="Rename"}function Qn(e){return e.Event==="RequestBadFormat"}function Hn(e){return e.Event==="RequestNotAllowed"}function kn(e){return e.Event==="RequestNotSupported"}function Gn(e){return e.Event==="SIPQualifyPeerDone"}function Fn(e){return e.Event==="SendFAX"}function Un(e){return e.Event==="SessionLimit"}function qn(e){return e.Event==="SessionTimeout"}function Vn(e){return e.Event==="Shutdown"}function Xn(e){return e.Event==="SoftHangupRequest"}function Wn(e){return e.Event==="SpanAlarm"}function $n(e){return e.Event==="SpanAlarmClear"}function Jn(e){return e.Event==="Status"}function zn(e){return e.Event==="StatusComplete"}function Yn(e){return e.Event==="SuccessfulAuth"}function Kn(e){return e.Event==="TransportDetail"}function Zn(e){return e.Event==="UnParkedCall"}function jn(e){return e.Event==="UnexpectedAddress"}function ei(e){return e.Event==="Unhold"}function ti(e){return e.Event==="Unload"}function ni(e){return e.Event==="UserEvent"}function ii(e){return e.Event==="VarSet"}function ri(e){return e.Event==="VoicemailPasswordChange"}function oi(e){return e.Event==="Wink"}var E=D,l=S,N=class{debug;_host;_port;_userName;_password;_isLoggedIn;_emitAllEvents;_reconnect;_heartbeatOk=!1;_lastConnectedTime=0;_maxReconnectCount;_heartbeatInterval;_heartbeatHandler=void 0;_resendTimeOut;_successBitsByInterval;_errorBitsByInterval;_countReconnect;_excludeEvents;_queueRequest;_socketHandler=void 0;_actions;events;_maxAuthCount;_authCount;constructor(t){let o=t,n=v(o.additionalOptions)?{}:o.additionalOptions;this._host=o.host,this._port=d(o.port)?R:o.port,this._userName=o.userName,this._password=o.password,this._reconnect=n?.reconnect??!0,this._heartbeatInterval=(n?.heartbeatInterval??b)*1e3,this._resendTimeOut=(n?.resendTimeOut??x)*1e3,this._excludeEvents=n?.excludeEvents??[],this._emitAllEvents=n?.emitAllEvents??!1,this.debug=n?.debug??!1,this._maxReconnectCount=n?.maxReconnectCount??T,this._countReconnect=0,this._maxAuthCount=5,this._authCount=0,this._successBitsByInterval=0,this._errorBitsByInterval=0,this.events=new O,this._queueRequest=[],this._isLoggedIn=!1,this._actions=new C(this),this.internalListeners()}internalListeners(){this.events.on(E.RE_LOGIN,()=>{this._authCount<this._maxAuthCount&&setTimeout(async()=>{this._authCount++;try{await this.login()}catch(t){this.debug&&console.log("re-login",t)}},1e3)})}get excludeEvents(){return this._excludeEvents}set excludeEvents(t){this._excludeEvents=t}get isLoggedIn(){return this._isLoggedIn}get lastConnectTime(){return this._lastConnectedTime}get actions(){return this._actions}get queueRequest(){return this._queueRequest}addSocketListeners(){this._socketHandler?this._socketHandler.on("close",()=>{this.debug&&console.log("close AMI connect"),this.events.emit(E.CLOSE)}).on("end",()=>{this.debug&&console.log("end AMI connect"),this.events.emit(E.CLOSE)}).on("data",t=>this.getData(t)):this.debug&&console.log("Socket handler is undefined, cannot add listeners.")}destroySocket(){this._socketHandler?(this._socketHandler.destroy(),this.debug&&console.log(`${m}Socket connection destroyed`)):this.debug&&console.log("Socket handler is undefined, cannot destroy socket.")}addRequest(t){this.queueRequest.push(t),this.events.emit(E.SEND,t)}removeRequest(t){if(v(t))return!1;let o=_(this.queueRequest,t);if(o<0)return!1;try{return this.queueRequest.splice(o,1),!0}catch(n){return this.debug&&console.log("Error remove request",n),!1}}getRequest(t){if(v(t))return null;let o=p(t),n=o!==void 0&&Number.isFinite(o)?o:t,r=_(this.queueRequest,n);return r<0?null:this.queueRequest[r]}setRequest(t,o){let n=this.getRequest(t);n&&(n=o)}keepConnection(){clearInterval(this._heartbeatHandler);let t=async()=>{try{await this.actions.Ping()?(this._heartbeatOk=!0,this._successBitsByInterval++):this._errorBitsByInterval++,this._heartbeatHandler=setTimeout(()=>t(),this._heartbeatInterval)}catch(o){this._errorBitsByInterval++,this.debug&&console.log("keep connect error",o),this._heartbeatHandler=setTimeout(()=>t(),this._heartbeatInterval)}};t().catch(o=>{this.debug&&console.log("Initial ping error",o)})}login(){return new Promise((t,o)=>{(async()=>{try{let n={Username:this._userName,Secret:this._password};this.events.emit(E.DO_LOGIN,n),await this.actions.Login(n),this.events.emit(E.LOGGED_IN),t(!0)}catch(n){if(this.events.emit(E.ERROR_LOGIN,n,"Authorization failed..."),this._authCount<this._maxAuthCount)setTimeout(()=>{this._authCount++,this.events.emit(E.RE_LOGIN,this._authCount)},1e3);else{this.events.emit(E.MAX_AUTH_REACH,this._authCount);try{await this.reconnect()}catch(r){o(r)}}}})()})}logout(){return new Promise((t,o)=>{(async()=>{try{await this.actions.Logout(),t(!0)}catch(n){this.events.emit(E.ERROR_LOGOUT,n),o("Failed to logout")}})()})}showSendPackages(){setInterval(()=>{console.log("Keep Connection. success sent - %s, error sent - %s",this._successBitsByInterval,this._errorBitsByInterval)},5e3)}connect(){return new Promise((t,o)=>{this._socketHandler=new B,this._socketHandler.connect(this._port,this._host),this._socketHandler.on("connect",async()=>{this.addSocketListeners();try{this.debug&&console.log("Connected to the server"),await this.login(),this._isLoggedIn=!0,this._lastConnectedTime=new Date().getTime(),this.debug&&this.showSendPackages(),await this.keepConnection(),this.events.emit(E.CONNECT),t(this)}catch(n){this.debug&&console.log("Connection error:",n),o(n)}}).on("error",n=>{this.events.emit(E.ERROR_CONNECT,n,"Error connecting to an Asterisk server"),this.debug&&console.log("Error connecting to the Asterisk server",n),o(!1)}).on("close",()=>{this.debug&&console.log("Connection closed"),this._isLoggedIn=!1})})}reconnect(){if(!this._reconnect)return Promise.resolve(!0);if(this._countReconnect<this._maxReconnectCount)this._countReconnect++;else return this.events.emit(E.MAX_RECONNECT_REACH,this._countReconnect),Promise.resolve(!1);return new Promise((t,o)=>{(async()=>{try{this.events.emit(E.DO_RECONNECT),await this.logout(),this.destroySocket(),await this.connect(),this.events.emit(E.RECONNECTED),t(!0)}catch(n){this.events.emit(E.ERROR_RECONNECT,n,"Could not connect to Asterisk..."),o("Could not connect to Asterisk...")}})()})}action(t){return new Promise((o,n)=>{let r=!1,s="";for(let A in t)A!=="ActionID"&&(s+=`${A}: ${t[A]}${m}`);v(t.ActionID)&&(t.ActionID=new Date().getTime());let i=t.ActionID;s+=`ActionID: ${i}${m}${m}`;let c=this.getRequest(i);c!=null?this.events.once(`Action_${i}`,A=>{c.Completed=!0,this.debug&&console.log("response",c.ActionID,c.Action),o(A)}):this.events.once(`Action_${i}`,A=>{o(A)});let a=p(i);if(a!==void 0&&!f(a)&&this.events.once(String(i),A=>{c!=null&&(c.Completed=!0),o(A)}),this.addRequest(t),c){let A=p(t.ActionID);typeof A=="number"&&f(A)?c.ActionID=A:typeof t.ActionID=="string"||typeof t.ActionID=="number"?c.ActionID=t.ActionID:c.ActionID=void 0,c.Completed=!0,c.timeOutHandler=setTimeout(async()=>{if(!r){n("Timeout write to socket...");return}if(c.Completed===!0){try{await this.action(t)}catch(I){this.debug&&console.log("Error resend action",c.Action,I),n(`Error resend action${c.Action}${I}`)}this._errorBitsByInterval++,this.debug&&console.log(`resend ActionID_${i}`,c.Action);return}clearTimeout(c.timeOutHandler),this.removeRequest(i),this.events.removeAllListeners(String(i)),this.events.removeAllListeners(`Action_${i}`),this.debug&&console.log(`complete ${i}`,c.Action)},3e3)}this._socketHandler?.write(s,()=>{r=!0})===!1&&(this.debug&&console.log("Data in the sending queue"),n("Data in the sending queue"))})}getData(t){let o=t.toString(),n,r="",s=[],i=[],c="",a=null,u={};for(o.startsWith("Asterisk Call Manager")&&(o=o.substring(o.indexOf(m)+2));n=o.indexOf(L),!(n<0);){s=o.substring(0,n+2).split(m),o=o.substring(n+4),u={},r="",i=[];for(let g=0;g<s.length;g++){if(s[g].indexOf(": ")<0)continue;if(i=s[g].split(": ",2),c=i[0].replace("'",""),a=i[1],r=g===0?c.toLowerCase():r,c==="ActionID"){let h=p(a);u[c]=h!==void 0&&f(h)?h:a;continue}let M=p(a);M!==void 0&&f(M)?a=M:(a&&a.indexOf("unknown")>=0||w(a)||a&&a.toLowerCase().indexOf("s")===0&&a.length===1)&&(a=null),u[c]=a??void 0}u.TimeEvent=Date.now();let A=this.getRequest(u.ActionID);u.Request=A!==null?A:void 0;let I=p(u.ActionID);switch(I!==void 0&&f(I)?this.events.emit(`Action_${I}`,u):typeof u.ActionID=="string"&&this.events.emit(u.ActionID,u),r){case"response":this.debug&&console.log(E.RESPONSE,m,u,m),this.events.emit(E.RESPONSE,u);break;case"event":this.debug&&console.log(E.EVENTS,m,u,m),u.Event!==void 0&&u.Event!==null&&u.Event!==""&&this.excludeEvents.indexOf(u.Event)<0&&(this._emitAllEvents&&this.events.emit(E.EVENTS,u),this.events.emit(u.Event,u));break;default:break}}return u}};export{l as AMI_EVENTS,E as eAMI_EVENTS,N as eAmi,U as isAGIExecEnd,q as isAGIExecStart,V as isAOCD,X as isAOCE,W as isAOCS,$ as isAgentCalled,J as isAgentComplete,z as isAgentConnect,Y as isAgentDump,K as isAgentLogin,Z as isAgentLogoff,j as isAgentRingNoAnswer,ee as isAgents,te as isAgentsComplete,ne as isAlarm,ie as isAlarmClear,re as isAorDetail,oe as isAorList,se as isAorListComplete,ue as isAsyncAGIEnd,ae as isAsyncAGIExec,ce as isAsyncAGIStart,le as isAttendedTransfer,ve as isAuthDetail,Ee as isAuthList,Ae as isAuthListComplete,me as isAuthMethodNotAllowed,de as isBlindTransfer,pe as isBridgeCreate,Ie as isBridgeDestroy,fe as isBridgeEnter,ge as isBridgeInfoChannel,Ce as isBridgeInfoComplete,Me as isBridgeLeave,he as isBridgeMerge,_e as isBridgeVideoSourceUpdate,Se as isCEL,Re as isCdr,Le as isChallengeResponseFailed,xe as isChallengeSent,be as isChanSpyStart,Te as isChanSpyStop,De as isChannelTalkingStart,we as isChannelTalkingStop,ye as isConfbridgeEnd,Ne as isConfbridgeJoin,Pe as isConfbridgeLeave,Oe as isConfbridgeList,Be as isConfbridgeListRooms,Qe as isConfbridgeMute,He as isConfbridgeRecord,ke as isConfbridgeStart,Ge as isConfbridgeStopRecord,Fe as isConfbridgeTalking,Ue as isConfbridgeUnmute,qe as isContactList,Ve as isContactListComplete,Xe as isContactStatus,We as isContactStatusDetail,$e as isCoreShowChannel,Je as isCoreShowChannelMapComplete,ze as isCoreShowChannelsComplete,Ye as isDAHDIChannel,Ke as isDNDState,Ze as isDTMFBegin,je as isDTMFEnd,et as isDeadlockStart,tt as isDeviceStateChange,nt as isDeviceStateListComplete,it as isDialBegin,rt as isDialEnd,ot as isDialState,st as isEndpointDetail,ut as isEndpointDetailComplete,at as isEndpointList,ct as isEndpointListComplete,lt as isExtensionStateListComplete,vt as isExtensionStatus,Et as isFAXSession,At as isFAXSessionsComplete,mt as isFAXSessionsEntry,dt as isFAXStats,pt as isFAXStatus,It as isFailedACL,ft as isFlash,gt as isFullyBooted,Ct as isHangup,Mt as isHangupHandlerPop,ht as isHangupHandlerPush,_t as isHangupHandlerRun,St as isHangupRequest,Rt as isHold,Lt as isIdentifyDetail,xt as isInvalidAccountID,bt as isInvalidPassword,Tt as isInvalidTransport,Dt as isLoad,wt as isLoadAverageLimit,yt as isLocalBridge,Nt as isLocalOptimizationBegin,Pt as isLocalOptimizationEnd,Ot as isLogChannel,Bt as isMCID,Qt as isMWIGet,Ht as isMWIGetComplete,kt as isMeetmeEnd,Gt as isMeetmeJoin,Ft as isMeetmeLeave,Ut as isMeetmeList,qt as isMeetmeListRooms,Vt as isMeetmeMute,Xt as isMeetmeTalkRequest,Wt as isMeetmeTalking,$t as isMemoryLimit,Jt as isMessageWaiting,zt as isMiniVoiceMail,Yt as isMixMonitorMute,Kt as isMixMonitorStart,Zt as isMixMonitorStop,jt as isMonitorStart,en as isMonitorStop,tn as isMusicOnHoldStart,nn as isMusicOnHoldStop,rn as isNewAccountCode,on as isNewCallerid,sn as isNewConnectedLine,un as isNewExten,an as isNewchannel,cn as isNewstate,ln as isOriginateResponse,vn as isParkedCall,En as isParkedCallGiveUp,An as isParkedCallSwap,mn as isParkedCallTimeOut,dn as isPeerStatus,pn as isPickup,In as isPresenceStateChange,fn as isPresenceStateListComplete,gn as isPresenceStatus,Cn as isQueueCallerAbandon,Mn as isQueueCallerJoin,hn as isQueueCallerLeave,_n as isQueueEntry,Sn as isQueueMemberAdded,Rn as isQueueMemberPause,Ln as isQueueMemberPenalty,xn as isQueueMemberRemoved,bn as isQueueMemberRinginuse,Tn as isQueueMemberStatus,Dn as isQueueParams,wn as isRTCPReceived,yn as isRTCPSent,Nn as isReceiveFAX,Pn as isRegistry,On as isReload,Bn as isRename,Qn as isRequestBadFormat,Hn as isRequestNotAllowed,kn as isRequestNotSupported,Gn as isSIPQualifyPeerDone,Fn as isSendFAX,Un as isSessionLimit,qn as isSessionTimeout,Vn as isShutdown,Xn as isSoftHangupRequest,Wn as isSpanAlarm,$n as isSpanAlarmClear,Jn as isStatus,zn as isStatusComplete,Yn as isSuccessfulAuth,Kn as isTransportDetail,Zn as isUnParkedCall,jn as isUnexpectedAddress,ei as isUnhold,ti as isUnload,ni as isUserEvent,ii as isVarSet,ri as isVoicemailPasswordChange,oi as isWink};
//# sourceMappingURL=index.js.map
