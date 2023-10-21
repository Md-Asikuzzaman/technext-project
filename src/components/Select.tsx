import { useState } from 'react';
import { useStatus } from '../providers/StatusProvider';

const Select = () => {
  const [launchDate, setLaunchDate] = useState<string>('');
  // LAUNCH BY DATE LOGIC WILL BE GO HERE...
  const launchByDate = () => {};

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

      <select
        value={launchDate}
        onChange={(e) => setLaunchDate(e.target.value)}
        className='form-select'
        aria-label='Default select example'
      >
        <option value=''>By Launch Date</option>
        <option value='last-week'>Last week</option>
        <option value='last-month'>Last Month</option>
        <option value='last-year'>Last year</option>
      </select>
    </div>
  );
};

export default Select;
