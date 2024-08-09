import React, {useEffect, useState} from 'react';
import {authService, carServices} from "../services/api.services";
import axios, {AxiosError} from "axios";
import {CarPaginatedModel} from "../Models/CarPaginatedModel";
import CarsComponent from "../Components/CarsComponent";
import {useNavigate, useSearchParams} from "react-router-dom";
import PaginationComponent from "../Components/PaginationComponent";
const CarsPage = () => {

    let navigate = useNavigate()
    let [query] = useSearchParams()
const [carPaginatedObject, setcarPaginatedObject] = useState<CarPaginatedModel>({
    items:[],
    next:null,
    prev: null,
    total_items:0,
    total_pages:0
})
    useEffect(() => {
        const getCarsData = async () => {

        try {
            let response = await carServices.getCars(query.get('page')|| '2');
            setcarPaginatedObject(response)
        }catch (e){
            const axiosError = e as AxiosError;
            if (axiosError && axiosError?.response?.status === 401) {

                try{
                    authService.refresh();
                } catch (e){
                    return  navigate('/')
                }
            }
        }
        }


        getCarsData();

    }, [query]);
    return (
        <div>
            <CarsComponent cars={carPaginatedObject.items}/>
            <PaginationComponent next={carPaginatedObject.next} prev={carPaginatedObject.prev}/>
        </div>
    );
};

export default CarsPage;