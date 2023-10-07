import React from 'react';
import styled from 'styled-components';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #eee;
`;

const Title = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
  h1 {
    color: #87C700;
    font-weight: bold;
    font-size: 30px;
  }
`;

const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 6;
  div {
    width: 100%;
    height: 50%;
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
`;

const Option = styled.div`
  display: flex;
  .option_title {
    flex: 3;
    font-weight: bold;
  }
  .option_content {
    display: flex;
    gap: 15px;
    flex: 6;
    .option_payment {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      gap: 5px;
      label {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        background-color: #fff;
        font-size: 12px;
        text-align: center;
      }
    }
  }
`;

const Agrees = styled.div`
  padding: 10px;
  border: 2px solid #999;
  border-left: none;
  border-right: none;
  display: flex;
  flex-direction: column;
`;

const Agree = styled.div`
  display: flex;
  align-items: center;
  label {
    font-size: 12px;
  }
`;

const Buttons = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex: 2;
  button {
    width: 150px;
    border: none;
    padding: 10px 0;
    background-color: #87C700;
    font-weight: bold;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
  }
  .pay_btn {
    background-color: ${(props) => props.disabled ? "#ccc" : "#87C700"};
  }
`;

const Modal = ({ticketModal}) => {
  const oneRef = useRef();
  const twoRef = useRef();
  const threeRef = useRef();

  const navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);

  const completeTicket = () => {
    if(oneRef.current.checked && twoRef.current.checked && threeRef.current.checked) {
      alert("결제가 완료되었습니다!");
      navigate("/");
    }
  };

  const agreeClick = () => {
    if(oneRef.current.checked && twoRef.current.checked && threeRef.current.checked) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };

  return (
    <Container>
      <Title>
        <h1>구매하기</h1>
      </Title>
      <Content>
        <Options>
          <Option>
            <div className='option_title'>이용권</div>
            <div className='option_content'>일일권</div>
          </Option>
          <Option>
            <div className='option_title'>가격</div>
            <div className='option_content'>700원</div>
          </Option>
          <Option>
            <div className='option_title'>결제수단</div>
            <div className='option_content'>
              <div className='option_payment'>
                <input type='radio' id='card' name='payment' defaultChecked/>
                <label htmlFor='card'>카드</label>
              </div>
              <div className='option_payment'>
                <input type='radio' id='kakao' name='payment'/>
                <label htmlFor='kakao'>카카오페이</label>
              </div>
              <div className='option_payment'>
                <input type='radio' id='naver' name='payment'/>
                <label htmlFor='naver'>네이버페이</label>
              </div>
            </div>
          </Option>
        </Options>
        <Agrees>
          <Agree>
            <input type='checkbox' id='agree1' ref={oneRef} onClick={() => agreeClick()}/>
            <label htmlFor='agree1'>우산있어? 이용약관 동의</label>
          </Agree>
          <Agree>
            <input type='checkbox' id='agree2' ref={twoRef} onClick={() => agreeClick()}/>
            <label htmlFor='agree2'>개인정보 수집 및 이용 동의</label>
          </Agree>
          <Agree>
            <input type='checkbox' id='agree3' ref={threeRef} onClick={() => agreeClick()}/>
            <label htmlFor='agree3'>개인정보 수집 및 이용 동의</label>
          </Agree>
        </Agrees>
      </Content>
      <Buttons disabled={btnDisabled}>
        <button className='close_btn' onClick={() => ticketModal(false)}>닫기</button>
        <button className='pay_btn' onClick={() => completeTicket()} disabled={btnDisabled}>결제하기</button>
      </Buttons>
    </Container>
  )
}

export default Modal;
