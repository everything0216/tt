import './App.css';
import React from 'react';
import logo from './img/IUAlogo.png';

import {BrowserRouter} from "react-router-dom"//BrowserRouter
import { Routes ,Route } from 'react-router-dom';
import Cover from './Cover.js';
import SignIn from './SignIn.js';
import Remain from './remain.js';

const App=()=> {
   
    return (

           
                <Routes>
                    <Route path="/" element={<Cover/>} />
                    <Route path="/signIn" element={<SignIn/>} />
                    <Route path="/remain" element={<Remain/>} />
                    <Route path="/navbar" element={<navbar/> } />
                </Routes>
             
    );
}

export default App;