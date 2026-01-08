export type ActionQueuePause = {
  Action: 'QueuePause';
  Interface: string;
  Queue: string;
  Paused: boolean;
  Reason?: string;
  ActionID: number;
};
