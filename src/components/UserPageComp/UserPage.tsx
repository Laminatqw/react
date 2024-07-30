import React, { useEffect, useState } from 'react';
import IUser from '../../Model/IUser';
import { getUsers } from "../../services/user.api.services";

const UserPage = () => {
    const [users, setUsers] = useState<IUser[]>([]);


    useEffect(() => {
        getUsers()
            .then(value => {
                if (value.data && Array.isArray(value.data)) {
                    setUsers(value.data); } else {
                    throw new Error('Invalid data format');
                }
            })

    }, []);



    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserPage;
