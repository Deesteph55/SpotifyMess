import React, { Component } from "react";
import { SearchEList } from "./SearchEList";
import SpotifyWebAPI from "spotify-web-api-js";
import { Container } from "semantic-ui-react";
const spotifyApi = new SpotifyWebAPI();

export class SearchE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackR: [],
      artistR: [],
      albumR: [],
      playlistR: [],
      query: ""
    };
  }

  handleOnInputChange = event => {
    const newQuery = event.target.value;
    this.getAlbum(newQuery);
    this.getTrack(newQuery);
    this.getArtist(newQuery);
    this.getPlaylist(newQuery);

    this.setState({ query: event.target.value });
  };

  getTrack = query => {
    spotifyApi.searchTracks(query, { limit: 4 }).then(response => {
      this.setState({
        trackR: response.tracks.items
      });
    });
  };

  getArtist = query => {
    spotifyApi.searchArtists(query, { limit: 4 }).then(response => {
      this.setState({
        artistR: response.artists.items
      });
    });
  };

  getAlbum = query => {
    spotifyApi.searchAlbums(query, { limit: 4 }).then(response => {
      this.setState({
        albumR: response.albums.items
      });
    });
  };

  getPlaylist = query => {
    spotifyApi.searchPlaylists(query, { limit: 4 }).then(response => {
      this.setState({
        playlistR: response.playlists.items
      });
    });
  };

  render() {
    const unit = document.getElementById("form")
    return (
      <Container textAlign="center">
        <input
          value={this.state.query}
          onChange={e => this.handleOnInputChange(e)}
          placeholder="Search"
          name="form"
        />
        {this.state.query.length > 1 ? (
          <SearchEList
            track={this.state.trackR}
            artist={this.state.artistR}
            album={this.state.albumR}
            playlist={this.state.playlistR}
          />
        ) : null}
      </Container>
    );
  }
}
