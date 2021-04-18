import * as types from './constants/ActionTypes';
import * as userRoles from './constants/Roles';
import * as status from './constants/Status';
import * as api from '../../api/fetchUsers';
import { isRequestInProgress } from '../reducers';
import * as alertActions from '../alerts/actions';
import { userServices } from '~/services/user.services';
import * as usersConstants from './constants/ActionTypes';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const apiCallWrapper = ({
    apiFct,
    requestActionType,
    successDispatch,
    successAlertMsg,
    failureDispatch,
    failureAlertMsg,
}) => (dispatch, getstate) => {
    if (isRequestInProgress(requestActionType)(getstate())) {
        return () => {};
    }
    dispatch({
        type: requestActionType,
        request_type: requestActionType,
    });

    return apiFct().then(
        (response) => {
            dispatch(
                alertActions.newSuccessAlert({
                    alertSubject: requestActionType,
                    message: successAlertMsg,
                }),
            );
            dispatch({
                ...successDispatch,
                response,
                request_type: requestActionType,
            });
        },
        () => {
            dispatch(
                alertActions.newFailureAlert({
                    alertSubject: requestActionType,
                    message: failureAlertMsg,
                }),
            );

            dispatch({
                ...failureDispatch,
                request_type: requestActionType,
            });
        },
    );
};

export const fetchUsers = ({ failureAlertMsg }) =>
    apiCallWrapper({
        apiFct: api.fetchUsers(),
        requestActionType: types.FETCH_USERS_REQUEST,
        successDispatch: { type: types.FETCH_USERS_SUCCESS },
        successAlertMsg: 'Chargement des données utilisateurs OK',
        failureDispatch: { type: types.FETCH_USERS_FAILURE },
        failureAlertMsg,
    });

export const activateUser = (user_id) =>
    apiCallWrapper({
        apiFct: api.updateUser(user_id, { status: status.ACTIVE }),
        requestActionType: types.ACTIVATE_USER_REQUEST,
        successDispatch: { type: types.ACTIVATE_USER_SUCCESS, user_id },
        successAlertMsg: 'Activation utilisateur OK',
        failureDispatch: { type: types.ACTIVATE_USER_FAILURE, user_id },
        failureAlertMsg: "Erreur lors de l'activation de l'utilisateur",
    });

export const deactivateUser = (user_id) =>
    apiCallWrapper({
        apiFct: api.updateUser(user_id, { status: status.INACTIVE }),
        requestActionType: types.DEACTIVATE_USER_REQUEST,
        successDispatch: { type: types.DEACTIVATE_USER_SUCCESS, user_id },
        successAlertMsg: "Désactivation de l'utilisateur OK",
        failureDispatch: { type: types.DEACTIVATE_USER_FAILURE, user_id },
        failureAlertMsg: "Erreur lors de la désactivation de l'utilisateur",
    });

export const deleteUser = (user_id) =>
    apiCallWrapper({
        apiFct: api.deleteUser(user_id),
        requestActionType: types.DELETE_USER_REQUEST,
        successDispatch: { type: types.DELETE_USER_SUCCESS, user_id },
        successAlertMsg: "Supression de l'utilisateur OK",
        failureDispatch: { type: types.DELETE_USER_FAILURE, user_id },
        failureAlertMsg: "Erreur lors de la supression de l'utilisateur",
    });

export const promoteUserToAdmin = (user_id) =>
    apiCallWrapper({
        apiFct: api.updateUser(user_id, { role: userRoles.ROLE_ADMIN }),
        requestActionType: types.PROMOTE_USER_TO_ADMIN_REQUEST,
        successDispatch: { type: types.PROMOTE_USER_TO_ADMIN_SUCCESS, user_id },
        successAlertMsg: "Promotion de l'utilisateur en tant qu'admin",
        failureDispatch: { type: types.PROMOTE_USER_TO_ADMIN_FAILURE, user_id },
        failureAlertMsg: "Erreur lors de la promotion de l'utilisateur à admin",
    });

export const promoteUserToSpeaker = (user_id) =>
    apiCallWrapper({
        apiFct: api.updateUser(user_id, { role: userRoles.ROLE_SPEAKER_AWAITING_ANSWER }),
        requestActionType: types.PROMOTE_USER_TO_SPEAKER_REQUEST,
        successDispatch: { type: types.PROMOTE_USER_TO_SPEAKER_SUCCESS, user_id },
        successAlertMsg: "Promotion de l'utilisateur en tant qu'intervenant",
        failureDispatch: { type: types.PROMOTE_USER_TO_SPEAKER_FAILURE, user_id },
        failureAlertMsg: "Erreur lors de la promotion de l'utilisateur à intervenant",
    });

export const validateSpeaker = (user_id) =>
    apiCallWrapper({
        apiFct: api.updateUser(user_id, { role: userRoles.ROLE_SPEAKER }),
        requestActionType: types.VALIDATE_SPEAKER_REQUEST,
        successDispatch: { type: types.VALIDATE_SPEAKER_SUCCESS, user_id },
        successAlertMsg: "Validation de l'intervenant",
        failureDispatch: { type: types.VALIDATE_SPEAKER_FAILURE, user_id },
        failureAlertMsg: "Erreur lors de la validation de l'intervenant",
    });

export const revokeUserAdminRight = (user_id) =>
    apiCallWrapper({
        apiFct: api.updateUser(user_id, { role: userRoles.ROLE_SPEAKER }),
        requestActionType: types.REVOKE_USER_ADMIN_RIGHT_REQUEST,
        successDispatch: { type: types.REVOKE_USER_ADMIN_RIGHT_SUCCESS, user_id },
        successAlertMsg: 'Suppression des droits administrateur',
        failureDispatch: { type: types.REVOKE_USER_ADMIN_RIGHT_FAILURE, user_id },
        failureAlertMsg: 'Erreur lors de la suppression des droits administrateurs',
    });

export const setUsersRoleFilter = (roles_filter) => ({
    type: types.SET_USER_ROLE_FILTER,
    roles_filter,
});

export const setUsersSearchFilter = (search_filter) => ({
    type: types.SET_USER_SEARCH_FILTER,
    search_filter,
});