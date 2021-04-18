import { userActionTypes } from './constants/UserActionType';

export const userAuthenticationReducer = (state = {}, action) => {
    switch (action.type) {
        case userActionTypes.LOGIN_USER_REQUEST: {

        }
        case userActionTypes.LOGIN_USER_SUCCESS: {

        }
        case userActionTypes.LOGIN_USER_FAILURE: {

        }
        default: return state;
    }
}