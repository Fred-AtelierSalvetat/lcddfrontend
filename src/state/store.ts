import { rootReducer } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

const middlewareEnhancer = applyMiddleware(thunkMiddleware);

export const store = createStore(rootReducer, composeWithDevTools(middlewareEnhancer));
