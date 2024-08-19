export interface IeAmiOptions {
	host: string
	port: number
	userName: string
	password: string

	additionalOptions?: IAddinionalOptions
}
export interface IAddinionalOptions {

	//Output messages to the console
	debug?: boolean
	//Delay before resending a command (in seconds)
	resendTimeOut?: number
	//reconnect after timeout defibrillation
	reconnect?: boolean
	maxReconnectCount?: number
	emitAllEvents?: boolean

	//ping command frequency
	heartbeatInterval?: number

	//list of excluded events
	excludeEvents?: string[]
}