import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { userContext } from '../context';
import TicketMember from './TicketMember';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SelectMember = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background: linear-gradient(-90deg, #CEF576, #87C700);
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    width: 60%;
    height: 100%;
    position: absolute;
    bottom: -40%;
    right: -30%;
    border-radius: 50%;
    overflow: hidden;
    background-color: #CEF576;
    opacity: 1;
  }
  &::before {
    content: "";
    width: 60%;
    height: 100%;
    position: absolute;
    top: -40%;
    left: -30%;
    border-radius: 50%;
    overflow: hidden;
    background-color: #CEF576;
    opacity: 0.5;
  }
  span:first-child {
    color: #fff;
    font-size: 30px;
    font-weight: bold;
  }
  span:last-child {
    font-size: 12px;
    color: #fff;
  }
`;

const Ticket = () => {
  const {userValue, setLoginState} = useContext(userContext);
  const navigate = useNavigate();

  const memberClick = () => {
    setLoginState("member");
    navigate('/login');
  }

  const guestClick = () => {
    setLoginState("guest");
    navigate('/guest');
  }
  
  return (
    <Container>
      {!userValue ?
        <Wrap>
          <SelectMember onClick={() => memberClick()}>
            <span>회원이신가요?</span>
            <span>로그인 하러 가기</span>
          </SelectMember>
          <SelectMember onClick={() => guestClick()}>
            <span>비회원이신가요?</span>
            <span>비회원 이용권 구매</span>
          </SelectMember>
        </Wrap> :
        <TicketMember/>
      }
    </Container>
  )
}

export default Ticket;
