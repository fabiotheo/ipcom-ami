export interface IeAmiOptions {
    host: string;
    port: number;
    userName: string;
    password: string;
    additionalOptions?: IAddinionalOptions;
}
export interface IAddinionalOptions {
    debug?: boolean;
    resendTimeOut?: number;
    reconnect?: boolean;
    maxReconnectCount?: number;
    emitAllEvents?: boolean;
    heartbeatInterval?: number;
    excludeEvents?: string[];
}
