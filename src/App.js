import React, { useState } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Login from "./pages/Login";
import Story from "./pages/Story";
import Socialing from "./pages/socialing";
import TalkTalk from "./pages/talktalk";
import Profile from "./pages/profile";
import Place from "./pages/place"

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
          <Route exact path="/Place" element={<Place />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

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
