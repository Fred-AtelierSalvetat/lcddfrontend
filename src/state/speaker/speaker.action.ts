import { Speakers } from './speaker.model';

const SPEAKERS_REQUESTED = 'SPEAKERS_REQUESTED' as const;
const SPEAKERS_RECEIVED = 'SPEAKERS_RECEIVED' as const;
const FETCH_SPEAKERS_FAILED = 'FETCH_SPEKERS_FAILED' as const;

////////////////

export type SpeakersRequested = {
    type: typeof SPEAKERS_REQUESTED;
};

export const speakersRequested: () => SpeakersRequested = () => {
    return { type: SPEAKERS_REQUESTED };
};

//////////////

export type SpeakersReceived = {
    type: typeof SPEAKERS_RECEIVED;
    speakers: Speakers;
};

export const speakersReceived: (speakers: Speakers) => SpeakersReceived = (speakers) => ({
    type: SPEAKERS_RECEIVED,
    speakers,
});

////////////////

export type SpeakersActions = SpeakersRequested | SpeakersReceived;
//| SpeakersRequestedFailed;

////////////////
export type FetchSperkersFailed = {
    type: typeof FETCH_SPEAKERS_FAILED;
    error: Error;
};

export const fetchSpeakersFailed: (error: Error) => FetchSperkersFailed = (error) => ({
    type: FETCH_SPEAKERS_FAILED,
    error,
});
