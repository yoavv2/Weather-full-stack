import styled from 'styled-components';

export const ForecastContainer = styled.article`
  width: min(100% - 2rem, 70rem);
  margin: 3em auto;
  padding: 1.5rem;
  border-radius: 1em;
  background: skyblue;
  box-shadow: -1rem 0 3rem #000;
  display: flex;
  flex-wrap: wrap;
`;

export const LeftSection = styled.section`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const RightSection = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Temp = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: white;
`;

export const Country = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;
export const LocalTime = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  text-align: center;
  color: white;
`;
export const Icon = styled.img`
  width: 100%;
  height: 100%;
`;
export const Header = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;
export const Description = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

export const FeelsLikeTemp = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;
