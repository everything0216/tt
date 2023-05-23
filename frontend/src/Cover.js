import './Cover.css';
import React from 'react';
import logo from './img/IUAlogo.png';
import { BrowserRouter as Router,Link } from 'react-router-dom';//BrowserRouter
import { Routes ,Route } from 'react-router-dom';
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

const Cover=()=> {
    function Cover() {
        return (
            <div className="Cover"> 
                <div className="Cover_bg">
                    <div className='Cover_signIn'>
                        <div className="Cover_title">
                            <div className="Cover_title-text">
                                <h1>IUA</h1>
                            </div>
                            <div className="Cover_title-img">
                                <img src={logo} alt="IUA" />
                            </div>
                        </div>
                        <br/>
                        <Link to='/SignIn'>
                            <button className="Cover_welcomeBtn"><span>Welcome</span></button>
                        </Link>
                    
                    </div>
                </div>
            </div>
          );
        }

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

export default Cover;
