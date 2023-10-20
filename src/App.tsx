'use client';

import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Flight from './components/Flight';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import Upcoming from './components/Upcoming';
import { useStatus } from './providers/StatusProvider';

interface DataType {
  flight_number: number;
  mission_name: string;
  upcoming: boolean;
  launch_year: string;
  launch_date_local: string;
  rocket: {
    rocket_name: string;
  };
  launch_success: boolean;
  links: {
    mission_patch_small: string;
  };
}

const App = () => {
  const [rockets, setRockets] = useState<DataType[]>([]);
  const [filteredRockets, setFilteredRockets] = useState<DataType[]>([]);
  const { selectedStatus } = useStatus();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.spacexdata.com/v3/launches');
      const data = await res.json();
      setRockets(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedStatus === 'failed') {
      const update = rockets.filter((item) => item.launch_success === false);
      setFilteredRockets(update);
    } else if (selectedStatus === 'success') {
      const update = rockets.filter((item) => item.launch_success === true);
      setFilteredRockets(update);
    } else if (selectedStatus === '') {
      setFilteredRockets(rockets);
    }
  }, [selectedStatus, rockets]);

  return (
    <div>
      <Header />
      <Upcoming />
      <SearchBar />
      <div className='container flight__wrapper'>
        <div className='row g-4'>
          {filteredRockets.length
            ? filteredRockets.map((rocketData) => (
                <Flight key={Math.random() * 99} rocketData={rocketData} />
              ))
            : ''}
        </div>
        <Pagination />
      </div>
      <Footer />
    </div>
  );
};

export default App;
