import { ILocation } from 'assets/Types/location.types';
import LogOut from 'components/LogOut/LogOut';
import { HamburgerNav } from 'components/Mobile/MobileMenu/HamburgerNav';
import { NavigationTabs } from 'components/Mobile/NavigationTabs/NavigationTabs';
import { Modal } from 'components/Modal/Modal';
import { DegreesSwitchCmp, ThemeModeSwitch } from 'components/Switch/Switch';
import { SwitchWrapper } from 'components/Switch/Switch.style';
import SearchBar from 'features/Search/SearchBar';
import SearchItem from 'features/Search/SearchItem';
import useSession from 'hooks/useSession';
import { debounce } from 'lodash';
import { ChangeEvent, useCallback, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './Header.style';
import MapLink from './MapLink/MapLink';
import { NavLinkHeader } from './NavLink/NavLinkHeader';

interface IHeader {
  isMobile: boolean;
}

const AppHeader = ({ isMobile }: IHeader) => {
  const { setOpenSearchBar, isMap } = useSession();
  const { pathname } = useLocation();

  return (
    <div>
      {!isMobile ? (
        <Styled.HeaderWrapper>
          <Styled.NavBarMenu>
            <Styled.LinkContainer>
              <NavLinkHeader
                label='Home'
                linkTo='/home'
                isActive={pathname === '/home'}
              />
              <NavLinkHeader
                label='Parking'
                linkTo='/parking'
                isActive={pathname === '/parking'}
              />
              <NavLinkHeader
                label='Users'
                linkTo='/users'
                isActive={pathname === '/users'}
              />
            </Styled.LinkContainer>
            <div style={{ display: 'flex', gap: '20px' }}>
              <MapLink isHeader />
              <SwitchWrapper>
                <ThemeModeSwitch $isHeader />
              </SwitchWrapper>
              <LogOut isHeader />
            </div>
          </Styled.NavBarMenu>
        </Styled.HeaderWrapper>
      ) : (
        <>
          {!isMap && <HamburgerNav />}
          <NavigationTabs onOpenSearchBar={setOpenSearchBar} />
        </>
      )}
    </div>
  );
};

export default AppHeader;
