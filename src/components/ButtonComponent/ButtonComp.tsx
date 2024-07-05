import React, {FC} from 'react';
interface IProps{
    name:string
}
const ButtonComp:FC <IProps> = ({name}) => {
    return (
        <>
        <button>{name}</button>
        </>
    );
};

export default ButtonComp;