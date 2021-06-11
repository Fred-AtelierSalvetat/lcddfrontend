import { homeReducer } from './questions/questions.reducer';
import { combineReducers } from 'redux';
import { SpeakerReducer } from './speaker/speaker.reducer';
import users from './users/reducer';
import alerts from './alerts/reducer';
import { Alert } from './alerts/model';

import * as fromUsers from './users/selectors';
import * as fromAlerts from './alerts/selectors';
import * as fromUser from './user/selectors';

import { userRegistrationReducer } from './user/user.registation.reducer';
import { userAuthenticationReducer } from './user/user.authentication.reducer';

import { RootStateType } from './store';
import { UsersActionType } from './users/constants/ActionTypes';
import { User, UIfiltersRoles, UIfiltersSearch } from './users/model';

export const reducersList = {
    home: homeReducer,
    speakers: SpeakerReducer,
    users,
    alerts,
    registration: userRegistrationReducer,
    authentication: userAuthenticationReducer,
};

export const rootReducer = combineReducers(reducersList);

export type AppState = ReturnType<typeof rootReducer>;

export const rolesFilterSelector = (state: RootStateType): UIfiltersRoles => fromUsers.rolesFilterSelector(state.users);
export const searchFilterSelector = (state: RootStateType): UIfiltersSearch =>
    fromUsers.searchFilterSelector(state.users);
export const getVisibleUsers = (state: RootStateType): User[] => fromUsers.getVisibleUsers(state.users);
export const isRequestInProgress = (request_type: UsersActionType) => (state: RootStateType): boolean =>
    fromUsers.isRequestInProgress(state.users, request_type);
export const getRequestStatusMsgs = (state) => fromUsers.getRequestStatusMsgs(state.users);
export const getAlerts = (state: RootStateType): Alert[] => fromAlerts.getAlerts(state.alerts);
export const isCurrentUserLoggedIn = (state) => fromUser.isCurrentUserLoggedIn(state.authentication);
