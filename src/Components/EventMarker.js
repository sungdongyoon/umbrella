import React, {useState} from 'react';
import { getMapImg } from './util';
import { MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

const Wrap = styled.div`
  border: 3px solid #87C700;
  border-radius: 30px;
  padding: 10px 20px;
  background-color: #fff;
  .info {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  font-weight: bold;
  h1 {
    font-size: 20px;
  }
  .close {
    font-size: 12px;
    background-color: red;
    color: #fff;
    padding: 3px 5px;
    border-radius: 3px;
  }
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .desc {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .count {
      display: flex;
      flex-direction: column;
      gap: 5px;
      font-size: 14px;
      font-weight: bold;
    }
    address {
      font-size: 12px;
    }
  }
`;

const EventMarker = ({position}) => {
  const [isOverlay, setIsOverlay] = useState(false);

  const clickMarker = () => {
    setIsOverlay(!isOverlay);
  }
  return (
    <>  
    <MapMarker
      key={`${position.RENT_ID_NM}-${{lat: position.STA_LAT, lng: position.STA_LONG}}`}
      position={{lat: position.STA_LAT, lng: position.STA_LONG}}
      image={{
        src: getMapImg(2),
        size: {
          width: 30,
          height: 30
        },
      }}
      title={position.RENT_ID_NM}
      onClick={() => clickMarker()}>
    </MapMarker>
      {isOverlay && 
        <CustomOverlayMap position={{lat: position.STA_LAT, lng: position.STA_LONG}} >
          <Wrap>
            <div className='info'>
              <Title>
                <h1>{position.RENT_ID_NM}</h1>              
                <div className='close' onClick={() => setIsOverlay(!isOverlay)} title='닫기'>닫기</div>
              </Title>
              <Body>
                <div className='img'>
                  <img
                    src={getMapImg(1)}
                    width="50"
                    height="50"
                    alt={position.RENT_ID_NM}/>
                </div>
                <div className='desc'>
                  <div className='count'>
                    <span>우산 : {Math.floor(Math.random() * 15 + 1)}개</span>
                    <span>양산 : {Math.floor(Math.random() * 15 + 1)}개</span>
                  </div>
                  <address>
                    {position.STA_ADD1}
                  </address>
                </div>
              </Body>
            </div>
          </Wrap>
        </CustomOverlayMap>
      }
    </>
  )
}

export default EventMarker;
