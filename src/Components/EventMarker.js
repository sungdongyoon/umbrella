import React, {useState} from 'react';
import { getSNSImg } from './util';
import { MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

const InfoWindow = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 3px;
  padding: 0 10px;
  h1 {
    font-size: 16px;
    font-weight: bold;
  }
  span {
    font-size: 12px;
  }
`;

const EventMarker = ({position}) => {
  const [isInfoWindow, setIsInfoWindow] = useState(false);
  return (
    <MapMarker
      key={`${position.RENT_ID_NM}-${{lat: position.STA_LAT, lng: position.STA_LONG}}`}
      position={{lat: position.STA_LAT, lng: position.STA_LONG}}
      image={{
        src: getSNSImg(1),
        size: {
          width: 30,
          height: 30
        },
      }}
      title={position.RENT_ID_NM}
      onClick={() => setIsInfoWindow(!isInfoWindow)}>
      {isInfoWindow && 
        <InfoWindow onClick={() => setIsInfoWindow(false)}>
          <h1>{position.RENT_ID_NM}</h1>
          <span>우산 : 5개</span>
          <span>양산 : 2개</span>
        </InfoWindow>
      }
    </MapMarker>
  )
}

export default EventMarker;
