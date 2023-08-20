import { ILocation } from 'assets/Types/location.types';

interface ISearchList {
  data?: ILocation[];
  renderItem: (item: ILocation, idx: number) => void;
}
const SearchList = ({ data, renderItem }: ISearchList) => (
  <div>{data?.map(renderItem)}</div>
);

export default SearchList;
