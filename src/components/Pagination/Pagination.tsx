import { usePagination } from '../../hooks/usePagination';

type PaginationProps = {
  onPageChange: Function,
  totalCount: number,
  siblingCount: number,
  currentPage: number,
  pageSize: number,
  className: string
}

export const Pagination: React.FC<PaginationProps> = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange: (string | number)[] | undefined = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange?.[paginationRange.length - 1];

  return (
    <ul className={className}>
      <li 
        className={currentPage === 1 ? "hidden" : ""} 
        onClick={onPrevious}
      >
        <button 
          className={"w-[35px] h-[35px] bg-orange border-2 border-green rounded-[10px] shadow-md"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[30px] h-[30px]">
            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd"/>
          </svg>
        </button>
      </li>
      {paginationRange?.map((pageNumber: number|string) => {
        if (pageNumber === "...") {
          return <li>&#8230;</li>;
        }
        return (
          <li 
            key={pageNumber} 
            className={pageNumber === currentPage ? 
              "text-[20px] hover: text-yellow cursor-pointer" : 
              "text-[20px] cursor-pointer"
            } 
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li 
        className={currentPage === lastPage ? "hidden" : ""} 
        onClick={onNext}
      >
        <button 
          className={"w-[35px] h-[35px] bg-orange border-2 border-green rounded-[10px] shadow-md"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[30px] h-[30px]">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd"/>
          </svg>
        </button>
      </li>
    </ul>
  );
}