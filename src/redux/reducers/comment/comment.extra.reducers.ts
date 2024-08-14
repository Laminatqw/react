import {createAsyncThunk} from "@reduxjs/toolkit";
import {commentService, postService, userService} from "../../../services/api.service";
import {AxiosError} from "axios";

export const loadComments = createAsyncThunk(
    'commentSlice/loadComments',
    async (_, thunkAPI) => {
        try {
            let comments = await commentService.getComments();
            return thunkAPI.fulfillWithValue(comments);
        } catch (e) {
            let e1 = e as AxiosError;
            return thunkAPI.rejectWithValue(e1);
        }
    }
)
export const loadPostComments = createAsyncThunk(
    'commentSlice/loadPostComments',
    async (postId:number , thunkAPI) => {
        try {
            let comment = await commentService.getPostComments(postId);
            return thunkAPI.fulfillWithValue(comment);
        } catch (e) {
            let e1 = e as AxiosError;
            return thunkAPI.rejectWithValue(e1);
        }
    }
)