import useSession from 'hooks/useSession';
import useAuth from 'hooks/useAuth';
import { Logout } from 'icons/svg/index';
import * as Styled from './LogOut.style';

export interface ILogOut {
  isHeader?: boolean;
}
const LogOut = ({ isHeader }: ILogOut) => {
  const { setIsMobileMenuOpen, setIsModalOpen } = useSession();
  const { setAuth } = useAuth();
  const onLogout = () => {
    setAuth?.(null);
  };
  return (
    <Styled.LogOutWrapper
      onClick={onLogout}
    >
      <Logout/>
      <Styled.LogOutText isHeader={isHeader}>Log out</Styled.LogOutText>
    </Styled.LogOutWrapper>
  );
};

export default LogOut;
