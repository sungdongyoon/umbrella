import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Components/Modal';
import { userContext } from '../context';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  &::after {
    content: '';
    display: ${(props) => props.isTicket ? "block" : "none"};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 10;
  }
`;

const Wrap = styled.div`
  width: 60%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TicketWrap = styled.div`
  width: 45%;
  height: 70%;
  background-color: #87C700;
  position: relative;
  border-radius: 10px;
  cursor: pointer;
  .content {
    position: absolute;
    bottom: 10%;
    left: 5%;
    color: #fff;
    h1 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    span {
      font-size: 15px;
    }
  }
  .ticket {
    position: absolute;
    top: 10%;
    right: 10%;
    font-size: 70px;
  }
`;

const Notification = styled.div`
  width: 60%;
  height: 20%;
  border: 1px solid #ddd;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0px 50px;
    li {
      list-style: circle;
      color: #999;
      font-size: 14px;
      &:nth-child(3) {
        list-style: none;
        color: red;
        font-weight: bold;
      }
    }
  }
`;

const TicketMember = () => {
  const {isTicket, ticketModal} = useContext(userContext);

  const dailyTicket = {title: "일일권", price: "700원"}

  const seasonTicket = [
    {id: 1, title: "3일권", price: "1,800원"},
    {id: 2, title: "5일권", price: "2,500원"},
  ]

  return (
    <Container isTicket={isTicket}>
      <Wrap>
        <TicketWrap onClick={() => ticketModal("daily")}>
          <div className='content'>
            <h1>일일권</h1>
            <span>일일권 구매입니다.</span>
          </div>
          <FontAwesomeIcon className='ticket' icon={faTicket} color='#fff'/>
        </TicketWrap>
        <TicketWrap onClick={() => ticketModal("season")}>
          <div className='content'>
            <h1>정기권</h1>
            <span>3일권, 5일권을 구매할 수 있습니다.</span>
          </div>
          <FontAwesomeIcon className='ticket' icon={faTicket} color='#fff'/>
        </TicketWrap>
      </Wrap>
      <Notification>
        <ul>
          <li>1회 1매씩 구매가 가능합니다.</li>
          <li>초과시 5분마다 추가요금(200원)과금됩니다.</li>
          <li>예시) 기본 초과 1분 ~ 5분 : 200원, 6분 ~ 10분 : 400원</li>
          <li>추가요금은 이용권 결제수단으로 자동결제됩니다.</li>
        </ul>
      </Notification>
      {isTicket === "daily" ? <Modal ticketModal={ticketModal} ticketType={dailyTicket} isTicket={isTicket}/> : isTicket === "season" ? <Modal ticketModal={ticketModal} ticketType={seasonTicket} isTicket={isTicket}/> : null}
    </Container>
  )
}

export default TicketMember;
