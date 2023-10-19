
const Select = () => {
  return (
    <div className='d-flex align-items-center gap-4'>
      <select className='form-select' aria-label='Default select example'>
        <option selected>By Launch Status</option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
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
