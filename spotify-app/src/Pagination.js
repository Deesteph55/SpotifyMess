import React from "react";

export const Pagination = ({ paginate, totalTracks, currentPage }) => {
  const btnStyle = {
    background: "none !important",
    border: "none",
    cursor: "pointer"
  };
  var prevSign = "<";
  var nextSign = ">";
  let prevBtn = null;
  if (currentPage == 1) {
    prevBtn = (
      <button
        disabled
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "30px"
        }}
      >
        {prevSign}
      </button>
    );
  } else {
    prevBtn = (
      <button
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "30px"
        }}
        onClick={() => paginate(currentPage - 1)}
      >
        {prevSign}
      </button>
    );
  }
  let lastPage = Math.ceil(parseFloat(totalTracks / 4));
  let nxtBtn = null;
  if (currentPage == lastPage) {
    nxtBtn = (
      <button
        disabled
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "30px"
        }}
      >
        {" "}
        >{" "}
      </button>
    );
  } else {
    nxtBtn = (
      <button
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "30px"
        }}
        onClick={() => paginate(currentPage + 1)}
      >
        >
      </button>
    );
  }

  return (
    <div>
      {prevBtn}
      {nxtBtn}
    </div>
  );
};
