import React, { useEffect, useMemo, useState } from 'react';
import { getSNSImg } from './util';

const { kakao } = window;

const Kakao = () => {
  const [location, setLocation] = useState("");
  const [map, setMap] = useState();
  

  const options = {
    enableHightAccuracy: true,
    timeout: 5000,
    maximunAge: 0,
  };

  useMemo(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
    
    function success(position) {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    function error() {
      setLocation({
        latitude: 33.450701,
        longitude: 126.570667,
      });
      console.log("위치 받기 실패");
    }
  }, [navigator.geolocation.getCurrentPosition]);

  const kakaoMap = (data) => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(location.latitude, location.longitude),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(location.latitude, location.longitude);
    const marker = new kakao.maps.Marker({
      position: markerPosition
    })
    marker.setMap(map);

    // Map Control
    const mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 대여소 위치 정보
    const positions = data?.map((el) => ({
      title: el.RENT_ID_NM,
      subtitle: el.RENT_NM,
      latlng: new kakao.maps.LatLng(el.STA_LAT, el.STA_LONG),
    }))

    // 대여소 위치 마커
    const imageSrc = getSNSImg(1);
    positions?.forEach((position) => {
      let imageSize = new kakao.maps.Size(30, 40);
      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      let marker = new kakao.maps.Marker({
        map: map,
        position: position.latlng, 
        title: position.title,
        image: markerImage,
      })
      console.log("marker", marker)
    })
  }

  useEffect(() => {
    kakaoMap();
    console.log(location);
  }, [location]);


  // 따릉이 대여소 데이터
  const BIKE_API_KEY = "4f6b724c4e6568643132346145456a57";

  const getBikeData = async() => {
    let res = await fetch(`http://openapi.seoul.go.kr:8088/${BIKE_API_KEY}/json/tbCycleStationInfo/1/1000/`);
    let data = await res.json();
    console.log(data);
    let rows = data.stationInfo.row;
    kakaoMap(rows);
  }

  useEffect(() => {
    getBikeData();
  }, [kakaoMap]);

  return (
    <div id='map' style={{width: "100%", height: "100%"}}>
    </div>
  )
}

export default Kakao;
