import axios, { AxiosResponse } from "axios";
import IPost from "../Model/IPost";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: { "Content-Type": "application/json" },
});

const getPosts = (): Promise<AxiosResponse<IPost[]>> => {
    return axiosInstance.get("/posts");
};

export { getPosts };