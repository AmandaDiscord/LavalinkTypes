import {
	TrackInfo,
	TrackLoadingResult as TrackLoadingRslt,
	TrackStartEvent as TrackStartEvnt,
	TrackEndEvent as TrackEndEvnt,
	TrackStuckEvent as TrackStuckEvnt,
	TrackExceptionEvent as TrackExceptionEvnt
} from "./common";

export * from "./common";

// WS data

export type PlayData = {
	op: "play";
	guildId: string;
	track: string;
	startTime?: number;
	endTime?: number;
	volume?: number;
	noReplace?: boolean;
	pause?: boolean;
}

export type StopData = {
	op: "stop";
	guildId: string;
}

export type PauseData = {
	op: "pause";
	guildId: string;
	pause: boolean;
}

export type SeekData = {
	op: "seek";
	guildId: string;
	position: number;
}

export type VolumeData = {
	op: "volume";
	guildId: string;
	volume: number;
}

export type DestroyData = {
	op: "destroy";
	guildId: string;
}

// overrides

export interface TrackLoadingResult extends TrackLoadingRslt {
	tracks: Array<{ track: string; info: TrackInfo; }>;
}

export interface TrackStartEvent extends TrackStartEvnt {
	track: string;
}

export interface TrackEndEvent extends TrackEndEvnt {
	track: string;
}

export interface TrackStuckEvent extends TrackStuckEvnt {
	track: string;
}

export interface TrackExceptionEvent extends TrackExceptionEvnt {
	track: string;
}

export type Event = TrackStartEvent | TrackEndEvent | TrackExceptionEvent | TrackStuckEvent;

export const version: "v3-current";
