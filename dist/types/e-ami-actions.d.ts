import { type eAmi } from "./index.js";
import type { I_ActionBridgeInfo, I_ActionBridgeList, I_ActionCoreShowChannels, I_ActionHangup, I_ActionLogin, I_ActionOriginate, I_ActionQueueAdd, I_ActionQueuePause, I_ActionQueuePenalty, I_ActionQueueRemove, I_ActionQueueStatus, I_ActionQueueSummary, I_ActionStatus } from "./interfaces/actions.interface.js";
import type { I_QueueMember, I_QueueMemberAdded, I_QueueMemberPause, I_QueueMemberPenalty, I_QueueMemberRemoved, I_QueueSummary } from "./interfaces/queue.js";
import type { I_Status } from "./interfaces/status.interface.js";
import type { I_BridgeInfoChannel, I_BridgeListItem } from "./interfaces/bridge.interface.js";
import type { I_CoreShowChannel } from "./interfaces/core-interface.js";
import type { I_DualHangup } from "./interfaces/hangup.interface.js";
export declare class eAmiActions {
    private eAmi;
    private timeOutAction;
    constructor(eAmi: eAmi);
    BridgeInfo(options: I_ActionBridgeInfo): Promise<I_BridgeInfoChannel>;
    BridgeList(options: I_ActionBridgeList): Promise<I_BridgeListItem[]>;
    CoreShowChannels(options: I_ActionCoreShowChannels): Promise<I_CoreShowChannel[]>;
    Hangup(options: I_ActionHangup): Promise<I_DualHangup>;
    Login(options: I_ActionLogin): Promise<boolean>;
    Logout(): Promise<boolean>;
    Originate(options: I_ActionOriginate): Promise<boolean>;
    Ping(): Promise<boolean>;
    QueueMemberAdd(options: I_ActionQueueAdd): Promise<I_QueueMemberAdded>;
    QueueMemberRemove(options: I_ActionQueueRemove): Promise<I_QueueMemberRemoved>;
    QueueMemberPenalty(options: I_ActionQueuePenalty): Promise<I_QueueMemberPenalty>;
    QueueMemberPause(options: I_ActionQueuePause): Promise<I_QueueMemberPause>;
    QueueStatus(options: I_ActionQueueStatus): Promise<I_QueueMember[]>;
    QueueSummary(options: I_ActionQueueSummary): Promise<I_QueueSummary>;
    Status(options: I_ActionStatus): Promise<I_Status>;
}
//# sourceMappingURL=e-ami-actions.d.ts.map