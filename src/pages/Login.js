import "./Login.css";
import React, { useState } from "react";
import Container from "../components/container";
import { Link } from "react-router-dom";
import ButtonLarge from "../components/globalComponent";

function Login() {
  const [idValue, setIdInput] = useState(false);
  const [pwValue, setPwInput] = useState(false);
  const errorAlerterRef = React.useRef()

  // 유효성검사함수
  const handleId = (e) => {
    let email =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 형식에 맞는 경우 true 리턴
    if (email.test(e.target.value)) {
      errorAlerterRef.current.textContent = "";
      setIdInput(true);
    } else {
      errorAlerterRef.current.textContent =
        "올바른 이메일을 입력해주세요";
      setIdInput(false);
    }
  };

  //비밀번호 유효성 검사
  const handlePw = (e) => {
    //  8 ~ 10자 영문, 숫자 조합
    let password = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    // 형식에 맞는 경우 true 리턴
    if (password.test(e.target.value)) {
      errorAlerterRef.current.textContent = "";

      //비번이 맞을시, pw검사 state를 true로
      setPwInput(true);
    } else {
      errorAlerterRef.current.textContent =
        "8자리 이상의 영문, 숫자, 특수문자";

      //비번이 틀릴시, pw검사 state를 false로
      setPwInput(false);
    }
  };

  return (
    <Container>
      <div className="login_Wrapper">
        <header>
          <Link to={"/"}>
          <h1>
            <img src="./img/logo.png" alt="petpe_logo" />
          </h1>
          </Link>
        </header>

        <form action="#">
          <div className="input_wrapper">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="이메일주소를 입력해 주세요"
              onChange={handleId}

            />
          </div>
          <div className="input_wrapper">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={handlePw}

            />
          </div>
          <div className="LoginOptionWrap">
            <div id="keepLoginOption">
              <input type="checkbox" name="keepLoginCheckBox" />
              <label
                htmlFor="keepLoginCheckBox"
                id="keepLoginLabel"
                className="fontgray"
              >
                자동 로그인
              </label>
            </div>
            <div id="registerOptionWrap">
              <span id="findUserID" className="fontgray">
                ID/PW 찾기
              </span>
              <span id="signUp" className="font_deep_brown bold">
                회원가입
              </span>
            </div>
          </div>
          <div id="errorAlerter" ref={errorAlerterRef}></div>

          {/* 조건부 링크 */}
          <Link to={idValue && pwValue ? "/" : "#" }>
            <ButtonLarge
              as="button"
              type="submit"
              className={idValue && pwValue ? "" : "disabled"}
            >
              로그인
            </ButtonLarge>

          </Link>
        </form>
      </div>
      </Container>
  );
}

export default Login;
