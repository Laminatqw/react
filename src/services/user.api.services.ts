import IUser from '../Model/IUser'
import axios, {AxiosResponse} from "axios";

let axiosInstance = axios.create({
    baseURL:"https://dummyjson.com/users",
    headers: {"Content-Type": "application/json"},
});



const getUsers = () :Promise<AxiosResponse<{ users: IUser[] }>>  =>{
    return axiosInstance.get('')
}

export {
    getUsers,
};
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