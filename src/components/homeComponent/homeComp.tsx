import React from 'react';
import {Link} from "react-router-dom";

const HomeComp = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                <li><Link to={'users'}>User Page</Link></li>
                <li><Link to={'posts'}>Posts Page</Link></li>
                <li><Link to={'comments'}>Comments Page</Link></li>
            </ul>
        </div>
    );
};

export default HomeComp;