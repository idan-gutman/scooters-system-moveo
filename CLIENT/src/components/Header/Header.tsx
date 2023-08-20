import { ILocation } from 'assets/Types/location.types';
import type { ContextType } from 'components/Layout/Layout';
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

interface IHeader extends ContextType {
  isMobile: boolean;
  mutateCurrentWeather: (data: ILocation) => void;
}

const Header = ({
  isMobile,
  inputSearch,
  setInputSearch,
  autoCompleteData,
  isLoading,
  mutateCurrentWeather,
}: IHeader) => {
  const { openSearchBar, setOpenSearchBar, isMap } = useSession();
  const { pathname } = useLocation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputSearch?.(e.target.value);
  };

  const debounceAutocomplete = debounce(handleChange, 300);

  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current?.focus();
  });

  const onClickSearchItem = useCallback(() => {
    inputRef.current.value = '';
    setInputSearch?.('');
    if (isMobile) {
      setOpenSearchBar?.((prev) => !prev);
    }
  }, [isMobile, setInputSearch, setOpenSearchBar]);

  return (
    <div>
      {!isMobile ? (
        <Styled.HeaderWrapper>
          <Styled.NavBarMenu>
            <Styled.Logo />
            <Styled.LinkContainer>
              <NavLinkHeader
                label='Home'
                linkTo='/home'
                isActive={pathname === '/home'}
              />
              <NavLinkHeader
                label='Favorites'
                linkTo='/parking'
                isActive={pathname === '/parking'}
              />
            </Styled.LinkContainer>
            <SearchBar
              data={autoCompleteData ?? []}
              onChange={debounceAutocomplete}
              placeholder='Try “Tel Aviv - Jaffo”...'
              inputSearch={inputSearch}
              isLoading={isLoading}
              onClose={onClickSearchItem}
              inputRef={inputRef}
              renderItem={(location: ILocation) => (
                <SearchItem
                  key={location.Key}
                  location={location}
                  callback={mutateCurrentWeather}
                  onClose={onClickSearchItem}
                />
              )}
            />
            <MapLink isHeader />
            <SwitchWrapper>
              <DegreesSwitchCmp $isHeader />
              <ThemeModeSwitch $isHeader />
            </SwitchWrapper>
            <LogOut isHeader />
          </Styled.NavBarMenu>
        </Styled.HeaderWrapper>
      ) : (
        <>
          {!isMap && <HamburgerNav />}
          <NavigationTabs onOpenSearchBar={setOpenSearchBar} />
          {openSearchBar && (
            <Modal
              height='90vh'
              callBack={() => setOpenSearchBar?.((prev) => !prev)}
            >
              <SearchBar
                data={autoCompleteData ?? []}
                onChange={debounceAutocomplete}
                placeholder='Try “Tel Aviv - Jaffo”...'
                inputSearch={inputSearch}
                isLoading={isLoading}
                isMobile={isMobile}
                inputRef={inputRef}
                renderItem={(location: ILocation) => (
                  <SearchItem
                    key={location.Key}
                    location={location}
                    callback={mutateCurrentWeather}
                    onClose={onClickSearchItem}
                  />
                )}
              />
            </Modal>
          )}
        </>
      )}
    </div>
  );
};

export default Header;
