import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers';

let middlewares = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
    middlewares = [...middlewares, createLogger()];
}

const middlewareEnhancer = applyMiddleware(...middlewares);

export const store = createStore(rootReducer, composeWithDevTools(middlewareEnhancer));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
