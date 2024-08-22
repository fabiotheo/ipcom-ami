import { EventEmitter } from "node:events";
import { Socket } from "node:net";
import { eAmiActions } from "./e-ami-actions.js";
import type { I_Request } from "./interfaces/actions.interface.js";
import type { IeAmiOptions } from "./interfaces/configure.interface.js";
export * from "./typeGuards.js";
export * from "./types/events.js";
export declare const eAMI_EVENTS: {
    CONNECT: string;
    DO_RECONNECT: string;
    RECONNECTED: string;
    MAX_RECONNECT_REACH: string;
    MAX_AUTH_REACH: string;
    DO_LOGIN: string;
    RE_LOGIN: string;
    LOGGED_IN: string;
    SEND: string;
    EVENTS: string;
    RESPONSE: string;
    ERROR_CONNECT: string;
    ERROR_LOGIN: string;
    ERROR_LOGOUT: string;
    ERROR_RECONNECT: string;
};
export declare const AMI_EVENTS: {
    BRIDGE_CREATE: string;
    BRIDGE_DESTROY: string;
    BRIDGE_ENTER: string;
    BRIDGE_INFO_CHANNEL: string;
    BRIDGE_INFO: string;
    BRIDGE_LEAVE: string;
    BRIDGE_MERGE: string;
    BRIDGE_LIST_ITEM: string;
    BRIDGE_LIST_COMPLETE: string;
    CEL: string;
    CORE_SHOW_CHANNEL: string;
    CORE_SHOW_CHANNEL_COMPLETE: string;
    DIAL1: string;
    DIAL2: string;
    DIAL_STATE: string;
    DTMF1: string;
    DTMF2: string;
    HANGUP: string;
    HANGUP_REQUEST: string;
    HOLD: string;
    NEW_CALLERID: string;
    NEW_CHANNEL: string;
    NEW_CONNECTED_LINE: string;
    NEW_EXTEN: string;
    NEW_STATE: string;
    ORIGINATE_RESPONSE: string;
    Q_SUMMARY: string;
    Q_PARAMS: string;
    Q_MEMBER_ADDED: string;
    Q_MEMBER_PAUSE: string;
    Q_MEMBER_REMOVED: string;
    Q_MEMBER_PENALTY: string;
    Q_MEMBER_RING_IN_USE: string;
    Q_MEMBER: string;
    Q_MEMBER_STATUS: string;
    RTCP_SENT: string;
    RTCP_RECEIVED: string;
    STATUS: string;
};
export declare class eAmi {
    debug: boolean;
    private _host;
    private _port;
    private _userName;
    private _password;
    private _isLoggedIn;
    private _emitAllEvents;
    private _reconnect;
    private _heartbeatOk;
    private _lastConnectedTime;
    private _maxReconnectCount;
    private _heartbeatInterval;
    private _heartbeatHandler?;
    private _resendTimeOut;
    private _successBitsByInterval;
    private _errorBitsByInterval;
    private _countReconnect;
    private _excludeEvents;
    private _queueRequest;
    _socketHandler?: Socket;
    private _actions;
    events: EventEmitter;
    private _maxAuthCount;
    private _authCount;
    /**
     * Creates a new instance of the AMI connection.
     *
     * @constructor
     * @param {IeAmiOptions} allOptions - Object containing all the necessary options to configure the connection.
     * @param {string} allOptions.host - The address of the AMI server.
     * @param {number} [allOptions.port=5038] - The port of the AMI server. If not specified, the default port 5038 will be used.
     * @param {string} allOptions.userName - The username for AMI authentication.
     * @param {string} allOptions.password - The password for AMI authentication.
     * @param {Object} [allOptions.additionalOptions] - Additional configuration options.
     * @param {boolean} [allOptions.additionalOptions.reconnect=true] - Whether to automatically reconnect in case of connection failure.
     * @param {number} [allOptions.additionalOptions.heartbeatInterval=5] - Interval in seconds to send heartbeat packets.
     * @param {number} [allOptions.additionalOptions.resendTimeOut=5] - Timeout in seconds to resend requests that failed.
     * @param {Array<string>} [allOptions.additionalOptions.excludeEvents=[]] - List of events that should be ignored.
     * @param {boolean} [allOptions.additionalOptions.emitAllEvents=false] - Whether to emit all events, even those in the excludeEvents list.
     * @param {boolean} [allOptions.additionalOptions.debug=false] - Whether to enable debug mode, which prints detailed logs.
     * @param {number} [allOptions.additionalOptions.maxReconnectCount=5] - Maximum number of reconnection attempts before giving up.
     */
    constructor(allOptions: IeAmiOptions);
    private internalListeners;
    get excludeEvents(): string[];
    set excludeEvents(events: string[]);
    get isLoggedIn(): boolean;
    get lastConnectTime(): number;
    get actions(): eAmiActions;
    get queueRequest(): I_Request[];
    private addSocketListeners;
    destroySocket(): void;
    private addRequest;
    private removeRequest;
    getRequest(actionID: unknown): I_Request | null;
    private setRequest;
    private keepConnection;
    private login;
    private logout;
    private showSendPackages;
    connect(): Promise<this | boolean>;
    reconnect(): Promise<boolean>;
    action<T extends I_Request, R>(request: T): Promise<R>;
    private getData;
}
//# sourceMappingURL=index.d.ts.map