import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Components/Modal';

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
  border: 1px solid red;
`;


const TicketMember = () => {
  const [isTicket, setIsTicket] = useState("");

  const ticketModal = (value) => {
    setIsTicket(value);
  };

  const dailyTicket = {title: "일일권", price: "1,000원"}

  const seasonTicket = [
    {id: 1, title: "1일권", price: "700원"},
    {id: 2, title: "3일권", price: "1,800원"},
    {id: 3, title: "5일권", price: "2,500원"},
  ]

  return (
    <Container>
      <Wrap>
        <TicketWrap onClick={() => ticketModal("daily")} >
          일일권
        </TicketWrap>
        <TicketWrap onClick={() => ticketModal("season")} >
          정기권
        </TicketWrap>
      </Wrap>
      {isTicket === "daily" ? <Modal ticketModal={ticketModal} ticketType={dailyTicket} isTicket={isTicket}/> : isTicket === "season" ? <Modal ticketModal={ticketModal} ticketType={seasonTicket} isTicket={isTicket}/> : null}
    </Container>
  )
}

export default TicketMember;
