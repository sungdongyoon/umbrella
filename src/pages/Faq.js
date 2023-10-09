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
  margin: 10% 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Faq = () => {
  const [faqData, setFaqData] = useState(faqDb);

  return (
    <Container>
      <Wrap>
        {faqData.map((data) => (
          <FaqItem data={data}/>
        ))}
      </Wrap>
    </Container>
  )
}

export default Faq;
