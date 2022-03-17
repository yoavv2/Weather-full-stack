const axios = require('axios');
const API_KEY = '8676a9b25d4b453e9cd125914221703';
const baseUrl = 'http://api.weatherapi.com/v1/current.json';

const getWeather = async ({ locationName }) => {
  const url = `${baseUrl}?key=${API_KEY}&q=${locationName}`;
  const { data } = await axios.get(url);
  return data;
};

module.exports = { getWeather };
