import React from 'react';
import styled from 'styled-components';
import Kakao from '../Components/Kakao';
import responsive from '../style/respoinsive';

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
  @media screen and ${responsive.mobile} {
    width: 90%;
    max-width: 500px;
  }
  @media screen and ${responsive.iphone12Pro} {
    width: 100%;
    max-width: 500px;
  }
`;

const MapBox = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 15px 15px 15px #999;
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
