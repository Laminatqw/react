import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IPost from '../../Model/IPost';
import {getPost, getPostComments} from "../../services/posts.api.services";
import IComment from "../../Model/IComment";

const PostCommentsComp: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<IPost | null>(null);
    const [comment, setComment] = useState<IComment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            Promise.all([getPost(Number(id)), getPostComments(Number(id))])
                .then(([postResponse, CommentResponse]) => {
                    setPost(postResponse.data);
                    setComment(CommentResponse.data);
                    setLoading(false);
                })
                .catch(error => {
                    setError('Error fetching data');
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!post) {
        return <div>No user data</div>;
    }

    return (
        <div>
            <h1>Post Details</h1>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>

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

export default PostCommentsComp;