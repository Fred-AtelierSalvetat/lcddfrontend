import { combineReducers } from 'redux';
import userAuthenticationReducer from './user.authentication.reducer';
import userRegistrationReducer from './user.registation.reducer';

const userReducer = combineReducers({
  userAuthenticationReducer,
  userRegistrationReducer,
});

export default userReducer;
