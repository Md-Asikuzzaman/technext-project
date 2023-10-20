'use client';

import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Flight from './components/Flight';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import Upcoming from './components/Upcoming';

const App = () => {
  return (
    <div>
      <Header />
      <Upcoming />
      <SearchBar />
      <div className='container flight__wrapper'>
        <div className='row g-4'>
          <Flight />
          <Flight />
          <Flight />
          <Flight />
          <Flight />
          <Flight />
          <Flight />
        </div>
        <Pagination />
      </div>
      <Footer />
    </div>
  );
};

export default App;
