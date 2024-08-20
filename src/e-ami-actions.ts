import { _isNull, _isUndefined } from "./functions.js";
import { AMI_EVENTS, type eAmi } from "./index.js";
import type {
	I_ActionBridgeInfo,
	I_ActionBridgeList,
	I_ActionCoreShowChannels,
	I_ActionHangup,
	I_ActionLogin,
	I_ActionLogout,
	I_ActionOriginate,
	I_ActionPing,
	I_ActionQueueAdd,
	I_ActionQueuePause,
	I_ActionQueuePenalty,
	I_ActionQueueRemove,
	I_ActionQueueStatus,
	I_ActionQueueSummary,
	I_ActionStatus,
	I_Response,
} from "./interfaces/actions.interface.js";
import type {
	I_QueueMember,
	I_QueueMemberAdded,
	I_QueueMemberPause,
	I_QueueMemberPenalty,
	I_QueueMemberRemoved,
	I_QueueParams,
	I_QueueSummary,
} from "./interfaces/queue.js";
import type { I_Status } from "./interfaces/status.interface.js";

import type {
	I_BridgeInfoChannel,
	I_BridgeListComplete,
	I_BridgeListItem,
} from "./interfaces/bridge.interface.js";
import type {
	I_CoreShowChannel,
	I_CoreShowChannelsComplete,
} from "./interfaces/core-interface.js";
import type {
	I_DualHangup,
	I_Hangup,
	I_HangupRequest,
} from "./interfaces/hangup.interface.js";

export class eAmiActions {
	private eAmi: eAmi;
	private timeOutAction: number;

	constructor(eAmi: eAmi) {
		this.eAmi = eAmi;
		this.timeOutAction = 5000;
	}

	public BridgeInfo(options: I_ActionBridgeInfo): Promise<I_BridgeInfoChannel> {
		return new Promise<I_BridgeInfoChannel>((resolve, reject) => {
			(async () => {
				options.Action = "BridgeInfo";
				options.ActionID = new Date().getTime();

				const removeListener = () => {
					this.eAmi.events.removeListener(
						AMI_EVENTS.BRIDGE_INFO_CHANNEL,
						onBRIDGE_INFO_CHANNEL,
					);
				};

				const onBRIDGE_INFO_CHANNEL = (response: I_BridgeInfoChannel) => {
					resolve(response);
					removeListener();
				};

				this.eAmi.events.once(
					AMI_EVENTS.BRIDGE_INFO_CHANNEL,
					onBRIDGE_INFO_CHANNEL,
				);

				setTimeout(() => {
					reject(`Timeout to '${options.Action}' action, try again later...`);
				}, this.timeOutAction);

				try {
					const response = await this.eAmi.action<
						I_ActionBridgeInfo,
						I_Response
					>(options);
					if (response?.Response?.toLowerCase() === "error") {
						reject(response);
						removeListener();
					}
				} catch (error) {
					reject(error);
					removeListener();
				}
			})();
		});
	}

	public BridgeList(options: I_ActionBridgeList): Promise<I_BridgeListItem[]> {
		return new Promise<I_BridgeListItem[]>((resolve, reject) => {
			(async () => {
				if (_isUndefined(options)) reject(new Error("Options are undefined"));

				options.Action = "BridgeList";
				options.ActionID = new Date().getTime();

				let bridgeItemsCount = 0;
				const bridgeItems: I_BridgeListItem[] = [];

				const removeListener = () => {
					this.eAmi.events.removeListener(
						AMI_EVENTS.BRIDGE_LIST_COMPLETE,
						onBRIDGE_LIST_COMPLETE,
					);
					this.eAmi.events.removeListener(
						AMI_EVENTS.BRIDGE_LIST_ITEM,
						onBRIDGE_LIST_ITEM,
					);
				};

				const onBRIDGE_LIST_ITEM = (response: I_BridgeListItem) => {
					bridgeItems.push(response);

					if (bridgeItemsCount === bridgeItems.length) {
						resolve(bridgeItems);
						removeListener();
					}
				};

				const onBRIDGE_LIST_COMPLETE = (response: I_BridgeListComplete) => {
					bridgeItemsCount = response.ListItems;

					if (bridgeItemsCount === bridgeItems.length) {
						resolve(bridgeItems);
						removeListener();
					}
				};

				this.eAmi.events.once(
					AMI_EVENTS.BRIDGE_LIST_COMPLETE,
					onBRIDGE_LIST_COMPLETE,
				);
				this.eAmi.events.on(AMI_EVENTS.BRIDGE_LIST_ITEM, onBRIDGE_LIST_ITEM);

				setTimeout(() => {
					reject(
						new Error(
							`Timeout to '${options.Action}' action, try again later...`,
						),
					);
				}, this.timeOutAction);

				try {
					const response = await this.eAmi.action<
						I_ActionBridgeList,
						I_Response
					>(options);
					if (response?.Response?.toLowerCase() === "error") {
						reject(response);
						removeListener();
					}
				} catch (error) {
					reject(error);
					removeListener();
				}
			})();
		});
	}

