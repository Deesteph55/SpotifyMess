import React, { Component } from "react";
import SpotifyWebAPI from 'spotify-web-api-js';
import {token, rtoken} from "./App"
const spotifyApi = new SpotifyWebAPI();

export class Playing extends Component {
  state = {
    nowPlaying: {
      name: "Not Checked",
      image: ""
    }
  };

  // if (token) {
  //   spotifyApi.setAccessToken(token);
  // }
  
  getNowPlaying = () => {
    spotifyApi.getMyCurrentPlaybackState().then(response => {
      this.setState({
        nowPlaying: {
          name: response.item.name,
          image: response.item.album.images[0].url
        }
      });
    });
  };

  render() {
    var player = this.state.nowPlaying;
    return (
      <div>
        <div>Now playing: {player.name}</div>
        <div>
          <img src={player.image} style={{ width: 100 }} alt={"song pic"} />
        </div>
        <button onClick={this.getNowPlaying}>Check Now Playing</button>
      </div>
    );
  }
}
export default Playing;