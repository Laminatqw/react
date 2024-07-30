import React, { useEffect, useState } from 'react';
import IComment from "../../Model/IComment";
import {getComments} from "../../services/comments.api.services";

const CommentPage = () => {
    const [comment, setComment] = useState<IComment[]>([]);


    useEffect(() => {
        getComments()
            .then(value => {
                if (value.data && Array.isArray(value.data)) {
                    setComment(value.data); } else {
                    throw new Error('Invalid data format');
                }
            })

    }, []);



    return (
        <div>
            <h1>Comments</h1>
            <ul>
                {comment.map(comment => (
                    <li key={comment.id}>{comment.id}    {comment.name}<br/>{comment.body}</li>

                ))}
            </ul>
        </div>
    );
}

export default CommentPage;
