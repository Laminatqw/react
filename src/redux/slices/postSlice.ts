import { createSlice, isFulfilled } from "@reduxjs/toolkit";
import { IPost } from "../../models/IPost";
import { IComments } from "../../models/IComments";
import { loadPosts } from "../reducers/post/post.extra.reducers";

type PostSliceType = {
    posts: IPost[];
    comments: IComments[];
    isLoaded: boolean;
    error: string;
    post: IPost | null;
}

const initialState: PostSliceType = {
    posts: [],
    comments: [],
    isLoaded: false,
    error: '',
    post: null
};

export const postSlice = createSlice({
    name: "postsSlice",
    initialState: initialState,
    reducers: {
        fillPost: (state, action) => {
            state.post = action.payload;
        },
        refillPosts: (state, action) => {
            state.posts = action.payload;
        },
        refillComments: (state, action) => {
            state.comments = action.payload;
        }
    },
    extraReducers: (builder) =>
        builder
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.isLoaded = true;
            })

            .addCase(loadPosts.rejected, (state, action) => {
                state.error = 'Failed to load posts';
            })
            .addMatcher(isFulfilled(loadPosts), (state, action) => {
                state.isLoaded = true;
            })
});

export const postActions = {
    ...postSlice.actions,
    loadPosts
}
