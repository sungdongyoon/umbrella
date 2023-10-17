import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { agreeContext } from '../context';
import { useContext } from 'react';
import Agrees from './Agrees';
import Buttons from './Buttons';
import { getSNSImg } from './util';
import responsive from '../style/respoinsive';

const Container = styled.div`
  width: 50%;
  min-width: 700px;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 15;
  @media screen and ${responsive.tablet} {
    width: 600px;
    min-width: 600px;
    height: 65%;
  }
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
  @media screen and ${responsive.tablet} {
    h1 {
      font-size: 26px;
    }
  }
`;

const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 4;
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
  align-items: center;
  margin-bottom: 10px;
  .option_title {
    flex: 3;
    font-weight: bold;
  }
  .option_content {
    display: flex;
    gap: 15px;
    flex: 6;
    color: #555;
    .option_payment {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      label {
        width: 70%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        color: #000;
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
        img{ 
          width: 70%;
        }
      }
    }
  }
  .option_content_select {
    flex: 6;
    height: 30px;
    outline: none;
  }
  @media screen and ${responsive.tablet} {
    .option_title {
      font-size: 14px;
    }
    .option_content {
      font-size: 14px;
      .option_payment {
        label {
          font-size: 10px;
        }
      }
    }
  }
`;

const Modal = ({ticketModal, ticketType, isTicket}) => {
  const priceRef = useRef();

  const navigate = useNavigate();

  const {agreeState, setAgreeState} = useContext(agreeContext);

  const completeTicket = () => {
    if(!agreeState) {
      alert("결제가 완료되었습니다!");
      navigate("/");
      setAgreeState(true);
    }
  };

  const typeSelect = (e) => {
    priceRef.current.innerText = e;
  }

  return (
    <Container>
      <Title>
        <h1>구매하기</h1>
      </Title>
      <Content>
        <Options>
          {isTicket === "daily" ?
            <>
              <Option>
                <div className='option_title'>이용권</div>
                <div className='option_content'>{ticketType.title}</div>
              </Option>
              <Option>
                <div className='option_title'>가격</div>
                <div className='option_content'>{ticketType.price}</div>
              </Option>
            </>
          : isTicket === "season" ? 
          <>
            <Option>
              <div className='option_title'>이용권</div>
              <select className='option_content_select' onChange={(e) => typeSelect(ticketType[e.target.value - 1].price)}>
                {ticketType.map((el) => (
                  <option value={el.id}>{el.title}</option>
                ))}
              </select>
            </Option>
            <Option>
              <div className='option_title'>가격</div>
              <div className='option_content' ref={priceRef}>{ticketType[0].price}</div>
            </Option>
          </>
          : null}
          <Option>
            <div className='option_title'>결제수단</div>
            <div className='option_content'>
              <div className='option_payment'>
                <input type='radio' id='card' name='payment' defaultChecked/>
                <label htmlFor='card'>신용/체크카드</label>
              </div>
              <div className='option_payment'>
                <input type='radio' id='kakao' name='payment'/>
                <label htmlFor='kakao'>
                  <img src={getSNSImg(5)}/>
                </label>
              </div>
              <div className='option_payment'>
                <input type='radio' id='naver' name='payment'/>
                <label htmlFor='naver'>
                  {<img src={getSNSImg(6)}/>}
                </label>
              </div>
            </div>
          </Option>
        </Options>
        <Agrees/>
      </Content>
      <Buttons ticketModal={ticketModal} completeTicket={completeTicket} agreeState={agreeState}/>
    </Container>
  )
}

export default Modal;
