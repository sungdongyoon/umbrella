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
  const [isTicket, setIsTicket] = useState(false);

  const ticketModal = (value) => {
    setIsTicket(value);
  };

  return (
    <Container>
      <Wrap>
        <TicketWrap onClick={() => ticketModal(true)}>
          일일권
        </TicketWrap>
        <TicketWrap onClick={() => ticketModal(true)}>
          정기권
        </TicketWrap>
      </Wrap>
      {isTicket && <Modal ticketModal={ticketModal}/>}
    </Container>
  )
}

export default TicketMember;