	public CoreShowChannels(
		options: I_ActionCoreShowChannels,
	): Promise<I_CoreShowChannel[]> {
		return new Promise<I_CoreShowChannel[]>((resolve, reject) => {
			(async () => {
				if (_isUndefined(options)) reject(new Error("Options are undefined"));

				options.Action = "CoreShowChannels";

				let channelsCount = 0;
				const channels: I_CoreShowChannel[] = [];

				const removeListener = () => {
					this.eAmi.events.removeListener(
						AMI_EVENTS.CORE_SHOW_CHANNEL,
						onCORE_SHOW_CHANNEL,
					);
					this.eAmi.events.removeListener(
						AMI_EVENTS.CORE_SHOW_CHANNEL_COMPLETE,
						onCORE_SHOW_CHANNEL_COMPLETE,
					);
				};

				const onCORE_SHOW_CHANNEL = (response: I_CoreShowChannel) => {
					channels.push(response);

					if (channels.length === channelsCount) {
						resolve(channels);
						removeListener();
					}
				};

				const onCORE_SHOW_CHANNEL_COMPLETE = (
					response: I_CoreShowChannelsComplete,
				) => {
					channelsCount = response.ListItems;

					if (channels.length === channelsCount) {
						resolve(channels);
						removeListener();
					}
				};

				this.eAmi.events.once(
					AMI_EVENTS.CORE_SHOW_CHANNEL_COMPLETE,
					onCORE_SHOW_CHANNEL_COMPLETE,
				);
				this.eAmi.events.on(AMI_EVENTS.CORE_SHOW_CHANNEL, onCORE_SHOW_CHANNEL);

				setTimeout(() => {
					reject(
						new Error(
							`Timeout to '${options.Action}' action, try again later...`,
						),
					);
				}, this.timeOutAction);

				try {
					const response = await this.eAmi.action<
						I_ActionCoreShowChannels,
						I_Response
					>(options);
					if (response?.Response?.toLowerCase() === "error") {
						reject(response);
						removeListener();
					}
				} catch (error) {
					reject(error);
					removeListener();
				}
			})();
		});
	}

	public Hangup(options: I_ActionHangup): Promise<I_DualHangup> {
		return new Promise<I_DualHangup>((resolve, reject) => {
			(async () => {
				if (_isUndefined(options)) reject(new Error("Options are undefined"));

				options.Action = "Hangup";

				const hangup: I_DualHangup = {
					hangup: null,
					hangupRequest: null,
				};

				const removeListeners = () => {
					this.eAmi.events.removeListener(AMI_EVENTS.HANGUP, onHANGUP);
					this.eAmi.events.removeListener(
						AMI_EVENTS.HANGUP_REQUEST,
						onHANGUP_REQUEST,
					);
				};

				const onHANGUP = (h: I_Hangup) => {
					hangup.hangup = h;
					if (!_isNull(hangup.hangupRequest)) resolve(hangup);
					removeListeners();
				};

				const onHANGUP_REQUEST = (hr: I_HangupRequest) => {
					hangup.hangupRequest = hr;
					if (!_isNull(hangup.hangup)) resolve(hangup);
					removeListeners();
				};

				this.eAmi.events.once(AMI_EVENTS.HANGUP, onHANGUP);
				this.eAmi.events.once(AMI_EVENTS.HANGUP_REQUEST, onHANGUP_REQUEST);

				setTimeout(() => {
					reject(
						new Error(
							`Timeout to '${options.Action}' action, try again later...`,
						),
					);
				}, this.timeOutAction);

				try {
					const response = await this.eAmi.action<I_ActionHangup, I_Response>(
						options,
					);
					if (response?.Response?.toLowerCase() === "error") {
						reject(response);
						removeListeners();
					}
				} catch (error) {
					reject(error);
					removeListeners();
				}
			})();
		});
	}

