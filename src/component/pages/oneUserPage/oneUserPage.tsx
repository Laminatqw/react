import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {userActions} from "../../../redux/slices/userSlice";
import {useParams} from "react-router-dom";

const OneUserPage = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const { user, isLoaded, error } = useAppSelector(state => state.userSlice);

    useEffect(() => {
        if (id) {
            dispatch(userActions.loadUser(Number(id)));
        }
    }, [dispatch, id]);

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div>
            <h1>User Details</h1>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* Додайте тут більше інформації про користувача за потреби */}
        </div>
    );
};

export default OneUserPage;