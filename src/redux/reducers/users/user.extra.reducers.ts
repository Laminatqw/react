import {createAsyncThunk} from "@reduxjs/toolkit";
import {userService} from "..//..//../services/api.service";
import {AxiosError} from "axios";

export const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            let users = await userService.getAll();
            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            let e1 = e as AxiosError;
            return thunkAPI.rejectWithValue(e1);
        }
    }
)
export const loadUser = createAsyncThunk(
    'userSlice/loadUser',
    async (id:number , thunkAPI) => {
        try {
            let user = await userService.getUser(id);
            return thunkAPI.fulfillWithValue(user);
        } catch (e) {
            let e1 = e as AxiosError;
            return thunkAPI.rejectWithValue(e1);
        }
    }
)
