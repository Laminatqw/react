import {createSlice, isFulfilled} from "@reduxjs/toolkit";
import {IComments} from "../../models/IComments";
import {loadComments, loadPostComments} from "../reducers/comment/comment.extra.reducers";


type CommentSliceType = {
    comments: IComments[];
    isLoaded: boolean;
    error: string;
    comment: IComments[] | null;
};
const initialState: CommentSliceType = {
    comments: [],
    isLoaded: false,
    error: '',
    comment: null

};

export const commentSlice = createSlice({
    name: "commentsSlice",
    initialState: initialState,
    reducers: {
        fillComment: (state, action) => {
            state.comment = action.payload;
        },
        refillComments: (state, action) => {
            state.comments = action.payload;
        }
    },
    extraReducers: (builder) =>
        builder
            .addCase(loadComments.fulfilled,
                (state, action) => {
                    state.comments = action.payload;
                    state.isLoaded = true;
                })

            .addCase(loadComments.rejected, (state, action) => {

            })
            .addCase(loadPostComments.fulfilled, (state, action) => {
                state.comment = action.payload; // Зберігаємо масив коментарів у `comments`
                state.isLoaded = true;
            })

            .addMatcher(isFulfilled(loadComments), (state, action) => {
                state.isLoaded = true;
            })
});

export const commentActions = {
    ...commentSlice.actions,
    loadComments,
    loadPostComments


}
