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
      songsPerPage: 4,
      itemsPerPage: 4,
      currentPage: 1
    };
  }
  getMyTopTracks = () => {
    spotifyApi.getMyTopTracks({ limit: 50, offset: 0 }).then(response => {
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

  paginate = pageNumber => {
    this.setState({
      currentPage: pageNumber
    });
  };
  //make home display current posts
  render() {
    const { topArtists, topTracks, currentPage, itemsPerPage } = this.state;

    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const currentTracks = topTracks.slice(indexOfFirstPost, indexOfLastPost);
    const currentArtists = topArtists.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <div>
        <div className={styles.home}>
          <h1 style={{ fontSize: "100px" }}>HOME</h1>
        </div>

        {/* <span style={{ display: "inline", width: '70px', height: '80px', border: '10px solid blue'}}>
          <p style={{display:"inline", float: 'right', paddingLeft: '200px' }}>sdjkskjksd</p>
          <p style={{display:"inline-block",float: 'left' }}>djcbjbacjkbb</p>
          {/* <p>hujajskakask</p> */}
        {/* <p>jahsknakka</p> */}
        {/* <p style={{ display: 'inline', float: 'left' }}>   
            Your Top Songs
          </p>
          {/* <Pagination paginate={this.paginate} currentPage={currentPage} /> */}
        {/* <p style={{display: 'inline', float: 'right', paddingRight:'70px' }}>Testing something</p>  */}
        {/* </span> */}

        {/* <div> 
          <p style={{float:'left', paddingLeft: '200px'}}>hello</p> <p style={{float: 'right'}}>there</p>
         </div> */}

        <p
          style={{
            color: "teal",
            fontWeight: "bold",
            textAlign: "left",
            paddingLeft: "60px"
          }}
        >
          Your Top Songs
        </p>
        <Pagination paginate={this.paginate} currentPage={currentPage} />

        <span className={style.album_wrap}>
          {currentTracks.map(track => (
            <div key={track.id} className={style.album}>
              <img src={track.album.images[0].url} />
              <p>{track.name}</p>
            </div>
          ))}
        </span>
        <p
          style={{
            color: "teal",
            fontWeight: "bold",
            textAlign: "left",
            paddingLeft: "60px"
          }}
        >
          Your Top Artists
        </p>
        <Pagination paginate={this.paginate} currentPage={currentPage} />
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
