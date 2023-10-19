import Search from './Search';
import Select from './Select';

const SearchBar = () => {
  return (
    <div className='container d-flex justify-content-between gap-md-5 gap-2 flex-md-row flex-column'>
      <Search />
      <Select />
    </div>
  );
};

export default SearchBar;
