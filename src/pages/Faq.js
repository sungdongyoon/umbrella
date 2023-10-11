import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import faqDb from '../faqData';
import FaqItem from '../Components/FaqItem';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Wrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 7% 0;
  margin-bottom: 10%;
`;

const Title = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  color: #87C700;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 3px solid #87C700;
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Faq = () => {
  const [faqData, setFaqData] = useState(faqDb);

  return (
    <Container>
      <Wrap>
        <Title>자주하는 질문</Title>
        <List>
          {faqData.map((data) => (
            <FaqItem data={data}/>
          ))}
        </List>
      </Wrap>
    </Container>
  )
}

export default Faq;
