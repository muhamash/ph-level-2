import type { RootState } from "@/redux/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
        addUser: ( state, action: PayloadAction<IUser> ) =>
        {
            const user = createUser( action.payload )
            state.user.push(user)
        },

        removeUser: (state, action: PayloadAction<IUser>)=>{
            state.user = state.user.filter((target)=> target.id !== action.payload)
        }
    }
} );

export const selectUser = ( state: RootState ) => state.users.user;

export default userSlice.reducer;