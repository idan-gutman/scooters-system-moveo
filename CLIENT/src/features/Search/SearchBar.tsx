import { ChangeEvent, MutableRefObject } from 'react';
import * as Styled from 'features/Search/SearchBar.style';
import { Spinner } from 'assets/styles/common-styles/Spinner';
import { BlurBackground } from 'components/Background/Background.style';
import { ILocation } from 'assets/Types/location.types';
import SearchList from './SearchList';

interface ISearchBar {
  data: ILocation[];
  onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  inputSearch: string;
  isLoading: boolean;
  isMobile?: boolean;
  renderItem: (item: ILocation, idx: number) => void;
  onClose?: () => void;
  inputRef: MutableRefObject<HTMLInputElement>;
}
const SearchBar = ({
  data,
  onChange: debounce,
  placeholder,
  inputSearch,
  isLoading,
  isMobile,
  renderItem,
  onClose,
  inputRef,
}: ISearchBar) => (
  <Styled.SearchWrapper>
    <Styled.StyledSearch>
      {isMobile && <Styled.StyledArrow />}
      <Styled.Input
        type='text'
        placeholder={placeholder}
        onChange={debounce}
        ref={inputRef}
      />
      <Styled.SearchInputIcon />
    </Styled.StyledSearch>
    {inputSearch ? (
      <Styled.ListContainer>
        <BlurBackground ZIndex={-2} onClick={() => onClose?.()} />
        {isLoading ? (
          <Spinner />
        ) : (
          (Boolean(data.length) && (
            <SearchList data={data} renderItem={renderItem} />
          )) || (
            <>
              <Styled.StyledCityBlur />
              <Styled.TextMassageWrapper>
                <p>
                  We couldn’t find any city named &#34;{inputSearch}&#34;,
                  <br />
                  please try again.
                </p>
              </Styled.TextMassageWrapper>
            </>
          )
        )}
      </Styled.ListContainer>
    ) : (
      Boolean(isMobile) && (
        <Styled.ListContainer>
          <Styled.StyledCityBlur />
          <Styled.TextMassageWrapper>
            <p>Please search any city in the search button.</p>
          </Styled.TextMassageWrapper>
        </Styled.ListContainer>
      )
    )}
  </Styled.SearchWrapper>
);

export default SearchBar;
