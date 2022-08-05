import React, { useState } from "react";
import "./socialing.css";
import MiniButton from "../components/minibutton";

const Socialing = () => {
  return (
    <div className="social_wrapper">
      <div className="header">
        <div className="social_header">
          <div className="social_title_back">
            <img src="./img/back.png" alt="뒤로가기"></img>
          </div>
          <span className="social_title h3 bold">소셜링</span>
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
      <>
        <SocialingElement />
        <SocialingElement />
        <SocialingElement />
        <SocialingElement />
        <SocialingElement />
      </>
    </div>
  );
};

export const SocialingElement = () => {
  return (
    <>
      <div className="social_chatting">
        <img
          src="http://placeimg.com/100/100/people"
          alt="/이미지"
          className="chatting_profile"
        />
        <div className="chatting_title">
          <span className="h4">시원한 저녁에 같이 산책하실</span>
          <span className="h5 fontgray">7월 11일 (일)</span>
          <span className="h5">잠실 한강공원</span>
        </div>
      </div>
    </>
  );
};

export default Socialing;
