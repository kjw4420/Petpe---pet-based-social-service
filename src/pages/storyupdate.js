import { React, useEffect, useState, useRef } from "react";
import axios from "../../node_modules/axios/index";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import TopHeader from "./../components/TopHeader";
import MiniButton from "./../components/minibutton";
import { MobileWrapper } from "./../components/globalComponent";
import useAuth from "./../hooks/useAuth";
import { stringify } from "../../../../../../AppData/Local/Microsoft/TypeScript/4.7/node_modules/jest-matcher-utils/build/index";


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'x-CSRFToken';

const NewStory = () => {
  const [contents, setContents] = useState();
  const [Picture, setPicture]=useState();
  const [title,setitle]=useState();
  const { auth } = useAuth();
  
let dataSet ={
  title:"",
  contents:contents,
  Picture:Picture,
};


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    let dataSet ={
      title:"",
      contents:contents,
      Picture:Picture,
    };

    formData.append("data", JSON.stringify(dataSet))

    try {
      axios
        .post(
          "http://3.34.21.153/story/", 
          {
            headers: {
              "content-type": "multipart/form-data",
              Authorization: `Bearer ${auth.accessToken}`,
            },
            withCredentials: true,
            "Access-Control-Allow-Credentials": "*",
          }
        )
        .then((response) => {
          console.log(response);
        });
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>
      <TopHeader
        type="3"
        name="새 스토리"
        callBackType="text"
        callBackText="저장"
      />
      <MobileWrapper>
        <form>
          <textarea
            placeholder="내용을 입력하세요"
            onChange={(e) => setContents(e.target.value)}
          />
          <input 
          type="file" 
          onChange={(e)=> setPicture(e.target.files)}/> 
          
          <MiniButton onClick={handleSubmit}>제출</MiniButton>
        </form>
      </MobileWrapper>
    </>
  );
};

export default NewStory;
