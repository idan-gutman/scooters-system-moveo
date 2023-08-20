import { IsActiveProps } from 'assets/Types/types';
import { HomeActive, Home, StarActive, Star } from 'icons/svg/index';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface INavLinkHeader {
  label: string;
  isActive: boolean;
  linkTo: string;
}
export const NavLinkHeader = (props: INavLinkHeader) => {
  const { label, isActive, linkTo } = props;

  const iconSelector = () => {
    switch (label) {
      case 'Home':
        return isActive ? <HomeActive /> : <Home />;
      case 'Favorites':
        return isActive ? <StarActive /> : <Star />;
      default:
        return '';
    }
  };

  return (
    <LinksWrapper isActive={isActive} className={label}>
      {iconSelector()}
      <LinkHeader to={linkTo}>{label}</LinkHeader>
    </LinksWrapper>
  );
};

export const LinksWrapper = styled.div<IsActiveProps>`
  display: flex;
  align-items: center;
  border-bottom: ${({ isActive }) => isActive && 'white 5px solid'};
  padding: 0 8px;

  svg {
    width: 25px;
    height: 25px;
    margin-right: 9px;
  }
`;

export const LinkHeader = styled(NavLink)`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  &.active {
    font-weight: 800;
  }
`;
