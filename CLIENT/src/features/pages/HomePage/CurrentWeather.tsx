import { breakpoints } from 'assets/styles/theme';
import { ContextType } from 'components/Layout/Layout';
import { useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { WeatherIcon } from 'components/WeatherIcon/WeatherIcon';
import { format } from 'date-fns';
import { Temperature } from 'components/Temperature/Temperature';
import { BackgroundSpinner } from 'components/Background/Background.style';
import useMediaQuery from 'hooks/useMediaQuery';
import { StarIcon } from 'assets/styles/common-styles/common.style';

const CurrentWeather = () => {
  const {
    currentWeatherData: currData,
    toggleFavorite,
    isInFavorites,
  } = useOutletContext<ContextType>();

  const isMobile = useMediaQuery(`(${breakpoints.mobile})`);

  const date: any = useMemo<string | undefined>(
    () =>
      currData &&
      format(
        new Date(currData.LocalObservationDateTime),
        "eeee, d-MMM-yyyy, HH:mmaaaaa'm'"
      ),
    [currData]
  );

  if (!currData) return <BackgroundSpinner />;
  return (
    <CurrWeatherWrapper>
      <CurrWeather>
        <h1>{currData?.cityName}</h1>
        <WrapperContentDegrees>
          <WeatherIcon iconNumber={currData?.WeatherIcon} />
          <WeatherTemp>
            <Temperature fahrenheit={currData.Temperature.Imperial.Value} />
          </WeatherTemp>
        </WrapperContentDegrees>
        <WeatherText>{currData?.WeatherText}</WeatherText>
        <WeatherDate>{date}</WeatherDate>
      </CurrWeather>
      {isMobile ? (
        <StarFav
          $isInFav={isInFavorites()}
          onClick={() =>
            toggleFavorite?.(Number(currData.cityKey), currData.cityName)
          }
        />
      ) : (
        <FavoritesBtn
          $isInFav={isInFavorites()}
          onClick={() =>
            toggleFavorite?.(Number(currData.cityKey), currData.cityName)
          }
        >
          <StarFav $isInFav={isInFavorites()} />
          {isInFavorites() ? 'Remove from favorite' : 'Add to favorite'}
        </FavoritesBtn>
      )}
    </CurrWeatherWrapper>
  );
};
export default CurrentWeather;

const StarFav = styled(StarIcon)<{ $isInFav: boolean }>`
  fill: ${(props) => (props.$isInFav ? 'white' : 'none')};
  @media (${breakpoints.mobile}) {
    position: absolute;
    top: 61px;
    left: 30px;
  }
`;
const FavoritesBtn = styled.div<{ $isInFav: boolean }>`
  min-width: fit-content;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 15px 11px;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.$isInFav ? 'none' : 'white')};
  color: ${(props) => (props.$isInFav ? 'white' : '#444E72')};
  > svg {
    margin-right: 5px;
    path:nth-child(1) {
      stroke: ${(props) => (props.$isInFav ? 'white' : '#444E72')};
    }
  }
`;

const CurrWeatherWrapper = styled.div`
  @media (${breakpoints.minMobile}) {
    display: flex;
    justify-content: space-between;
    > :nth-child(2) {
      align-self: flex-end;
    }
  }
`;

const FontStyle = css`
  color: ${({ theme }) => theme.colors.white};
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);
`;

const CurrWeather = styled.div`
  z-index: -1;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (${breakpoints.minMobile}) {
    text-align: start;
  }
  h1 {
    ${FontStyle}
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    @media (${breakpoints.minMobile}) {
      font-size: 35px;
      line-height: 44px;
    }
  }
`;

const WrapperContentDegrees = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-right: 47px;
  svg {
    height: 46px;
    width: 73px;
    margin-right: 10px;
    @media (${breakpoints.minMobile}) {
      width: 93px;
      height: 100px;
      margin-right: 30px;
    }
  }
  @media (${breakpoints.minMobile}) {
    justify-content: flex-start;
  }
`;

const WeatherText = styled.h3`
  ${FontStyle}
  opacity: 0.6;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 12px;
  @media (${breakpoints.minMobile}) {
    font-size: 35px;
    line-height: 44px;
    margin-bottom: 7px;
  }
`;

const WeatherDate = styled.h3`
  ${FontStyle}
  opacity: 0.6;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  @media (${breakpoints.minMobile}) {
    font-size: 30px;
    line-height: 38px;
  }
`;

const WeatherTemp = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  font-size: 100px;
  @media (${breakpoints.minMobile}) {
    font-size: 130px;
  }
`;
