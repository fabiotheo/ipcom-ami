import { EventEmitter } from "node:events";
import { Socket } from "node:net";
import {
	CRLF,
	DEFAULT_PORT,
	END,
	HEARTBEAT_INTERVAL,
	MAX_RECONNECT_COUNT,
	RESEND_TIMEOUT,
	_AMI_EVENTS,
	_eAMI_EVENTS,
} from "./constants.js";
import { eAmiActions } from "./e-ami-actions.js";
import {
	_indexOfArray,
	_isEmpty,
	_isFinite,
	_isNull,
	_isUndefined,
	_toNumber,
} from "./functions.js";
import type {
	I_ActionLogin,
	I_Request,
	I_Response,
} from "./interfaces/actions.interface.js";
import type { IeAmiOptions } from "./interfaces/configure.interface.js";
type Timer = ReturnType<typeof setTimeout>;

export * from "./typeGuards.js";
export * from "./types/events.js";

export const eAMI_EVENTS = _eAMI_EVENTS;
export const AMI_EVENTS = _AMI_EVENTS;

export class eAmi {
	public debug: boolean;

	private _host: string;
	private _port: number;
	private _userName: string;
	private _password: string;

	private _isLoggedIn: boolean;
	private _emitAllEvents: boolean;
	private _reconnect: boolean;
	private _heartbeatOk = false;

	private _lastConnectedTime = 0;
	private _maxReconnectCount: number;
	private _heartbeatInterval: number;
	private _heartbeatHandler?: Timer = undefined; // ou Timer | null = null;

	private _resendTimeOut: number;
	private _successBitsByInterval: number;
	private _errorBitsByInterval: number;

	private _countReconnect: number;

	private _excludeEvents: string[];

	private _queueRequest: I_Request[];
	public _socketHandler?: Socket = undefined;
	private _actions: eAmiActions;
	public events: EventEmitter;

	private _maxAuthCount: number;
	private _authCount: number;

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
	constructor(allOptions: IeAmiOptions) {
		const connect = allOptions;
		const options = _isUndefined(connect.additionalOptions)
			? {}
			: connect.additionalOptions;

		this._host = connect.host;
		this._port = _isNull(connect.port) ? DEFAULT_PORT : connect.port;
		this._userName = connect.userName;
		this._password = connect.password;

		this._reconnect = options?.reconnect ?? true;
		this._heartbeatInterval =
			(options?.heartbeatInterval ?? HEARTBEAT_INTERVAL) * 1000;
		this._resendTimeOut = (options?.resendTimeOut ?? RESEND_TIMEOUT) * 1000;
		this._excludeEvents = options?.excludeEvents ?? [];
		this._emitAllEvents = options?.emitAllEvents ?? false;
		this.debug = options?.debug ?? false;
		this._maxReconnectCount = options?.maxReconnectCount ?? MAX_RECONNECT_COUNT;

		this._countReconnect = 0;
		this._maxAuthCount = 5;
		this._authCount = 0;
		this._successBitsByInterval = 0;
		this._errorBitsByInterval = 0;

		this.events = new EventEmitter();

		this._queueRequest = [];

		this._isLoggedIn = false;

		this._actions = new eAmiActions(this);

		this.internalListeners();
	}

	private internalListeners() {
		this.events.on(eAMI_EVENTS.RE_LOGIN, () => {
			if (this._authCount < this._maxAuthCount) {
				setTimeout(async () => {
					this._authCount++;
					try {
						await this.login();
					} catch (error) {
						if (this.debug) console.log("re-login", error);
					}
				}, 1000);
			}
		});
	}

	get excludeEvents(): string[] {
		return this._excludeEvents;
	}

	set excludeEvents(events: string[]) {
		this._excludeEvents = events;
	}

	get isLoggedIn(): boolean {
		return this._isLoggedIn;
	}

	get lastConnectTime(): number {
		return this._lastConnectedTime;
	}

	get actions(): eAmiActions {
		return this._actions;
	}

	get queueRequest(): I_Request[] {
		return this._queueRequest;
	}

