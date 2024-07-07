import React, {FC, ReactNode} from 'react';
interface IProps {
    children:ReactNode;
}
const DivComp : FC<IProps> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default DivComp;