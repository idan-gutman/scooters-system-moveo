import { breakpoints } from 'assets/styles/theme';
import useSession from 'hooks/useSession';
import { Map, MapLayout } from 'icons/svg/index';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export interface IMapLink {
  isHeader?: boolean;
}
const MapLink = ({ isHeader }: IMapLink) => {
  const { isMap, setIsMap } = useSession();
  const navigate = useNavigate();

  const onClickHandler = () => {
    setIsMap?.((prev) => !prev);
    navigate('/home');
  };

  return (
    <MapWrapper onClick={onClickHandler}>
      {isMap ? <Map /> : <MapLayout />}
      <MapText isHeader>{isMap ? 'Switch to layout' : 'Switch to map'}</MapText>
    </MapWrapper>
  );
};

export default MapLink;

export const MapWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const MapText = styled.p<{ isHeader?: boolean }>`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 25px;
  text-decoration-line: underline;
  text-underline-position: under;
  color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;
  margin-left: 12px;
  @media (${breakpoints.laptopSmall}) {
    display: ${({ isHeader }) => (isHeader ? 'none' : 'block')};
  }
`;
