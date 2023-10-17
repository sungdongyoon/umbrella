import React from 'react';
import styled from 'styled-components';
import { agreeContext, userContext } from '../context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import responsive from '../style/respoinsive';

const ButtonWrap = styled.div`
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
  @media screen and ${responsive.tablet} {
    gap: 25px;
    button {
      width: 130px;
      font-size: 14px;
    }
  }
`;

const Buttons = () => {
  const navigate = useNavigate();
  const {setIsTicket, loginState} = useContext(userContext);
  const {agreeState, setAgreeState} = useContext(agreeContext);

  const completeTicket = () => {
    if(!agreeState) {
      alert("결제가 완료되었습니다!");
      navigate("/");
      setIsTicket("");
      setAgreeState(true);
    }
  }

  const onClickClose = () => {
    if(loginState === "member") {
      setIsTicket("");
      setAgreeState(true);
    } else if(loginState === "guest") {
      navigate('/ticket');
      setAgreeState(true);
    }
  }

  return (
    <ButtonWrap disabled={agreeState}>
      <button className='close_btn' onClick={() => onClickClose()}>닫기</button>
      <button className='pay_btn' onClick={() => completeTicket()} disabled={agreeState}>결제하기</button>
    </ButtonWrap>
  )
}

export default Buttons;
