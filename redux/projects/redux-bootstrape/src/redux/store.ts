import taskReducer from "@/redux/features/task/taskSlice";
import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/baseApi';
import userSlice from './features/user/userSlice';

// console.log(taskReducer)
export const store = configureStore( {
    reducer: {
        // counter: 0
        todo: taskReducer,
        users: userSlice,
        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(baseApi.middleware)
} );

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;