import React, { useState } from "react";

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
}

interface PaginationProps {
  items: Employee[];
  itemsPerPage: number;
}

/**
 * Pagination component to display a paginated list of items.
 *
 * @component
 * @param {PaginationProps} props - The props for the Pagination component.
 * @param {Array} props.items - The array of items to paginate.
 * @param {number} props.itemsPerPage - The number of items to display per page.
 *
 * @returns {JSX.Element} The rendered Pagination component.
 *
 * @example
 * const items = [
 *   { id: 1, firstName: 'John', lastName: 'Doe' },
 *   { id: 2, firstName: 'Jane', lastName: 'Doe' },
 *   // more items...
 * ];
 * const itemsPerPage = 10;
 *
 * <Pagination items={items} itemsPerPage={itemsPerPage} />
 */
const Pagination: React.FC<PaginationProps> = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black" }}>ID</th>
            <th style={{ border: "1px solid black" }}>First Name</th>
            <th style={{ border: "1px solid black" }}>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {paginatedItems.map((item) => (
            <tr key={item.id}>
              <td style={{ border: "1px solid black" }}>{item.id}</td>
              <td style={{ border: "1px solid black" }}>{item.firstName}</td>
              <td style={{ border: "1px solid black" }}>{item.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
