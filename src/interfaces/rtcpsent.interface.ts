//Raised when an RTCP packet is sent.
export interface I_RTCPSent {
	Event: 'RTCPSent',
	Privilege: string 					//'reporting,all',
	Channel: string 					//'SIP/105-000461ca',
	ChannelState: number 				//4,
	ChannelStateDesc: string 			//'Ring',
	CallerIDNum: number 				//110,
	CallerIDName: string 				//110 test,
	ConnectedLineNum: number 			//null,
	ConnectedLineName: string 			//null,
	Language: string 					//'ru',
	AccountCode: number 				//0,
	Context: string 					//'callcenter',
	Exten: number 						//891*****387,
	Priority: number 					//1,
	Uniqueid: number 					//1528531544.589918,
	Linkedid: number 					//1528531521.589916,
	To: string   						//'10.0.12.47:15001',
	//The address the report was received from.
	From: string 						//'10.0.14.33:18539',
	//The SSRC identifier for the remote system
	SSRC: number 						//913***63,
	//The type of packet for this RTCP report.
	PT: "200(SR)" | "201(SR)" 			//'200(SR)',
	//The number of reports that were received.
	//The report count determines the number of ReportX headers in the message.
	// The X for each set of report headers will range from 0 to ReportCount - 1.
	ReportCount: number 				// 1,
	//The time the sender generated the report. Only valid when PT is 200(SR).
	SentNTP: number 					//1528531551.953682,
	//The sender's last RTP timestamp. Only valid when PT is 200(SR).
	SentRTP: number 					//2075878680,
	//The number of packets the sender has sent. Only valid when PT is 200(SR).
	SentPackets: number 				//251,
	//The number of bytes the sender has sent. Only valid when PT is 200(SR).
	SentOctets: number 					//40160,
	//The SSRC for the source of this report block.
	Report0SourceSSRC: number 			//18762,
	//The fraction of RTP data packets from ReportXSourceSSRC lost since the previous SR or RR report was sent.
	Report0FractionLost: number 		//0,
	//he total number of RTP data packets from ReportXSourceSSRC lost since the beginning of reception.
	Report0CumulativeLost: number 		//0,
	//The highest sequence number received in an RTP data packet from ReportXSourceSSRC.
	Report0HighestSequence: number 		//32839,
	//The number of sequence number cycles seen for the RTP data received from ReportXSourceSSRC.
	Report0SequenceNumberCycles: number //0,
	// An estimate of the statistical variance of the RTP data packet interarrival time, measured in timestamp units.
	Report0IAJitter: number 			//3,
	Report0LSR: number 					//0,
	Report0DLSR: number 				//0,
}

//Raised when an RTCP packet is received.
export interface I_RTCPReceived {
	Event: 'RTCPReceived',
	Privilege: string 					//'reporting,all',
	Channel: string 					//'SIP/110-000463cb',
	ChannelState: number 				//4,
	ChannelStateDesc: string 			//'Ring',
	CallerIDNum: number 				//110,
	CallerIDName: string 				//'110 test',
	ConnectedLineNum: number 			//null,
	ConnectedLineName: string 			//null,
	Language: string 					//'ru',
	AccountCode: number 				//0,
	Context: string 					//'callcenter',
	Exten: number 						//891*****387,
	Priority: number 					//3,
	Uniqueid: number 					//1528532694.589938,
	Linkedid: number 					//1528532694.589938,
	To: string   						//'10.0.14.33:18539',
	//The address the report was received from.
	From: string 						//'10.0.12.47:15001',
	//The SSRC identifier for the remote system
	SSRC: number 						//4****3357,
	//The type of packet for this RTCP report.
	PT: "200(SR)" | "201(SR)" 			//'200(SR)',
	//The number of reports that were received.
	//The report count determines the number of ReportX headers in the message.
	// The X for each set of report headers will range from 0 to ReportCount - 1.
	ReportCount: number 				// 1,
	//The time the sender generated the report. Only valid when PT is 200(SR).
	SentNTP: number 					//1528532574.173034,
	//The sender's last RTP timestamp. Only valid when PT is 200(SR).
	SentRTP: number 					//3741925649,
	//The number of packets the sender has sent. Only valid when PT is 200(SR).
	SentPackets: number 				//238,
	//The number of bytes the sender has sent. Only valid when PT is 200(SR).
	SentOctets: number 					//38080,
	//The SSRC for the source of this report block.
	Report0SourceSSRC: number 			//2100990771,
	//The fraction of RTP data packets from ReportXSourceSSRC lost since the previous SR or RR report was sent.
	Report0FractionLost: number 		//0,
	//he total number of RTP data packets from ReportXSourceSSRC lost since the beginning of reception.
	Report0CumulativeLost: number 		//0,
	//The highest sequence number received in an RTP data packet from ReportXSourceSSRC.
	Report0HighestSequence: number 		//32839,
	//The number of sequence number cycles seen for the RTP data received from ReportXSourceSSRC.
	Report0SequenceNumberCycles: number //0,
	// An estimate of the statistical variance of the RTP data packet interarrival time, measured in timestamp units.
	Report0IAJitter: number 			//3,
	Report0LSR: number 					//0,
	Report0DLSR: number 				//0,

}