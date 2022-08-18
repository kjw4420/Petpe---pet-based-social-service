import { MobileWrapper } from "./../components/globalComponent";
import TopHeader from "../components/TopHeader";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect, React } from "react";
import axios from "../../node_modules/axios/index";

const SocialDetail = () => {
  const pk = useParams();
  const [socialDetail, setSocialDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      axios
        .get(`http://3.39.181.250/social/socialring/${pk.id}`)
        .then((response) => {
          setSocialDetail(response.data);
          console.log(response.data);
          setIsLoading(false);
        });
    } catch (err) {
      setIsLoading("err");
    }
  }, []);

  if (isLoading) {
    return <>loading</>;

  } else {
    return (
      <>
        <TopHeader type="2" name="소셜링" />
        <MobileWrapper>
          <h1 className="bold">타이틀 안날라옴</h1>
          <img
            src={socialDetail.image}
            alt={socialDetail.id + "의 대표이미지"}
          />
          <p>{`카테고리- ${socialDetail.category}`}</p>
          <p>{`타입- ${socialDetail.type}`}</p>
          <p>{`참여중인 인원- ${socialDetail.count} 최대 인원- ${socialDetail.maxpeople}`}</p>
          <p className="bold">콘텐츠 안날라옴</p>
          <p>{`만나는날- ${socialDetail.meetdate}`}</p>
          <p>{`만나는시간- ${socialDetail.meettime}`}</p>
        </MobileWrapper>
      </>
    );
  }
};

export default SocialDetail;