	private addSocketListeners(): void {
		if (this._socketHandler) {
			this._socketHandler
				.on("close", () => {
					if (this.debug) console.log("close AMI connect");
					this.events.emit(eAMI_EVENTS.CLOSE); // Emitindo evento de fechamento personalizado
				})
				.on("end", () => {
					if (this.debug) console.log("end AMI connect");
					this.events.emit(eAMI_EVENTS.CLOSE); // Também emitindo evento de fechamento em 'end'
				})
				.on("data", (buffer: Buffer) => this.getData(buffer));
		} else {
			if (this.debug)
				console.log("Socket handler is undefined, cannot add listeners.");
		}
	}

	public destroySocket(): void {
		if (this._socketHandler) {
			this._socketHandler.destroy();
			if (this.debug) console.log(`${CRLF}Socket connection destroyed`);
		} else {
			if (this.debug)
				console.log("Socket handler is undefined, cannot destroy socket.");
		}
	}

	private addRequest(request: I_Request): void {
		this.queueRequest.push(request);
		this.events.emit(eAMI_EVENTS.SEND, request);
	}

	private removeRequest(actionID: unknown): boolean {
		if (_isUndefined(actionID)) return false;

		const index: number = _indexOfArray(this.queueRequest, actionID);

		if (index < 0) return false;
		try {
			this.queueRequest.splice(index, 1);
			return true;
		} catch (error) {
			if (this.debug) console.log("Error remove request", error);
			return false;
		}
	}

	public getRequest(actionID: unknown): I_Request | null {
		if (_isUndefined(actionID)) return null;

		const numActionID = _toNumber(actionID);
		const searchID =
			numActionID !== undefined && Number.isFinite(numActionID)
				? numActionID
				: actionID;

		const index: number = _indexOfArray(this.queueRequest, searchID);

		if (index < 0) return null;

		return this.queueRequest[index];
	}

	private setRequest(actionID: unknown, newRequest: I_Request): void {
		let request = this.getRequest(actionID);

		if (!request) return;

		request = newRequest;
	}

	private keepConnection(): void {
		clearInterval(this._heartbeatHandler as Timer);

		const sendPing = async () => {
			try {
				const response: boolean = await this.actions.Ping();

				if (response) {
					this._heartbeatOk = true;
					this._successBitsByInterval++;
				} else {
					this._errorBitsByInterval++;
				}

				// Programa o próximo ping
				this._heartbeatHandler = setTimeout(
					() => sendPing(),
					this._heartbeatInterval,
				);
			} catch (error) {
				this._errorBitsByInterval++;
				if (this.debug) console.log("keep connect error", error);

				// Programa o próximo ping mesmo após um erro
				this._heartbeatHandler = setTimeout(
					() => sendPing(),
					this._heartbeatInterval,
				);
			}
		};

		// Inicia o primeiro ping sem await, pois estamos lidando com promessas internamente
		sendPing().catch((error) => {
			if (this.debug) console.log("Initial ping error", error);
		});
	}

	private login(): Promise<boolean> {
		return new Promise((resolve, reject) => {
			(async () => {
				try {
					const loginOptions: I_ActionLogin = {
						Username: this._userName,
						Secret: this._password,
					};

					this.events.emit(eAMI_EVENTS.DO_LOGIN, loginOptions);

					await this.actions.Login(loginOptions);

					this.events.emit(eAMI_EVENTS.LOGGED_IN);

					resolve(true);
				} catch (error0) {
					this.events.emit(
						eAMI_EVENTS.ERROR_LOGIN,
						error0,
						"Authorization failed...",
					);

					if (this._authCount < this._maxAuthCount) {
						setTimeout(() => {
							this._authCount++;
							this.events.emit(eAMI_EVENTS.RE_LOGIN, this._authCount);
						}, 1000);
					} else {
						this.events.emit(eAMI_EVENTS.MAX_AUTH_REACH, this._authCount);

						try {
							await this.reconnect();
						} catch (error1) {
							reject(error1);
						}
					}
				}
			})();
		});
	}

	private logout(): Promise<boolean> {
		return new Promise((resolve, reject) => {
			(async () => {
				try {
					await this.actions.Logout();

					resolve(true);
				} catch (error) {
					this.events.emit(eAMI_EVENTS.ERROR_LOGOUT, error);
					reject("Failed to logout");
				}
			})();
		});
	}

