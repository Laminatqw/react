import React, {FC} from 'react';
interface IProps {
    items:any;
}
const DivComp : FC<IProps> = ({items}) => {
    return (
        <div>{items}</div>
    );
};

export default DivComp;