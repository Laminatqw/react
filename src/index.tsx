import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AllUserPage from "./component/pages/allUserPage/allUserPage";
import OneUserPage from "./component/pages/oneUserPage/oneUserPage";
import AllPostPage from "./component/pages/allPostPage/allPostPage";
import PostComments from "./component/pages/PostComments/postComments";
import CommentPage from "./component/pages/commentPage/commentPage";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/users" element={<AllUserPage/>} />
            <Route path="users/:id" element={<OneUserPage/>} />
            <Route path="/posts" element={<AllPostPage/>} />
            <Route path="posts/:id/comments" element={<PostComments/>} />
            <Route path="/comments" element={<CommentPage />} />
        </Routes>
        </BrowserRouter>
    </Provider>
);
