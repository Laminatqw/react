import {createSlice, isFulfilled} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";
import {loadUser, loadUsers} from "../reducers/users/user.extra.reducers";


type UserSliceType = {
    users: IUser[];
    isLoaded: boolean,
    error: string;
    user: IUser | null;
}
const initialState: UserSliceType = {
    users: [],
    isLoaded: false,
    error: '',
    user: null

};

export const userSlice = createSlice({
    name: "usersSlice",
    initialState: initialState,
    reducers: {
        fillUser: (state, action) => {
            state.user = action.payload;
        },
        refillUsers: (state, action) => {
            state.users = action.payload;
        }
    },
    extraReducers: (builder) =>
        builder
            .addCase(loadUsers.fulfilled,
                (state, action) => {
                state.users = action.payload;
                state.isLoaded = true;
            })
            .addCase(loadUser.fulfilled,
                (state, action) => {
                state.user = action.payload
                })
            .addCase(loadUsers.rejected, (state, action) => {

            })
            .addMatcher(isFulfilled(loadUsers), (state, action) => {
                state.isLoaded = true;
            })
});

export const userActions = {
    ...userSlice.actions,
    loadUsers,
    loadUser


}
