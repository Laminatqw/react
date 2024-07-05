import React, {FC} from 'react';

interface IProps {
    label:string;
    text:string;



}
const Header1: FC<IProps> = ({text, label}) => {
    return (
        <>
            <h1 className={label}>{text}</h1>
        </>
    );
};

export default Header1;