import { userServices } from '~/services/user.services';
import { userActionTypes } from './constants/UserActionType';

export const userActions = {
    register,
    confirmRegister,
    login,
    logout,
};

function login(username, password) {
    return (dispatch, getState) => {
        dispatch(request({ username }));
        userServices.login(username, password).then(
            (response) => {
                console.log('response', response);
                let user;
                user = {
                    username: username,
                    email: username,
                    emailVerified: response.attributes.email_verified,
                    firstName: response.attributes.given_name,
                    lastName: response.attributes.family_name,
                    city: response.attributes.locale,
                };
                dispatch(success(user));
            },
            (error) => {
                dispatch(failure(error.toString()));
            },
        );
    };

    /** Action creators */
    function request(user) {
        return { type: userActionTypes.LOGIN_USER_REQUEST, user };
    }
    function success(user) {
        return { type: userActionTypes.LOGIN_USER_SUCCESS, user };
    }
    function failure(error) {
        return { type: userActionTypes.LOGIN_USER_FAILURE, error };
    }
}

function register(user) {
    return (dispatch, getState) => {
        dispatch(request(user));

        userServices.register(user).then(
            (user) => {
                console.log('user in register', user);

                dispatch(success(user));
            },
            (error) => {
                dispatch(failure(error.toString()));
            },
        );
    };

    /** Action creators */
    function request(user) {
        return { type: userActionTypes.REGISTER_USER_REQUEST, user };
    }
    function success(user) {
        return { type: userActionTypes.REGISTER_USER_SUCCESS, user };
    }
    function failure(error) {
        return { type: userActionTypes.REGISTER_USER_FAILURE, error };
    }
}

function logout() {
    userServices.logout();
    return { type: userActionTypes.LOGOUT_USER_REQUEST };
}

function confirmRegister(username, code) {
    return (dispatch, getState) => {
        dispatch(request({ username }));

        userServices.confirmRegister(username, code).then(
            (user) => {
                console.log('user in confirm', user);

                dispatch(success(user));
            },
            (error) => {
                dispatch(failure(error.toString()));
            },
        );
    };

    function request(user) {
        return { type: userActionTypes.CONFIRM_USER_REQUEST, user };
    }
    function success(user) {
        return { type: userActionTypes.CONFIRM_USER_SUCCESS, user };
    }
    function failure(error) {
        return { type: userActionTypes.CONFIRM_USER_FAILURE, error };
    }
}
