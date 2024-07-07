import React, {FC} from 'react';
interface IProps{
    name:string
    clickDeed:any
    id:number
}
const ButtonComp:FC <IProps> = ({name, clickDeed, id}) => {
    return (
        <>
        <button onClick={()=>{
            clickDeed(id);
        }}>{name}</button>
        </>
    );
};

export default ButtonComp;