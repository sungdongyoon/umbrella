import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ccc;
`;

const Content = styled.div`

`;

const Footer = () => {
  return (
    <Container>
      <Content>
        <span>copyright ⓒ 2023취업시켜조 All rights reserved</span>
      </Content>
    </Container>
  )
}

export default Footer;
