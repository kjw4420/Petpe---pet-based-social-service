import React, { useState,useEffect } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Login from "./pages/Login";
import Story from "./pages/Story";
import Socialing from "./pages/socialing";
import TalkTalk from "./pages/talktalk";
import Profile from "./pages/profile";
import Place from "./pages/place";

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Header></Header>

        <Routes>
          <Route path="/" element={<Story />} />
          <Route path="/login" element={<Login />} />
          <Route path="/social/*" element={<Socialing />} />
          <Route path="/talktalk" element={<TalkTalk />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Place" element={<Place />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export const Header = () => {
  return (
    <div className="header">
      <div className="social_header">
        <div className="social_title_back">
          <img src="../img/back.png" alt="뒤로가기"></img>
        </div>
        <span className="social_title h3 bold">소셜링</span>
        <div className="social_title_add">
          <img src="../img/plus.png" alt="소셜링 열기"></img>
        </div>
      </div>
    </div>
  );
};
export const RadioNavigater = () => {
  return (
    <nav className="radioNav">
      <NavLink to="/">
        <div className="radioNavButton">스토리</div>
      </NavLink>
      <NavLink to="/social">
        <div className="radioNavButton">소셜링</div>
      </NavLink>
      <NavLink to="/place">
        <div className="radioNavButton">플레이스</div>
      </NavLink>
      <NavLink to="/talktalk">
        <div className="radioNavButton">반려톡톡</div>
      </NavLink>
    </nav>
  );
};

export default App;
