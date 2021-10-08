import Axios from 'axios';

import {WEATHER_URL} from  'react-native-dotenv';

const BASE_URL = WEATHER_URL;

export const getWeatherReport = async (endpoint) => {
    const url = BASE_URL + endpoint;
    const myHeaders = {'Content-Type': 'application/json'};
  
    try {
      return await Axios.get(url, {headers: myHeaders});
    } catch (e) {
      return e.response;
    }
  };