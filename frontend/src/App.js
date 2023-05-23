import './App.css';
import React from 'react';
import logo from './img/IUAlogo.png';

import {BrowserRouter} from "react-router-dom"//BrowserRouter
import { Routes ,Route } from 'react-router-dom';
import Cover from './Cover.js';
import SignIn from './SignIn.js';
import Remain from './remain.js';
import NickName from './nickName';
import TimeTable from './timeTable';
import HomePage from './homePage.js';
import Credit from './Credit.js';
import Core from './Core.js';
import Must from './Must.js';
import Graduation from './Graduation.js';
import Search from './Search';

const App=()=> {
   
    return (

           
                <Routes>
                    <Route path="/" element={<Cover/>} />
                    <Route path="/SignIn" element={<SignIn/>} />
                    <Route path="/remain" element={<Remain/>} />
                    <Route path="/nickName" element={<NickName/>} />
                    <Route path="/timeTable" element={<TimeTable/>} />
                    <Route path="/HomePage" element={<HomePage/>} />
                    <Route path="/Credit" element={<Credit />}/>
                    <Route path="/Core" element={<Core />}/>
                    <Route path="/Must" element={<Must />}/>
                    <Route path="/Graduation" element={<Graduation />}/>
                    <Route path="/Search" element={<Search />}/>
                    <Route path="/navbar" element={<navbar/> } />
                </Routes>
             
    );
}

export default App;
