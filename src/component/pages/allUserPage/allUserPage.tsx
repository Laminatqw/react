import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {userActions} from "../../../redux/slices/userSlice";
import {Link} from "react-router-dom";
import './allUserPage.css'

const AllUserPage = () => {
    let {userSlice: {users, isLoaded}} = useAppSelector(state => state);

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);


    return (
        <div>
            {!isLoaded && <div>Loading in process....</div>}

            {users.map(user =>
                <div className={'userLine'}>
                    <div key={user.id}>{user.name}</div>
                    <Link to={`/users/${user.id}`}>
                        <button>more info</button>
                    </Link>
                </div>)
            }
        </div>
    )
        ;
};

export default AllUserPage;