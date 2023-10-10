import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  border: 1px solid red;
  width: 50%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Profile = () => {
  return (
    <Container>
      <Wrap>
        Profile
      </Wrap>
    </Container>
  )
}

export default Profile;
