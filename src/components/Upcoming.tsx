interface PageProps {
  isUpcoming: boolean;
  setIsUpcoming: React.Dispatch<React.SetStateAction<boolean>>;
}

const Upcoming: React.FC<PageProps> = ({ isUpcoming, setIsUpcoming }) => {
  return (
    <div className='container d-flex justify-content-md-end'>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          checked={isUpcoming}
          id='flexCheckDefault'
          onChange={() => setIsUpcoming(!isUpcoming)}
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
