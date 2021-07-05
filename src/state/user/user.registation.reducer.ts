import { userActionTypes } from './constants/UserActionType';

export type RegistrationState = {
    registering?: boolean;
};

export const userRegistrationReducer: (state: RegistrationState, action) => RegistrationState = (
    state = {},
    action,
) => {
    switch (action.type) {
        case userActionTypes.REGISTER_USER_REQUEST: {
            return { registering: true };
        }
        case userActionTypes.REGISTER_USER_SUCCESS: {
            return {};
        }
        case userActionTypes.REGISTER_USER_FAILURE: {
            return {};
        }
        default:
            return state;
    }
};
