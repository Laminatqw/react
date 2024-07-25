import React, { Component } from 'react';
import './App.css';
import UserComponent from './components/UserComponent';
import UserPostComponent from './components/UserPostComponent';
import { getUsers, getUserPosts } from './services/user.api.services';
import IUser from './Model/IUser';
import { IPost } from './Model/IPost';

interface AppState {
    users: IUser[];
    selectedUserId: number | null;
    posts: IPost[];
}

class App extends Component<{}, AppState> {
    state: AppState = {
        users: [],
        selectedUserId: null,
        posts: [],
    };

    componentDidMount() {
        getUsers()
            .then(response => {
                this.setState({ users: response.data.users });
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }

    handleUserClick = (id: number) => {
        getUserPosts(id)
            .then(response => {
                this.setState({ posts: response.data.posts });
            })
            .catch(error => {
                console.error('Error fetching user posts:', error);
            });
    };

    render() {
        const { users, posts } = this.state;
        return (
            <div>
                {users.map(user => (
                    <UserComponent key={user.id} user={user} onUserClick={this.handleUserClick} />
                ))}
                <h2>Posts:</h2>
                <UserPostComponent posts={posts} />
            </div>
        );
    }
}

export default App;