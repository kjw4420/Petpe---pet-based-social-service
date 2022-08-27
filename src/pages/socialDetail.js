import { MobileWrapper } from "./../components/globalComponent";
import TopHeader from "../components/TopHeader";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, React } from "react";
import axios from "../api/axios";
import useAuth from "./../hooks/useAuth";

const SocialDetail = () => {
  const { auth } = useAuth();
  const pk = useParams();
  const [socialDetail, setSocialDetail] = useState([]);
  const [socialComment, setSocialComment] = useState([]);
  const [newComment, setNewComment] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const deleteSocial = () => {
    if(window.confirm("소셜링을 삭제하시겠습니까?")){
    try {
      axios
        .delete(`/social/socialring/${pk.id}`)
        .then((response) => {
          console.log(response.data);
          navigate("/social", { replace: true });
        });
    } catch (err) {
      setIsLoading("err");
    }
  }
  };

  const handleSubmit = () => {
    try {
      axios
        .post(
          `/social/comments`,
          { text: newComment, socialRing: pk.id }
          // ,{
          //   headers: {
          //     "Content-Type": "application/json",
          //     Authorization: `Bearer ${auth.accessToken}`,
          //   },
          //   withCredentials: true,
          //   "Access-Control-Allow-Credentials": "*",
          // }
        )
        .then((response) => {
          console.log(response.data);
        });
    } catch (err) {
      setIsLoading("err");
    }
  };

  const joinSocial = () => {
    try {
      axios
        .post(`/social/${pk.id}join/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.accessToken}`,
          },
          withCredentials: true,
          "Access-Control-Allow-Credentials": "*",
        })
        .then((response) => {
          console.log(response.data);
        });
    } catch (err) {
      setIsLoading("err");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    try {
      axios
        .get(`/social/socialring/${pk.id}/`)
        .then((response) => {
          setSocialDetail(response.data);
          console.log(response.data);
          setIsLoading(false);
        });
    } catch (err) {
      setIsLoading("err");
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    try {
      axios
        .get(`/social/socialring/comments/${pk.id}/`)
        .then((response) => {
          setSocialComment(response.data);
          console.log(response.data);
          setIsLoading(false);
        });
    } catch (err) {
      setIsLoading("err");
    }
  }, []);

  return (
    <>
      <TopHeader type="2" name="소셜링" />
      <MobileWrapper>
        {pk.id === auth.pk ? <>수정버튼</> : null}
        <p>{socialDetail.title}</p>
        <img src={socialDetail.image} alt={socialDetail.id + "의 대표이미지"} />
        <p>{`카테고리- ${socialDetail.category}`}</p>
        <p>{`타입- ${socialDetail.type}`}</p>
        <p>{`참여중인 인원- ${socialDetail.count} 최대 인원- ${socialDetail.maxpeople}`}</p>
        <p>{socialDetail.content}</p>
        <p>{`만나는날- ${socialDetail.meetdate}`}</p>
        <p>{`만나는시간- ${socialDetail.meettime}`}</p>
        <div onClick={joinSocial}>참여하기</div>
        <div onClick={deleteSocial}>소셜링삭제하기</div>
        <input
          type="text"
          className="mt-10 comment_input"
          placeholder="댓글을 입력하세요"
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
        />
        <button
          className={
            newComment
              ? "comment_submit_button active"
              : "comment_submit_button"
          }
          onClick={handleSubmit}
        >
          제출
        </button>
      </MobileWrapper>
    </>
  );
};

export default SocialDetail;
