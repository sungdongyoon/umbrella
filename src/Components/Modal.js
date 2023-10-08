import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { agreeContext } from '../context';
import { useContext } from 'react';
import Agrees from './Agrees';
import Buttons from './Buttons';

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
              <select className='option_content' onChange={(e) => typeSelect(ticketType[e.target.value - 1].price)}>
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
        <Agrees/>
      </Content>
      <Buttons ticketModal={ticketModal} completeTicket={completeTicket} agreeState={agreeState}/>
    </Container>
  )
}

export default Modal;
