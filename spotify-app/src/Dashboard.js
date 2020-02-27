import React, { useState, useEffect } from "react";
import { Tracks } from "./dashboard/tracks/Tracks";
import { Popular } from "./dashboard/popular/Popular";
import { SearchE } from "./dashboard/search/SearchE";
import { Home } from "./dashboard/home/Home";
import { ArtistDetail } from "./dashboard/artistdetail/ArtistDetail";
import SpotifyWebAPI from "spotify-web-api-js";
import { Icon } from "semantic-ui-react";
import { Album } from "./dashboard/albumdetail/Album";

const spotifyApi = new SpotifyWebAPI();

export const Dashboard = ({ currentView, switchView }) => {
  const [currentArtist, setCurrentArtist] = useState("");
  const [currentAlbum, setCurrentAlbum] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  const getUser = () => {
    spotifyApi.getMe().then(response => {
      setCurrentUser(response.display_name);
    });
  };

  useEffect(() => {
    {
      getUser();
    }
    console.log(currentUser);
  }, [currentUser]);

  return (
    <div id="component dashboard div">
      <div>
        <Icon name="user circle outline" />
        {currentUser} 
      </div>
      
      {currentView == "Home" && (
        <Home
          switchView={switchView}
          setCurrentArtist={setCurrentArtist}
          setCurrentAlbum={setCurrentAlbum}
          currentUser={currentUser}
        />
      )}
      {currentView == "Tracks" && (
        <Tracks
          switchView={switchView}
          setCurrentArtist={setCurrentArtist}
          setCurrentAlbum={setCurrentAlbum}
          currentUser={currentUser}
        />
      )}
      {currentView == "SearchE" && <SearchE />}
      {currentView == "Popular" && <Popular currentUser={currentUser}/>}
      {currentView == "ADetail" && <ArtistDetail name={currentArtist} currentUser={currentUser}/>}
      {currentView === "AlbumDetail" && <Album id={currentAlbum} currentUser={currentUser}/>}
     
    </div>
  );
};
