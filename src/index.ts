// Please visit https://openweathermap.org/ and use your own api API_KEY set in .env file

import { initConfig } from "./config.ts";
import axios from "axios";

// `/weather?q=London,uk&APPID=${process.env.API_KEY}`

interface WeatherData {
  coord: { lon: number; lat: number };
  weather: [{ id: number; main: string; description: string; icon: string }];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: { speed: number; deg: number };
  clouds: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

initConfig();

const fetchWeatherData = async (
  location: string
): Promise<WeatherData | Error> => {
  try {
    const res = await axios.get(
      `/weather?q=${location}&APPID=f02244f158e42386e7d445ae1ac51500`
    );
    return res.data;
  } catch (e) {
    return new Error("Couldn't fetch weather data");
  }
};

const getWeather = async () => {
  const data = await fetchWeatherData("London,uk");
  if (data instanceof Error) {
    console.log("1111");
    window.alert("Couldn't get weather data");
  } else {
    console.log("2222");
    window.alert(JSON.stringify(data.sys));
  }
};

const init = () => {
  getWeather();
};

init();
