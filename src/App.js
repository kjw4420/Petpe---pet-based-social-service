import "./App.css";
import styled from "styled-components";

const BasicButton = styled.button`
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
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 100px 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;






function App() {
  return (
    <Container>
      <header>
        <h1>
          <img src="./img/logo.png" alt="petpe_logo" />
        </h1>
      </header>
      <div className="login_Wrapper">
        <form>
          <div className="input_wrapper">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="이메일주소를 입력해주세요"
              onChange={checkEmail}
            />
          </div>
          <div className="input_wrapper">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={checkPassword}
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
              <span id="findUserID" className="fontgray">ID/PW 찾기</span>
              <span id="signUp" className="font_deep_brown bold">회원가입</span>
            </div>
          </div>
          <div id="errorAlerter"></div>
          <BasicButton type="submit">로그인</BasicButton>
        </form>
      </div>
    </Container>
  );
}


// 유효성검사함수
const checkEmail = (e) => {
  var email = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  // 형식에 맞는 경우 true 리턴
  if(email.test(e.target.value)){
    document.getElementById("errorAlerter").textContent=""
  }else{document.getElementById("errorAlerter").textContent="올바른 이메일형식이 아닙니다"}
}

//비밀번호 유효성 검사
const checkPassword = (e) => {
  //  8 ~ 10자 영문, 숫자 조합
  var password = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  // 형식에 맞는 경우 true 리턴
  if(password.test(e.target.value)){
    document.getElementById("errorAlerter").textContent=""
  }else{document.getElementById("errorAlerter").textContent="비밀번호를 확인해주세요(특수문자, 숫자,영어만 사용가능)"}
}


export default App;
