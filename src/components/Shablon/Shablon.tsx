import React, {FC} from 'react';
interface IProps {
    text:string;
    picture:string;

}
const Shablon: FC<IProps> = ({text, picture}) => {
    return (
        <>
            <h1>{text}</h1>
            <img src={picture} alt={text}/>
        </>
    );
};

export default Shablon;