import { configureStore, Middleware } from '@reduxjs/toolkit';
import postsReducer from './features/posts/postsSlice';
import usersReducer from './features/users/usersSlices';

const loggerMiddleware: Middleware = () => (next) => (action) => {
    console.log('Dispatching:', action);
    return next(action);
};

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


