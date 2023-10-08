import React from 'react';
import styled from 'styled-components';
import { agreeContext } from '../context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Agrees from '../Components/Agrees';
import Buttons from '../Components/Buttons';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 50%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  width: 100%;
  display: flex;
  align-items: center;
  flex: 1;
`;

const Content = styled.div`
  width: 100%;
  flex: 5;
  padding: 10px 0;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
`;

const Option = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  .option_title {
    flex: 3;
  }
  .option_content {
    flex: 6;
  }
`;


const TicketGuest = () => {
  const navigate = useNavigate();

  const {agreeState, setAgreeState} = useContext(agreeContext);
  return (
    <Container>
      <Wrap>
        <Title>비회원 이용권 구매</Title>
        <Content>
          <Option>
            <div className='option_title'>이용권</div>
            <div className='option_content'>일일권</div>
          </Option>
          <Option>
            <div className='option_title'>가격</div>
            <div className='option_content'>1,000원</div>
          </Option>
          <Option>
            <div className='option_title'>전화번호</div>
            <div className='option_content'>010-1234-5678</div>
          </Option>
          <Option>
            <div className='option_title'>결제수단</div>
            <div className='option_content'>카드</div>
          </Option>
          <Agrees/>
        </Content>
        <Buttons/>
      </Wrap>
    </Container>
  )
}

export default TicketGuest;
