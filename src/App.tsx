import React, { FC, useEffect, useState } from 'react';
import './App.css';


import DivComp from "./components/DivComponent/divComp";
import Header1 from "./components/HeaderOne/Header1";
import ButtonComp from "./components/ButtonComponent/ButtonComp";
import IUser from "./Model/IUser";
import buttonComp from "./components/ButtonComponent/ButtonComp";
import {getUsers} from "./services/user.api.services";
import {getUserPosts} from "./services/posts.api.services";
import UserComponent from "./components/UserComponent/UserComponent";
import UserPostComponent from "./components/UserPostComponent/UserPostComponent";
import {IPost} from "./Model/IPost";

const App: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [userID, setUserID] = useState<number>(0);
  const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getUsers()
            .then(value => {
                setUsers(value.data.users);
            })
    }, []);
    const getPosts = (id: number) => {
        getUserPosts(id)
            .then(response => {
                setPosts(response.data.posts); // Оновлено на `response.data.posts`
            })
            .catch(error => console.error('Error fetching posts:', error));
    };
    // const getPosts = (id:number) =>{
    //     // getUserPosts(id) .then(posts => console.log(posts))
    //     getUserPosts(id).then(posts => setPosts(posts))
    // }
    // useEffect(() => {
    //     getUserPosts().then(value => {
    //         setPosts(value.data.users)
    //     })
    // }, [userID]);
  const clickFunc = (id:number) =>{
      setUserID(id);
  }

  return (
      <div>

        {

          users.map(user => <UserComponent id={user.id}
                                            username={user.username}
                                            email={user.email}
                                            firstName={user.firstName}
                                            lastName={user.lastName}
                                            clickFunc = {getPosts}/>)

        }
        <h2>
            <UserPostComponent posts={posts}/>
        </h2>
      </div>

  );
}

export default App;
