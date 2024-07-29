import React, {Component, FC} from 'react';
import './App.css';
import UserComponent from './components/UserComponent';
import UserPostComponent from './components/UserPostComponent';
import { getUsers, getUserPosts } from './services/user.api.services';
import IUser from './Model/IUser';
import { IPost } from './Model/IPost';
import FormComp from "./components/FormComp";


const App: React.FC = () => {
    return (
        <div>
            <FormComp/>
        </div>
    );
};

export default App;