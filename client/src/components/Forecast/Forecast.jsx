import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import * as S from './style';

function Forecast({ weather }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  //  screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.ForecastContainer>
      <S.LeftSection>
        <S.Temp> {weather?.current.temp_c} ℃</S.Temp>
        <S.Header> {weather?.location.name}</S.Header>

        {isMobile && (
          <S.Icon
            src={weather?.current.condition.icon}
            alt={weather?.current.condition.text}
          />
        )}
        <S.Country> {weather?.location.country} </S.Country>
        <S.LocalTime>
          {format(parseISO(weather?.location.localtime), 'MMMM dd, yyyy')}
        </S.LocalTime>
        <S.Description>{weather?.current.condition.text}</S.Description>

        <S.FeelsLikeTemp>
          Feels like : {weather?.current.feelslike_c} ℃
        </S.FeelsLikeTemp>
      </S.LeftSection>

      {!isMobile && (
        <S.RightSection>
          <S.Icon
            src={weather?.current.condition.icon}
            alt={weather?.current.condition.text}
          />
        </S.RightSection>
      )}
    </S.ForecastContainer>
  );
}

export default Forecast;
