import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import LogoImg from "../img/iconLogo.svg";
import { useLocation, useNavigate } from 'react-router-dom';
import { userContext } from '../context';

const Container = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.scrollPosition > 100 ? "#fff" : "transparent"};
  padding: 0 10%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const Logo = styled.img`
  width: 200px;
  // filter: invert(1);
  cursor: pointer;
`;

const Navigation = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  color: ${(props) => props.scrollPosition > 100 ? "#87C700" : "#000"};
`;

const NavBtn = styled.li`
  font-size: 16px;
  padding: 5px 0px;
  border-bottom: ${(props) => props.value === props.location ? "2px solid #87C700" : "transparent"};
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #87C700;
  }
  span {
    font-size: 12px;
    b {
      font-size: 14px;
      font-weight: bold;
    }
  }
`;

const Header = () => {
  const {userValue} = useContext(userContext);
  const navigation = useNavigate();
  const location = useLocation();

  const locationPath = location.pathname;

  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollHeader = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
  }, []);
  return (
    <Container scrollPosition={scrollPosition}>
      <Logo onClick={() => navigation('/')} src={LogoImg}/>
      <Navigation scrollPosition={scrollPosition}>
        {!userValue ? 
          <NavBtn value="/login" location={locationPath} onClick={() => navigation('/login')}>Login</NavBtn> :
          <NavBtn value="/profile" location={locationPath} onClick={() => navigation('/profile')}><span>반갑습니다, <b>{userValue}</b>님</span></NavBtn>
        }
        <NavBtn value="/guide" location={locationPath} onClick={() => navigation('/guide')}>Guide</NavBtn>
        <NavBtn value="/ticket" location={locationPath} onClick={() => navigation('/ticket')}>Ticket</NavBtn>
        <NavBtn value="/map" location={locationPath} onClick={() => navigation('/map')}>Map</NavBtn>
        <NavBtn value="/faq" location={locationPath} onClick={() => navigation('/faq')}>FAQ</NavBtn>
      </Navigation>
    </Container>
  )
}

export default Header;
