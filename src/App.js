import './App.css';
import React from 'react';
import logo from './img/IUAlogo.png';
import { BrowserRouter as Router,Link } from 'react-router-dom';//BrowserRouter
import { Routes ,Route } from 'react-router-dom';
import HomePage from './homePage.js';

const App=()=> {
    function SignIn() {
      return (
        <div className="App">
            {/*https://react.dev/reference/react-dom/components/input#reading-the-input-values-when-submitting-a-form*/}
            
            {/*
            <nav class="menu">
                <div className='menuToggle'>
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul>
                        <li><a href="#">忘記密碼了啦!</a></li>
                        <li><a href="#">關於我們</a></li>
                        <li><a href="#">連繫我們</a></li>
                    </ul>
                </div>
                
            </nav>
      */}
           

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

export default App;
