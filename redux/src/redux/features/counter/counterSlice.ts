import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter : 0,
}
const counterSlice = createSlice( {
    name: "counter",
    initialState,
    reducers: {
        increment: ( state ) =>
        {
            state.counter = state.counter + 1
        },
        decrement: ( state ) =>
        {
            state.counter = state.counter - 1;
            console.log(state)
        }
    }

} );

export const { increment, decrement } = counterSlice.actions

console.log("Counter slice :",counterSlice)

export default counterSlice.reducer