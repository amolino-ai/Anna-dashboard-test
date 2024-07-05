import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export default function Pagination({ totalPages = 7, currentPage, setCurrentPage }: PaginationProps) {
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPaginationRange = () => {
    const pages = [];
    const range = 5;
    const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
    const indexCurrentPage = pagesArray.findIndex(page => page === currentPage);

    if (totalPages <= range + 1) {
      pages.push(...Array.from({ length: totalPages }, (_, i) => i + 1));
    } else if (indexCurrentPage === 0) {
      const newAr = pagesArray.splice(indexCurrentPage, range);
      pages.push(...newAr, '...', totalPages);
    } else if (indexCurrentPage >= totalPages - (range + 1)) {
      const newAr = pagesArray.slice(-6);
      pages.push('...', ...newAr);
    } else if (indexCurrentPage >= 1) {
      const newAr = pagesArray.splice(indexCurrentPage, range);
      pages.push('...', ...newAr, '...', totalPages);
    }

    return pages;
  };

  const paginationRange = getPaginationRange();

  return (
    <ul className="flex p-4">
      <li>
        <button
          className="flex items-center justify-center w-8 h-8 border border-borderGrayColor rounded mr-2"
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        >
          <MdKeyboardDoubleArrowLeft />
        </button>
      </li>
      <li>
        <button
          className="flex items-center justify-center w-8 h-8 border border-borderGrayColor rounded mr-2"
          onClick={handlePrevClick}
          disabled={currentPage === 1}
        >
          <MdKeyboardArrowLeft />
        </button>
      </li>
      {paginationRange.map((page, index) => (
        <li key={index}>
          <button
            className={`flex items-center justify-center w-8 h-8 border border-borderGrayColor rounded mr-2 ${
              page === currentPage ? 'bg-activeBtnColor border-0' : ''
            }`}
            onClick={() => typeof page === 'number' && handlePageClick(page)}
            disabled={page === '...'}
          >
            {page}
          </button>
        </li>
      ))}
      <li>
        <button
          className="flex items-center justify-center w-8 h-8 border border-borderGrayColor rounded mr-2"
          onClick={handleNextClick}
          disabled={currentPage === totalPages}
        >
          <MdKeyboardArrowRight />
        </button>
      </li>
      <li>
        <button
          className="flex items-center justify-center w-8 h-8 border border-borderGrayColor rounded mr-2"
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          <MdKeyboardDoubleArrowRight />
        </button>
      </li>
    </ul>
  );
}
