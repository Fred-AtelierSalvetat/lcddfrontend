import userAuthenticationReducer from './user.authentication.reducer';
import userRegistrationReducer from './user.registation.reducer';
import { combineReducers } from 'redux';

const userReducer = combineReducers({
    userAuthenticationReducer,
    userRegistrationReducer,
});

export default userReducer;