import React from 'react';
import IPost  from '../../Model/IPost';

interface UserPostComponentProps {
    posts: IPost[];
}

class UserPostComponent extends React.Component<UserPostComponentProps> {
    render() {
        const { posts } = this.props;
        return (
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.id}: {post.title}</li>
                ))}
            </ul>
        );
    }
}

export default UserPostComponent;