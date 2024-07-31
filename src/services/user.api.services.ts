import axios, { AxiosResponse } from "axios";
import IUser from "../Model/IUser";
import IPost from "../Model/IPost";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: { "Content-Type": "application/json" },
});

const getUsers = (): Promise<AxiosResponse<IUser[]>> => {
    return axiosInstance.get("/users");
};
const getUser = (id: any): Promise<AxiosResponse<IUser>> => {
    return axiosInstance.get(`/users/${id}`);
};
const getUserPosts = (id: number): Promise<AxiosResponse<IPost[]>> => {
    return axiosInstance.get(`/users/${id}/posts`);
};

export { getUsers, getUserPosts, getUser };

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