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
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Comment = styled.div`
  width: 100%;
  height: 20%;
  box-shadow: 0px 10px 10px #ccc;
  padding: 50px 0;
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
  width: 70%;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    span {
      font-size: 14px;
      font-weight: bold;
    }
    .howToTitle {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .point {
      width: 7px;
      height: 7px;
      background-color: #87C700;
      border-radius: 50%;
    }
    .howToContent {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: #87C700;
        color: #fff;
        font-size: 10px;
        font-weight: bold;
        text-align: center;
        line-height: 15px;
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
            <span>대여소 어디에서든 우산 대여와 반납이 가능합니다.</span>
          </Content>
        </Comment>
        <HowTo>
          <HowToRentReturn>
            <div className='howToWrap'>
              <div className='howToTitle'>
                <div className='point'></div>
                <span>대여방법</span>
              </div>
              <div className='howToContent'>
                <div>이용권 구매</div>
                <div>QR 코드 스캔 및<br/> 우산 번호 입력</div>
                <div>잠금장치 해제</div>
                <div>우산 대여 완료</div>
              </div>
            </div>
          </HowToRentReturn>
          <HowToRentReturn>
            <div className='howToWrap'>
              <div className='howToTitle'>
                <div className='point'></div>
                <span>반납방법</span>
              </div>
              <div className='howToContent'>
                <div>대여소 방문</div>
                <div>비어있는 우산 꽂이<br/> 번호 선택</div>
                <div>우산 꽂이에<br/> 우산 반납</div>
                <div>우산 반납 완료</div>
              </div>
            </div>
          </HowToRentReturn>
        </HowTo>
      </Wrap>
    </Container>
  )
}

export default Guide;
