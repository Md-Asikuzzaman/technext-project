import React from 'react';

interface DataType {
  rocketData: {
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
  };
}

const Flight: React.FC<DataType> = ({ rocketData }) => {
  const {
    flight_number,
    mission_name,
    upcoming,
    launch_year,
    launch_date_local,
    rocket: { rocket_name },
    launch_success,
    links: { mission_patch_small },
  } = rocketData;

  const noImage = 'https://vkist.gov.vn/vkist-media/21/7/10/noimage.jpg';

  return (
    <div className='col-lg-4 col-md-6'>
      <div className='card flight__card justify-content-center align-items-center'>
        <div className='flight__card-header'>
          <img
            src={mission_patch_small ? mission_patch_small : noImage}
            alt={mission_name}
          />
        </div>
        <div className='flight__card-body text-center d-flex flex-column'>
          <div>
            <p className='mb-0 text-barlow-400 '>
              Launch Date:{' '}
              <span className='launch__date'>
                {new Date(launch_date_local).getDate()}{' '}
                {new Date(launch_date_local).toLocaleDateString('en-US', {
                  month: 'short',
                })}
                {', '}
                {launch_year}
              </span>
            </p>

            <h2 className='mb-0 text-barlow-500 flight__title single-line-text'>
              {mission_name}
            </h2>
            <p className='mb-0 text-barlow-400 flight__version'>
              {rocket_name}
            </p>
          </div>
          <div>
            <p className='mb-0 text-barlow-500 launch-text'>Launch Status:</p>
            <span
              className={
                launch_success
                  ? 'flight__status-success'
                  : 'flight__status-failed'
              }
            >
              {launch_success ? 'Success' : 'Failed'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flight;
