import React from "react";
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

export default App;
