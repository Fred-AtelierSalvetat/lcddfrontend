import { combineReducers } from "redux";
import { userActionTypes } from './constants/UserActionType';

export const userRegistrationReducer = (state = {}, action) => {
    switch (action.type) {
        case userActionTypes.REGISTER_USER_REQUEST: {

        }
        case userActionTypes.REGISTER_USER_SUCCESS: {

        }
        case userActionTypes.REGISTER_USER_FAILURE: {

        }
        default: return state;
    }
}