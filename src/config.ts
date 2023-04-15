import axios from "axios";

export const initConfig = () =>
  (axios.defaults.baseURL = `http://api.openweathermap.org/data/2.5`);
