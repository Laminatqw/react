import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {commentActions} from "../../../redux/slices/commentSlice";

const CommentPage = () => {
    let {commentSlice: {comments, isLoaded}} = useAppSelector(state => state);

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(commentActions.loadComments());
    }, []);


    return (
        <div>
            {!isLoaded && <div>Loading in process....</div>}

            {comments.map(comment =>
                <div className={'userLine'}>
                    <div key={comment.id}><h1>{comment.name}</h1>
                    <p>{comment.body}</p>
                    </div>
                </div>)
            }
        </div>
    )
        ;
};

export default CommentPage;