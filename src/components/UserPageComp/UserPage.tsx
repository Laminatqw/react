import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IUser from '../../Model/IUser';
import { getUsers } from "../../services/user.api.services";

const UserPage: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getUsers()
            .then(value => {
                if (value.data) {
                    setUsers(value.data);
                } else {
                    throw new Error('Invalid data format');
                }
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    }, []);

    const handleUserClick = (user: IUser) => {
        navigate(`/users/${user.id}`, { state: user });
    };

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.length > 0 ? (
                    users.map(user => (
                        <li key={user.id} onClick={() => handleUserClick(user)}>
                            {user.username} <button>more info</button>
                        </li>
                    ))
                ) : (
                    <li>Loading users...</li>
                )}
            </ul>
        </div>
    );
}

export default UserPage;