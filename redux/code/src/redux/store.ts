import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './features/counter/counterSlice';
import { logger } from "./middleware/logger/logger";

const store = configureStore( {
    reducer: {
        counter : counterSlice,
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)

} );

export default store;