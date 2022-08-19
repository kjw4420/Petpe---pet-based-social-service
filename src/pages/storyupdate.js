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

  const [contents, setContents]=useState();
  const [picture, setPicture]=useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    e.persist();

    let files = e.target.profile_files.files;
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    let dataSet = {
      title: "",
      contents: contents,
      picture: picture,
    };

    formData.append("data", JSON.stringify(dataSet));

    const postSurvey = await axios({
      method: "POST",
      url: "http://3.34.21.153/story/",
      mode: "cors",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });

    console.log(postSurvey);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="file"
        name="profile_files"
        multiple="multiple"
      />

      <button type="submit">제출</button>
    </form>
  );
};
export default NewStory;
