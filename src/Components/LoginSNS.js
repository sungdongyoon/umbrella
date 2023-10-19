import React from 'react';
import styled from 'styled-components';
import { getSNSImg } from './util';
import responsive from '../style/respoinsive';

const Container = styled.div`
  flex: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  border-top: none;
`;

const Wrap = styled.div`
  width: 80%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
    cursor: pointer;
  }
  @media screen and ${responsive.mobile} {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

const LoginSNS = () => {
  return (
    <Container>
      <Wrap>
        <Item>
          <img src={getSNSImg(1)}/>
        </Item>
        <Item>
        <img src={getSNSImg(2)}/>
        </Item>
        <Item>
        <img src={getSNSImg(3)}/>
        </Item>
        <Item>
        <img src={getSNSImg(4)}/>
        </Item>
      </Wrap>
    </Container>
  )
}

export default LoginSNS;
