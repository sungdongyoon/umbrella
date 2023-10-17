import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Agrees from '../Components/Agrees';
import Buttons from '../Components/Buttons';
import { getSNSImg } from '../Components/util';
import { agreeContext } from '../context';
import responsive from '../style/respoinsive';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 50%;
  min-width: 700px;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .agreesWrap {
    width: 100%;
  }
  @media screen and ${responsive.tablet} {
    width: 60%;
    min-width: 600px;
    height: 60%;
  }
`;

const Title = styled.h1`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 30px;
  font-weight: bold;
  color: #87C700;
  padding: 10px 0;
  border-bottom: 3px solid #87C700;
  @media screen and ${responsive.tablet} {
    font-size: 26px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 5;
  padding: 10px 0;
  position: relative;
  .optionWrap {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 3;
    gap: 3px;
  }
`;

const Option = styled.div`
  height: 25%;
  display: flex;
  align-items: center;
  gap: 3px;
  .option_title {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 2;
    font-weight: bold;
    background-color: rgb(240, 240, 240);
  }
  .option_content {
    height: 100%;
    display: flex;
    align-items: center;
    flex: 5;
    padding: 0 30px;
    background-color: rgb(250, 250, 250);
    input[type="number"] {
      width: 60%;
      border: 1px solid #ccc;
      outline: none;
      padding: 3px 5px;
    }
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .option_payment {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      label {
        width: 70%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        color: #000;
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
        img{ 
          width: 50%;
        }
      }
    }
  }
  .number {
    gap: 10px;
  }
  @media screen and ${responsive.tablet} {
    .option_title {
      font-size: 14px;
    }
    .option_content {
      font-size: 14px;
    }
  }
`;


const TicketGuest = () => {
  const {setAgreeState} = useContext(agreeContext);
  const [numberValue, setNumberValue] = useState("");

  const inputLength = (e) => {
    if(e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  }

  useEffect(() => {
    numberValue.length !== 11 && setAgreeState(true);
  }, [numberValue])
  return (
    <Container>
      <Wrap>
        <Title>비회원 이용권 구매</Title>
        <Content>
          <div className='optionWrap'>
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
              <div className='option_content number'>
                <input type='number' onChange={(e) => setNumberValue(e.target.value)} value={numberValue} maxLength={11} onInput={(e) => inputLength(e)} placeholder='전화번호를 입력해주세요(하이픈(-) 제외)'/>
              </div>
            </Option>
            <Option>
              <div className='option_title'>결제수단</div>
              <div className='option_content'>
                <div className='option_payment'>
                  <input type='radio' id='card' name='payment' defaultChecked/>
                  <label htmlFor='card'>신용/체크카드</label>
                </div>
                <div className='option_payment'>
                  <input type='radio' id='kakao' name='payment'/>
                  <label htmlFor='kakao'>
                    <img src={getSNSImg(5)}/>
                  </label>
                </div>
                <div className='option_payment'>
                  <input type='radio' id='naver' name='payment'/>
                  <label htmlFor='naver'>
                    {<img src={getSNSImg(6)}/>}
                  </label>
                </div>
              </div>
            </Option>
          </div>
        </Content>
        <div className='agreesWrap'>
          {numberValue.length === 11 && <Agrees/>}
        </div>
        <Buttons/>
      </Wrap>
    </Container>
  )
}

export default TicketGuest;
