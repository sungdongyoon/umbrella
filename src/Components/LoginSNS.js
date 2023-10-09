import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  border-top: none;
`;

const Wrap = styled.div`
  border: 1px solid red;
  width: 80%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.div`
  border: 1px solid red;
`;

const LoginSNS = () => {
  return (
    <Container>
      <Wrap>
        <Item>Kakao</Item>
        <Item>Facebook</Item>
        <Item>Twitter</Item>
        <Item>Google</Item>
      </Wrap>
    </Container>
  )
}

export default LoginSNS;
