import { useStatus } from '../providers/StatusProvider';

const Select = () => {
  const { selectedStatus, setSelectedStatus } = useStatus();

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value);
  };

  return (
    <div className='d-flex align-items-center gap-md-4 gap-3 flex-md-row flex-column'>
      <select
        value={selectedStatus}
        onChange={handleStatusChange}
        className='form-select'
        aria-label='Default select example'
      >
        <option value=''>By Launch Status</option>
        <option value='success'>Success</option>
        <option value='failed'>Failed</option>
      </select>

      <select className='form-select' aria-label='Default select example'>
        <option value=''>By Launch Date</option>
        <option value='1'>Last week</option>
        <option value='2'>Last Month</option>
        <option value='3'>Last year</option>
      </select>
    </div>
  );
};

export default Select;
