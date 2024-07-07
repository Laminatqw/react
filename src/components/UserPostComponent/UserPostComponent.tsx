import React, {FC, ReactNode} from 'react';
import {IPost} from "../../Model/IPost";


interface IProps{
    posts:IPost[];
}
const UserPostComponent:FC<IProps> = ({posts}) => {
    return (
        <ul>
            {
                posts.map(value => <li>{value.id}: {value.title}</li>   )
            }
        </ul>
    );
};

export default UserPostComponent;