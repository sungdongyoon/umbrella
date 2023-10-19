import React from 'react';
import styled from 'styled-components';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context';
import responsive from '../style/respoinsive';

const Container = styled.form`
  flex: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  border-top: none;
`;

const LoginWrap = styled.div`
  width: 50%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20%;
  button {
    width: 100%;
    flex: 3;
    border: none;
    border-radius: 5px;
    background-color: #87C700;
    color: #fff;
    font-size: 15px;
    letter-spacing: 3px;
    cursor: pointer;
  }
  @media screen and ${responsive.mobile} {
    width: 60%;
    button {
      font-size: 12px;
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    width: 70%;
  }
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 3;
  label {
    width: 20%;
    font-size: 20px;
  }
  input {
    width: 70%;
    height: 70%;
    border: 1px solid #ddd;
    outline: none;
    &:focus {
      border: 2px solid #87C700;
    }
  }
  @media screen and ${responsive.mobile} {
    label {
      font-size: 16px;
    }
    input {
      height: 60%;
    }
  }
`;

const LoginForm = () => {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const {setLoginState, setUserValue} = useContext(userContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(idValue.length > 1) {
      if(pwValue.length > 1) {
        alert(`반갑습니다, ${idValue}님`);
        setUserValue(idValue);
        setLoginState("member");
        navigate("/");
      } else {
        alert(`비밀번호를 정확하게 입력해주세요`);
      }
    } else {
      alert("아이디를 정확하게 입력해주세요");
    }
  }
  return (
    <Container onSubmit={handleSubmit}>
      <LoginWrap>
        <InputWrap>
          <label htmlFor="id">ID</label>
          <input id='id' type='text' value={idValue} onChange={(e) => setIdValue(e.target.value)}/>
        </InputWrap>
        <InputWrap>
          <label htmlFor="pw">PW</label>
          <input id='pw' type='password' value={pwValue} onChange={(e) => setPwValue(e.target.value)}/>
        </InputWrap>
        <button>로그인</button>
      </LoginWrap>
    </Container>
  )
}

export default LoginForm;