	public Login(options: I_ActionLogin): Promise<boolean> {
		return new Promise<boolean>((resolve, reject) => {
			(async () => {
				if (_isUndefined(options)) reject(new Error("Options are undefined"));

				options.Action = "Login";
				options.ActionID = new Date().getTime();

				setTimeout(() => {
					reject(
						new Error(
							`Timeout to '${options.Action}' action, try again later...`,
						),
					);
				}, this.timeOutAction);

				try {
					const response = await this.eAmi.action<I_ActionLogin, I_Response>(
						options,
					);

					if (response.Response === "Success") resolve(true);
					else if (response.Response === "Error") reject(response);
					else resolve(true);
				} catch (error) {
					console.log("ERROR LOGIN", error);
					reject(error);
				}
			})();
		});
	}

	public Logout(): Promise<boolean> {
		return new Promise<boolean>((resolve, reject) => {
			(async () => {
				const actionId = new Date().getTime();

				setTimeout(() => {
					reject(new Error("Timeout to 'Logoff' action, try again later..."));
				}, this.timeOutAction);

				try {
					const response = await this.eAmi.action<I_ActionLogout, I_Response>({
						Action: "Logoff",
						ActionID: actionId,
					});

					if (this.eAmi.debug) console.log("logout-response", response);
					if (_isUndefined(response.Response)) reject(response);
					if (response.Response === "Goodbye") resolve(true);
					else reject(response);
				} catch (error) {
					reject(error);
				}
			})();
		});
	}

	public Originate(options: I_ActionOriginate): Promise<boolean> {
		return new Promise<boolean>((resolve, reject) => {
			(async () => {
				if (_isUndefined(options)) reject(new Error("Options are undefined"));

				options.Action = "Originate";
				options.ActionID = new Date().getTime();

				const removeListener = () => {
					this.eAmi.events.removeListener(
						`Action_${options.ActionID}`,
						onActionID,
					);
				};

				const onActionID = (response: unknown) => {
					if (
						typeof response === "object" &&
						response !== null &&
						"Message" in response
					) {
						const message = (response as { Message: string }).Message;

						if (_isUndefined(message)) {
							reject(new Error("Message is undefined"));
							removeListener();
							return;
						}

						if (message.toString().toLowerCase().indexOf("failed") >= 0) {
							reject(new Error("Action failed"));
							removeListener();
							return;
						}

						resolve(true);
						removeListener();
					} else {
						reject(new Error("Unexpected response format"));
						removeListener();
					}
				};

				this.eAmi.events.once(`Action_${options.ActionID}`, onActionID);

				setTimeout(() => {
					reject(
						new Error(
							`Timeout to '${options.Action}' action, try again later...`,
						),
					);
				}, this.timeOutAction);

				try {
					const response = await this.eAmi.action<
						I_ActionOriginate,
						I_Response
					>(options);
					if (response?.Response?.toLowerCase() === "error") {
						reject(response);
						removeListener();
					}
				} catch (error) {
					reject(error);
					removeListener();
				}
			})();
		});
	}

	public Ping(): Promise<boolean> {
		return new Promise<boolean>((resolve, reject) => {
			const actionID = new Date().getTime();
			let timeoutHandle: NodeJS.Timeout | null = null;

			// Iniciar o timeout
			timeoutHandle = setTimeout(() => {
				reject(new Error("Timeout to 'Ping' action, try again later..."));
			}, this.timeOutAction);

			(async () => {
				try {
					const response = await this.eAmi.action<I_ActionPing, I_Response>({
						Action: "Ping",
						ActionID: actionID,
					});

					// Cancela o timeout se o Ping foi bem-sucedido
					if (timeoutHandle) {
						clearTimeout(timeoutHandle);
					}

					if (response.Response === "Success" || response.Request?.Completed) {
						resolve(true);
					} else {
						reject(new Error("Ping action failed"));
					}
				} catch (error) {
					// Cancela o timeout em caso de erro
					if (timeoutHandle) {
						clearTimeout(timeoutHandle);
					}
					reject(error);
				}
			})();
		});
	}

