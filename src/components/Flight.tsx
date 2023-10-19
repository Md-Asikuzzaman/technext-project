import React from 'react';

const Flight = () => {
  return (
    <div className='col-lg-4 col-md-6'>
      <div className='card flight__card justify-content-center align-items-center'>
        <div className='flight__card-header'>
          <img
            src='https://images2.imgbox.com/40/e3/GypSkayF_o.png'
            alt='img'
          />
        </div>
        <div className='flight__card-body text-center d-flex flex-column'>
          <div>
            <p className='mb-0 text-barlow-400 '>
              Launch Date: <span className='launch__date'>21 Feb, 2007</span>
            </p>

            <h2 className='mb-0 text-barlow-500 flight__title'>DemoSat</h2>
            <p className='mb-0 text-barlow-400 flight__version'>Falcon 1</p>
          </div>
          <div>
            <p className='mb-0 text-barlow-500 launch-text'>Launch Status:</p>
            <span className='flight__status-success'>Failed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flight;
