import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import useSession from 'hooks/useSession';
import { useLocation } from 'react-router-dom';

export const HamburgerNav = () => {
  const { setIsMobileMenuOpen } = useSession();
  const { pathname } = useLocation();

  return (
    <HamburgerNavWrapper>
      <HamburgerMenu onClick={() => setIsMobileMenuOpen?.(true)} />
    </HamburgerNavWrapper>
  );
};

const HamburgerMenu = styled(AiOutlineMenu)`
  color: ${({ theme }) => theme.colors.white};
`;

const HamburgerNavWrapper = styled.div`
  height: 37px;
  position: relative;
  width: 100%;
  padding: 0 30px;
  margin-top: 10px;
  ${HamburgerMenu} {
    position: absolute;
    right: 30px;
  }
  svg {
    height: 36px;
    width: 36px;
  }
`;
