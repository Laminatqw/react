import React from 'react';
import HeaderComponent from "../Components/header/HeaderComponent";
import {Outlet} from "react-router-dom";
import FooterComponent from "../Components/FooterComponent";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;