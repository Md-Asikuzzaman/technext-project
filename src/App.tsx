'use client';

import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Flight from './components/Flight';

const App = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <div className='container flight__wrapper'>
        <div className='row'>
          <Flight />
          <Flight />
          <Flight />
          <Flight />
        </div>
      </div>
    </div>
  );
};

export default App;
