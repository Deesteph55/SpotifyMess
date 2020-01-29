import React, { useContext } from "react";
import { Menu, Container, Button, Header, Icon } from "semantic-ui-react";

export const Navbar = ({ openSearch, openTracks, openPopular, openHome }) => {
  return (
    <Menu fixed="left" inverted vertical>
      <Container>
        <Header as="h1" color='teal' centered style={{marginTop: '10px', marginLeft: '25px'}}>
          <Icon name="music" />
          <Header.Content>DENS</Header.Content>
        </Header>
        <Menu.Item>
          <Button onClick={openHome} content="Home" />
        </Menu.Item>
        <Menu.Item>
          <Button onClick={openTracks} content="Tracks" />
        </Menu.Item>
        <Menu.Item>
          <Button onClick={openSearch} content="Search" />
        </Menu.Item>
        <Menu.Item>
          <Button onClick={openPopular} content="Popular" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};
