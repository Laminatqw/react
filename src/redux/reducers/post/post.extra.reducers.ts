import {createAsyncThunk} from "@reduxjs/toolkit";
import {postService} from "..//..//../services/api.service";
import {AxiosError} from "axios";

export const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            let posts = await postService.getAll();
            return thunkAPI.fulfillWithValue(posts);
        } catch (e) {
            let e1 = e as AxiosError;
            return thunkAPI.rejectWithValue(e1);
        }
    }
)

