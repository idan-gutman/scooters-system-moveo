import LogOut from 'components/LogOut/LogOut';
import { DegreesSwitchCmp, ThemeModeSwitch } from 'components/Switch/Switch';
import styled from 'styled-components';
import { Modal, ModalTitle } from 'components/Modal/Modal';

export const MobileMenu = () => (
  <Modal>
    <MenuWrapper>
      <ModalTitle title='Menu' />
      <MobileButtons>
        <p>Change mode</p>
        <ThemeModeSwitch />
      </MobileButtons>
      <MobileButtons>
        <p>Change degrees</p>
        <DegreesSwitchCmp />
      </MobileButtons>
      <LogOut />
    </MenuWrapper>
  </Modal>
);

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > :nth-child(4) {
    padding-top: 60px;
    align-self: center;
  }
`;

const MobileButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 36px 0;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 150%;
  color: #444e72;
`;
