import React from 'react';
import { useNavigate } from 'react-router-dom';

const App: React.FC = () => {
    const navigate = useNavigate();

    const goToUsers = () => navigate('/users');
    const goToPosts = () => navigate('/posts');
    const goToComments = () => navigate('/comments');

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={goToUsers}>Go to Users</button>
            <button onClick={goToPosts}>Go to Posts</button>
            <button onClick={goToComments}>Go to Comments</button>
        </div>
    );
};

export default App;
