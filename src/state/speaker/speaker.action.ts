import { Speakers } from './speaker.model';

////////////////

export const speakersRequested = () => {
    return { type: 'SPEAKERS_REQUESTED' as const };
};

export type SpeakersRequested = ReturnType<typeof speakersRequested>;

//////////////

export const speakersReceived = (speakers: Speakers) => ({
    type: 'SPEAKERS_RECEIVED' as const,
    speakers,
});

export type SpeakersReceived = ReturnType<typeof speakersReceived>;

////////////////

export type SpeakersActions = SpeakersRequested | SpeakersReceived;
//| SpeakersRequestedFailed;

////////////////

export const fetchSpeakersFailed = (error: Error) => ({
    type: 'FETCH_SPEKERS_FAILED' as const,
    error,
});

export type FetchSperkersFailed = ReturnType<typeof fetchSpeakersFailed>;