	private showSendPackages(): void {
		setInterval(() => {
			console.log(
				"Keep Connection. success sent - %s, error sent - %s",
				this._successBitsByInterval,
				this._errorBitsByInterval,
			);
		}, 5000);
	}

	public connect(): Promise<this | boolean> {
		return new Promise((resolve, reject) => {
			this._socketHandler = new Socket();
			this._socketHandler.connect(this._port, this._host);

			this._socketHandler
				.on("connect", async () => {
					this.addSocketListeners();

					try {
						if (this.debug) console.log("Connected to the server");

						// Executa o login no AMI
						await this.login();

						// Define como conectado
						this._isLoggedIn = true;
						this._lastConnectedTime = new Date().getTime();

						// Inicia o monitoramento de heartbeat
						if (this.debug) this.showSendPackages();
						await this.keepConnection();

						// Dispara evento de conexão
						this.events.emit(eAMI_EVENTS.CONNECT);

						// Confirma que está conectado
						resolve(this);
					} catch (error) {
						if (this.debug) console.log("Connection error:", error);
						reject(error);
					}
				})
				.on("error", (error) => {
					this.events.emit(
						eAMI_EVENTS.ERROR_CONNECT,
						error,
						"Error connecting to an Asterisk server",
					);
					if (this.debug)
						console.log("Error connecting to the Asterisk server", error);
					reject(false);
				})
				.on("close", () => {
					if (this.debug) console.log("Connection closed");
					this._isLoggedIn = false;
				});
		});
	}

	public reconnect(): Promise<boolean> {
		if (!this._reconnect) return Promise.resolve(true);
		if (this._countReconnect < this._maxReconnectCount) this._countReconnect++;
		else {
			this.events.emit(eAMI_EVENTS.MAX_RECONNECT_REACH, this._countReconnect);
			return Promise.resolve(false);
		}

		return new Promise((resolve, reject) => {
			(async () => {
				try {
					this.events.emit(eAMI_EVENTS.DO_RECONNECT);

					await this.logout();
					this.destroySocket();
					await this.connect();

					this.events.emit(eAMI_EVENTS.RECONNECTED);
					resolve(true);
				} catch (error) {
					this.events.emit(
						eAMI_EVENTS.ERROR_RECONNECT,
						error,
						"Could not connect to Asterisk...",
					);
					reject("Could not connect to Asterisk...");
				}
			})();
		});
	}

	public action<T extends I_Request, R>(request: T): Promise<R> {
		return new Promise((resolve, reject) => {
			let writed = false;
			let message = "";

			for (const key in request) {
				if (key === "ActionID") continue;
				message += `${key}: ${request[key]}${CRLF}`;
			}

			if (_isUndefined(request.ActionID))
				request.ActionID = new Date().getTime();
			const actionID = request.ActionID;

			message += `ActionID: ${actionID}${CRLF}${CRLF}`;

			const _request = this.getRequest(actionID);

			// handlers for resolve
			if (_request !== null && _request !== undefined) {
				this.events.once(`Action_${actionID}`, (response: R) => {
					_request.Completed = true;

					if (this.debug)
						console.log("response", _request.ActionID, _request.Action);

					resolve(response);
				});
			} else {
				this.events.once(`Action_${actionID}`, (response: R) => {
					resolve(response);
				});
			}

			const numActionID = _toNumber(actionID);
			if (numActionID !== undefined && !_isFinite(numActionID)) {
				this.events.once(String(actionID), (response: R) => {
					if (_request !== null && _request !== undefined) {
						_request.Completed = true;
					}
					resolve(response);
				});
			}

			this.addRequest(request);

			if (_request) {
				const actionIDNumber = _toNumber(request.ActionID);

				if (typeof actionIDNumber === "number" && _isFinite(actionIDNumber)) {
					_request.ActionID = actionIDNumber;
				} else if (
					typeof request.ActionID === "string" ||
					typeof request.ActionID === "number"
				) {
					_request.ActionID = request.ActionID;
				} else {
					_request.ActionID = undefined;
				}

				_request.Completed = true;
				_request.timeOutHandler = setTimeout(async () => {
					if (!writed) {
						reject("Timeout write to socket...");
						return;
					}

					if (_request.Completed === true) {
						try {
							await this.action(request);
						} catch (error) {
							if (this.debug)
								console.log("Error resend action", _request.Action, error);
							reject(`Error resend action${_request.Action}${error}`);
						}

						this._errorBitsByInterval++;
						if (this.debug)
							console.log(`resend ActionID_${actionID}`, _request.Action);
						return;
					}

					clearTimeout(_request.timeOutHandler as Timer);
					this.removeRequest(actionID);
					this.events.removeAllListeners(String(actionID));
					this.events.removeAllListeners(`Action_${actionID}`);
					if (this.debug) console.log(`complete ${actionID}`, _request.Action);
				}, 3000);
			}

			const write = this._socketHandler?.write(message, () => {
				writed = true;
			});

			if (write === false) {
				if (this.debug) console.log("Data in the sending queue");
				reject("Data in the sending queue");
			}
		});
	}

