import React, {FC} from 'react';
import {CarWithAuthModel} from "../Models/CarWithAuthModel";
interface IProps{
    cars:CarWithAuthModel[];
}
const CarsComponent:FC<IProps> = ({cars}) => {
    return (
        <div>
            {
                cars.map((car,i) =>
                    (<div>{car.id} - {car.brand}</div>))
            }
        </div>
    );
};

export default CarsComponent;