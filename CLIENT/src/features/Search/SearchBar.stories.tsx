import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AutoCompleteT } from 'assets/Types/types';
import { debounce } from 'lodash';
import mockData from 'mock/autocompleteData';
import { ChangeEvent, useState } from 'react';
import SearchBar from './SearchBar';

export default {
  title: 'SearchBar/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Input = Template.bind({});
Input.args = {
  placeholder: 'Try “Tel Aviv - Jaffo”...',
};

export const AutoComplete = Template.bind({});
AutoComplete.args = {
  data: mockData,
  placeholder: 'n',
};

export const SearchErrorMessage = Template.bind({});
SearchErrorMessage.args = {
  data: [],
  placeholder: 'New York@',
  inputSearch: 'New York@',
};

export const Search: ComponentStory<typeof SearchBar> = () => {
  const [results, setResults] = useState<AutoCompleteT[]>([]);

  const findCity = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setResults([]);
      return;
    }
    const options = mockData.filter((option) =>
      option.LocalizedName.toLowerCase().startsWith(e.target.value)
    );
    options.slice(0, 9);
    setResults(options);
  };

  const debounceAutocomplete = debounce(findCity, 500);

  return (
    <SearchBar
      inputSearch=''
      isLoading={false}
      data={results}
      onChange={debounceAutocomplete}
      placeholder='Try “Tel Aviv - Jaffo”...'
    />
  );
};
