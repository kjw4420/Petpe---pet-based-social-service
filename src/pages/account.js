import React, { useState, useEffect } from "react";
import Container from "../components/container";
import Option from "./option";
import {
  Link,
  Route,
  Routes,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";
import "./profile.css";
import useAuth from "../hooks/useAuth";
import TopHeader from "../components/TopHeader";
import { MobileWrapper } from "../components/globalComponent";
import axios from "../../node_modules/axios/index";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "x-CSRFToken";

const Account = () => {
  const { auth } = useAuth();

  const [isLoading, setIsLoading] = useState(true);
  const [userDetail, setUserDetail] = useState();
  const userPK = useParams();
  console.log(userPK.id)
  useEffect(() => {
    setIsLoading(true);
    try {
      axios
        .get(`http://3.39.181.250/accounts/user/${userPK.id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.accessToken}`,
          },
          withCredentials: true,
          "Access-Control-Allow-Credentials": "*",
        })
        .then((response) => {
          setUserDetail(response.data);
          console.log(response.data);
          setIsLoading(false);
        });
    } catch (err) {
      console.log(err);
      setIsLoading("err");
    }
  }, []);
  if (isLoading){
    return ( <TopHeader
      type="4"
      URL2="/profile/option"
      callBackImg2="setting"
    />)
  }else
    return (

            <>
              <TopHeader
                type="4"
                URL2="/profile/option"
                callBackImg2="setting"
              />
              <MobileWrapper>
                <div className="profileCard">
                  <img
                    src={userDetail.userimage}
                    alt="프로필사진"
                    className="profileImage"
                  ></img>
                  <div className="profileInfo">
                    {/* <span className="cardBreed">
                    말티즈/ 남/ 7세
                    <br />
                  </span> */}
                    <span className="p xbold">
                      {userDetail.username}
                      <br />
                    </span>
                    <span className="comment">{userDetail.email}</span>
                  </div>
                </div>
                <div className="userInfo">
                  <div>게시물</div>
                  <div>{userDetail.writen_story.length}</div>
                  {/* <div>팔로잉</div> */}
                </div>
                <button className="Writting">글쓰기</button>
                <p className="mt-10">게시물</p>
                <div className="presentpicture">
                  {userDetail.writen_story.map((e) => {
                    return (
                      <img key={e.pictures[0].id}
                        src={e.pictures[0].picture}
                        alt="예시사진"
                        className="exPicture"
                      ></img>
                    );
                  })}
                </div>
              </MobileWrapper>
            </>

    );
};

export default Account;