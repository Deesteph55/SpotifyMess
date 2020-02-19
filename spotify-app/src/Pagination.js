import React from "react";

export const Pagination = ({paginate, totalTracks, currentPage}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTracks / 4); i++) {
      pageNumbers.push(i);
    }  

  return (
    <div>
      <ul>
        <button>
          <a onClick={() => paginate(currentPage - 1)}>Previous</a>
        </button>

        <button>
          <a onClick={() => paginate(currentPage + 1)}>Next</a>
        </button>
      </ul>
    </div>
  );
};
