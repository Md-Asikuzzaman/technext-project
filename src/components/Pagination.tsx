interface PageProps {
  pages: number[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pageNumberLimit: number;
  minPageNumberLimit: number;
  maxPageNumberLimit: number;
  setMinPageNumberLimit: React.Dispatch<React.SetStateAction<number>>;
  setMaxPageNumberLimit: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PageProps> = ({
  pages,
  currentPage,
  setCurrentPage,
  pageNumberLimit,
  minPageNumberLimit,
  maxPageNumberLimit,
  setMinPageNumberLimit,
  setMaxPageNumberLimit,
}) => {
  // RENDER ALL PAGES
  const renderPage = pages.map((page) => {
    if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
      return (
        <li
          key={page}
          className={`${page == currentPage && 'active'} page-item`}
          onClick={() => setCurrentPage(Number(page))}
        >
          <a className='page-link' href='#'>
            {page}
          </a>
        </li>
      );
    }
  });

  // HANDLE NEXT PAGE WHEN CLICK BUTTON
  const handleNextPage = () => {
    if (currentPage != pages[pages.length - 1]) {
      setCurrentPage(Number(currentPage + 1));
      if (currentPage + 1 > maxPageNumberLimit) {
        setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    }
  };

  // HANDLE PREV PAGE WHEN CLICK BUTTON
  const handlePrevPage = () => {
    if (currentPage != pages[0]) {
      setCurrentPage(Number(currentPage - 1));
      if ((currentPage - 1) % pageNumberLimit === 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    }
  };

  // SETUP INCREMENT ELLIPSIS
  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li className='page-item' onClick={handleNextPage}>
        <a className='page-link' href='#' aria-label='Next'>
          <span aria-hidden='true'>&hellip;</span>
        </a>
      </li>
    );
  }

  // SETUP DECREMENT ELLIPSIS
  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li className='page-item' onClick={handlePrevPage}>
        <a className='page-link' href='#' aria-label='Next'>
          <span aria-hidden='true'>&hellip;</span>
        </a>
      </li>
    );
  }

  return (
    <div className='d-flex justify-content-center'>
      <ul className='pagination'>
        <li className='page-item' onClick={handlePrevPage}>
          <a className='page-link' href='#' aria-label='Previous'>
            <span aria-hidden='true'>&laquo;</span>
          </a>
        </li>

        {pageDecrementBtn}
        {renderPage}
        {pageIncrementBtn}

        <li className='page-item' onClick={handleNextPage}>
          <a className='page-link' href='#' aria-label='Next'>
            <span aria-hidden='true'>&raquo;</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
