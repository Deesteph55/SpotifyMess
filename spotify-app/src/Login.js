import React, { Component } from "react";
import SpotifyWebAPI from "spotify-web-api-js";

const spotifyApi = new SpotifyWebAPI();
var token;

class Login extends Component {
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
      showHome: false,
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

  render() {
    return (
      <div className="App" style={divStyle}>
        <h1>DENS</h1>
        {!this.state.loggedIn ? (
          <a href="http://localhost:8888">
            <Button inverted color="red">
              {" "}
              Login to Spotify
            </Button>
          </a>
        ) : null}    
      </div>
    );
  }
}
