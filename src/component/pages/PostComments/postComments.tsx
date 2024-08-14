import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {commentActions} from "../../../redux/slices/commentSlice";

const PostComments = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const { comment, isLoaded, error } = useAppSelector(state => state.commentSlice);

    useEffect(() => {
        if (id) {
            dispatch(commentActions.loadPostComments(Number(id)));
        }
    }, [dispatch, id]);

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!comment) {
        return <div>Comment not found</div>;
    }


    return (
        <div>
            <h1>Post Comments</h1>
            {/*<p>ID: {comment.postID}</p>*/}
            {/*<p>Name: {comment.name}</p>*/}
            <h2>Comments</h2>
            <ul>
                {comment.map(comment => (
                    <li key={comment.id}>
                        <h3>{comment.name}</h3>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostComments;