import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/Login";
import Story from "./pages/Story";
import Socialing from "./pages/socialing";
import TalkTalk from "./pages/talktalk";
import Profile from "./pages/profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <RadioNavigater></RadioNavigater>
        <Routes>
          <Route exact path="/" element={<Story />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/social" element={<Socialing />} />
          <Route exact path="/talktalk" element={<TalkTalk />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const RadioNavigater = () => {
  const [navLocation, setNavLocation] = useState("NavBtnStory");

  return (
    <nav className="radioNav">
      <Link
        to="/"
        onClick={() => {
          setNavLocation("NavBtnStory");
        }}
      >
        <div
          className={
            navLocation === "NavBtnStory"
              ? "radioNavButton selected"
              : "radioNavButton"
          }
        >
          스토리
        </div>
      </Link>
      <Link
        to="/social"
        onClick={() => {
          setNavLocation("NavBtnSocial");
        }}
      >
        <div
          className={
            navLocation === "NavBtnSocial"
              ? "radioNavButton selected"
              : "radioNavButton"
          }
        >
          소셜링
        </div>
      </Link>
      <Link
        to="/place"
        onClick={() => {
          setNavLocation("NavBtnPlace");
        }}
      >
        <div
          className={
            navLocation === "NavBtnPlace"
              ? "radioNavButton selected"
              : "radioNavButton"
          }
        >
          플레이스
        </div>
      </Link>
      <Link
        to="/talktalk"
        onClick={() => {
          setNavLocation("NavBtnTalkTalk");
        }}
      >
        <div
          className={
            navLocation === "NavBtnTalkTalk"
              ? "radioNavButton selected"
              : "radioNavButton"
          }
        >
          반려톡톡
        </div>
      </Link>
    </nav>
  );
};

export default App;
