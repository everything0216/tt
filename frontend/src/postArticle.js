import './PostArticle.css';
import React from 'react';
import {Title}  from './components/ArticleStyle.js';
import {ArticleSubmitBtn, ArticleSubmitBtnPosition}  from './components/ArticleStyle.js';
import { BrowserRouter as Router,Link } from 'react-router-dom';//BrowserRouter
import { Routes ,Route } from 'react-router-dom';
import {useState} from "react";

const PostArticle=()=> {


    function ArticleFoodInput() {
        return (
          <form className='articleFoodForm'>
            <div className='articleFoodFormTitle'>
              <label>標題:&emsp;&emsp;&emsp;</label>
              <input type='text'></input>
            </div><br/>
            <div className='articleFoodFormTime'>
              <label>營業時間:&emsp;</label>
              <input type='text'></input>
            </div><br/>
            <div className='articleFoodFormAddress'>
              <label>店家地址:&emsp;</label>
              <input type='text'></input>
            </div><br/>
            <div className='articleFoodFormInfo'>
              <label>店家資訊:&emsp;</label>
              <input type='text'></input>
            </div><br/>
            <div className='articleFoodFormGoogleRate'>
              <label>google評分:</label>
              <input type='text'></input>
            </div><br/>
            <div className='articleFoodFormSchoolRate'>
              <label>校內評分:&emsp;</label>
              <input type='text'></input>
            </div><br/>
              <ArticleSubmitBtnPosition>
                <ArticleSubmitBtn>確認發文</ArticleSubmitBtn>
              </ArticleSubmitBtnPosition>
          </form>  
        );
      }

      function ArticleRentInput() {
        return (
          <form className='articleRentForm'>
            <div className='articleRentFormTitle'>
              <label>標題:</label>
              <input type='text'></input>
            </div><br/>
            <div className='articleRentFormAddress'>
              <label>地址:</label>
              <input type='text'></input>
            </div><br/>
            <div className='articleFoodRentMoney'>
              <label>租金:</label>
              <input type='text'></input>
            </div><br/>
            <div className='articleRentFormGender'>
              <label>性別:</label>
              <input type="radio" id='girl' value='girl' name='rentGender' checked></input>
              <label for="girl">女</label>
              <input type="radio" id='boy' value='boy' name='rentGender'></input>
              <label for="boy">男</label>
              <input type="radio" id='both' value='both' name='rentGender'></input>
              <label for="both">無限制</label>
            </div><br/>
            <div className='articleRentFormPeople'>
              <label>人數:</label>
              <input type='text'></input>
            </div><br/>
            <div className='articleRentFormType'>
              <label>房型:</label>
              <input type='text'></input>
            </div><br/>
            <div className='articleRentFormRegion'>
              <label>地區:</label>
              <select>
                  <option>請選擇區域</option>
                  <option value='Zhongzheng'>中正區</option>
                  <option value='Xinyi'>信義區</option>
                  <option value='Renai'>仁愛區</option>
                  <option value='Zhongshan'>中山區</option>
                  <option value='Anle'>安樂區</option>
                  <option value='Nuannuan'>暖暖區</option>
                  <option value='Qidu'>七堵區</option>
              </select>
            </div><br/>
            <div className='articleRentFormCar'>
              <label>車位:</label>
              <input type="radio" id='yes' value='yes' name='haveCar' checked></input>
              <label for="yes">有</label>
              <input type="radio" id='no' value='no' name='haveCar'></input>
              <label for="no">無</label>
            </div><br/>
            <div className='articleRentFormWater'>
              <label>水費:</label>
              <input type='text'></input>
            </div><br/>
            <div className='articleRentFormPower'>
              <label>電費:</label>
              <input type='text'></input>
            </div><br/>
            <div className='articleRentFormText'>
              <label>內文:</label><br/>
              <textarea type='text' className='articleRentFormTextInput'></textarea>
            </div><br/>
            <ArticleSubmitBtnPosition>
                <ArticleSubmitBtn>確認發文</ArticleSubmitBtn>
            </ArticleSubmitBtnPosition>
          </form>  
        );
      }

      function ArticleChangeClassInput() {
        return (
          <form className='articleChangeClassForm'>
            <div className='articleChangeClassFormTitle'>
              <label>標題:</label>
              <input type='text' className='articleChangeClassFormTitleInput'></input>
            </div><br/>
            <div className='articleChangeClassFormText'>
              <label>內文:</label><br/>
              <textarea type='text' className='articleChangeClassFormTextInput'></textarea>
            </div><br/>
            <ArticleSubmitBtnPosition>
                <ArticleSubmitBtn>確認發文</ArticleSubmitBtn>
            </ArticleSubmitBtnPosition>
          </form>  
        );
      }

    function PostArticle() {
      /*const [nickName_id, setNickName_id] = useState("");
      const handleChange = event => {
        setNickName_id(event.target.nickName_id);
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The nickName you entered was: ${nickName_id}`)
      }*/
      const [selectedOption, setSelectedOption] = useState('');
      const [isFoodShown, setIsFoodShown] = useState(true);
      const [isRentShown, setIsRentShown] = useState(false);
      const [isChangeClassShown, setIsChangeClassShown] = useState(false);

      const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
    
        // 執行相應的處理
        if (selectedValue === 'food') {
          FoodHandler();
        }
        else if (selectedValue === 'rent') {
          RentHandler();
        }
        else if (selectedValue === 'changeClass') {
          ChangeClassHandler();
        }
      };

      const FoodHandler = () => {
        setIsFoodShown(true);
        setIsRentShown(false);
        setIsChangeClassShown(false);
      };

      const RentHandler = () => {
        setIsFoodShown(false);
        setIsRentShown(true);
        setIsChangeClassShown(false);
      };

      const ChangeClassHandler = () => {
        setIsFoodShown(false);
        setIsRentShown(false);
        setIsChangeClassShown(true);
      };
      

      return (
        <div className="PostArticle">    
            <div className='PostArticle_bg'>
                <Title>發文</Title>
                <div className='articleFormPosition'>
                    <div className='articleForm' >
                        <select className='selectType' onChange={handleSelectChange}>
                            <option value="food">美食版</option>
                            <option value="rent">租屋版</option>
                            <option value="changeClass">換課版</option>
                        </select>
                        <div className='inputFormPosition'>
                          {isFoodShown && <ArticleFoodInput/>}
                          {isRentShown && <ArticleRentInput/>}
                          {isChangeClassShown && <ArticleChangeClassInput/>}
                        </div>

                    </div>
                </div>

            </div>
        </div>
      );
    }

    return (
           
                <Routes>
                    <Route path="/" element={<PostArticle />} />
                </Routes>
             
    );
}

export default PostArticle;


/* note
-select要用onChange事件才可執行
*/
