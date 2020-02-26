import React, { useState, useEffect } from "react";
import { Playing } from "./Playing";
import { Tracks } from "./Tracks";
import { Popular } from "./Popular";
import { SearchE } from "./SearchE";
import { Home } from "./Home";
import { ArtistDetail } from "./ArtistDetail";
import style from "./everything.module.css";
import SpotifyWebAPI from "spotify-web-api-js";
import { Icon } from "semantic-ui-react";
import { Album } from "./Album";

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
      <Icon name="user circle outline" />
      {currentUser}
      {currentView == "Home" && (
        <Home
          switchView={switchView}
          setCurrentArtist={setCurrentArtist}
          setCurrentAlbum={setCurrentAlbum}
        />
      )}
      {currentView == "Tracks" && (
        <Tracks
          switchView={switchView}
          setCurrentArtist={setCurrentArtist}
          setCurrentAlbum={setCurrentAlbum}
        />
      )}
      {currentView == "SearchE" && <SearchE />}
      {currentView == "Popular" && <Popular />}
      {currentView == "ADetail" && <ArtistDetail name={currentArtist} />}
      {currentView === "AlbumDetail" && <Album id={currentAlbum}/>}
     
    </div>
  );
};
