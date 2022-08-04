import axios from "../../node_modules/axios/index";
import React, { useState } from 'react'

const TestAxios = () => {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios.get("http://3.39.181.250/story").then((response) => {
      setData(response.data);
    });
  };
  // onClick()
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <>
        {data.map((e) => {
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
      })}
        </>
      )}
    </div>
  );
};

export default TestAxios