import useSession from 'hooks/useSession';
import { Home, SearchIcon, Star } from 'icons/svg/index';
import { Dispatch, FC, ReactElement, SetStateAction } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import * as Styled from './NavigationTabs.style';

interface INavigationTabs {
  onOpenSearchBar?: Dispatch<SetStateAction<boolean>>;
}
export const NavigationTabs = ({ onOpenSearchBar }: INavigationTabs) => {
  const { isMap, isLightTheme } = useSession();

  return (
    <Styled.WidgetWrapper isTheme={isMap} isLightTheme={isLightTheme}>
      <WidgetButtons
        isTheme={isMap}
        label='Parking'
        icon={<Star className='star' />}
        linkTo='/parking'
      />
      <Styled.TabWrapper isTheme={isMap}>
        <Styled.TabContent onClick={() => onOpenSearchBar?.((prev) => !prev)}>
          <SearchIcon />
          <p>Search</p>
        </Styled.TabContent>
      </Styled.TabWrapper>
      <WidgetButtons
        isTheme={isMap}
        label='Home'
        icon={<Home className='home' />}
        linkTo='/home'
      />
    </Styled.WidgetWrapper>
  );
};

interface IWidgetButtons {
  icon: ReactElement;
  label: string;
  isTheme: boolean;
  linkTo: string;
}

const WidgetButtons: FC<IWidgetButtons> = ({
  label,
  icon,
  isTheme,
  linkTo,
}) => {
  const { pathname } = useResolvedPath(linkTo);
  const isActive = !!useMatch({ path: pathname, end: true });

  return (
    <Styled.TabWrapper isActive={isActive} isTheme={isTheme}>
      <Link to={linkTo}>
        <Styled.TabContent>
          {icon}
          {label}
        </Styled.TabContent>
      </Link>
    </Styled.TabWrapper>
  );
};
