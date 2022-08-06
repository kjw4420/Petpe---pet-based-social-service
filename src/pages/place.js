import React, { useState } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Container from "../components/container";
import MiniButton from "../components/minibutton";
import "./Place.css";


const Place = () => {
  return(
  
      <div className="place_header">
        <div  className="place_search">
          <input type="text" className="search" placeholder=" 검색" />
        </div>
        <div className="category">
          <MiniButton onClick={(e)=>{e.target.classList.toggle("active")}} className = "active">전체보기</MiniButton>
          <MiniButton onClick={(e)=>{e.target.classList.toggle("active")}}>레스토랑</MiniButton>
          <MiniButton onClick={(e)=>{e.target.classList.toggle("active")}}>카페</MiniButton>
          <MiniButton onClick={(e)=>{e.target.classList.toggle("active")}}>호텔</MiniButton>
      </div>
        
      </div>
    
  )
};

export default Place;
