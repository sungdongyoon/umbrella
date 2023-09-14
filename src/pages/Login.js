import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginWrap = styled.div`
  width: 60%;
  height: 60%;
  border: 1px solid red;
`;

const Login = () => {
  return (
    <Container>
      <LoginWrap>

      </LoginWrap>
    </Container>
  )
}

export default Login;
