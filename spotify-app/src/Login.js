import React, { Component } from "react";
import SpotifyWebAPI from "spotify-web-api-js";
import { Button } from "semantic-ui-react";
import { Credentials, gotParams } from "./Credentials";

const spotifyApi = new SpotifyWebAPI();
var token;
var rtoken;

export default class Login extends Component {
  constructor(props) {
    super(props);
    // const params = this.getHashParams();
    const params = Credentials();
    token = params.access_token;
    //token = 'BQDm0fAEvTY6K3WRdzqSgWwGLtNqsZwKQZqZD6KWYeRj_fQneRx3cBg0f-BLDx_JkZ01NKU-yiTgrFpVAtDGKt3xIN_K0ZU1es9QB2UTVYKmJ3HinrFgPEoVfnRCA9q-rUXCKnzzMK4F67S7dg7vv7xkgUBbvOO11yAr0zoOD71n1Ty8v7pmfB9C5TfTFPvVG9Rt3DVfRJzv';
    rtoken = params.refresh_token;

    if (token) {
      spotifyApi.setAccessToken(token);
      const gotgot = gotParams();
      let gottoken = gotgot.access_token;
      let gotrtoken = gotgot.refresh_token;
      console.log("acesstoken   " + gottoken);
      console.log("refreshtoken   " + gotrtoken);
    }

    this.state = {
      loggedIn: token ? true : false,
    };
  }

  // getHashParams = () => {
  //   var hashParams = {};
  //   var e,
  //     r = /([^&;=]+)=?([^&;]*)/g,
  //     q = window.location.hash.substring(1);
  //   while ((e = r.exec(q))) {
  //     hashParams[e[1]] = decodeURIComponent(e[2]);
  //   }
  //   return hashParams;
  // };


  
  movetoHome() {
    if (this.state.loggedIn) {
      this.props.history.push(`/home`);
    }
  }
  render() {
    return (
      <div>
        <h1>DENS</h1>
        <a href="/login">
        {/* <a href="http://localhost:8888"> */}
          <Button inverted color="pink">
            {" "}
            Login to Spotify
          </Button>
        </a>
        <p>This button will lead you to Spotify who will authenticate you</p>
      </div>
    );
  }
}
