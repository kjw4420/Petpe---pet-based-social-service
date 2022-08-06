import React, { useState } from "react";
import Container from "../components/container";
import { Link } from "react-router-dom";
import "./socialing.css";
import MiniButton from "../components/minibutton";


const Socialing=()=>{
  const [miniselect,setminiselect]=useState(false);
  

  
  return(
    <div className="social_wrapper">
      <div className="header">
        <div className="social_header">
          <div className="social_title_back">
            <img src="./img/back.png" alt="뒤로가기"></img>
          </div>
          <h1 className="social_title">소셜링</h1>
          <div className="social_title_add">
            <img src="./img/plus.png" alt="소셜링 열기"></img>
          </div>
        </div>
      </div>
      <div className="search_box">
      <input type="text" className="search" placeholder=" 검색" />
      </div>
      <div className="category">
        <MiniButton className="active">전체보기</MiniButton>
        <MiniButton>레스토랑</MiniButton>
        <MiniButton>카페</MiniButton>
        <MiniButton>호텔</MiniButton>
      </div>
      <Socialing_chat/>
      <Socialing_chat/>
      <Socialing_chat/>
      <Socialing_chat/>
      <Socialing_chat/>
    </div>
    
    

    
      
    
  )
}






export const Socialing_chat = () => {
  return (
    <>
      <div className="social_box">
        <div className="social_chatting">
          <img src="http://placeimg.com/100/100/people" alt="/이미지" className="chatting_profile"/>
          <div className="chatting_title">
            <h2>시원한 저녁에 같이 산책하실</h2>
            <p>7월 11일 (일)</p>
            <p>잠실 한강공원</p>
          </div>
        </div>
      </div>
    </>
  ); 
};

export default Socialing;
