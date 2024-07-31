import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeComp from "./components/homeComponent/homeComp";
import UserPage from "./components/UserPageComp/UserPage";
import PostPage from "./components/PostPageComp/PostPage";
import CommentPage from "./components/CommentPageComp/CommentPage";
import OneUserComp from "./components/OneUserComp/OneUserComp";
import PostCommentsComp from "./components/PostCommentsComp/PostCommentsComp";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let router = createBrowserRouter([
    {path: '/', element:<HomeComp/>},
    {path: 'users', element:<UserPage/>},
    {path: 'posts', element:<PostPage/>},
    {path: 'comments', element:<CommentPage/>},
    {path: 'users/:id', element: <OneUserComp/>},
    {path: 'posts/:id', element: <PostCommentsComp/>}
])

root.render(

    <RouterProvider router={router}/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
