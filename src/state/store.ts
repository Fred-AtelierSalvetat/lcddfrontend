import { configureStore } from '@reduxjs/toolkit';
import { api } from '../api/lcddbackend-api';
import logger from 'redux-logger';
import { reducersList } from './reducers';

export const store = configureStore({
    reducer: { ...reducersList, [api.reducerPath]: api.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware, logger),
    devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
