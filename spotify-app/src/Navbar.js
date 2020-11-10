import React, { useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import style from "./Nav.module.css";
import { gotParams } from "./Credentials";
import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();

const Navbar = ({ switchView }) => {
  const [token, setToken] = useState("");
 // const [rtoken, setRToken] = useState("");
  const [param, setParam] = useState([]);
  
  // let param = gotParams();
  // var token = param.access_token;
  //spotifyApi.setAccessToken(token);


  useEffect(() => {
    //let param = gotParams();
    // setParam(gotParams());
    // setToken(param.access_token);
    // console.log("param from navbar "+ param);
    // console.log("param from navbar "+ param.access_token);
   // var token = param.access_token;
    // const openTracks = () => {
   // console.log("token from navbar " + token);
    // };
    //spotifyApi.setAccessToken(token);
  }, setParam, setToken);
  return (
    <div className={style.sidebar}>
      {/* <li>
        <Icon name="music" />
        DENS
      </li>
      <li onClick={() => switchView("Home")}>
        <Icon name="home" />
        Home
      </li>
      <li onClick={() => switchView("SearchE")}>Search</li>
      <li onClick={() => switchView("Tracks")}>Tracks</li>
      <li onClick={() => switchView("Popular")}>Popular</li>
      <li onClick={() => switchView("Playlist")}>Playlists</li> */}

      <li>
        <Icon name="music" />
        DENS
      </li>
      <li>
        <Icon name="home" />
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/search">Search</Link>
      </li>
      <li>
        {" "}
        <Link to="/tracks"> Tracks</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/popular"> Popular</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/playlist"> Playlists</Link>{" "}
      </li>
    </div>
  );
};
export default withRouter(Navbar);
//export default Navbar;
