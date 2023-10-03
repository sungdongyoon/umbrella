import React from 'react';
import styled from 'styled-components';

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
  border: 1px solid blue;
  width: 40%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Ticket = () => {
  return (
    <Container>
      <Wrap>
        <SelectMember>
          <span>회원이신가요?</span>
          <button>로그인 하러 가기</button>
        </SelectMember>
        <SelectMember>
          <span>비회원이신가요?</span>
          <button>비회원 이용권 구매</button>
        </SelectMember>
      </Wrap>
    </Container>
  )
}

export default Ticket;
