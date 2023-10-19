import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from '../Components/LoginForm';
import LoginSNS from '../Components/LoginSNS';
import responsive from '../style/respoinsive';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 40%;
  min-width: 600px;
  height: 50%;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and ${responsive.tablet} {
    width: 500px;
    min-width: 500px;
  }
  @media screen and ${responsive.mobile} {
    width: 350px;
    min-width: 350px;
    height: 45%;
  }
  @media screen and ${responsive.iphone12Pro} {
    width: 300px;
    min-width: 300px;
    height: 40%;
  }
`;

const LoginTitle = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 2px solid #87C700;
  margin-bottom: 30px;
  h1 {
    font-size: 30px;
    font-weight: 500;
    b {
      color: #87C700;
    }
  }
  @media screen and ${responsive.tablet} {
    h1 {
      font-size: 26px;
    }
  }
  @media screen and ${responsive.mobile} {
    h1 {
      font-size: 22px;
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    h1 {
      font-size: 20px;
    }
  }
`;

const LoginWrap = styled.div`
  border-radius: 5px;
  flex: 6;
  display: flex;
  flex-direction: column;
`;

const SelectMember = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 10px 10px 0 0;
    cursor: pointer;
    &:first-child {
      border-bottom: ${(props) => props.isMemberSns ? "1px solid #fff" : "1px solid #ddd"};
    }
    &:last-child {
      border-bottom: ${(props) => props.isMemberSns ? "1px solid #ddd" : "1px solid #fff"};
    }
    span {
      font-size: 16px;
      font-weight: bold;
    }
  }
  @media screen and ${responsive.tablet} {
    div {
      span {
        font-size: 14px;
      }
    }
  }
  @media screen and ${responsive.mobile} {
    div {
      span {
        font-size: 12px;
      }
    }
  }
`;

const Join = styled.div`
  position: absolute;
  left: 0;
  bottom: -5%;
  font-size: 12px;
  b {
    color: #87C700;
    font-weight: bold;
    cursor: pointer;
  }
  @media screen and ${responsive.tablet} {
    font-size: 11px;
  }
  @media screen and ${responsive.mobile} {
    font-size: 10px;
  }
  @media screen and ${responsive.iphone12Pro} {
    font-size: 8px;
  }
`;

const SearchIdPw = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: -5%;
  font-size: 12px;
  span {
    padding: 0 10px;
    cursor: pointer;
    &:first-child {
      border-right: 1px solid #000;
    }
  }
  @media screen and ${responsive.tablet} {
    font-size: 11px;
  }
  @media screen and ${responsive.mobile} {
    font-size: 10px;
  }
  @media screen and ${responsive.iphone12Pro} {
    font-size: 8px;
  }
`;



const Login = () => {
  const [isMemberSns, setIsMeberSns] = useState(true);
  const loginMethod = (value) => {
    setIsMeberSns(value)
  };
  return (
    <Container>
      <Wrap>
        <LoginTitle>
          <h1><b>우산있어?</b> 로그인</h1>
        </LoginTitle>
        <LoginWrap>
          <SelectMember isMemberSns={isMemberSns}>
            <div onClick={() => loginMethod(true)} >
              <span>아이디 로그인</span>
            </div>
            <div onClick={() => loginMethod(false)}>
              <span>SNS 간편 로그인</span>
            </div>
          </SelectMember>
          {isMemberSns ?
            <LoginForm/> :
            <LoginSNS/>
          }
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
