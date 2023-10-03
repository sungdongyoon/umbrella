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
  width: 60%;
  height: 50%;
`;

const Comment = styled.div`
  height: 30%;
`;

const Title = styled.h1`
  width: 100%;
  color: #87C700;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  span:first-child {
    font-size: 18px;
    font-weight: bold;
  }
  span:last-child {
    font-size: 16px;
  }
`;

const HowTo = styled.div`
  height: 70%;
  display: flex;
`;

const HowToRentReturn = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .howToWrap {
    width: 90%;
    height: 50%;
    span {
      font-size: 12px;
      font-weight: bold;
    }
    div {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .howToContent {
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background-color: #87C700;
        font-size: 10px;
        font-weight: bold;
      }
    }
  }
`;

const Guide = () => {
  return (
    <Container>
      <Wrap>
        <Comment>
          <Title>대여 및 반납 안내</Title>
          <Content>
            <span>우산있어?는 다양한 곳에서 여러분을 기다리고 있습니다.</span>
            <span>우산있어? 대여소 어디에서든 우산 반납이 가능합니다.</span>
          </Content>
        </Comment>
        <HowTo>
          <HowToRentReturn>
            <div className='howToWrap'>
              <span>대여방법</span>
              <div className='howToContent'>
                <div>우산 대여 방법</div>
                <div>우산 대여 방법</div>
                <div>우산 대여 방법</div>
                <div>우산 대여 방법</div>
              </div>
            </div>
          </HowToRentReturn>
          <HowToRentReturn>
            <div className='howToWrap'>
              <span>반납방법</span>
              <div className='howToContent'>
                <div>우산 반납 방법</div>
                <div>우산 반납 방법</div>
                <div>우산 반납 방법</div>
                <div>우산 반납 방법</div>
              </div>
            </div>
          </HowToRentReturn>
        </HowTo>
      </Wrap>
    </Container>
  )
}

export default Guide;
