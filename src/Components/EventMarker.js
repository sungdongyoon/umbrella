import React, {useState} from 'react';
import { getSNSImg } from './util';
import { MapMarker } from 'react-kakao-maps-sdk';

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
        <div onClick={() => setIsInfoWindow(false)}>
          {position.RENT_ID_NM}
        </div>
      }
    </MapMarker>
  )
}

export default EventMarker;
