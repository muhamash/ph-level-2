import type { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export interface ITask
{
    id: string;
    title: string;
    description: string;
    dueDate: string;
    isCompleted: boolean;
    priority: "HIGH" | "MEDIUM" | "LOW";
}

interface InitialState
{
    tasks: ITask[],
    filter: "all" | "high" | "medium" | "low"
}

const initialState: InitialState = {
    tasks: [
        {
            id: "asdf",
            title: "testcscs",
            description: "this is a description dfsdsdsfsd",
            dueDate: "20-10-2025",
            isCompleted: true,
            priority: "HIGH"
        },
        {
             id: "asdfs",
            title: "test oka",
            description: "this is a descriptiodssd",
            dueDate: "20-10-2025",
            isCompleted: true,
            priority: "MEDIUM"
        },
        {
             id: "asdfasas",
            title: "test",
            description: "this dfvds is a descripdsfdtion",
            dueDate: "20-10-2025",
            isCompleted: false,
            priority: "LOW"
        }
    ],
    filter: "all"
};

const taskSlice = createSlice( {
    name: "task",
    initialState,
    reducers: {}
} );

export const selectTasks = ( state: RootState ) =>
{
    // console.log(state)
    return state.todo.tasks
}

export default taskSlice.reducer;