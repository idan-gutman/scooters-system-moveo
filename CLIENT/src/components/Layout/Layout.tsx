import { breakpoints } from 'assets/styles/theme';
import { HeaderMobile } from 'components/Mobile/HeaderMobile';
import { MobileMenu } from 'components/Mobile/MobileMenu/MobileMenu';
import useAuth from 'hooks/useAuth';
import useMediaQuery from 'hooks/useMediaQuery';
import useSession from 'hooks/useSession';
import { Outlet, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import {
  PageContainer,
  StyledToastContainer,
} from 'assets/styles/common-styles/common.style';
import AppHeader from 'components/Header/AppHeader';
import { useGeoLocation } from 'hooks/useGeoLocation';
import { useState } from 'react';

export const Layout = () => {
  const { pathname } = useLocation();
  const isLoginPage = pathname === '/';
  const isMobile = useMediaQuery(`(${breakpoints.mobile})`);
  const { setAuth, auth } = useAuth();
  const { isMobileMenuOpen, isModalOpen } = useSession();
  const [inputSearch, setInputSearch] = useState<string>('');

  const geoLocation = useGeoLocation();

  return (
    <>
      {isMobile && <HeaderMobile />}
      {!isLoginPage && <AppHeader isMobile={isMobile} />}
      {isMobileMenuOpen && <MobileMenu />}

        <Outlet />


      <StyledToastContainer />
    </>
  );
};
