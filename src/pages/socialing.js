import React,{useState} from "react";
import "./socialing.css";
import MiniButton from "../components/minibutton";


const Socialing = () => {

  const [socialPost, setSocialPost] = useState(dummyDataForSocial)

  return (
    <>
      <div className="social_wrapper">
        <div className="search_box">
          <input type="text" className="search" placeholder=" 검색" />
        </div>

        <div className="category">
          <MiniButton
            onClick={(e) => {
              e.target.classList.toggle("active");
            }}
            className="active"
          >
            전체보기
          </MiniButton>
          <MiniButton
            onClick={(e) => {
              e.target.classList.toggle("active");
            }}
          >
            레스토랑
          </MiniButton>
          <MiniButton
            onClick={(e) => {
              e.target.classList.toggle("active");
            }}
          >
            카페
          </MiniButton>
          <MiniButton
            onClick={(e) => {
              e.target.classList.toggle("active");
            }}
          >
            호텔
          </MiniButton>
        </div>
        <>
            {socialPost.map((e)=>{
              return(SocialingElement(e))
            })}
        </>
      </div>
    </>
  );
};

export const SocialingElement = (props) => {
  return (

      <div className="social_chatting" key={props.id}>
        <img
          src={props.img}
          alt={`${props.title} 대표 이미지`}
          className="chatting_profile"
        />
        <div className="chatting_title">
          <span className="h4">{props.title}</span>
          <span className="h5">{props.date}</span>
          <span className="h5 fontgray">{props.location}</span>
          <span className="p fontgray">{props.maxParticipant-props.participant.length>0?`${props.maxParticipant-props.participant.length}명 참여가능`:"마감된 소셜링"}</span>
        </div>
      </div>

  );
};

export default Socialing;

const dummyDataForSocial = [
  {
    id:1,
    title : "주말에 같이 산책하실 분~",
    location : "서울 마포구 합정동",
    img: "http://3.39.181.250/media/storypictures/cat3.jpg",
    date : "2022-08-07",
    maxParticipant : 3,
    participant : ["bbomi84","ruby123","junguzzang"],
    category : "food"
  },
  {
    id:2,
    title : "애견동반 영어모임 어떠신가요?",
    location : "서울 용산구 이태원동",
    img: "http://3.39.181.250/media/storypictures/cat2.jpg",
    date : "2022-08-01",
    maxParticipant : 6,
    participant : [],
    category : "education"
  },
  {
    id:3,
    title : "버릇나쁜 우리 강아지? 사회성 기르기",
    location : "서울 강남구 역삼동",
    img: "http://3.39.181.250/media/storypictures/cat1.jpg",
    date : "2022-08-01",
    maxParticipant : 6,
    participant : ["bjungubo","mi84ng"],
    category : "education"
  },
]