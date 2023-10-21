import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Flight from './components/Flight';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import Upcoming from './components/Upcoming';
import { useStatus } from './providers/StatusProvider';
import { useSearch } from './providers/SearchProvider';

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
  const [isUpcoming, setIsUpcoming] = useState<boolean>(false);

  const { selectedStatus } = useStatus();
  const { searchQuery } = useSearch();

  // FETCH DATA BY API
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.spacexdata.com/v3/launches');
      const data = await res.json();
      setRockets(data);
    };

    fetchData();
  }, []);

  // SET DATA BY FILTERING
  useEffect(() => {
    if (isUpcoming) {
      const upComingData = rockets.filter((item) => item.upcoming === true);
      setFilteredRockets(upComingData);

      if (searchQuery) {
        const searchData = upComingData.filter((item) =>
          item.mission_name
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase())
        );
        setFilteredRockets(searchData);

        if (selectedStatus === 'failed') {
          const update = searchData.filter(
            (item) =>
              item.launch_success === false || item.launch_success === null
          );
          setFilteredRockets(update);
        } else if (selectedStatus === 'success') {
          const update = searchData.filter(
            (item) => item.launch_success === true
          );
          setFilteredRockets(update);
        } else if (selectedStatus === '') {
          setFilteredRockets(searchData);
        }
      } else {
        if (selectedStatus === 'failed') {
          const update = upComingData.filter(
            (item) =>
              item.launch_success === false || item.launch_success === null
          );

          setFilteredRockets(update);
        } else if (selectedStatus === 'success') {
          const update = upComingData.filter(
            (item) => item.launch_success === true
          );

          setFilteredRockets(update);
        } else if (selectedStatus === '') {
          setFilteredRockets(upComingData);
        }
      }
    } else {
      if (searchQuery) {
        const searchData = rockets.filter((item) =>
          item.mission_name
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase())
        );
        setFilteredRockets(searchData);
        if (selectedStatus === 'failed') {
          const update = searchData.filter(
            (item) =>
              item.launch_success === false || item.launch_success === null
          );
          setFilteredRockets(update);
        } else if (selectedStatus === 'success') {
          const update = searchData.filter(
            (item) => item.launch_success === true
          );
          setFilteredRockets(update);
        } else if (selectedStatus === '') {
          setFilteredRockets(searchData);
        }
      } else {
        if (selectedStatus === 'failed') {
          const update = rockets.filter(
            (item) =>
              item.launch_success === false || item.launch_success === null
          );
          setFilteredRockets(update);
        } else if (selectedStatus === 'success') {
          const update = rockets.filter((item) => item.launch_success === true);
          setFilteredRockets(update);
        } else if (selectedStatus === '') {
          setFilteredRockets(rockets);
        }
      }
    }
  }, [selectedStatus, rockets, searchQuery, isUpcoming]);

  // PAGINATION STATE
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(9);

  const [pageNumberLimit, setPageNumberLimit] = useState<number>(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(0);

  const pages = [];

  for (let i = 1; i <= Math.ceil(filteredRockets.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRockets.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <Header />
      <Upcoming isUpcoming={isUpcoming} setIsUpcoming={setIsUpcoming} />
      <SearchBar />
      <div className='container flight__wrapper'>
        <div className='row g-4'>
          {currentItems.length ? (
            currentItems.map((rocketData) => (
              <Flight key={Math.random() * 99} rocketData={rocketData} />
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
        <Pagination
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageNumberLimit={pageNumberLimit}
          minPageNumberLimit={minPageNumberLimit}
          maxPageNumberLimit={maxPageNumberLimit}
          setMaxPageNumberLimit={setMaxPageNumberLimit}
          setMinPageNumberLimit={setMinPageNumberLimit}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
