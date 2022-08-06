import React from "react";
import "./socialing.css";
import MiniButton from "../components/minibutton";
import { Header } from './../App';

const Socialing = () => {
  return (
    <>
      <div className="social_wrapper">
        <Header></Header>
        <div className="search_box">
          <input type="text" className="search" placeholder=" 검색" />
        </div>

        <div className="category">
          <MiniButton
            onClick={(e) => {
              e.target.classList.toggle("active");
            }}
            className="active"
          >
            전체보기
          </MiniButton>
          <MiniButton
            onClick={(e) => {
              e.target.classList.toggle("active");
            }}
          >
            레스토랑
          </MiniButton>
          <MiniButton
            onClick={(e) => {
              e.target.classList.toggle("active");
            }}
          >
            카페
          </MiniButton>
          <MiniButton
            onClick={(e) => {
              e.target.classList.toggle("active");
            }}
          >
            호텔
          </MiniButton>
        </div>
        <>
          <SocialingElement />
          <SocialingElement />
          <SocialingElement />
          <SocialingElement />
          <SocialingElement />
        </>
      </div>
    </>
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
