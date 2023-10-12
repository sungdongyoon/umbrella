import React, { useEffect, useState } from 'react';
import { Map, MapMarker, MapTypeControl, ZoomControl} from 'react-kakao-maps-sdk';
import { getSNSImg } from './util';
import EventMarker from './EventMarker';
import styled from 'styled-components';

const Button = styled.button`
  width: 50px;
  height: 40px;
  position: absolute;
  bottom: 5%;
  right: 5%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 10;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Kakao = () => {
  // 따릉이
  const BIKE_API_KEY = "4f6b724c4e6568643132346145456a57";

  const [bikeData, setBikeData] = useState([]);
  const getBikeData = async() => {
    let res = await fetch(`http://openapi.seoul.go.kr:8088/${BIKE_API_KEY}/json/tbCycleStationInfo/1/200/`);
    let data = await res.json();
    console.log(data);
    setBikeData(data.stationInfo.row);
  }

  useEffect(() => {
    getBikeData();
  }, []);

  // 카카오 지도
  const [position, setPosition] = useState({
    center: {
      lat: 37.55274582,
      lng: 126.91861725,
    },
    error: null,
    isLoading: true,
  });

  const [currentPosition, setCurrentPosition] = useState({
    center: {
      lat: position.center.lat,
      lng: position.center.lng
    }
  })

  const [isInfoWindow, setIsInfoWindow] = useState(false);

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition((prev) => ({
          ...prev,
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          isLoading: false,
        }))
      },
        (err) => {
          setPosition((prev) => ({
            ...prev,
            error: err.message,
            isLoading: false,
          }))
        }
      )
    } else {
      setPosition((prev) => ({
        ...prev,
        err: "현재 위치를 불러올 수 없습니다.",
        isLoading: false,
      }))
    }
    console.log("position", position)
  }, [position.isLoading]);

  return (
    <Map
      center={position.center}
      style={{ width: "100%", height: "100%"}}
      level={5}
    >
      <Button onClick={() => setPosition(currentPosition)}>
        <img src={getSNSImg(3)}/>
      </Button>
      {!position.isLoading && (
        <MapMarker position={position.center} image={{
          src: getSNSImg(2),
          size: {
            width: 30,
            height: 30
          }
        }}>
          {position.errMsg ? position.errMsg : "현재 위치"}
        </MapMarker>
      )}
      {bikeData.map((position, idx) => (
        <EventMarker position={position}>{position.RENT_ID_NM}</EventMarker>
      ))}
      <MapTypeControl position={"TOPRIGHT"} />
      <ZoomControl position={"RIGHT"} />
    </Map>
  )
}

export default Kakao;
