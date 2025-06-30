import taskReducer from "@/redux/features/task/taskSlice";
import { configureStore } from '@reduxjs/toolkit';

// console.log(taskReducer)
export const store = configureStore( {
    reducer: {
        // counter: 0
        todo: taskReducer
    }
} );

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;