	public QueueMemberAdd(
		options: I_ActionQueueAdd,
	): Promise<I_QueueMemberAdded> {
		return new Promise<I_QueueMemberAdded>((resolve, reject) => {
			(async () => {
				if (_isUndefined(options)) reject(new Error("Options are undefined"));

				options.Action = "QueueAdd";

				const removeListener = () => {
					this.eAmi.events.removeListener(
						AMI_EVENTS.Q_MEMBER_ADDED,
						onQ_MEMBER_ADDED,
					);
				};

				const onQ_MEMBER_ADDED = (response: I_QueueMemberAdded) => {
					resolve(response);
					removeListener();
				};

				this.eAmi.events.once(AMI_EVENTS.Q_MEMBER_ADDED, onQ_MEMBER_ADDED);

				setTimeout(() => {
					reject(
						new Error(
							`Timeout to '${options.Action}' action, try again later...`,
						),
					);
				}, this.timeOutAction);

				try {
					const response = await this.eAmi.action<I_ActionQueueAdd, I_Response>(
						options,
					);
					if (response?.Response?.toLowerCase() === "error") {
						reject(response);
						removeListener();
					}
				} catch (error) {
					reject(error);
					removeListener();
				}
			})();
		});
	}

	public QueueMemberRemove(
		options: I_ActionQueueRemove,
	): Promise<I_QueueMemberRemoved> {
		return new Promise<I_QueueMemberRemoved>((resolve, reject) => {
			(async () => {
				if (_isUndefined(options)) reject(new Error("Options are undefined"));

				options.Action = "QueueRemove";

				const removeListener = () => {
					this.eAmi.events.removeListener(
						AMI_EVENTS.Q_MEMBER_REMOVED,
						onQ_MEMBER_REMOVED,
					);
				};

				const onQ_MEMBER_REMOVED = (response: I_QueueMemberRemoved) => {
					resolve(response);
					removeListener();
				};

				this.eAmi.events.once(AMI_EVENTS.Q_MEMBER_REMOVED, onQ_MEMBER_REMOVED);

				setTimeout(() => {
					reject(
						new Error(
							`Timeout to '${options.Action}' action, try again later...`,
						),
					);
				}, this.timeOutAction);

				try {
					const response = await this.eAmi.action<
						I_ActionQueueRemove,
						I_Response
					>(options);
					if (response?.Response?.toLowerCase() === "error") {
						removeListener();
						reject(response);
					}
				} catch (error) {
					reject(error);
					removeListener();
				}
			})();
		});
	}

	public QueueMemberPenalty(
		options: I_ActionQueuePenalty,
	): Promise<I_QueueMemberPenalty> {
		return new Promise<I_QueueMemberPenalty>((resolve, reject) => {
			(async () => {
				if (_isUndefined(options)) reject(new Error("Options are undefined"));

				options.Action = "QueuePenalty";

				const removeListener = () => {
					this.eAmi.events.removeListener(
						AMI_EVENTS.Q_MEMBER_PENALTY,
						onQ_MEMBER_PENALTY,
					);
				};

				const onQ_MEMBER_PENALTY = (response: I_QueueMemberPenalty) => {
					resolve(response);
					removeListener();
				};

				this.eAmi.events.once(AMI_EVENTS.Q_MEMBER_PENALTY, onQ_MEMBER_PENALTY);

				setTimeout(() => {
					reject(
						new Error(
							`Timeout to '${options.Action}' action, try again later...`,
						),
					);
				}, this.timeOutAction);

				try {
					const response = await this.eAmi.action<
						I_ActionQueuePenalty,
						I_Response
					>(options);
					if (response?.Response?.toLowerCase() === "error") {
						reject(response);
						removeListener();
					}
				} catch (error) {
					reject(error);
					removeListener();
				}
			})();
		});
	}

	public QueueMemberPause(
		options: I_ActionQueuePause,
	): Promise<I_QueueMemberPause> {
		return new Promise<I_QueueMemberPause>((resolve, reject) => {
			(async () => {
				if (_isUndefined(options)) reject(new Error("Options are undefined"));

				options.Action = "QueuePause";

				const removeListener = () => {
					this.eAmi.events.removeListener(
						AMI_EVENTS.Q_MEMBER_PAUSE,
						onQ_MEMBER_PAUSE,
					);
				};

				const onQ_MEMBER_PAUSE = (response: I_QueueMemberPause) => {
					resolve(response);
					removeListener();
				};

				this.eAmi.events.once(AMI_EVENTS.Q_MEMBER_PAUSE, onQ_MEMBER_PAUSE);

				setTimeout(() => {
					reject(
						new Error(
							`Timeout to '${options.Action}' action, try again later...`,
						),
					);
				}, this.timeOutAction);

				try {
					const response = await this.eAmi.action<
						I_ActionQueuePause,
						I_Response
					>(options);
					if (response?.Response?.toLowerCase() === "error") {
						reject(response);
						removeListener();
					}
				} catch (error) {
					reject(error);
					removeListener();
				}
			})();
		});
	}

