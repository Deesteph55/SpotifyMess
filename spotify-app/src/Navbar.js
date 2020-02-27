import React, { useContext } from "react";
import { Menu, Container, Button, Header, Icon } from "semantic-ui-react";

export const Navbar = ({ switchView }) => {
  return (
    <Menu fixed="left" inverted vertical id="component nav menu">
      
        <Header as="h1" centered style={{marginTop: '10px', marginLeft: '25px', color: '#faaca8'}}>
          <Icon name="music" />
          <Header.Content>DENS</Header.Content>
        </Header>
        <Menu.Item>
          <Button onClick={() => switchView("Home")} content="Home" />
        </Menu.Item>
        <Menu.Item>
          <Button onClick={() => switchView("Tracks")} content="Tracks" />
        </Menu.Item>
        <Menu.Item>
          <Button onClick={() => switchView("SearchE")} content="Search" />
        </Menu.Item>
        <Menu.Item>
          <Button onClick={() => switchView("Popular")} content="Popular" />
        </Menu.Item>

        <Menu.Item>
          Made by *********
        </Menu.Item>
    </Menu>
  );
};
