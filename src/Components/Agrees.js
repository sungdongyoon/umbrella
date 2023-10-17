import React, { useRef } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { agreeContext } from '../context';
import responsive from '../style/respoinsive';

const AgreeWrap = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
  display: flex;
  flex-direction: column;
`;

const Agree = styled.div`
  display: flex;
  align-items: center;
  label {
    font-size: 12px;
  }
  @media screen and ${responsive.laptop} {
    label {
      font-size: 11px;
    }
  }
`;

const Agrees = () => {
  const oneRef = useRef();
  const twoRef = useRef();
  const threeRef = useRef();

  const {setAgreeState} = useContext(agreeContext);

  const agreeClick = () => {
    if(oneRef.current.checked && twoRef.current.checked && threeRef.current.checked) {
      setAgreeState(false);
    } else {
      setAgreeState(true);
    }
  };
  return (
    <AgreeWrap>
      <Agree>
        <input type='checkbox' id='agree1' ref={oneRef} onClick={() => agreeClick()}/>
        <label htmlFor='agree1'>우산있어? 이용약관 동의</label>
      </Agree>
      <Agree>
        <input type='checkbox' id='agree2' ref={twoRef} onClick={() => agreeClick()}/>
          <label htmlFor='agree2'>개인정보 수집 및 이용 동의</label>
      </Agree>
      <Agree>
        <input type='checkbox' id='agree3' ref={threeRef} onClick={() => agreeClick()}/>
        <label htmlFor='agree3'>개인정보 수집 및 이용 동의</label>
      </Agree>
    </AgreeWrap>
  )
}

export default Agrees;
