import { Spinner } from 'assets/styles/common-styles/Spinner';
import { breakpoints } from 'assets/styles/theme';
import { Cloud } from 'icons/svg';
import styled, { keyframes } from 'styled-components';

interface ICloud {
  top: string;
  start: number;
  time: number;
}

export const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.bgColor};
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
`;

const CloudAnimation = ({ start }: ICloud) => keyframes`
 0% {left: ${start}px;}
  100% {left: 80vw;}
`;

export const CloudWrapper = styled(Cloud)<ICloud>`
  position: absolute;
  top: ${({ top = 0 }) => top};
  animation: ${(props) => CloudAnimation(props)} ease-out ${({ time }) => time}s
    infinite alternate;
`;

export const BlurBackground = styled.div<{ ZIndex?: number }>`
  background: none repeat scroll 0 0 rgba(140, 140, 140, 0.2);
  backdrop-filter: blur(40px);
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: ${({ ZIndex = 3 }) => ZIndex};
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  @media (${breakpoints.mobile}) {
    position: absolute;
  }
`;

export const BackgroundSpinner = () => (
  <BlurBackground>
    <Spinner />
  </BlurBackground>
);
