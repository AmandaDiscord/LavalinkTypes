import type { Exception, Track } from "./Shared";

export type Player = {
	guildId: string;
	track: Track | null;
	volume: number;
	paused: boolean;
	voice: VoiceState;
	filters: Filters;
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

export type PlayerEventType = "TrackStartEvent" | "TrackEndEvent" | "TrackExceptionEvent" | "TrackStuckEvent" | "WebSocketClosedEvent";

type PlayerEventPayload<Event extends PlayerEventType, D = unknown> = { type: Event, guildId: string } & D;

export type TrackStartEventData = {
	encodedTrack: string;
};

export type TrackEndEventData = {
	encodedTrack: string;
	reason: TrackEndReason;
}

export type TrackEndReason = "FINISHED" | "LOAD_FAILED" | "STOPPED" | "REPLACED" | "CLEANUP";

export type TrackExceptionEventData = {
	encodedTrack: string;
	exception: Exception;
}

export type TrackStuckEventData = {
	encodedTrack: string;
	thresholdMs: number;
}

export type WebSocketClosedEventData = {
	code: 4001 | 4002 | 4003 | 4004 | 4005 | 4006 | 4009 | 4011 | 4012 | 4014 | 4015 | 4016;
	reason: string;
	byRemote: boolean;
}

export type TrackStartEvent = PlayerEventPayload<"TrackStartEvent", TrackStartEventData>;

export type TrackEndEvent = PlayerEventPayload<"TrackEndEvent", TrackEndEventData>;

export type TrackExceptionEvent = PlayerEventPayload<"TrackExceptionEvent", TrackExceptionEventData>;

export type TrackStuckEvent = PlayerEventPayload<"TrackStuckEvent", TrackStuckEventData>;

export type WebSocketClosedEvent = PlayerEventPayload<"WebSocketClosedEvent", WebSocketClosedEventData>;

export type PlayerEvent = TrackStartEvent | TrackEndEvent | TrackExceptionEvent | TrackStuckEvent | WebSocketClosedEvent;

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
	rotationHz?: number;
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
	smoothing?: number;
}

export type VoiceState = {
	token: string;
	endpoint: string;
	sessionId: string;
	connected?: boolean;
	ping?: number;
}
