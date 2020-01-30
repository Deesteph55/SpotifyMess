import React, { Component } from "react";
import "./App.css";
import SpotifyWebAPI from "spotify-web-api-js";
import {
  Button,
  Segment,
  Grid,
  GridColumn,
  Container
} from "semantic-ui-react";
import { Navbar } from "./Navbar";
import { Dashboard } from "./Dashboard";
//NAME OF THIS APP IS DENS
const spotifyApi = new SpotifyWebAPI();
var token;
var rtoken;

class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    token = params.access_token;
    rtoken = params.refresh_token;

    if (token) {
      spotifyApi.setAccessToken(token);
    }

    this.state = {
      loggedIn: token ? true : false,
      showTracks: false,
      showSearch: false,
      showNowPlaying: false,
      showPopular: false,
      showSearchE: false,
      showHome: false
    };
  }
  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  handleOpenSearchE = () => {
    this.setState({
      showSearchE: true,
      showTracks: false,
      showPopular: false,
      showHome: false
    });
  };

  handleOpenTracks = () => {
    this.setState({
      showTracks: true,
      showSearchE: false,
      showPopular: false,
      showHome: false
    });
  };

  handleOpenPopular = () => {
    this.setState({
      showTracks: false,
      showSearchE: false,
      showPopular: true,
      showHome: false
    });
  };

  handleHome = () => {
    this.setState({
      showTracks: false,
      showSearchE: false,
      showPopular: false,
      showHome: true
    });
  };
  render() {
    const { showTracks, showSearchE, showPopular, showHome } = this.state;
    const divStyle = {
      marginRight: "0em",
      paddingRight: "0px"
    };
    return (
      <div className="App" style={divStyle}>
        {!this.state.loggedIn ? (
          <div>
            <h1>DENS</h1>
            <a href="http://localhost:8888">
              <Button inverted color="red">
                {" "}
                Login to Spotify
              </Button>
            </a>
          </div>
        ) : null}

        {this.state.loggedIn ? (
          <div>
            <Navbar
              openSearch={this.handleOpenSearchE}
              openTracks={this.handleOpenTracks}
              openPopular={this.handleOpenPopular}
              openHome={this.handleHome}
            />
            <Container style={{ width: "100%", paddingRight: "0px" }} textAlign='center' style={{marginTop: '50px'}}>
              <Dashboard 
                showSearchE={showSearchE}
                showTracks={showTracks}
                showPopular={showPopular}
                showHome={showHome}
              />
            </Container>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
