import React from 'react';
import IUser from '../Model/IUser';


interface UserComponentProps {
    user: IUser;
    onUserClick: (id: number) => void;
}

class UserComponent extends React.Component<UserComponentProps> {
    handleClick = () => {
        this.props.onUserClick(this.props.user.id);
    };

    render() {
        const { user } = this.props;
        return (
            <div>
                <p>{user.id} - {user.firstName} {user.lastName}</p>
                <button onClick={this.handleClick}>Get Posts</button>
            </div>
        );
    }
}

export default UserComponent;