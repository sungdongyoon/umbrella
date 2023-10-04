import React, { useRef } from 'react';
import styled from 'styled-components';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import faqDb from '../faqData';

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

const FaqBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  box-shadow: 3px 3px 5px #ccc,
  0px 0px 5px #ccc;
  padding: 25px 40px;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
`;

const FaqTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  color: #999;
`;

const FaqContent = styled.span`
  color: #999;
  font-size: 12px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    li {
      list-style: circle;
    }
  }
`;

const Faq = () => {
  const [isFaq, setIsFaq] = useState(false);
  const [faqData, setFaqData] = useState(faqDb);

  const handleClick = (e) => {
    setIsFaq(!isFaq);
  }
  
  return (
    <Container>
      <Wrap>
        {faqData.map((data) => (
          <FaqBox key={data.id} onClick={e => handleClick(e)}>
            <FaqTitle>
              <span>{data.title}</span>
              {isFaq === false ? <FontAwesomeIcon icon={faChevronDown}/> : <FontAwesomeIcon icon={faChevronUp}/>}
            </FaqTitle>
            {isFaq &&
            <FaqContent>
              <ul>
                {data.content.map((it) => (
                  <li>{it}</li>
                ))}
              </ul>
            </FaqContent>
          }
          </FaqBox>
        ))}
      </Wrap>
    </Container>
  )
}

export default Faq;
