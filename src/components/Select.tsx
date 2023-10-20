const Select = () => {
  return (
    <div className='d-flex align-items-center gap-md-4 gap-3 flex-md-row flex-column'>
      <select className='form-select' aria-label='Default select example'>
        <option selected>By Launch Status</option>
        <option value='1'>Success</option>
        <option value='2'>Failed</option>
      </select>

      <select className='form-select' aria-label='Default select example'>
        <option selected>By Launch Date</option>
        <option value='1'>Last week</option>
        <option value='2'>Last Month</option>
        <option value='3'>Last year</option>
      </select>
    </div>
  );
};

export default Select;
