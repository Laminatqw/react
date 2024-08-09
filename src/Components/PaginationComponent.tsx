import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";
import {PaginatedPageModel} from "../Models/PaginatedPageModel";
interface IProps{
    next:null | PaginatedPageModel,
    prev:null | PaginatedPageModel
}
const PaginationComponent:FC<IProps> = ({next,prev}) => {
    let [query, setQuery] = useSearchParams({page:'1'})
    const changePage = (page:string) =>{
            switch (page){
                case'next':
                setQuery({...next})
                    break;
                case 'prev':
                    setQuery({...prev})
                    break;
            }
    }
    return (
        <div>
            <button
                disabled={!prev}
                onClick={()=>{
                changePage('prev')
            }}>prev</button>
            <button
                disabled={!next}
                onClick={()=>{
                changePage('next')
            }}>next</button>
        </div>
    );
};

export default PaginationComponent;