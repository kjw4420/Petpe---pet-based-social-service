import "./Login.css";
import React, { useState } from "react";
import Container from "../components/container";
import {Link } from "react-router-dom";
import ButtonLarge from "../components/button_large";

function Login() {
  // 없어도되는 state
  // let[active,setActive]=useState(false);

  // 빈문자열 ㄴㄴ 불리언사용
  // let[idValue,setIdInput]=useState('');
  // let[pwValue,setpwInput]=useState('');

  let [idValue, setIdInput] = useState(false);
  let [pwValue, setPwInput] = useState(false);

  // 이미 밑에 유효성검사 만들었으니 그거 사용
  //   const ActiveIsPassedLogin=()=>{
  //   return idValue.includes('@')&&pwValue.length>=8
  //   ?setActive(true)
  //   :setActive(false);
  // }

  // 유효성검사함수
  const handleId = (e) => {
    let email =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 형식에 맞는 경우 true 리턴
    if (email.test(e.target.value)) {
      document.getElementById("errorAlerter").textContent = "";
      setIdInput(true);
    } else {
      document.getElementById("errorAlerter").textContent =
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
      document.getElementById("errorAlerter").textContent = "";

      //비번이 맞을시, pw검사 state를 true로
      setPwInput(true);
    } else {
      document.getElementById("errorAlerter").textContent =
        "비밀번호를 확인해주세요(특수문자, 숫자,영어만 사용가능)";

      //비번이 틀릴시, pw검사 state를 false로
      setPwInput(false);
    }
  };

  return (
      <div className="login_Wrapper">
        <header>
          <Link to={"/"}>
          <h1>
            <img src="./img/logo.png" alt="petpe_logo" />
          </h1>
          </Link>
        </header>

        <form>
          <div className="input_wrapper">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="이메일주소를 입력해 주세요"
              onChange={handleId}
              // 핸들러 하나로 통합
              // onKeyUp={ActiveIsPassedLogin}
            />
          </div>
          <div className="input_wrapper">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={handlePw}
              // 핸들러 하나로 통합
              // onKeyUp={ActiveIsPassedLogin}
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
          <div id="errorAlerter"></div>


            {/* <button
              type="submit"
              className={idValue && pwValue ? "activeLoginBtn" : "loginBtn"}
              // className="lg-button"
              // disabled={idValue === '' || pwValue === '' ? true : false}

              // !를 붙히면 값을 반대로 뒤집어주고 ||연산자 사용시, false인 값을 반환함
              // 삼항연산자의 결과가 결국 true , false니까 한번더 안뱉어줘도됨
              disabled={!idValue || !pwValue}
            >
              로그인
            </button> */}
            
          <Link to="/">
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
  );
}

export default Login;
