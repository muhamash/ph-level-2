import type { RootState } from "@/redux/store";
import { createSelector, createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface ITask
{
    id: string | number;
    title: string;
    description: string;
    dueDate: string;
    isCompleted?: boolean;
    priority: "HIGH" | "MEDIUM" | "LOW";
}

interface InitialState
{
    tasks: ITask[],
    filter: "all" | "high" | "medium" | "low"
}

const initialState: InitialState = {
    tasks: [],
    filter: "all"
};

type DraftTask = Pick<ITask, "dueDate">;

const createTask = ( taskData: DraftTask ): ITask =>
{
    return {
        id: Date.now().toString(),
        // dueDate: taskData.dueDate ? taskData.dueDate.toISOString() : null,
        isCompleted: false,
        ...taskData
    }
}

const updateTask = ( tasks: ITask[], taskData: ITask ) =>
{
    const index = tasks.findIndex( ( task ) => task.id === taskData.id );
    console.log(index, tasks, taskData)
    if ( index !== -1 )
    {
        tasks[ index ] = { ...tasks[ index ], ...taskData };
    }
};  

const taskSlice = createSlice( {
    name: "task",
    initialState,
    reducers: {
        addTask: ( state, action: PayloadAction<ITask> ) =>
        {
            const taskData = createTask(action.payload)
            console.log(taskData)
            state.tasks.push( taskData );
        },
        toggleTaskComplete: ( state, action: PayloadAction<string> ) =>
        {
            // console.log(action.payload)
            state.tasks.forEach(task => task.id === action.payload ? (task.isCompleted = !task.isCompleted) : task)
        },
        
        deleteTask: ( state, action: PayloadAction<string> ) =>
        {
            state.tasks = state.tasks.filter( task => task.id !== action.payload )
            // console.log(state.tasks)
        },
        updateFilter: ( state, action: PayloadAction<"low" | "medium" | "high" | "all"> ) =>
        {
            // console.log(action.payload)
            state.filter = action.payload
        },
        updateSIngleTask: ( state, action: PayloadAction<ITask> ) =>
        {
            updateTask(state.tasks, action.payload)
        }
    },
    extraReducers: () =>
    {
        
    }
} );

const selectTasksState = (state: RootState) => state.todo.tasks;
const selectFilter = (state: RootState) => state.todo.filter;

export const selectTasks = createSelector(
    [ selectTasksState, selectFilter ],
    ( tasks, filter ) =>
    {
        if ( filter === "low" )
        {
            return tasks.filter( ( task ) => task.priority.toLowerCase() === "low" );
        } else if ( filter === "medium" )
        {
            return tasks.filter( ( task ) => task.priority.toLowerCase() === "medium" );
        } else if ( filter === "high" )
        {
            return tasks.filter( ( task ) => task.priority.toLowerCase() === "high" );
        } else
        {
            return tasks;
        }
    }
);

// export const select

export const { addTask, toggleTaskComplete, deleteTask, updateFilter, updateSIngleTask } = taskSlice.actions;

export default taskSlice.reducer;