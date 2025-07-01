import type { RootState } from "@/redux/store";
import { createSelector, createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IUser
{
    id: string | number;
    name: string;
}

interface InitialState
{
    user: IUser[]
}

const initialState: InitialState = {
    users:[]
}

type DraftUser = Pick<IUser, "name">;

const createUser = ( userData: DraftUser ) =>
{
    return {
        id: Date.now().toString(),
        ...userData
    }
}

const userSlice = createSlice( {
    name: "user",
    initialState,
    reducers: {
        
    }
} );

export const selectUser = ( state: RootState ) => state.user.users;

export default userSlice.reducer;