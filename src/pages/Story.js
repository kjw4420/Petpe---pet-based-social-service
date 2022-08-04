import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./story.css";

const Story = () => {
  return (
    <>
      <StoryEle />
      <StoryEle />
      <StoryEle />
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

// const RadioNavigater = () => {
//   const [navLocation, setNavLocation] = useState("NavBtnStory");

//   return (
//     <nav className="radioNav">
//       <Link to="/">
//         <div
//           className={
//             navLocation === "NavBtnStory"
//               ? "radioNavButton selected"
//               : "radioNavButton"
//           }
//           onClick={()=>{
//             setNavLocation("NavBtnStory")
//           }}
//         >
//           스토리
//         </div>
//       </Link>
//       <Link to="/social">
//         <div
//           className={
//             navLocation === "NavBtnSocial"
//               ? "radioNavButton selected"
//               : "radioNavButton"
//           }
//           onClick={()=>{
//             setNavLocation("NavBtnSocial")
//           }}
//         >
//           소셜링
//         </div>
//       </Link>
//       <Link to="/place">
//         <div
//           className={
//             navLocation === "NavBtnPlace"
//               ? "radioNavButton selected"
//               : "radioNavButton"
//           }
//           onClick={()=>{
//             setNavLocation("NavBtnPlace")
//           }}
//         >
//           플레이스
//         </div>
//       </Link>
//       <Link to="/talktalk">
//         <div
//           className={
//             navLocation === "NavBtnTalkTalk"
//               ? "radioNavButton selected"
//               : "radioNavButton"
//           }
//           onClick={()=>{
//             setNavLocation("NavBtnTalkTalk")
//           }}
//         >
//           반려톡톡
//         </div>
//       </Link>
//     </nav>
//   );
// };

export default Story;
