import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.nav`
  width: 100%;
  padding: 20px 13%;
  border-bottom: 1px solid var(--line-gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogoElement = styled.div`
  display: block;
  cursor: pointer;
`;
export const ImgElement = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const TopHeader = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <LogoElement>
          <img src="./img/Petpe_small.png" alt="로고" className="header_logo" />
        </LogoElement>
      </Link>
      <ImgElement>
        <img src="./img/search_icon.png" alt="검색아이콘" />
        <Link to="/profile">
        <img src="./img/profile_icon.png" alt="프로필아이콘" />
        </Link>
      </ImgElement>
    </HeaderWrapper>
  );
};

export default TopHeader;
