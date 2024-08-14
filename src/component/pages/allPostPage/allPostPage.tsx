import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {postActions} from "../../../redux/slices/postSlice";
import {Link} from "react-router-dom";

const AllPostPage = () => {

    let {postSlice: {posts, isLoaded}} = useAppSelector(state => state);

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, []);


    return (
        <div>
            {!isLoaded && <div>Loading in process....</div>}

            {posts.map(post =>
                <div className={'userLine'}>
                    <div key={post.id}>{post.title}</div>
                    <Link to={`/posts/${post.id}/comments`}>
                        <button>more info</button>
                    </Link>
                </div>)
            }
        </div>
    )
        ;
};

export default AllPostPage;