import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useSearch } from '../providers/SearchProvider';

const Search = () => {
  const { setSearchQuery, searchQuery } = useSearch();

  return (
    <div className='input-group search__bar'>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type='text'
        className='form-control'
        placeholder='Search...'
        aria-label="Recipient's username"
        aria-describedby='button-addon2'
      ></input>
      <button
        className='btn btn-primary d-flex align-items-center justify-content-center'
        type='submit'
        id='button-addon2'
      >
        <BsSearch size={18} />
      </button>
    </div>
  );
};

export default Search;
