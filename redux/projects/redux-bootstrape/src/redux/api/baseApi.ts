import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi( {
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery( { baseUrl: "" } ),
    endpoints: ( builder ) => ( {
        tagsTypes:["task"],
        getTasks: () => builder.query( {
            query: '/tasks',
            providesTags: ["task"]
        } ),
        createTasks: () => builder.mutation( {
            query: (taskData) => ( {
                url: "/tasks",
                method: POST,
                body: taskData
            } ),
            invalidatesTags: ["task"]
        })
    })
} )


export const { useGetTasksQuery, useCreateMutation } = baseApi;