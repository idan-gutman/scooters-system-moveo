import { Center } from 'assets/styles/common-styles/common.style';
import useSession from 'hooks/useSession';
import { Time, Wifi, Battery, Connection } from 'icons/svg';
import styled, { css } from 'styled-components';

export const HeaderMobile = () => {
  const { isLightTheme } = useSession();
  return (
    <HeaderWrapper isLightTheme={isLightTheme}>
      <Time width={25} height={18} />
      <Center>
        <Connection />
        <Wifi />
        <Battery />
      </Center>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div<{ isLightTheme: boolean }>`
  padding: 0 30px;
  height: 49px;
  background-color: ${({ theme, isLightTheme }) =>
    isLightTheme ? theme.colors.mobileHeader : '#1a2b55'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg:nth-child(2) {
    margin: 0 5px;
  }
  svg {
    ${({ isLightTheme }) =>
      !isLightTheme &&
      css`
        path:nth-child(1) {
          fill: ${({ theme }) => theme.colors.white};
        }
        rect {
          fill: ${({ theme }) => theme.colors.white};
        }
      `}
  }
`;
