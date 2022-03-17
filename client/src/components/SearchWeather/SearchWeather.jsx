import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 10px;
  margin: 0 auto;
  margin-bottom: 10px;
`;
const SearchButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 10px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const SearchWeather = ({ handleWeather }) => {
  const [query, setQuery] = useState('');

  const search = () => {
    if (!query.trim()) return;
    handleWeather(query);
    setQuery('');
  };

  return (
    <>
      <SearchBar
        type='search'
        placeholder='Search for a city'
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        style={{ width: '200px' }}
      />
      <SearchButton aria-label='button' type='submit' onClick={search}>
        Search
      </SearchButton>
    </>
  );
};
