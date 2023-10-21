const Skeleton = () => {
  return (
    <div className='col-lg-4 col-md-6 '>
      <div className='card border-0 p-4 skeleton d-flex flex-column align-items-center'>
        <div className='skeleton__img'></div>
        <div className='skeleton__date mt-4'></div>
        <div className='skeleton__title mt-3'></div>
        <div className='skeleton__model mt-2'></div>
        <div className='skeleton__status mt-5'></div>
      </div>
    </div>
  );
};

export default Skeleton;
