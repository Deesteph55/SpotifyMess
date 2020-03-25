import React, { Component } from "react";
import { SearchEList } from "./SearchEList";
import SpotifyWebAPI from "spotify-web-api-js";
import { Icon } from "semantic-ui-react";
import style from "./Search.module.css"
const spotifyApi = new SpotifyWebAPI();
let prev = null;


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
    this.getAll(newQuery);
    this.setState({ query: event.target.value });
  };

  getAll = query => {
    if(prev !== null) {
      prev.abort();
    }
    prev = spotifyApi.search(query, ['album','artist','playlist','track'], {limit: 50});
    prev.then(response => {
      prev = null;
      this.setState({
        trackR: response.tracks.items,
        artistR: response.artists.items,
        albumR: response.albums.items,
        playlistR: response.playlists.items
      })
    }, function(err){
      console.error(err);
    });
  }


  render() {
    return (
      <div>
          <form className={style.search}>
          <input
            value={this.state.query}
            onChange={e => this.handleOnInputChange(e)}
            placeholder="Search"
            name="form"
            autocomplete="off"
          />
          {/* <Icon name='search' color='teal' className={style.searchIcon}/> */}
          </form>

          {this.state.query.length > 0 ? (
          <SearchEList
            track={this.state.trackR}
            artist={this.state.artistR}
            album={this.state.albumR}
            playlist={this.state.playlistR}
            switchView={this.props.switchView}
            setCurrentAlbum={this.props.setCurrentAlbum}
            setCurrentArtist={this.props.setCurrentArtist}
            setCurrentPlaylist={this.props.setCurrentPlaylist}
          />
        ) : null}
        
      </div>
    );
  }
}
