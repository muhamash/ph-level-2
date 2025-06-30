import type { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

interface ITask
{
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
            title: "test",
            description: "this is a description",
            dueDate: "20-10-2025",
            isCompleted: true,
            priority: "HIGH"
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