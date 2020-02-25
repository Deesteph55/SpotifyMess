import React from "react";
import { Playing } from "./Playing";
import { Tracks } from "./Tracks";
import { Popular } from "./Popular";
import { SearchE } from "./SearchE";
import { Home }  from "./Home";
import { ArtistDetail } from './ArtistDetail'


export const Dashboard = ({ currentView, switchView, name}) => {
  console.log("the name is");
  console.log(name);
  return (
    <div >
      {currentView == "Home" && <Home/>}
      {currentView == "Tracks" && <Tracks switchView={switchView} currentView={currentView}/>}
      {currentView == "SearchE" && <SearchE/>}
      {currentView == "Popular" && <Popular/>}
      {currentView == "ADetail" && <ArtistDetail name={name}/>}
    </div>
  );
};
