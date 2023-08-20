import { breakpoints } from 'assets/styles/theme';
import { BlurBackground } from 'components/Background/Background.style';
import useMediaQuery from 'hooks/useMediaQuery';
import useSession from 'hooks/useSession';
import { Arrow, CloseCircle } from 'icons/svg/index';
import { FC } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface IModal {
  height?: string;
  callBack?: () => void;
}

export const Modal: FC<IModal> = ({ children, height, callBack }) => (
  <>
    <BlurBackground onClick={callBack} />
    <ModalWrapper height={height}>{children}</ModalWrapper>
  </>
);

interface IModalTitle {
  title: string;
  callBack?: () => void;
}
export const ModalTitle = ({ title, callBack }: IModalTitle) => {
  const { setIsMobileMenuOpen, setIsModalOpen } = useSession();
  const isMobile = useMediaQuery(`(${breakpoints.mobile})`);

  const onClickHandler = (callBack?: () => void) => {
    if (!callBack) {
      setIsMobileMenuOpen?.(false);
      setIsModalOpen?.(false);
    } else {
      callBack();
    }
  };

  return (
    <ModalTitleWrapper>
      <h1>{title}</h1>
      {isMobile ? (
        <Arrow onClick={() => onClickHandler(callBack)} />
      ) : (
        <CloseCircle onClick={() => onClickHandler(callBack)} />
      )}
    </ModalTitleWrapper>
  );
};

const modalUp = keyframes`
from{
  transform: translate(0px, 90vh);
}  
to{
  transform: translate(0px, 10px);
}
`;

const sharedModal = css`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -7px 30px rgba(0, 0, 0, 0.16);
  position: absolute;
  bottom: 0;
  z-index: 4;
  animation-name: ${modalUp};
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
`;

interface IModalWrapper {
  height?: string;
}

export const ModalWrapper = styled.div.attrs({
  className: 'modal-wrapper',
})<IModalWrapper>`
  ${sharedModal}
  height: ${({ height }) => height};
  bottom: 0;
  left: 0;
  width: 100vw;
  border-radius: 30px 30px 0 0;
  padding: 30px 30px 40px;
  position: fixed;
  @media (${breakpoints.minMobile}) {
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    width: 500px;
    height: 272px;
    border-radius: 30px;
  }
`;

export const ModalTitleWrapper = styled.div.attrs({
  className: 'mobile-Modal-title-wrapper',
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    color: #444e72;
    font-weight: 400;
    font-size: 1.875rem;
    line-height: 38px;
  }
  svg {
    @media (${breakpoints.minMobile}) {
      width: 24px;
      height: 24px;
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
    }
  }
`;
