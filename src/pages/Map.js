import React from 'react';
import styled from 'styled-components';
import Kakao from '../Components/Kakao';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 50%;
  height: 70%;
`;

const MapBox = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid #87C700;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Map = () => {
  return (
    <Container>
      <Wrap>
        <MapBox>
          <Kakao/>
        </MapBox>
      </Wrap>
    </Container>
  )
}

export default Map;
