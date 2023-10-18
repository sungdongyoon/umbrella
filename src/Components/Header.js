import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import LogoImg from "../img/iconLogo.svg";
import { useLocation, useNavigate } from 'react-router-dom';
import { userContext } from '../context';
import responsive from '../style/respoinsive';

const Container = styled.div`
  height: 80px;
  display: ${(props) => props.scrollPosition > 100 ? "none" : "flex"};
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 0 10%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  @media screen and ${responsive.mobile} {
    height: 60px;
    padding: 0 8%;
  }
  @media screen and ${responsive.iphone12Pro} {
    height: 100px;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
  }
`;

const Logo = styled.img`
  width: 200px;
  cursor: pointer;
  @media screen and ${responsive.mobile} {
    width: 120px;
  }
`;

const Navigation = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  @media screen and ${responsive.mobile} {
    gap: 20px;
  }
`;

const NavBtn = styled.li`
  color: ${(props) => props.value === props.location ? "#87C700" : "#999"};
  cursor: pointer;
  &:hover {
    color: #87C700;
  }
  span {
    font-size: 12px;
    b {
      font-size: 14px;
      font-weight: bold;
    } 
  }
  &:nth-child(1) {
    position: relative;
  }
  @media screen and ${responsive.mobile} {
    font-size: 12px;
    span {
      font-size: 8px;
      b {
        font-size: 12px;
        font-weight: bold;
      } 
    }
  }
`;

const Profile = styled.div`
  width: 100%;
  height: 500%;
  position: absolute;
  bottom: -580%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  box-shadow: 1px 1px 3px #333,
  -1px -1px 3px #ccc;
  border-radius: 3px;
  color: #000 !important;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 12px;
    li {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #999;
      border-bottom: 1px solid #ccc;
      &:last-child {
        color: #000;
        font-weight: bold;
      }
    }
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
  }
  @media screen and ${responsive.mobile} {
    height: 150px;
    top: 40px;
    ul {
      font-size: 10px;
    }
  }
`;

const Header = ({scrollPosition, scrollHeader}) => {
  const {userValue} = useContext(userContext);
  const navigate = useNavigate();
  const location = useLocation();

  const locationPath = location.pathname;

  const [isProfile, setIsProfile] = useState(false);

  const onClickLogo = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    })
    navigate('/');
  };

  const logout = () => {
    const logoutConfirm = window.confirm("로그아웃 하시겠습니까?");
    if(logoutConfirm) {
      setTimeout(() => {
        setIsProfile(false);
        alert("로그아웃 되었습니다!");
        window.location.reload();
      }, 1000)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
  }, []);
  
  return (
    <Container scrollPosition={scrollPosition}>
      <Logo onClick={() => onClickLogo()} src={LogoImg}/>
      <Navigation scrollPosition={scrollPosition}>
        {!userValue ? 
          <NavBtn value="/login" location={locationPath} onClick={() => navigate('/login')}>Login</NavBtn> :
          <NavBtn value="/profile" location={locationPath}>
            <span className='profile' onClick={() => setIsProfile(!isProfile)}>
              반갑습니다, <b>{userValue}</b>님
            </span>
            {isProfile &&
              <Profile>
                <ul>
                  <li>내정보</li>
                  <li>개인정보 설정</li>
                  <li>이용권 구매 내역</li>
                  <li onClick={() => logout()}>로그아웃</li>
                </ul>
              </Profile>
            }
          </NavBtn>
        }
        <NavBtn value="/guide" location={locationPath} onClick={() => navigate('/guide')}>Guide</NavBtn>
        <NavBtn value="/ticket" location={locationPath} onClick={() => navigate('/ticket')}>Ticket</NavBtn>
        <NavBtn value="/map" location={locationPath} onClick={() => navigate('/map')}>Map</NavBtn>
        <NavBtn value="/faq" location={locationPath} onClick={() => navigate('/faq')}>FAQ</NavBtn>
        
      </Navigation>
    </Container>
  )
}

export default Header;
