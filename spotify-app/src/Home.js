import React, { Component } from "react";
import SpotifyWebAPI from "spotify-web-api-js";
import styles from "./everything.module.css";
import { Pagination } from "./Pagination";
import style from "./Home.module.css";
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
      console.log(response.items);
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
    })
  }

  paginateTracks = pageNumber => {
    this.setState({
      currentPageT: pageNumber
    })
  }

  render() {
    const { topArtists, topTracks, itemsPerPage, currentPageA, currentPageT} = this.state;

    const indexOfLastTrack = currentPageT * itemsPerPage;
    const indexOfFirstTrack = indexOfLastTrack - itemsPerPage;
    const currentTracks = topTracks.slice(indexOfFirstTrack, indexOfLastTrack);

    const indexOfLastArtist = currentPageA * itemsPerPage;
    const indexOfFirstArtist = indexOfLastArtist - itemsPerPage;
    const currentArtists = topArtists.slice(indexOfFirstArtist, indexOfLastArtist);

    return (
      <div>
        <div className={styles.home}>
          <h1 style={{ fontSize: "100px" }}>HOME</h1>
        </div>

        <div className={styles.homeHorizontal}>
          <p
          style={{
            color: "teal",
            fontWeight: "bold",
            marginTop: '14px',
            marginRight: '1000px',
          }}
        >
          Your Top Songs
        </p>
        <Pagination paginate={this.paginateTracks} totalTracks='50' currentPage={currentPageT} />
        </div>
        

        <span className={style.album_wrap}>
          {currentTracks.map(track => (
            <div key={track.id} className={style.album}>
              <img src={track.album.images[0].url} />
              <p>{track.name}</p>
            </div>
          ))}
        </span>

        <div className={styles.homeHorizontal}>
          <p
          style={{
            color: "teal",
            fontWeight: "bold",
            marginTop: '14px',
            marginRight: '1000px',
          }}
        >
          Your Top Artists
        </p>
        <Pagination paginate={this.paginateArtist} totalTracks='50' currentPage={currentPageA} />
        </div>
        
        <div className={style.artists_wrap}>
          {currentArtists.map(artist => (
            <div key={artist.id} className={style.artist}>
              <img src={artist.images[0].url} />
              <p>{artist.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

//export default Home;
