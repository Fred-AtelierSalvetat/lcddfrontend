import { LcddActions } from '../actions';
import { SpeakersState, initialSpeakersState } from './speaker.model';

export function SpeakerReducer(state: SpeakersState = initialSpeakersState, action: LcddActions): SpeakersState {
    switch (action.type) {
        case 'SPEAKERS_RECEIVED':
            return { ...state, speakers: action.speakers };

        default:
            return state;
    }
}
