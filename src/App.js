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
            />
          </div>
          <div className="input_wrapper">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
          <div className="LoginOptionWrap">
            <div id="keepLoginOption">
              <input type="checkbox" name="keepLoginCheckBox" />
              <label
                for="keepLoginCheckBox"
                id="keepLoginLabel"
                className="fontgray"
              >
                자동 로그인
              </label>
            </div>
            <div></div>
          </div>
          <div id="errorAlerter">올바르지 않은 비밀번호입니다</div>
          <BasicButton type="submit">로그인</BasicButton>
        </form>
      </div>
    </Container>
  );
}

export default App;
