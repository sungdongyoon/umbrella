import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  border: 1px solid red;
  width: 40%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TicketGuest = () => {
  return (
    <Container>
      <Wrap>
        비회원 이용권 구매 페이지
      </Wrap>
    </Container>
  )
}

export default TicketGuest;
