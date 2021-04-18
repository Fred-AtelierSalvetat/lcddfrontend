import { userServices } from '~/services/user.services';
import { userActionTypes } from './constants/UserActionType';
import { history } from '../helpers/history';
import { useHistory } from "react-router-dom";

export const userActions = {
    login,
    logout,
    register,
}

function login(username, password) {

}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userServices.register(user)
            .then(
                user => {
                    console.log("user in register", user);

                    dispatch(success(user));
                    const _history = useHistory();
                    _history.push('/sign-up');
                    // dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userActionTypes.REGISTER_USER_REQUEST, user } }
    function success(user) { return { type: userActionTypes.REGISTER_USER_SUCCESS, user } }
    function failure(error) { return { type: userActionTypes.REGISTER_USER_FAILURE, error } }
}

function logout() {

}