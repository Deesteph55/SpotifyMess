import React, { Component } from "react";
import "./App.css";
import SpotifyWebAPI from "spotify-web-api-js";
import { Button } from "semantic-ui-react";
import style from "./everything.module.css";
import TheApp from "./TheApp";

const spotifyApi = new SpotifyWebAPI();
var token;
var rtoken;

class App extends Component {
  constructor() {
    super();
    // const params = this.getHashParams();
    // token = params.access_token;
    // rtoken = params.refresh_token;

    // if (token) {
    //   spotifyApi.setAccessToken(token);
    // }

    // this.state = {
    //   loggedIn: token ? true : false,
    //   currentView: "Home"
    // };
  }
  // getHashParams() {
  //   var hashParams = {};
  //   var e,
  //     r = /([^&;=]+)=?([^&;]*)/g,
  //     q = window.location.hash.substring(1);
  //   while ((e = r.exec(q))) {
  //     hashParams[e[1]] = decodeURIComponent(e[2]);
  //   }
  //   return hashParams;
  // }

  render() {
    // const { currentView } = this.state;
    return (
      <div className="App">
        {/* {!this.state.loggedIn ? (
          <div className={style.background}>
            <h1>DENS</h1>
            <a href="/login">
              <Button inverted color="pink">
                {" "}
                Login to Spotify
              </Button>
            </a>
            <p>
              This button will lead you to Spotify who will authenticate you
            </p>
          </div>
        ) : null} */}

        <TheApp/>

        {/* {this.state.loggedIn ? (<TheApp/>) : null} */}

      </div>
    );
  }
}

export default App;
