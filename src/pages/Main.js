import React from 'react';
import styled from 'styled-components';
import { getMainImg } from '../Components/util';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const MainWelcome = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background: url(${getMainImg(1)});
  background-size: cover;
  background-position: center;
  position: relative;
  &::after {
    content: '';
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

const MainText = styled.span`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  line-height: 50px;
  text-align: center;
  z-index: 1;
  b {
    color: #8EAC50;
  }
`;

const SubText = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  line-height: 30px;
  text-align: center;
  z-index: 1;
`;

const Slogan = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    text-align: center;
    font-weight: bold;
    font-size: 50px;
    line-height: 80px;
    b {
      color: #8EAC50;
    }
  }
`;

const EnvironmentIssue = styled.div`
  width: 100%;
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Issue = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F5F5F5;
  margin-bottom: 50px;
`;

const IssueWrap = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  .image {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 70%;
      border-radius: 10px;
    }
  }
  .content {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    position: relative;
    h1 {
      font-size: 40px;
      font-weight: bold;
    }
    span {
      font-size: 20px;
      text-align: right;
    }
    b {
      color: crimson;
      font-weight: bold;
    }
    .source {
      font-size: 14px;
      position: absolute;
      right: 10%;
      bottom: 10%;
    }
  }
`;

const EnvironmentAdvantage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AdvantageWrap = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  h1 {
    font-size: 50px;
    font-weight: bold;
    color: #8EAC50;
    position: absolute;
    top: -20%;
    left: 0;
  }
`;

const Advantage = styled.div`
  width: 25%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(60%);
  }
  .advantage_desc {
    position: absolute;
    top: 5%;
    left: 5%;
    h3 {
      color: #fff;
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 20px;
    }
    span {
      color: #fff;
      line-height: 25px;
    }
  }
`;

const MainLastContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainLastWrap = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  position: relative;
  h1 {
    position: absolute;
    top: -15%;
    right: 0;
    font-size: 40px;
    font-weight: bold;
    color: #8EAC50;
  }
`;

const MainLast = styled.div`
  width: 40%;
  position: relative;
  img {
    width: 100%;
    border-radius: 10px;
  }
  .mainlast_desc {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    span {
      color: #fff;
      font-weight: bold;
      font-size: 18px;
    }
    button {
      width: 100%;
      height: 30px;
      color: #fff;
      border: none;
      border-radius: 5px;
      background-color: #000;
    }
  }
  .mainlast_desc_first {
    left: 10%;
  }
  .mainlast_desc_second {
    right: 10%;
  }
`;

const Main = () => {
  return (
    <Container>
      <MainWelcome>
        <MainText>
          갑작스럽게 <b>비내리는 날에</b>,<br/>
          <b>비닐 우산을 구매</b>하셨나요?
        </MainText>
        <SubText>
          쉽게 판매되고, 쉽게 망가지는 비닐우산은<br/>
          대부분 매립되고, 소각되어 온실 가스를 발생시킵니다
        </SubText>
      </MainWelcome>
      <Slogan>
        <span>
          지구의 환경을 위해<br/>
          <b>우산을 대여</b><br/>
          해보시는건 어떨까요?
        </span>
      </Slogan>
      <EnvironmentIssue>
        <Issue>
          <IssueWrap>
            <div className='image'>
              <img src={getMainImg(4)}/>
            </div>
            <div className='content'>
              <h1>
                일회용 우산의 연간 폐기량 규모
              </h1>
              <span>
                국내의 <b>연간 우산 판매량은 약 5,000만개</b>이며<br/>
                <b>우산의 폐기량은 연 2천억원</b>에 달한다고 합니다.
              </span>
              <span className='source'>
                (한국일보, 2021)<br/>
                (위드인뉴스, 2022)
              </span>
            </div>
          </IssueWrap>
        </Issue>
        <Issue>
          <IssueWrap>
            <div className='content'>
              <h1>
                일회용 우산 폐기에 의한 오염
              </h1>
              <span>
                <b>연간 유해가스의 경우 276만톤</b>이 나오며<br/>
                <b>연간 탄소 배출은 8만톤</b>이 나옵니다.
              </span>
              <span className='source'>
                (중앙일보, 유니콘 팩토리)
              </span>
            </div>
            <div className='image'>
              <img src={getMainImg(5)}/>
            </div>
          </IssueWrap>
        </Issue>
      </EnvironmentIssue>
      <EnvironmentAdvantage>
        <AdvantageWrap>
          <h1>공유우산을 사용한다면?</h1>
          <Advantage>
            <img src={getMainImg(6)}/>
            <div className='advantage_desc'>
              <h3>10회 이용시 탄소 절감 효과</h3>
              <span>
                공유우산 10회 이상 이용 시<br/>
                6,920g 탄소 절감효과를 얻을 수 있습니다.
              </span>
            </div>
          </Advantage>
          <Advantage>
            <img src={getMainImg(7)}/>
            <div className='advantage_desc'>
              <h3>나무 한그루의 탄소 절감효과</h3>
              <span>
                30년생 소나무한그루<br/>
                6,600g 탄소 절감 효과를 얻을 수 있습니다.
              </span>
            </div>
          </Advantage>
          <Advantage>
            <img src={getMainImg(8)}/>
            <div className='advantage_desc'>
              <h3>환경 친화적인 업사이클 우산</h3>
              <span>
                100개의 우산을 사용하면<br/>
                소나무 1,111그루를 심는 효과가 있습니다.
              </span>
            </div>
          </Advantage>
        </AdvantageWrap>
      </EnvironmentAdvantage>
      <MainLastContent>
        <MainLastWrap>
          <h1>우산있어? 와 함께 환경을 지켜봐요!</h1>
          <MainLast>
            <img src={getMainImg(9)}/>
            <div className='mainlast_desc mainlast_desc_first'>
              <span>우산있어? 와 함께해요!</span>
              <button>회원가입 하러 가기</button>
            </div>
          </MainLast>
          <MainLast>
            <img src={getMainImg(10)}/>
            <div className='mainlast_desc mainlast_desc_second'>
              <span>대여할 수 있는 곳은?</span>
              <button>대여소 확인하러 가기</button>
            </div>
          </MainLast>
        </MainLastWrap>
      </MainLastContent>
    </Container>
  )
}

export default Main;
