import React, { useEffect, useState } from 'react';
import IPost from '../../Model/IPost';
import {getPosts} from "../../services/posts.api.services";

const PostPage = () => {
    const [posts, setPosts] = useState<IPost[]>([]);


    useEffect(() => {
        getPosts()
            .then(value => {
                if (value.data && Array.isArray(value.data)) {
                    setPosts(value.data); } else {
                    throw new Error('Invalid data format');
                }
            })

    }, []);



    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default PostPage;
