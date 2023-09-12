import React from 'react';
import styled from 'styled-components';
import LogoImg from "../img/iconLogo.svg";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
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
`;

const NavBtn = styled.li`
  font-size: 20px;
  cursor: pointer;
  color: #fff;
`;

const Header = () => {
  const navigation = useNavigate();
  return (
    <Container>
      <Logo onClick={() => navigation('/')} src={LogoImg}/>
      <Navigation>
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
