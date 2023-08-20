import { Button } from 'components/Button/Button';
import { Modal, ModalTitle } from 'components/Modal/Modal';
import useSession from 'hooks/useSession';
import styled from 'styled-components';

interface IPopUpModal {
  callBack: () => void;
  cancel?: () => void;
  title: string;
  paragraph: string;
  cancelActionTitle: string;
  buttonLabel: string;
}

export const PopUpModal = ({
  cancelActionTitle,
  paragraph,
  title,
  buttonLabel,
  callBack,
  cancel,
}: IPopUpModal) => {
  const { setIsMobileMenuOpen, setIsModalOpen } = useSession();

  const setModals = () => {
    cancel?.();
    setIsMobileMenuOpen?.(false);
    setIsModalOpen?.(false);
  };

  return (
    <Modal
      callBack={() => {
        setModals();
      }}
    >
      <PopUpModalWrapper>
        <ModalTitle
          title={title}
          callBack={() => {
            setModals();
          }}
        />
        <p>{paragraph}</p>
        <ButtonsContainer>
          <p onClick={() => setModals()} aria-hidden='true'>
            {cancelActionTitle}
          </p>
          <Button
            label={buttonLabel}
            onClick={() => {
              setModals();
              callBack();
            }}
          />
        </ButtonsContainer>
      </PopUpModalWrapper>
    </Modal>
  );
};
const PopUpModalWrapper = styled.div`
  > :nth-child(2) {
    margin: 7px 0 71px;
  }
  p {
    max-width: 340px;
    color: #444e72;
    font-weight: 400;
    font-size: 1rem;
    line-height: 20px;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > :nth-child(1) {
    cursor: pointer;
    text-decoration-line: underline;
    text-underline-position: under;
  }
  > :nth-child(2) {
    margin-left: 30px;
  }
`;
