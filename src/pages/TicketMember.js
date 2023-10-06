import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Wrap = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TicketWrap = styled.div`
  width: 40%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TicketModal = styled.div`
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
  z-index: 1;
  .title {
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
  }
  .content {
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
    .options {
      display: flex;
      flex-direction: column;
      .option {
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
      }
    }
    .agrees {
      padding: 10px;
      border: 2px solid #999;
      border-left: none;
      border-right: none;
      display: flex;
      flex-direction: column;
      .agree {
        display: flex;
        align-items: center;
        label {
          font-size: 12px;
        }
      }
    }
  }
  .buttons {
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
  }
`;

const TicketMember = () => {
  const oneRef = useRef();
  const twoRef = useRef();
  const threeRef = useRef();

  const navigate = useNavigate();
  const [isTicket, setIsTicket] = useState(false);
  // const [isChecked, setIsChecked] = useState(true);

  const ticketModal = (value) => {
    setIsTicket(value);
  }

  const completeTicket = () => {
    const firstAgree = oneRef.current.checked;
    const secondAgree = twoRef.current.checked;
    const thirdAgree = threeRef.current.checked;

    if(firstAgree && secondAgree && thirdAgree) {
      alert("결제가 완료되었습니다!");
      navigate("/");
    }
  }

  // const clickCheckbox = (e) => {
  //   setIsChecked(e.target.checked);
  // };

  return (
    <Container>
      <Wrap>
        <TicketWrap onClick={() => ticketModal(true)}>
          일일권
        </TicketWrap>
        <TicketWrap>
          정기권
        </TicketWrap>
        {isTicket &&
          <TicketModal>
            <div className='title'>
              <h1>구매하기</h1>
            </div>
            <div className='content'>
              <div className='options'>
                <div className='option'>
                  <div className='option_title'>이용권</div>
                  <div className='option_content'>일일권</div>
                </div>
                <div className='option'>
                  <div className='option_title'>가격</div>
                  <div className='option_content'>700원</div>
                </div>
                <div className='option'>
                  <div className='option_title'>결제수단</div>
                  <div className='option_content'>
                    <div className='option_payment'>
                      <input type='radio' id='card' name='payment' checked/>
                      <label htmlFor='card'>카드</label>
                    </div>
                    <div className='option_payment'>
                      <input type='radio' id='kakao' name='payment' checked/>
                      <label htmlFor='kakao'>카카오페이</label>
                    </div>
                    <div className='option_payment'>
                      <input type='radio' id='naver' name='payment' checked/>
                      <label htmlFor='naver'>네이버페이</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='agrees'>
                <div className='agree'>
                  <input type='checkbox' id='agree1' ref={oneRef}/>
                  <label htmlFor='agree1'>우산있어? 이용약관 동의</label>
                </div>
                <div className='agree'>
                  <input type='checkbox' id='agree2' ref={twoRef}/>
                  <label htmlFor='agree2'>개인정보 수집 및 이용 동의</label>
                </div>
                <div className='agree'>
                  <input type='checkbox' id='agree3' ref={threeRef}/>
                  <label htmlFor='agree3'>개인정보 수집 및 이용 동의</label>
                </div>
              </div>
            </div>
            <div className='buttons'>
              <button onClick={() => ticketModal(false)}>닫기</button>
              <button onClick={() => completeTicket()}>결제하기</button>
            </div>
          </TicketModal>
        }
      </Wrap>
    </Container>
  )
}

export default TicketMember;
