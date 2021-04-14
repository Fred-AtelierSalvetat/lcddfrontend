import * as actionTypes from './constants/ActionTypes';

type Alert = {
    id: string;
    alertType: string;
    alertSubject: string;
    message: JSX.Element;
};

export const alerts = (state: Alert[] = [], action) => {
    switch (action.type) {
        case actionTypes.NEW_ALERT:
            return [...state.filter((alert) => alert.alertSubject !== action.alert.alertSubject), { ...action.alert }];
        case actionTypes.DISMISS_ALERT:
            return [...state.filter((alert) => alert.id !== action.id)];
        default:
            return state;
    }
};

export default alerts;
