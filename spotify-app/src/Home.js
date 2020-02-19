import React, { Component } from "react";
import SpotifyWebAPI from "spotify-web-api-js";
import styles from "./everything.module.css";
import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader
} from "@material-ui/core";
import purple from "@material-ui/core/colors/purple";
import { Pagination } from "./Pagination";
const spotifyApi = new SpotifyWebAPI();

const useStyles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
    //backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    //color: theme.palette.primary.light
    color: purple[200]
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  image: {
    borderRadius: "50%"
  }
};

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
      console.log(response.items)   
      this.setState({
        topTracks: response.items,
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

  paginate = (pageNumber) => {
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
        <div style={{ marginTop: "50px" }} className={useStyles.root}>
          <p style={{ color: "teal", fontWeight: "bold", textAlign: "left" }}>
            {" "}
            Your Top Songs{" "}
          </p>   <Pagination paginate={this.paginate} currentPage={currentPage}/>

          <GridList className={useStyles.gridList} cols={4}>
            {currentTracks.map(track => (
              <GridListTile key={track.id}>
                <img src={track.album.images[0].url} />
                <GridListTileBar
                  title={track.name}
                  classes={{
                    root: useStyles.titleBar,
                    title: useStyles.title
                  }}
                />
              </GridListTile>
            ))}
          </GridList>

          <p style={{ color: "teal", fontWeight: "bold", textAlign: "left" }}>
            {" "}
            Your Top Artists{" "}
          </p>
          <Pagination paginate={this.paginate} currentPage={currentPage}/>
          <GridList className={useStyles.gridList} cols={5}>
            {currentArtists.map(artist => (
              <GridListTile key={artist.id}>
                <img
                  src={artist.images[0].url}
                  style={{ borderRadius: "50%", padding: "16px" }}
                />
                <GridListTileBar
                  title={artist.name}
                  classes={{
                    root: useStyles.titleBar,
                    title: useStyles.title
                  }}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

//export default Home;
