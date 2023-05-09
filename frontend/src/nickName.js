import './nickName.css';
import React from 'react';
import Signlogo from './img/blue_logo.PNG';
import cat1 from './img/SignIn1.png';
import cat2 from './img/SignIn2.PNG';
import cat3 from './img/SignIn3.PNG';
import cat4 from './img/SignIn4.PNG';
import { BrowserRouter as Router,Link } from 'react-router-dom';//BrowserRouter
import { Routes ,Route } from 'react-router-dom';
import {useState} from "react";

const NickName=()=> {
    function NickName() {
      const [nickName_id, setNickName_id] = useState("");
      const handleChange = event => {
        setNickName_id(event.target.nickName_id);
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The nickName you entered was: ${nickName_id}`)
      }
      return (
        <div className="NickName">    
            <div className='NickName_bg'>
                <div className="NickName_title">
                    <div className="NickName_title-img">
                        <img src={Signlogo} alt="IUA" />
                    </div>
                </div>
                <br/>
                <form className="NickName_submitForm" onSubmit={handleSubmit}>
                    <div  className="hint_label">
                        <label className="first_label">看來你是第一次登入此系統!<br/>填寫你想要被稱呼的暱稱吧!</label><br/>
                    </div>
                    <input type="text" name="nickName_id" 
                    onChange={handleChange}
                    value={nickName_id}/>
                    <br/>
                    <div className="NickName_submitButton_place">
                        <button type="submit" className="NickName_submitButton" >
                            <span className="button_text">確認</span>
                        </button>
                    </div>
                </form>
                <div className="NickName_img1">
                    <img src={cat1} alt="IUA" />
                </div>
                <div className="NickName_img2">
                    <img src={cat2} alt="IUA" />
                </div>
                <div className="NickName_img3">
                    <img src={cat3} alt="IUA" />
                </div>
                <div className="NickName_img4">
                    <img src={cat4} alt="IUA" />
                </div>

            </div>
        </div>
      );
    }

    return (
           
                <Routes>
                    <Route path="/" element={<NickName />} />
                </Routes>
             
    );
}

export default NickName;
