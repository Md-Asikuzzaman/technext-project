const Upcoming = () => {
  return (
    <div className='container d-flex justify-content-md-end'>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          value=''
          id='flexCheckDefault'
        />
        <label
          className='form-check-label text-barlow-400 upcoming__label'
          htmlFor='flexCheckDefault'
        >
          Show upcoming only
        </label>
      </div>
    </div>
  );
};

export default Upcoming;
