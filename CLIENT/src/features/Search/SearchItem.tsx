import { ILocation } from 'assets/Types/location.types';
import { Dispatch, SetStateAction } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Item, City, CountryStyled } from './SearchBar.style';

interface ISearchItem {
  location: ILocation;
  callback: (data: ILocation) => void;
  onClose: () => void;
}
const SearchItem = ({ callback, location, onClose }: ISearchItem) => {
  const { Country, LocalizedName } = location;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isFavoritesPage = pathname === '/parking';

  return (
    <Item
      onClick={() => {
        callback(location);
        onClose();
        if (isFavoritesPage) {
          navigate('/home');
        }
      }}
    >
      <City className='city'>
        {`${LocalizedName}, `}
        <CountryStyled className='country'>
          {Country.LocalizedName}
        </CountryStyled>
      </City>
    </Item>
  );
};

export default SearchItem;
