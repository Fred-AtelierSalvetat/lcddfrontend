import { userActionTypes } from './constants/UserActionType';

export type AuthenticationState = {
  loggingIn?: boolean;
  user?: string;
};

export const userAuthenticationReducer: (state: AuthenticationState, action) => AuthenticationState = (
  state = {},
  action,
) => {
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
    default:
      return state;
  }
};
