import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IUser from '../../Model/IUser';
import IPost from '../../Model/IPost';
import { getUser, getUserPosts } from '../../services/user.api.services';

const UserDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<IUser | null>(null);
    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            Promise.all([getUser(Number(id)), getUserPosts(Number(id))])
                .then(([userResponse, postsResponse]) => {
                    setUser(userResponse.data);
                    setPosts(postsResponse.data);
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

    if (!user) {
        return <div>No user data</div>;
    }

    return (
        <div>
            <h1>User Details</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>

            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserDetails;