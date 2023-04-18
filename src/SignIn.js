import './SignIn.css';
import React from 'react';
import logo from './img/IUAlogo.png';
import cat1 from './img/SignIn1.png';
import cat2 from './img/SignIn2.PNG';
import cat3 from './img/SignIn3.PNG';
import cat4 from './img/SignIn4.PNG';
import { BrowserRouter as Router,Link } from 'react-router-dom';//BrowserRouter
import { Routes ,Route } from 'react-router-dom';
import HomePage from './homePage.js';

const SignIn=()=> {
    function SignIn() {
      return (
        <div className="SignIn">    

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
                <form className="submitForm">
                    <label>
                        學號: 
                        <input type="text" name="student_id" />
                    </label>
                    <br/>
                    <label>
                        密碼:
                        <input type="password" name="password" />
                    </label>
                    <br/>
                    <br/>
                    <Link to='/homePage'>
                        <button type="submit" className="submitButton" >
                            <span className="button_text">登入</span>
                        </button>
                    </Link>
                </form>
            </div>

        </div>
      );
    }

    return (

           
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/homePage" element={<HomePage/>} />
                    <Route path="/navbar" element={<navbar/> } />
                </Routes>
             
    );
}

export default SignIn;
