import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 40%;
  height: 60%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const LoginTitle = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid blue;
  h1 {
    font-size: 25px;
  }
`;

const LoginWrap = styled.div`
  border: 1px solid gray;
  flex: 6;
`;

const Join = styled.div`
  position: absolute;
  left: 0;
  bottom: -5%;
  font-size: 12px;
  b {
    color: blue;
    font-weight: bold;
  }
`;

const SearchIdPw = styled.div`
  position: absolute;
  right: 0;
  bottom: -5%;
  font-size: 12px;
`;


const Login = () => {
  return (
    <Container>
      <Wrap>
        <LoginTitle>
          <h1>로그인</h1>
        </LoginTitle>
        <LoginWrap>

        </LoginWrap>
        <Join>
          <span>
            아직 회원이 아니신가요? <b>회원가입</b>
          </span>
        </Join>
        <SearchIdPw>
          <span>
            아이디 찾기
          </span>
          <span>
            비밀번호 찾기
          </span>
        </SearchIdPw>
      </Wrap>
    </Container>
  )
}

export default Login;
