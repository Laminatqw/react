import React, { useEffect, useState } from 'react';
import IPost from '../../Model/IPost';
import {getPosts} from "../../services/posts.api.services";
import {useNavigate} from "react-router-dom";
import IUser from "../../Model/IUser";

const PostPage = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
const navigate = useNavigate();

    useEffect(() => {
        getPosts()
            .then(value => {
                if (value.data && Array.isArray(value.data)) {
                    setPosts(value.data); } else {
                    throw new Error('Invalid data format');
                }
            })

    }, []);

    const handleUserClick = (post: IPost) => {
        navigate(`/posts/${post.id}`, { state: post });
    };

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id} onClick={()=> handleUserClick(post)}>{post.title} <button>more info</button></li>
                ))}
            </ul>
        </div>
    );
}

export default PostPage;
