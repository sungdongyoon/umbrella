// const BIKE_API_KEY = process.env.REACT_APP_BIKE_API;
const functions = require('firebase-functions');
const axios = require('axios');
const cors = require('cors')({origin: true});

exports.getDataFromHTTP = functions.https.onRequest((req, res) => {  
  cors(req, res, () => {
    axios.get(`http://openapi.seoul.go.kr:8088/${functions.config().reactapp.bike.app_api}/json/tbCycleStationInfo/1/200/`)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        console.error('데이터를 불러오지 못했습니다.', error);
        res.status(500).json({error: "데이터를 불러올 수 없습니다."});
      })
  })
});