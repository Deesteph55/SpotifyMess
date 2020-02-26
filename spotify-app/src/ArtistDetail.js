import React from "react";
import style from './everything.module.css'

export const ArtistDetail = props => {
  console.log("the prop name");
  console.log(props.name);

  return (
    <div>
      <h1> The artist is </h1>
      <h1>{props.name}</h1>

      {/* <div id="header" style={{ background: "yellow", height: "400px" }}>
        background and name will be here
      </div>
      <div className={style.artistH}>
        <div id="popular" style={{ background: "white", height: "200px", width: '900px' }}>
          popular
        </div>
        <div id="fans" style={{ background: "green", height: "200px", width: '400px' }}>
          fans
        </div>
      </div>

      <div id="artist album and singles" style={{ background: "grey" }}>
        list of albums and stuff
  </div>*/}
    </div> 
  );
};
//392.76, 916.44