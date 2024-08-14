import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AllUserPage from "./component/pages/allUserPage/allUserPage";
import OneUserPage from "./component/pages/oneUserPage/oneUserPage";


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
            {/*<Route path="/posts" element={<PostPage />} />*/}
            {/*<Route path="/comments" element={<CommentsPage />} />*/}
        </Routes>
        </BrowserRouter>
    </Provider>
);
