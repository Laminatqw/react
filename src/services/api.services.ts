import axios from "axios";
import {UserModel} from "../Models/UserModel";
import {UserResponse} from "../Models/UserResponse";
import {TokenObtainPairModel} from "../Models/TokenObtainPairModel";
import {TokenRefresh} from "../Models/TokenRefresh";
import {retriveLocalStorageData} from "../helpers/helpers";
import {CarPaginatedModel} from "../Models/CarPaginatedModel";


let axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2'
});
axiosInstance.interceptors.request.use(requestObject => {
    if (localStorage.getItem('tokenPair') && (requestObject.url !== '/auth' && requestObject.url !== '/auth/refresh')) {

        requestObject.headers.set('Authorization','Bearer ' + retriveLocalStorageData<TokenRefresh>('tokenPair').access)
    }
    return requestObject
})

const userService = {
    saveUser: async (data: UserModel):Promise<boolean> =>{
        let response = await axiosInstance.post<UserResponse>('/users', data);
    return !!response.data.id || false
    }
}

const authService = {
    authenticate: async (data: TokenObtainPairModel): Promise<any> => {
        let response = await axiosInstance.post<TokenRefresh>('/auth', data);
        localStorage.setItem('tokenPair', JSON.stringify(response.data))
    },
    refresh: async () =>{
        let refreshToken = retriveLocalStorageData<TokenRefresh>('tokenPair').refresh;
        let response = await axiosInstance.post<TokenRefresh>('/auth/refresh', {refresh:refreshToken})
        localStorage.setItem('tokenPair', JSON.stringify(response.data))
    }
}
const carServices = {
    getCars: async (page:string = '1'):Promise<CarPaginatedModel> =>{
        let response = await axiosInstance.get<CarPaginatedModel>('/cars', {params: {page: page}})


        return response.data;


    }
}
export {userService, authService, carServices}