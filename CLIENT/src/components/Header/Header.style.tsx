import SvgMoon from 'icons/svg/Moon';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 93px;
  background-color: ${({ theme }) => theme.colors.navbar};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  top: 0;
  padding: 0 31px;
`;
export const NavBarMenu = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  justify-content: space-between;
`;

export const Logo = styled(SvgMoon)`
  min-width: 80px;
  height: 71px;
  margin: 0 0 12px 0;
`;

export const LinkContainer = styled.div.attrs({ className: 'Link-container' })`
  display: flex;
  height: inherit;
  max-width: 272px;
  gap: 20px;
`;
