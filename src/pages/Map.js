import React from 'react';
import styled from 'styled-components';

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
`;

const Map = () => {
  return (
    <Container>
      <Wrap>
        <MapBox>
          지도
        </MapBox>
      </Wrap>
    </Container>
  )
}

export default Map;
