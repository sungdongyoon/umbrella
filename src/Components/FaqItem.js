import React, { useState } from 'react';
import styled from 'styled-components';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Faq = styled.div`
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

const FaqItem = ({data}) => {
  const [isFaq, setIsFaq] = useState(false);

  const handleClick = () => {
    setIsFaq(!isFaq);
  };
  return (
    <Faq key={data.id} onClick={() => handleClick()}>
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
    </Faq>
  )
}

export default FaqItem;
