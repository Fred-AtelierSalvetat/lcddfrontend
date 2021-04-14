import { v4 as uuidv4 } from 'uuid';

import * as types from './constants/ActionTypes';
import * as alertTypes from './constants/AlertTypes';

export const newSuccessAlert = ({ alertSubject, message }) => (dispatch) => {
    const alertId = uuidv4();
    dispatch({
        type: types.NEW_ALERT,
        alert: {
            id: alertId,
            alertType: alertTypes.SUCCESS,
            alertSubject,
            message,
        },
    });
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    return delay(1000).then(() => dispatch(dismissAlert(alertId)));
};

export const newFailureAlert = ({ alertSubject, message }) => ({
    type: types.NEW_ALERT,
    alert: {
        id: uuidv4(),
        alertType: alertTypes.FAILURE,
        alertSubject,
        message,
    },
});

export const dismissAlert = (id) => ({
    type: types.DISMISS_ALERT,
    id,
});
