import styled, { css } from "styled-components";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

interface PageNumberProps {
  isActive: boolean;
}

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.span<PageNumberProps>`
  margin: 0 5px;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      font-weight: bold;
    `}
`;

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {

  const getPageNumbers = (): JSX.Element[] => {
    const pageNumbers: JSX.Element[] = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PageNumber
          key={i}
          onClick={() => onPageChange(i)}
          isActive={currentPage === i}
        >
          {i}
        </PageNumber>
      );
    }
    return pageNumbers;
  };

  return (
    <PaginationContainer>
      <PageNumber onClick={() => onPageChange(1)} isActive={currentPage === 1}>
        «
      </PageNumber>
      <PageNumber
        onClick={() => onPageChange(currentPage - 1)}
        isActive={currentPage !== 1}
      >
        ‹
      </PageNumber>
      {getPageNumbers()}
      <PageNumber
        onClick={() => onPageChange(currentPage + 1)}
        isActive={currentPage !== totalPages}
      >
        ›
      </PageNumber>
      <PageNumber
        onClick={() => onPageChange(totalPages)}
        isActive={currentPage === totalPages}
      >
        »
      </PageNumber>
    </PaginationContainer>
  );
};

export default Pagination;
