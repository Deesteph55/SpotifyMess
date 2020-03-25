import React, { useContext } from "react";
import {
  Menu,
  Container,
  Button,
  Header,
  Icon,
  Segment
} from "semantic-ui-react";
import style from './Nav.module.css'

export const Navbar = ({ switchView }) => {
  return (

    <div className={style.sidebar}>
      <li>
      <Icon name="music" />
        DENS</li>
      <li onClick={() => switchView("Home")}> 
      <Icon name="home" />
      Home</li>
      <li onClick={() => switchView("SearchE")}>Search</li>
      <li onClick={() => switchView("Tracks")}>
        Tracks
      </li>
      <li onClick={() => switchView("Popular")}>Popular</li>
      <li onClick={() => switchView("Playlist")}>Playlists</li>
      
    </div>

    // <Menu fixed="left" vertical inverted id="component nav menu">
    //   <Header
    //     as="h1"
    //     centered
    //     style={{ marginTop: "10px", marginLeft: "25px", color: "#faaca8" }}
    //   >
    //     <Icon name="music" />
    //     <Header.Content>DENS</Header.Content>
    //   </Header>
    //   <Menu.Item onClick={() => switchView("Home")}>
    //     {/* <Button onClick={() => switchView("Home")} content="Home" /> */}
    //     Home
    //   </Menu.Item>
    //   <Menu.Item onClick={() => switchView("Tracks")}>
    //     {/* <Button onClick={() => switchView("Tracks")} content="Tracks" /> */}
    //     Tracks
    //   </Menu.Item>
    //   <Menu.Item onClick={() => switchView("SearchE")}>
    //     {/* <Button onClick={() => switchView("SearchE")} content="Search" /> */}
    //     Search
    //   </Menu.Item>
    //   <Menu.Item onClick={() => switchView("Popular")}>
    //     {/* <Button onClick={() => switchView("Popular")} content="Popular" /> */}
    //     Popular
    //   </Menu.Item>
    //   <Menu.Item>
    //     Playlists
    //     <Menu.Menu>
    //       <Menu.Item>lala</Menu.Item>
    //     </Menu.Menu>
    //   </Menu.Item>

    //   <Menu.Item>Made by *********</Menu.Item>
    // </Menu>
  );
};
