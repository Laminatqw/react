import axios, { AxiosResponse } from "axios";
import IPost from "../Model/IPost";
import IUser from "../Model/IUser";
import IComment from "../Model/IComment";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: { "Content-Type": "application/json" },
});

const getPosts = (): Promise<AxiosResponse<IPost[]>> => {
    return axiosInstance.get("/posts");
};
const getPost = (id: any): Promise<AxiosResponse<IPost>> => {
    return axiosInstance.get(`/posts/${id}`);
};
const getPostComments = (id:number): Promise<AxiosResponse<IComment[]>> => {
    return axiosInstance.get(`/posts/${id}/comments`);
};
export { getPosts, getPostComments, getPost };