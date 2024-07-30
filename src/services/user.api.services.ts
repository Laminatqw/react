import axios, { AxiosResponse } from "axios";
import IUser from "../Model/IUser";
import IPost from "../Model/IPost";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: { "Content-Type": "application/json" },
});

const getUsers = (): Promise<AxiosResponse<{ users: IUser[] }>> => {
    return axiosInstance.get("/users");
};

const getUserPosts = (id: number): Promise<AxiosResponse<{ posts: IPost[] }>> => {
    return axiosInstance.get(`/users/${id}/posts`);
};

export { getUsers, getUserPosts };

//     const baseUrl = "https://dummyjson.com/users";
//
//  const getUsers = () :Promise<IUser[]>  =>{
//     return (fetch(baseUrl)
//         .then(value => value.json())
//             .then(data =>data.users)
//
//     )
// }
// const getUser = (id:number) :Promise<IUser[]>  =>{
//     return (fetch(baseUrl + '/' + id)
//             .then(value => value.json())
//
//     )
// }
// export {
//     getUsers,
//     getUser
// };