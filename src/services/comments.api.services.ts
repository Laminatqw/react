import axios, { AxiosResponse } from "axios";
import IComment from "../Model/IComment";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: { "Content-Type": "application/json" },
});

const getComments = (): Promise<AxiosResponse<IComment[]>> => {
    return axiosInstance.get("/comments");
};

export { getComments };