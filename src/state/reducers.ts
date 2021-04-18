import { homeReducer } from './questions/questions.reducer';
import { combineReducers } from 'redux';
import { SpeakerReducer } from './speaker/speaker.reducer';
import users from './users/reducer';
import alerts from './alerts/reducer';

import * as fromUsers from './users/selectors';
import * as fromAlerts from './alerts/selectors';
import userReducer from './user/reducer';
import { userRegistrationReducer } from './user/user.registation.reducer';
import { userAuthenticationReducer } from './user/user.authentication.reducer';

export const rootReducer = combineReducers({
    home: homeReducer,
    speakers: SpeakerReducer,
    users,
    alerts,
    registration: userRegistrationReducer,
    authentication: userAuthenticationReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const searchFilterSelector = (state) => fromUsers.searchFilterSelector(state.users);
export const getVisibleUsers = (state) => fromUsers.getVisibleUsers(state.users);
export const isRequestInProgress = (request_type) => (state) =>
    fromUsers.isRequestInProgress(state.users, request_type);
export const getRequestStatusMsgs = (state) => fromUsers.getRequestStatusMsgs(state.users);

export const getAlerts = (state) => fromAlerts.getAlerts(state.alerts);
