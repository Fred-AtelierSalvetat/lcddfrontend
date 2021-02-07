import { homeReducer } from './questions/questions.reducer';
import { combineReducers } from 'redux';
import { SpeakerReducer } from './speaker/speaker.reducer';

export const rootReducer = combineReducers({
    home: homeReducer,
    speakers: SpeakerReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
