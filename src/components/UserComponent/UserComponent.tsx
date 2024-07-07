import React, {FC, ReactNode} from 'react';
import DivComp from "../DivComponent/divComp";
import ButtonComp from "../ButtonComponent/ButtonComp";
import IUser from "../../Model/IUser"

type UserComponentWithChildren<T> = T & {children?: ReactNode} & {clickFunc: (id:number) => any};
const UserComponent:FC<UserComponentWithChildren<IUser>> = ({id,firstName,lastName, clickFunc}) => {
    return (
        <>
            <DivComp>
                {id} - {firstName}  {lastName} - <ButtonComp id={id} clickDeed={clickFunc} name={"Coms"}  />
            </DivComp>
        </>
    );
};

export default UserComponent;