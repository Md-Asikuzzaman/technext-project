import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
  return (
    <div className='input-group search__bar'>
      <input
        type='text'
        className='form-control'
        placeholder='Search...'
        aria-label="Recipient's username"
        aria-describedby='button-addon2'
      ></input>
      <button
        className='btn btn-primary d-flex align-items-center justify-content-center'
        type='button'
        id='button-addon2'
      >
        <BsSearch size={18} />
      </button>
    </div>
  );
};

export default Search;
