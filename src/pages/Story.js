import React, { useState } from "react";
import "./story.css";
import axios from "../../node_modules/axios/index";
import TestAxios from "../functions/useAxios"

const Story = () => {

  return (
    <>
    <TestAxios></TestAxios>
      {/* {story.map((e) => {
        return (
            <div className="storyWrapper" key={e.id}>
              <div className="userProfileWrapper">
                <div className="userProfile-sm">
                  <img src={e.pictures[0].picture} alt="/이미지" />
                  <div>
                    <span className="p">{e.id}</span>
                    <span className="h5">{e.id}</span>
                  </div>
                </div>
              </div>
              <div className="imgWrapper">
                <img src={e.pictures[1].picture} alt="" />
              </div>
              <div className="storyInteractionWrapper">
                <div className="icon skeleton"></div>
                <div className="icon skeleton"></div>
              </div>
              <div className="storyDetailWrapper">
                <span className="liked">junguZzang 외 6명</span>
                <span className="content">{e.content}</span>
                <span className="taggedUser h5">#뽀미 #대한이</span>
                <span className="postedDate h5">{e.createdAt}</span>
              </div>
            </div>

        );
      })} */}
    </>
  );
};

export const StoryEle = () => {
  return (
    <div className="storyWrapper">
      <div className="userProfileWrapper">
        <div className="userProfile-sm">
          <img src="http://placeimg.com/100/100/people" alt="/이미지" />
          <div>
            <span className="p">cutypuppy34</span>
            <span className="h5">멍뭉이</span>
          </div>
        </div>
      </div>
      <div className="imgWrapper">
        <img src="http://placeimg.com/470/470/nature" alt="" />
      </div>
      <div className="storyInteractionWrapper">
        <div className="icon skeleton"></div>
        <div className="icon skeleton"></div>
      </div>
      <div className="storyDetailWrapper">
        <span className="liked">junguZzang 외 6명</span>
        <span className="content">날씨가 좋아서 산책나옴</span>
        <span className="taggedUser h5">#뽀미 #대한이</span>
        <span className="postedDate h5">4일전</span>
      </div>
    </div>
  );
};

export default Story;
