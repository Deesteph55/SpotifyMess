import React, { useContext } from "react";
import { Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import style from "./Nav.module.css";

const Navbar = ({ switchView }) => {
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
      <li><Link to="/search">Search</Link></li>
      <li> <Link to="/tracks"> Tracks</Link> </li>
      <li> <Link to="/popular"> Popular</Link> </li>
      <li> <Link to="/playlist"> Playlists</Link> </li>
    </div>
  );
};
 export default withRouter(Navbar);
//export default Navbar;