	private getData(buffer: Buffer): I_Response {
		let dataStr: string = buffer.toString();
		let iDelim: number;
		let typeResponse = "";
		let dataArray: string[] = [];
		let keyValueArray: string[] = [];
		let key = "";
		let value: string | number | null = null;
		let dataObject: I_Response = {};

		if (dataStr.startsWith("Asterisk Call Manager")) {
			dataStr = dataStr.substring(dataStr.indexOf(CRLF) + 2);
		}

		while (true) {
			iDelim = dataStr.indexOf(END);
			if (iDelim < 0) break;

			dataArray = dataStr.substring(0, iDelim + 2).split(CRLF);
			dataStr = dataStr.substring(iDelim + 4);
			dataObject = {};
			typeResponse = "";
			keyValueArray = [];

			for (let index = 0; index < dataArray.length; index++) {
				if (dataArray[index].indexOf(": ") < 0) continue;

				keyValueArray = dataArray[index].split(": ", 2);
				key = keyValueArray[0].replace("'", "");
				value = keyValueArray[1];
				typeResponse = index === 0 ? key.toLowerCase() : typeResponse;

				if (key === "ActionID") {
					const actionIDNumber = _toNumber(value);
					dataObject[key] =
						actionIDNumber !== undefined && _isFinite(actionIDNumber)
							? actionIDNumber
							: value;
					continue;
				}

				const valueNumber = _toNumber(value);
				if (valueNumber !== undefined && _isFinite(valueNumber)) {
					value = valueNumber;
				} else if (value && value.indexOf("unknown") >= 0) {
					value = null;
				} else if (_isEmpty(value)) {
					value = null;
				} else if (
					value &&
					value.toLowerCase().indexOf("s") === 0 &&
					value.length === 1
				) {
					value = null;
				}

				dataObject[key] = value ?? undefined;
			}

			dataObject.TimeEvent = Date.now();

			const request = this.getRequest(dataObject.ActionID);
			dataObject.Request = request !== null ? request : undefined;

			const actionIDNumber = _toNumber(dataObject.ActionID);
			if (actionIDNumber !== undefined && _isFinite(actionIDNumber)) {
				this.events.emit(`Action_${actionIDNumber}`, dataObject);
			} else if (typeof dataObject.ActionID === "string") {
				this.events.emit(dataObject.ActionID, dataObject);
			}

			switch (typeResponse) {
				case "response":
					if (this.debug)
						console.log(eAMI_EVENTS.RESPONSE, CRLF, dataObject, CRLF);
					this.events.emit(eAMI_EVENTS.RESPONSE, dataObject);
					break;
				case "event":
					if (this.debug)
						console.log(eAMI_EVENTS.EVENTS, CRLF, dataObject, CRLF);
					if (
						dataObject.Event !== undefined &&
						dataObject.Event !== null &&
						dataObject.Event !== "" &&
						this.excludeEvents.indexOf(dataObject.Event) < 0
					) {
						if (this._emitAllEvents) {
							this.events.emit(eAMI_EVENTS.EVENTS, dataObject);
						}
						this.events.emit(dataObject.Event, dataObject);
					}
					break;
				default:
					break;
			}
		}

		return dataObject;
	}
}
