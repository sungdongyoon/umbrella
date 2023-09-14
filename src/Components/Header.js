import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LogoImg from "../img/iconLogo.svg";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  height: 100px;
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
  filter: invert(1);
  cursor: pointer;
`;

const Navigation = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 50px;
  color: ${(props) => props.scrollPosition > 100 ? "#8EAC50" : "#fff"};
`;

const NavBtn = styled.li`
  font-size: 16px;
  cursor: pointer;
`;

const Header = () => {
  const navigation = useNavigate();

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
        <NavBtn onClick={() => navigation('/login')}>Login</NavBtn>
        <NavBtn onClick={() => navigation('/guide')}>Guide</NavBtn>
        <NavBtn onClick={() => navigation('/ticket')}>Ticket</NavBtn>
        <NavBtn onClick={() => navigation('/map')}>Map</NavBtn>
        <NavBtn onClick={() => navigation('/faq')}>FAQ</NavBtn>
      </Navigation>
    </Container>
  )
}

export default Header;
