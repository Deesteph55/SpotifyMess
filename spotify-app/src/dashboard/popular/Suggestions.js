import React from "react";
//have to do a if no results

export const Suggestions = ({ results, getPop }) => {
  const clickAndDump = (pop, name) => {
    getPop(pop, name);
    options = null;
  }

  var options = results.map(unit => (
    <ul style={{listStyle: 'none'}}>
    <li onClick={() => clickAndDump(unit.popularity, unit.name)} key={unit.id} style={{cursor: 'pointer', paddingBottom: '10px'}}>
      {unit.name}
    </li>
    </ul>
  ));

  return <ul>{options}</ul>;
};
