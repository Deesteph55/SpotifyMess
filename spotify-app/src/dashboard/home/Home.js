import React, { Component } from "react";
import SpotifyWebAPI from "spotify-web-api-js";
import { Pagination } from "../../Pagination";
import style from "./Home.module.css";
import { SearchE } from "../search/SearchE";
import { Icon } from "semantic-ui-react";
const spotifyApi = new SpotifyWebAPI();

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topTracks: [],
      topArtists: [],
      itemsPerPage: 4,
      currentPageA: 1,
      currentPageT: 1
    };
  }
  getMyTopTracks = () => {
    spotifyApi.getMyTopTracks({ limit: 50 }).then(response => {
      this.setState({
        topTracks: response.items
      });
    });
  };

  getMyTopArtists = () => {
    spotifyApi.getMyTopArtists({ limit: 50 }).then(response => {
      this.setState({
        topArtists: response.items
      });
    });
  };

  componentDidMount() {
    this.getMyTopArtists();
    this.getMyTopTracks();
  }

  paginateArtist = pageNumber => {
    this.setState({
      currentPageA: pageNumber
    });
  };

  paginateTracks = pageNumber => {
    this.setState({
      currentPageT: pageNumber
    });
  };

  openArtist = name => {
    this.props.setCurrentArtist(name);
    this.props.switchView("ADetail");
  };

  openAlbum = id => {
    this.props.setCurrentAlbum(id);
    this.props.switchView("AlbumDetail");
  };

  render() {
    const {
      topArtists,
      topTracks,
      itemsPerPage,
      currentPageA,
      currentPageT
    } = this.state;

    const indexOfLastTrack = currentPageT * itemsPerPage;
    const indexOfFirstTrack = indexOfLastTrack - itemsPerPage;
    const currentTracks = topTracks.slice(indexOfFirstTrack, indexOfLastTrack);

    const indexOfLastArtist = currentPageA * itemsPerPage;
    const indexOfFirstArtist = indexOfLastArtist - itemsPerPage;
    const currentArtists = topArtists.slice(
      indexOfFirstArtist,
      indexOfLastArtist
    );

    return (
      <div>

        <div className={style.home}>
          <h1 style={{ fontSize: "100px" }}>HOME</h1>
        </div>

        <div className={style.homeHorizontal}>
          <p
            style={{
              color: "teal",
              fontWeight: "bold",
              marginTop: "14px",
              marginRight: "1000px"
            }}
          >
            Your Top Songs
          </p>
          <Pagination
            paginate={this.paginateTracks}
            totalTracks="50"
            currentPage={currentPageT}
          />
        </div>

        <span className={style.album_wrap}>
          {currentTracks.map(track => (
            <div key={track.id} className={style.album}>
              <a
                onClick={() => {
                  this.openAlbum(track.album.id);
                }}
              >
                <img src={track.album.images[0].url} />
                <p>
                  <b>{track.name}</b>
                </p>
              </a>
            </div>
          ))}
        </span>

        <div className={style.homeHorizontal}>
          <p
            style={{
              color: "teal",
              fontWeight: "bold",
              marginTop: "14px",
              marginRight: "1000px"
            }}
          >
            Your Top Artists
          </p>
          <Pagination
            paginate={this.paginateArtist}
            totalTracks="50"
            currentPage={currentPageA}
          />
        </div>

        <div className={style.artists_wrap}>
          {currentArtists.map(artist => (
            <div key={artist.id} className={style.artist}>
              <a
                onClick={() => {
                  this.openArtist(artist.name);
                }}
              >
                <img src={artist.images[0].url} />
                <p>
                  <b>{artist.name}</b>
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

//export default Home;