	public QueueStatus(options: I_ActionQueueStatus): Promise<I_QueueMember[]> {
		return new Promise<I_QueueMember[]>((resolve, reject) => {
			(async () => {
				if (_isUndefined(options)) reject(new Error("Options are undefined"));

				options.Action = "QueueStatus";

				const members: I_QueueMember[] = [];
				let countMembers = 0;

				const removeListener = () => {
					this.eAmi.events.removeListener(AMI_EVENTS.Q_MEMBER, onQ_MEMBER);
				};

				const onQ_MEMBER = (response: I_QueueMember) => {
					members.push(response);

					if (members.length === countMembers) {
						resolve(members);
						removeListener();
					}
				};

				this.eAmi.events.on(AMI_EVENTS.Q_MEMBER, onQ_MEMBER);

				setTimeout(() => {
					reject(
						new Error(
							`Timeout to '${options.Action}' action, try again later...`,
						),
					);
					removeListener();
					this.QueueStatus(options);
				}, this.timeOutAction);

				try {
					const summary: I_QueueSummary = await this.QueueSummary({
						Queue: options.Queue,
					});
					countMembers = summary.Available + summary.Callers + summary.LoggedIn;

					if (
						options.MembersCount !== undefined &&
						options.MembersCount !== null
					) {
						countMembers =
							countMembers === options.MembersCount
								? countMembers
								: options.MembersCount;
					} else {
						// Garanta que countMembers tenha um valor numérico mesmo que MembersCount seja undefined
						countMembers = 0;
					}

					if (this.eAmi.debug) {
						console.log(
							"Count queue members: available - %s, Callers - %s, LoggedIn - %s. Need count - %s",
							summary.Available,
							summary.Callers,
							summary.LoggedIn,
							options.MembersCount ?? null,
						);
					}

					const response = await this.eAmi.action<
						I_ActionQueueStatus,
						I_QueueParams
					>(options);

					if (
						typeof response === "object" &&
						response !== null &&
						"Response" in response
					) {
						if (response.Response?.toLowerCase() === "error") {
							reject(response);
							removeListener();
						} else {
							this.eAmi.events.emit(AMI_EVENTS.Q_PARAMS, response);
							removeListener();
						}
					}
				} catch (error) {
					reject(error);
					removeListener();
				}
			})();
		});
	}

	public QueueSummary(options: I_ActionQueueSummary): Promise<I_QueueSummary> {
		return new Promise<I_QueueSummary>((resolve, reject) => {
			(async () => {
				if (_isUndefined(options)) reject(new Error("Options are undefined"));

				options.Action = "QueueSummary";

				const removeListener = () => {
					this.eAmi.events.removeListener(AMI_EVENTS.Q_SUMMARY, onQ_SUMMARY);
				};

				const onQ_SUMMARY = (response: I_QueueSummary) => {
					resolve(response);
					removeListener();
				};

				this.eAmi.events.once(AMI_EVENTS.Q_SUMMARY, onQ_SUMMARY);

				setTimeout(() => {
					reject(
						new Error(
							`Timeout to '${options.Action}' action, try again later...`,
						),
					);
				}, this.timeOutAction);

				try {
					const response = await this.eAmi.action<
						I_ActionQueueSummary,
						I_Response
					>(options);
					if (response?.Response?.toLowerCase() === "error") {
						reject(response);
						removeListener();
					}
				} catch (error) {
					reject(error);
					removeListener();
				}
			})();
		});
	}

	public Status(options: I_ActionStatus): Promise<I_Status> {
		return new Promise<I_Status>((resolve, reject) => {
			(async () => {
				if (_isUndefined(options)) reject(new Error("Options are undefined"));

				options.Action = "Status";
				options.ActionID = new Date().getTime();

				const removeListener = () => {
					this.eAmi.events.removeListener(AMI_EVENTS.STATUS, onSTATUS);
				};

				const onSTATUS = (response: I_Status) => {
					resolve(response);
					removeListener();
				};

				this.eAmi.events.once(AMI_EVENTS.STATUS, onSTATUS);

				setTimeout(() => {
					reject(
						new Error(
							`Timeout to '${options.Action}' action, try again later...`,
						),
					);
				}, this.timeOutAction);

				try {
					const response = await this.eAmi.action<I_ActionStatus, I_Response>(
						options,
					);
					if (response?.Response?.toLowerCase() === "error") {
						reject(response);
						removeListener();
					}
				} catch (error) {
					reject(error);
					removeListener();
				}
			})();
		});
	}
}
