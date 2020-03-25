import React, { Component } from "react";
import "./App.css";
import SpotifyWebAPI from "spotify-web-api-js";
import { Button } from "semantic-ui-react";
import { Navbar } from "./Navbar";
import { Dashboard } from "./Dashboard";
import style from "./everything.module.css";
import cx from "classnames";

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
      currentView: "Home"
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

  switchView = viewName => {
    this.setState({
      currentView: viewName
    });
  };

  render() {
    const { currentView } = this.state;
    return (
      <div className="App">
        {!this.state.loggedIn ? (
          <div>
            <h1>DENS</h1>
            <a href="/login">
              {/* <a href="https://accounts.spotify.com/authorize?client_id=cee959f14e8e4d4da32f7d6e6b76fc28&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:8888/callback"> */}
              <Button inverted color="red">
                {" "}
                Login to Spotify
              </Button>
            </a>
            <p>
              This button will lead you to Spotify who will authenticate you
            </p>
          </div>
        ) : null}

        {this.state.loggedIn ? (
          <div id="outer div">
            <div className={style.container}>
              <div id="app nav div" className={style.nav}>
                <Navbar switchView={this.switchView} />
              </div>

              <div
                className={cx(style.background, style.dash)}
                id="app dashboard div"
              >
                <Dashboard
                  currentView={currentView}
                  switchView={this.switchView}
                />
              </div>
            </div>

            <div className={style.footer}>
              <h1>Made by *******</h1>
            </div>
          </div>
        ) : null}
        {/* //null should be windows.location saying you are not logged in  */}
      </div>
    );
  }
}

export default App;
