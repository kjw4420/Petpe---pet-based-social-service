import React from "react";
import styled, {css} from 'styled-components';

const TopElement=styled.div`
width: 100%;
height: 64px;
display: flex;
`
const LogoElement=styled.div`
margin:10px;
float: left;
cursor:pointer;
margin-right: auto;
padding-top: 10px;
`
const ImgElement =styled.div`
margin: 10px;
float: right;
cursor: pointer;
padding-top: 10px;

`


const Top_header = () => {
    return (
        <TopElement>
            <LogoElement>
                <img src="./img/Petpe_small.png" alt="로고" className="header_logo"/>
            </LogoElement>
            <ImgElement>
                <img src="./img/search_icon.png" alt="검색아이콘" className="search_icon"/>
            </ImgElement>
            <ImgElement>
                <img src="./img/profile_icon.png" alt="프로필아이콘" className="profile_icon"/>
            </ImgElement>
        </TopElement>
            
   
    );
}

export default Top_header;