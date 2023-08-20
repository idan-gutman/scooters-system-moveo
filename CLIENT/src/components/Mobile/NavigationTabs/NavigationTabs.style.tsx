import styled, { css } from 'styled-components';

export const WidgetWrapper = styled.div<{
  isTheme: boolean;
  isLightTheme: boolean;
}>`
  z-index: 1;
  width: 100vw;
  height: 80px;
  border-radius: 20px 20px 0px 0px;
  background: ${({ isTheme, theme, isLightTheme }) =>
    isTheme ? theme.colors.white : (isLightTheme && '#84b4fc') || '#61779c'};
  opacity: 0.9;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  > :nth-child(2) {
    border: ${({ isTheme, theme }) =>
      `solid ${isTheme ? theme.colors.greyBlue : theme.colors.white}`};
    border-width: 0 1px;
  }
`;

interface IconWrapperProps {
  isActive?: boolean;
  isTheme?: boolean;
}
export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TabWrapper = styled.div<IconWrapperProps>`
  width: 33.33%;
  svg {
    width: 30px;
    height: 30px;
    margin-bottom: 4.5px;
    fill: ${({ isActive }) => isActive && 'white'};
    ${({ isTheme, isActive, theme }) =>
      isTheme &&
      css`
        fill: ${isActive && theme.colors.greyBlue};
        path:nth-child(1) {
          stroke: ${isActive ? theme.colors.white : theme.colors.greyBlue};
        }
        &.star {
          path:nth-child(1) {
            stroke: ${isActive && theme.colors.greyBlue};
          }
        }
      `}
    &.home {
      fill: ${({ isActive, theme }) => isActive && theme.colors.white};
      path:nth-child(1) {
        stroke: ${({ isActive, theme }) => isActive && theme.colors.widgetBg};
      }
      ${({ isTheme, isActive, theme }) =>
        isTheme &&
        css`
          fill: ${isActive ? theme.colors.greyBlue : theme.colors.white};
          path:nth-child(1) {
            stroke: ${isActive ? theme.colors.white : theme.colors.greyBlue};
          }
        `}
    }
  }
  > :nth-child(1) {
    font-weight: ${({ isActive }) => (isActive ? 700 : 400)};
    font-size: 0.875rem;
    line-height: 18px;
    color: ${({ isTheme, theme }) =>
      isTheme ? theme.colors.greyBlue : 'white'};
  }
`;
