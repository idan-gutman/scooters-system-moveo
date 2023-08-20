import { breakpoints } from 'assets/styles/theme';
import useSession from 'hooks/useSession';
import { LayoutBlack, MapBlack } from 'icons/svg';
import styled, { css } from 'styled-components';

export const MapLayoutMobile = () => {
  const { isMap, setIsMap } = useSession();

  const onClickHandler = () => {
    setIsMap?.((prev) => !prev);
  };

  return (
    <BtnContainer onClick={onClickHandler} isMap={isMap}>
      {isMap ? <LayoutBlack /> : <MapBlack />}
      <Text>{isMap ? 'Layout' : 'Map'}</Text>
    </BtnContainer>
  );
};

const BtnContainer = styled.div<{ isMap: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 60px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  height: 44px;
  width: 120px;
  margin: 0 auto;
  ${({ isMap }) =>
    isMap &&
    css`
      position: absolute !important;
      bottom: 90px;
      left: 0;
      right: 0;
    `}

  svg {
    height: 24px;
    width: 24px;
    margin-right: 8px;
  }

  @media (${breakpoints.minMobile}) {
    display: none;
  }
`;
const Text = styled.p`
  font-weight: 700;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.dark};
  @media (${breakpoints.minMobile}) {
    display: none;
  }
`;
