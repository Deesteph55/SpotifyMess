import React from "react";
import { Playing } from "./Playing";
import { Tracks } from "./Tracks";
import { Popular } from "./Popular";
import { SearchE } from "./SearchE";
import { Home }  from "./Home";
import { ArtistDetail } from './ArtistDetail'


export const Dashboard = ({ showSearchE, showTracks, showPopular, showHome, showArtist }) => {
  const divStyle = {
    //backgroundImage: `url(${'https://trianglify.io/p/w:1440!h:900!x:PuBu!v:0.774!c:0.025!s:8fbb47'})`,
    //backgroundColor: 'red',
    //width: '100%',
    
    //marginRight: '0em',
    //padding: '0',
    //marginTop: '0em',
    //position: 'absolute'
};
  return (
    <div style={divStyle}>
      
      {/* {showTracks && <Tracks showHome={showHome} showPopular={showPopular} showTracks={showTracks} showSearchE={showSearchE}/>} */}
      {showTracks && <Tracks />}
      {showSearchE && <SearchE />}
      {showPopular && <Popular/>}
      {showHome && <Home/>}
      {/* {showArtist && <ArtistDetail/>} */}
    </div>
  );
};
