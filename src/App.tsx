import React from 'react';
import logo from './logo.svg';
import './App.css';

import Shablon from "./components/Shablon/Shablon";
import DivComp from "./components/DivComponent/divComp";
import Header1 from "./components/HeaderOne/Header1";
import ButtonComp from "./components/ButtonComponent/ButtonComp";

function App() {
  return (
    <>
        <Header1 label={'caption'} text={'The Domestic Vehicle'}></Header1>
        <DivComp items={ <Shablon text={'Zis-12'} picture={'https://upload.wikimedia.org/wikipedia/commons/0/08/Z-15-4_3_na_ZiS-5_RB3.jpg'}></Shablon>}></DivComp>
        <ButtonComp name={'Show Info'}></ButtonComp>

    </>
  );
}

export default App;
