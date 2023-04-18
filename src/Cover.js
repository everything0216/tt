import './Cover.css';
import React from 'react';
import logo from './img/IUAlogo.png';
import { BrowserRouter as Router,Link } from 'react-router-dom';//BrowserRouter
import { Routes ,Route } from 'react-router-dom';
import HomePage from './homePage.js';
import SignIn from './SignIn.js';

const Cover=()=> {
    function Cover() {
      return (
        <div className="Cover"> 
            <div className='signIn'>
                <div className="title">
                    <div className="title-text">
                        <h1>IUA</h1>
                    </div>
                    <div className="title-img">
                        <img src={logo} alt="IUA" />
                    </div>
                </div>
                <br/>
                <Link to='/SignIn'>
                    <button className="welcomeBtn"><span>Welcome</span></button>
                </Link>
               
            </div>
        </div>
      );
    }

    return (

           
                <Routes>
                    <Route path="/" element={<Cover />} />
                    <Route path="/SignIn" element={<SignIn />} />
                    <Route path="/homePage" element={<HomePage/>} />
                    <Route path="/navbar" element={<navbar/> } />
                </Routes>
             
    );
}

export default Cover;
