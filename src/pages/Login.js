import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { userContext } from '../context';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const LoginTitle = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 2px solid #87C700;
  margin-bottom: 30px;
  h1 {
    font-size: 25px;
    font-weight: bold;
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
      border-bottom: none;
    }
    span {
      font-size: 20px;
    }
  }
`;

const LoginForm = styled.form`
  flex: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  border-top: none;
  .loginWrap {
    width: 50%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20%;
    .inputWrap {
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
    }
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
`;



const Login = () => {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const {setUserValue} = useContext(userContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(idValue.length > 1) {
      if(pwValue.length > 1) {
        alert(`반갑습니다, ${idValue}님`);
        setUserValue(idValue);
        console.log("login", idValue);
        navigate("/");
      } else {
        alert(`비밀번호를 정확하게 입력해주세요`);
      }
    } else {
      alert("아이디를 정확하게 입력해주세요");
    }
  }
  return (
    <Container>
      <Wrap>
        <LoginTitle>
          <h1>로그인</h1>
        </LoginTitle>
        <LoginWrap>
          <SelectMember>
            <div>
              <span>회원</span>
            </div>
            <div>
              <span>비회원</span>
            </div>
          </SelectMember>
          <LoginForm onSubmit={handleSubmit}>
            <div className='loginWrap'>
              <div className='inputWrap'>
                <label htmlFor="id">ID</label>
                <input id='id' type='text' value={idValue} onChange={(e) => setIdValue(e.target.value)}/>
              </div>
              <div className='inputWrap'>
                <label htmlFor="pw">PW</label>
                <input id='pw' type='password' value={pwValue} onChange={(e) => setPwValue(e.target.value)}/>
              </div>
              <button>로그인</button>
            </div>
          </LoginForm>
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
