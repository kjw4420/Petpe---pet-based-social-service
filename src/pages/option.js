import React from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./option.css";
const option = () => {
    return (
        <div className="optionWrapper">
            <div className="optionHeader">
                <Link to="/profile">
                <img src="./img/back.png" alt="뒤로가기" className="optionHeaderback"></img>
                </Link>

                <span className="optionHeadername h3 bold">설정</span>
            </div>
            <div className="profileNamecard">
                <img src="./img/profileImg.png" alt="프로필사진" className="profilepicture"></img>
                <div className="namecardInfo">
                    <span className="cardBreed">말티즈/ 남/ 7세<br/></span>
                    <span className="nickname">쫑이98<br/></span>
                    <span className="comment">사료보단 간식이 좋은 쫑이에요</span>
                </div>
                <div className="Browndiv">
                    <div className="Whiteholediv"></div>
                </div>
            </div>
            <div className="optionMenu">
                <div className="profileEditor">
                    <img src="./img/profile_icon.png" alt="프로필편집" className="profileEdit"></img>
                    프로필편집
                </div>
                <div className="account">
                    <img src="./img/account.png" width="24px" alt="계정" className="accountEdit"></img>
                    계정
                </div>
                <div className="privacy">
                    <img src="./img/lock.png" width="24px" alt="프로필편집" className="privacyEdit"></img>
                    개인정보 보호
                </div>
                <div className="alertOption">
                    <img src="./img/alert-circle.png" width="24px" alt="프로필편집" className="alertEdit"></img>
                    알림 설정
                </div>
                <div className="cs">
                    <img src="./img/question-circle.png" width="24px" alt="프로필편집" className="csEdit"></img>
                    고객센터 / 도움말
                </div>
                <div className="logout">
                    <img src="./img/logout.png" width="24px" alt="로그아웃" className="logoutEdit"></img>
                    로그아웃
                </div>
            </div>  
        </div>
    );
};

export default option;