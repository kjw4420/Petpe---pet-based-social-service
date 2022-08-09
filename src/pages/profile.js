import React, { useState } from "react";
import Container from "../components/container";
import { Link } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  return (
    <>
     <div className="profile_wrapper">
      <div className="profile_header">
        <img src="./img/Petpe_small" alt="로고" className="header_logo"/>
        <img src=" " alt="알림"className="header_alert"/>
        <img src=" " alt="캘린더" className="header_calender"/>
        <img src=" " alt="설정" className="options"/> 
      </div>
     </div>
    </>
    
  );
};

export default Profile;
