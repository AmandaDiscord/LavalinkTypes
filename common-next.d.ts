import {
	TrackInfo,
	TrackLoadingResult as TrackLoadingRslt,
	TrackStartEvent as TrackStartEvnt,
	TrackEndEvent as TrackEndEvnt,
	TrackStuckEvent as TrackStuckEvnt,
	TrackExceptionEvent as TrackExceptionEvnt,
	Filters,
	PluginMeta
} from "./common";

export type Player = {
	guildId: string;
	track: {
		encoded: string;
		info: TrackInfo;
	} | null;
	volume: number;
	paused: boolean;
	voice: VoiceState;
	filters: Filters | null;
}

export type VoiceState = {
	token: string;
	endpoint: string;
	sessionId: string;
	connected?: boolean;
	ping?: number;
}

export type UpdatePlayer = {
	encodedTrack: string;
	position?: number;
	endTime?: number;
	volume?: number;
	paused?: boolean;
	filters?: Filters;
	voice: VoiceState;
} | {
	identifier: string;
	position?: number;
	endTime?: number;
	volume?: number;
	paused?: boolean;
	filters?: Filters;
	voice: VoiceState;
}

export type LavalinkInfo = {
	version: Version;
	buildTime: number;
	git: Git;
	jvm: string;
	lavaplayer: string;
	sourceManagers: Array<string>;
	plugins: Array<PluginMeta>;
}

export type Version = {
	semver: string;
	major: number;
	minor: number;
	patch: number;
	preRelease?: string;
}

export type Git = {
	branch: string;
	commit: string;
	commitTime: number;
}

// overrides

export interface TrackLoadingResult extends TrackLoadingRslt {
	tracks: Array<{ encoded: string; info: TrackInfo; }>;
}

export interface TrackStartEvent extends TrackStartEvnt {
	encodedTrack: string;
}

export interface TrackEndEvent extends TrackEndEvnt {
	encodedTrack: string;
}

export interface TrackStuckEvent extends TrackStuckEvnt {
	encodedTrack: string;
}

export interface TrackExceptionEvent extends TrackExceptionEvnt {
	encodedTrack: string;
}

export type ReadyData = {
	resumed?: boolean;
	sessionId: string;
}
