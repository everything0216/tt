import './SignIn.css';
import React from 'react';
import Signlogo from './img/blue_logo.PNG';
import signIn from './img/signIn.PNG';
import cat1 from './img/SignIn1.png';
import cat2 from './img/SignIn2.PNG';
import cat3 from './img/SignIn3.PNG';
import cat4 from './img/SignIn4.PNG';
import { BrowserRouter as Router,Link } from 'react-router-dom';//BrowserRouter
import { Routes ,Route } from 'react-router-dom';
import {useState} from "react";

const SignIn=()=> {
    function SignIn() {
      const [student_id, setStudent_id] = useState("");
      const [password, setPassword] = useState("");
      const handleChange = event => {
        setStudent_id(event.target.student_id);
        setPassword(event.target.password);
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${student_id}`)
      }
      return (
        <div className="SignIn">    
            <div className='SignIn_bg'>
                <div className='SignIn_signIn'>
                    <div className="SignIn_title">
                        
                        <div className="SignIn_title-img">
                            <img src={Signlogo} alt="IUA" />
                        </div>
                        <div className="SignIn_title-text">
                            <img src={signIn} alt="IUA" />
                        </div>
                    </div>
                    <br/>
                    <form className="SignIn_submitForm" onSubmit={handleSubmit}>
                        <label>學號:</label><br/>
                        <input type="text" name="student_id" 
                        onChange={handleChange}
                        value={student_id}/>
                        <br/>
                        <label>密碼:</label><br/>
                        <input type="password" name="password" 
                        onChange={handleChange}
                        value={password}/>
                        <br/>
                        <br/>
                        <div className="SignIn_submitButton_place">
                            <button type="submit" className="SignIn_submitButton" >
                                <span className="button_text">登入</span>
                            </button>
                        </div>
                    </form>
                </div>
                    <div className="SignIn_img1">
                        <img src={cat1} alt="IUA" />
                    </div>
                    <div className="SignIn_img2">
                        <img src={cat2} alt="IUA" />
                    </div>
                    <div className="SignIn_img3">
                        <img src={cat3} alt="IUA" />
                    </div>
                    <div className="SignIn_img4">
                        <img src={cat4} alt="IUA" />
                    </div>

            </div>
        </div>
      );
    }

    return (

           
                <Routes>
                    <Route path="/" element={<SignIn />} />
                </Routes>
             
    );
}

export default SignIn;
