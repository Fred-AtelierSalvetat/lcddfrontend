import { ThunkAction } from 'redux-thunk';
import { LcddActions } from '../state/actions';
import { AppState } from '../state/reducers';
import { speakersRequested, speakersReceived } from '../state/speaker/speaker.action';
import { Speakers } from '../state/speaker/speaker.model';

export const fetchSpeakers = (): ThunkAction<void, AppState, unknown, LcddActions> => async (dispatch) => {
    dispatch(speakersRequested());
    const speakers = fakeData; // HERE DO THE FETCH
    dispatch(speakersReceived(speakers));

    // or dispatch(fetchSpeakersFailed());
    // https://www.digitalocean.com/community/tutorials/redux-redux-thunk
};

export const fakeData: Speakers = [
    {
        id: 0,
        name: 'Julien GENOVA',
        rool: '',
        description: 'Président Fondateur de La Chaine du Droit',
    },
    {
        id: 1,
        name: 'Ambroise ARMAND',
        rool: 'Juriste',
        description: 'Président Fondateur de La Chaine du Droit',
    },
    {
        id: 2,
        name: 'Ambroise ARMAND',
        rool: 'Juriste',
        description: 'Président Fondateur de La Chaine du Droit',
    },
    {
        id: 3,
        name: 'Ambroise ARMAND',
        rool: 'Juriste',
        description: 'Président Fondateur de La Chaine du Droit',
    },
    {
        id: 4,
        name: 'Ambroise ARMAND',
        rool: 'Juriste',
        description: 'Président Fondateur de La Chaine du Droit',
    },
    {
        id: 5,
        name: 'Ambroise ARMAND',
        rool: 'Juriste',
        description: 'Président Fondateur de La Chaine du Droit',
    },
    {
        id: 6,
        name: 'Ambroise ARMAND',
        rool: 'Juriste',
        description: 'Président Fondateur de La Chaine du Droit',
    },
    {
        id: 7,
        name: 'Ambroise ARMAND',
        rool: 'Juriste',
        description: 'Président Fondateur de La Chaine du Droit',
    },
];
