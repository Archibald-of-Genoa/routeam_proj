import { PaginatorContainer } from "./Paginator.styled";
import { BUTTON } from "../Button";

interface PaginatorProps {
  currentPage: number;
  onChange: (page: number) => void;
}

const Paginator = ({ currentPage, onChange }: PaginatorProps) => {
  let pagesToShow;
  if (currentPage === 1) { 
    pagesToShow = [1, 2, 3];
  } else {
    pagesToShow = [currentPage - 1, currentPage, currentPage + 1];
  }

  return (
    <PaginatorContainer>
      <BUTTON
        as="button"
        view="arrow"
        width="50px"
        height="50px"
        direction="left"
        disabled={currentPage === 1}
        onClick={() => onChange(currentPage - 1)}
      />
      {pagesToShow.map((page, index) => (
        <BUTTON
          as="button"
          view="pageNumber"
          key={index} 
          active={page === currentPage}
          onClick={() => onChange(page)}
        >
          {page}
        </BUTTON>
      ))}
      <BUTTON
        as="button"
        width="50px"
        height="50px"
        view="arrow"
        direction="right"
        onClick={() => onChange(currentPage + 1)}
      />
    </PaginatorContainer>
  );
};

export default Paginator;
