import axios, {AxiosResponse} from "axios";

import {IPost} from "../Model/IPost";

let axiosInstance = axios.create({
    baseURL:"https://dummyjson.com",
    headers: {"Content-Type": "application/json"},
});
const getUserPosts = (id:number) :Promise<AxiosResponse<{posts: IPost[]}>> =>{
    return axiosInstance.get(`/users/${id}/posts`)
}
const getPost = async (id:number) :Promise<AxiosResponse<{posts: IPost[]}>> =>{
    return axiosInstance.get('/post/' + id)
}
const getPosts = async (id:number) :Promise<AxiosResponse<{posts: IPost[]}>> =>{
    return axiosInstance.get('/posts')
}

export {
    getUserPosts,
    getPost,
    getPosts
}