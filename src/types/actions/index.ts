export type ActionsBase<T> = {
  Response: 'Success' | 'Error';
  ActionID: number;
  Message: string;
  TimeEvent: number;
  Request: T;
};
