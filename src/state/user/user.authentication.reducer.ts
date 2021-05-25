import Auth from '@aws-amplify/auth';
import { useDispatch } from 'react-redux';
import { userActionTypes } from './constants/UserActionType';


export const userAuthenticationReducer = (state = {}, action) => {
    switch (action.type) {
        case userActionTypes.GET_CURRENT_USER_REQUEST: {
            return { loggingIn: true };
        }
        case userActionTypes.GET_CURRENT_USER_SUCCESS: {
            return { loggedIn: true, user: action.user };
        }
        case userActionTypes.GET_CURRENT_USER_FAILURE: {
            return {};
        }
        case userActionTypes.LOGIN_USER_REQUEST: {
            return { loggingIn: true, user: action.user };
        }
        case userActionTypes.LOGIN_USER_SUCCESS: {
            return { loggedIn: true, user: action.user };
        }
        case userActionTypes.LOGIN_USER_FAILURE: {
            return {};
        }
        case userActionTypes.LOGOUT_USER_REQUEST: {
            return {};
        }
        default: return state;
    }
}