import styled from "styled-components";

// 버튼컴포넌트
const ButtonLarge = styled.div`
  min-width: 300px;
  max-width: 330px;
  width: 100%;
  height: 46px;
  padding: 10px 0;
  border-radius: 5px;
  background-color: #a68762;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  &.disabled {
    background-color: #f2f2f2;
    color: #737373;
  }
  &.ghost {
    border: 2px solid #a68762;
    color: #a68762;
    background-color: #fff;
  }
`;

// ---------스토리컴포넌트
export const StoryWrapper = () => {
  return (
    <UserProfile
      userName={"댕댕이"}
      petName={"댕댕이"}
      imgURL={""}
    >
    </UserProfile>
  );
};

export const UserProfile = (userName, petName, imgURL) => {
  <UserProfileWrapper>
    <img src="#" alt="더미이미지" />
    <p>{userName}</p>
    <span className="h5">{petName}</span>
  </UserProfileWrapper>;
};

export const UserProfileWrapper = styled.div`
  width: 100%;
  max-width: 440px;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 20px;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #f2f2f2;
`;

export default ButtonLarge;
