export type OutboundHandshakeHeaders = {
	Authorization: string;
	"User-Id": string;
	"Client-Name": string;
	"Resume-Key"?: string;
}

export type InboundHandshakeHeaders = {
	"Session-Resumed"?: boolean;
	"Lavalink-Major-Version": string;
}

export type PlayerUpdate = {
	guildId: string;
	state: PlayerState;
}

export type PlayerState = {
	time: number;
	position?: number;
	connected: boolean;
	ping: number;
}

export type Stats = {
	players: number;
	playingPlayers: number;
	uptime: number;
	memory: MemoryStats;
	cpu: CPUStats;
	frameStats: FrameStats;
}

export type MemoryStats = {
	free: number;
	used: number;
	allocated: number;
	reservable: number;
}

export type CPUStats = {
	cores: number;
	systemLoad: number;
	lavalinkLoad: number;
}

export type FrameStats = {
	sent: number;
	nulled: number;
	deficit: number;
}

export type TrackStartEvent = {
	op: "event";
	type: "TrackStartEvent";
	guildId: string;
}

export type TrackEndEvent = {
	op: "event";
	type: "TrackEndEvent";
	guildId: string;
	reason: TrackEndReason;
}

export type TrackEndReason = "FINISHED" | "LOAD_FAILED" | "STOPPED" | "REPLACED" | "CLEANUP";

export type TrackExceptionEvent = {
	op: "event";
	type: "TrackExceptionEvent";
	guildId: string;
	exception: Exception;
}

export type Exception = {
	message: string;
	severity: Severity;
	cause: string;
}

export type Severity = "COMMON" | "SUSPICIOUS" | "FATAL";

export type TrackStuckEvent = {
	op: "event";
	type: "TrackStuckEvent";
	guildId: string;
	thresholdMs: number;
}

export type WebSocketClosedEvent = {
	op: "event";
	type: "WebSocketClosedEvent";
	guildId: string;
	code: 4001 | 4002 | 4003 | 4004 | 4005 | 4006 | 4009 | 4011 | 4012 | 4014 | 4015 | 4016;
	reason: string;
	byRemote: boolean;
}

export type Filters = {
	volume?: number;
	equalizer?: Array<Equalizer>;
	karaoke?: Karaoke;
	timescale?: Timescale;
	tremolo?: Tremolo;
	vibrato?: Vibrato;
	rotation?: Rotation;
	distortion?: Distortion;
	channelMix?: ChannelMix;
	lowPass?: LowPass;
}

export type Karaoke = {
	level?: number;
	monoLevel?: number;
	filterBand?: number;
	filterWidth?: number;
}

export type Equalizer = {
	band: number;
	gain: number;
}

export type Timescale = {
	speed?: number;
	pitch?: number;
	rate?: number;
}

export type Tremolo = {
	frequency?: number;
	depth?: number;
}

export type Vibrato = Tremolo;

export type Rotation = {
	rotationHz: number;
}

export type Distortion = {
	sinOffset?: number;
	sinScale?: number;
	cosOffset?: number;
	cosScale?: number;
	tanOffset?: number;
	tanScale?: number;
	offset?: number;
	scale?: number;
}

export type ChannelMix = {
	leftToLeft?: number;
	leftToRight?: number;
	rightToLeft?: number;
	rightToRight?: number;
}

export type LowPass = {
	smoothing: number;
}

export type TrackLoadingResult = {
	loadType: LoadType;
	playlistInfo?: PlaylistInfo;
	exception?: Exception;
}

export type LoadType = "TRACK_LOADED" | "PLAYLIST_LOADED" | "SEARCH_RESULT" | "NO_MATCHES" | "LOAD_FAILED";

export type PlaylistInfo = {
	name: string;
	selectedTrack: number;
}

export type TrackInfo = {
	identifier: string;
	isSeekable: boolean;
	author: string;
	length: number;
	isStream: boolean;
	position: number;
	title: string;
	uri: string | null;
	sourceName: string;
}

export type PluginMeta = {
	name: string;
	version: string;
}

export type RoutePlannerStatus = {
	class: RoutePlannerType | null;
	details: RoutePlannerDetails | null;
}

export type RoutePlannerType = "RotatingIpRoutePlanner" | "NanoIpRoutePlanner" | "RotatingNanoIpRoutePlanner";

export type RoutePlannerDetails = {
	ipBlock: IPBlock;
	failingAddresses: Array<FailingAddress>;
	rotateIndex: string;
	ipIndex: string;
	currentAddress: string;
	currentAddressIndex: string;
	blockIndex: string;
}

export type IPBlock = {
	type: IPBlockType;
	size: string;
}

export type IPBlockType = "Inet4Address" | "Inet6Address";

export type FailingAddress = {
	address: string;
	failingTimestamp: number;
	failingTime: string;
}
