import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { SearchWeather } from './components/SearchWeather/SearchWeather';
import Forecast from './components/Forecast/Forecast';

const apiUrl = 'http://localhost:4000/';
const AppContainer = styled.div`
  width: min(100% - 2rem, 70rem);
  margin: 2em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Error = styled.div`
  color: red;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [memo, setMemo] = useState({});

  const handleWeather = async (query) => {
    try {
      if (memo[query]) {
        setWeather(memo[query]);
        return;
      }
      const { data } = await axios.get(`${apiUrl}search/${query}`);
      setMemo({ query: data });
      setWeather(data);
      setError(null);
    } catch (e) {
      setError(e);
    }
  };
  console.log(memo);

  return (
    <AppContainer>
      {error && <Error>Could not find the city</Error>}
      <SearchWeather handleWeather={handleWeather} />
      {weather && <Forecast weather={weather} />}
    </AppContainer>
  );
}

export default App;
