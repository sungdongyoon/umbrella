import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getMainImg } from '../Components/util';
import { useNavigate } from 'react-router-dom';
import responsive from '../style/respoinsive';

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
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    position: absolute;
  }
  @media screen and ${responsive.mobile} {
    gap: 40px;
  }
`;

const MainText = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  line-height: 50px;
  text-align: center;
  z-index: 1;
  b {
    color: #87C700;
  }
  @media screen and ${responsive.mobile} {
    font-size: 25px;
    line-height: 40px;
  }
`;

const SubText = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  line-height: 30px;
  text-align: center;
  z-index: 1;
  @media screen and ${responsive.mobile} {
    font-size: 12px;
    line-height: 25px;
  }
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
      color: #87C700;
    }
  }
  @media screen and ${responsive.laptop} {
    span {
      font-size: 40px;
      line-height: 70px;
    }
  }
  @media screen and ${responsive.mobile} {
    span {
      font-size: 30px;
      line-height: 60px;
    }
  }
`;

const EnvironmentIssue = styled.div`
  width: 100%;
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(${getMainImg(5)});
  background-size: cover;
  background-position: bottom;
  position: relative;
  &::after {
    content: '';
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const Issue = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const IssueWrap = styled.div`
  width: 65%;
  height: 90%;
  display: flex;
  .image {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 400px;
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
    color: #fff;
    h1 {
      font-size: 30px;
      font-weight: bold;
    }
    span {
      font-size: 16px;
      text-align: right;
      font-weight: bold;
    }
    b {
      color: orange;
      font-weight: bold;
    }
    .source {
      color: #777;
      font-size: 10px;
      position: absolute;
      left: 50%;
      bottom: 20%;
      transform: translateX(-50%);
    }
  }
  @media screen and ${responsive.laptop} {
    width: 70%;
    .image {
      img {
        width: 300px;
      }
    }
    .content {
      h1 {
        font-size: 25px;
      }
      span {
        font-size: 14px;
      }
    }
  }
  @media screen and ${responsive.tablet} {
    .image {
      img {
        width: 250px;
      }
    }
    .content {
      h1 {
        font-size: 20px;
      }
      span {
        font-size: 12px;
      }
    }
  }
  @media screen and ${responsive.mobile} {
    // border: 2px solid red;
    flex-direction: column;
    align-items: center;
    .image {
      // border: 2px solid red;
      width: 100%;
      height: 100%;
      flex: 3;
    }
    .content {
      width: 100%;
      height: 100%;
      flex: 2;
      gap: 15px;
      span {
        line-height: 20px;
      }
      .source {
        bottom: 0%;
        line-height: 10px;
      }
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
  height: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  h1 {
    font-size: 30px;
    font-weight: bold;
    color: #87C700;
    position: absolute;
    top: -20%;
    left: 0;
  }
  @media screen and ${responsive.laptop} {
    height: 55%;
  }
  @media screen and ${responsive.tablet} {
    height: 50%;
  }
`;

const Advantage = styled.div`
  width: 25%;
  height: 100%;
  position: relative;
  &:hover {
    img {
      filter: brightness(30%);  
    }
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    transition: 0.5s;
    filter: brightness(60%);
  }
  .advantage_desc {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    h3 {
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      margin-left: 5%;
      margin-top: 10%;
    }
    span {
      display: none;
      width: 100%;
      color: #87C700;
      line-height: 25px;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &:hover {
    .advantage_desc {
      span {
        display: block;
      }
    }
  }
  @media screen and ${responsive.laptop} {
    width: 250px;
    .advantage_desc {
      h3 {
        font-size: 16px;
      }
      span {
        font-size: 12px;
      }
    }
  }
  @media screen and ${responsive.tablet} {
    width: 200px;
    .advantage_desc {
      h3 {
        font-size: 14px;
      }
      span {
        font-size: 10px;
        line-height: 20px;
      }
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
    font-size: 30px;
    font-weight: bold;
    color: #87C700;
  }
`;

const MainLast = styled.div`
  width: 500px;
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
      color: #000;
      font-weight: bold;
      font-size: 16px;
    }
    button {
      width: 100%;
      height: 40px;
      color: #fff;
      font-weight: bold;
      border: none;
      border-radius: 5px;
      background: linear-gradient(-90deg, #CEF576, #87C700);
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .mainlast_desc_first {
    left: 10%;
  }
  .mainlast_desc_second {
    right: 10%;
    span {
      color: #fff;
    }
  }
  @media screen and ${responsive.tablet} {
    width: 400px;
    .mainlast_desc {
      span {
        font-size: 14px;
      }
      button {
        font-size: 12px;
      }
    }
  }
`;

const GoTop = styled.div`
  width: 50px;
  height: 50px;
  display: ${(props) => props.scrollPosition > 100 ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 5%;
  right: 5%;
  border-radius: 50%;
  background-color: #87C700;
  color: #fff;
  cursor: pointer;
  z-index: 100;
`;

const Main = ({ scrollPosition, scrollHeader}) => {
  const navigate = useNavigate();

  const onClickTop = () => {
    window.scroll({
      top: 0,
    })
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
  }, []);
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
              <img src={getMainImg(6)}/>
            </div>
          </IssueWrap>
        </Issue>
      </EnvironmentIssue>
      <EnvironmentAdvantage>
        <AdvantageWrap>
          <h1>공유우산을 사용한다면?</h1>
          <Advantage>
            <img src={getMainImg(7)}/>
            <div className='advantage_desc'>
              <h3>10회 이용시 탄소 절감 효과</h3>
              <span>
                공유우산 10회 이상 이용 시<br/>
                6,920g 탄소 절감효과를 얻을 수 있습니다.
              </span>
            </div>
          </Advantage>
          <Advantage>
            <img src={getMainImg(8)}/>
            <div className='advantage_desc'>
              <h3>나무 한그루의 탄소 절감효과</h3>
              <span>
                30년생 소나무한그루<br/>
                6,600g 탄소 절감 효과를 얻을 수 있습니다.
              </span>
            </div>
          </Advantage>
          <Advantage>
            <img src={getMainImg(9)}/>
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
            <img src={getMainImg(10)}/>
            <div className='mainlast_desc mainlast_desc_first'>
              <span>우산있어? 와 함께해요!</span>
              <button onClick={() => navigate("/ticket")}>이용권 구매하러 가기</button>
            </div>
          </MainLast>
          <MainLast>
            <img src={getMainImg(11)}/>
            <div className='mainlast_desc mainlast_desc_second'>
              <span>대여할 수 있는 곳은?</span>
              <button onClick={() => navigate("/map")}>대여소 확인하러 가기</button>
            </div>
          </MainLast>
        </MainLastWrap>
      </MainLastContent>
      <GoTop onClick={() => onClickTop()} scrollPosition={scrollPosition}>
        Top
      </GoTop>
    </Container>
  )
}

export default Main;
