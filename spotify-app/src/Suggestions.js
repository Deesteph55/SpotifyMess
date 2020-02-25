import React from "react";
//have to do a if no results

export const Suggestions = ({ results, getPop }) => {
  const clickAndDump = (pop, name) => {
    getPop(pop, name);
    options = null;
  }

  var options = results.map(unit => (
    <li onClick={() => clickAndDump(unit.popularity, unit.name)} key={unit.id}>
      {unit.name}
    </li>
  ));

  return <ul>{options}</ul>;
};
