import Search from './Search';
import Select from './Select';

const SearchBar = () => {
  return (
    <div className='container d-flex justify-content-between align-items-center gap-5'>
      <Search />
      <Select />
    </div>
  );
};

export default SearchBar;
