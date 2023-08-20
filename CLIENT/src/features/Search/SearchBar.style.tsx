import { breakpoints } from 'assets/styles/theme';
import { IsFavoritesSearch } from 'assets/Types/types';
import { Arrow, CityBlur, Search } from 'icons/svg/index';
import styled, { css } from 'styled-components';

export const SearchWrapper = styled.div.attrs({
  className: 'search-wrapper',
})`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  .list-container {
    overflow-y: auto;
  }
`;
export const StyledSearch = styled.div.attrs({
  className: 'styled-search',
})<IsFavoritesSearch>`
  z-index: ${({ $isFavorites }) => ($isFavorites ? -1 : 0)};
  border-radius: 15px;
  width: 366px;
  height: 57px;
  display: ${({ isEmptyData }) => (isEmptyData ? 'none' : 'flex')};
  align-items: center;
  background: ${({ theme, $isFavorites }) =>
    !$isFavorites ? theme.colors.white : 'rgba(255, 255, 255, 0.3)'};
  box-shadow: inset 2px -3px 6px rgba(0, 0, 0, 0.1),
    inset -6px 4px 4px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  position: relative;
  @media (${breakpoints.mobile}) {
    width: 100%;
    display: flex;
  }
`;

export const SearchInputIcon = styled(Search)`
  position: absolute;
  left: 85.52%;
  width: 30px;
  height: 30px;
`;

export const Input = styled.input.attrs({
  className: 'input',
})<IsFavoritesSearch>`
  background-color: unset;
  position: relative;
  padding-left: 19px;
  border: none;
  color: ${({ theme, $isFavorites }) =>
    !$isFavorites ? theme.colors.dark : theme.colors.white};
  font-weight: 800;
  font-size: 1.25rem;
  line-height: 1.5625rem;
  ::placeholder {
    color: ${({ theme, $isFavorites }) =>
      !$isFavorites ? theme.colors.placeholderGray : theme.colors.white};
    caret-color: auto;
  }
  &:focus {
    outline: none;
  }
  @media (${breakpoints.mobile}) {
    font-size: 1rem;
    max-width: 70%;
  }
`;

const listWrapper = css`
  position: absolute;
  top: 76px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.16);
  border-radius: 30px;
  margin-top: 4px;
  padding-top: 29px;
  padding-bottom: 31px;
  width: 476px;
  max-height: 376px;
  height: 376px;
  display: flex;
  flex-direction: column;
  @media (${breakpoints.mobile}) {
    width: 100%;
    box-shadow: none;
    top: 84px;
    max-height: none;
    height: inherit;
    border-radius: 0;
  }
`;

export const ListContainer = styled.div.attrs({
  className: 'list-container',
})`
  ${listWrapper}

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    border: none;
    background-color: #e9e9e9;
    border-radius: 100px;
    margin-top: 39px;
    margin-bottom: 40px;
    margin-left: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    border-radius: 100px;
    min-height: 20px;
  }
`;
export const Item = styled.div.attrs({
  className: 'item',
})`
  cursor: pointer;
  padding: 11px 0px 10px 39px;
  font-size: 1.25rem;
  line-height: 150%;

  &:hover {
    background-color: #f2f1f1;
  }
`;

export const City = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.greyBlue};
  font-weight: 700;
`;
export const CountryStyled = styled.span`
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 400;
`;

export const SearchMessage = styled.div.attrs({
  className: 'search-message',
})`
  ${listWrapper}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextMassageWrapper = styled.div`
  font-size: 1.25rem;
  line-height: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.greyBlue};
  overflow-wrap: break-word;
  padding: 0 36px;
`;
export const StyledCityBlur = styled(CityBlur)`
  width: 124.76px;
  height: 124.78px;
  margin: 60px auto 20px;
  align-self: center;
`;

export const StyledArrow = styled(Arrow)<IsFavoritesSearch>`
  display: ${({ $isFavorites: isFavorites }) =>
    isFavorites ? 'none' : 'block'};
  min-width: 16px;
  height: 16px;
  margin-left: 20px;
  margin-top: 2.2px;
  transform: scaleX(-1);
  align-self: center;
`;
