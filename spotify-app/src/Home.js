import React, { Component } from "react";
import SpotifyWebAPI from "spotify-web-api-js";
//import { Grid, Image, Card, Icon, Header, Container, List } from "semantic-ui-react";
import styles from "./everything.module.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
} from "@material-ui/core";
import purple from "@material-ui/core/colors/purple";
const spotifyApi = new SpotifyWebAPI();

const useStyles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
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
    borderRadius: '50%'
  }
}

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topTracks: [],
      topArtists: []
    };
  }
  getMyTopTracks = () => {
    spotifyApi.getMyTopTracks({ limit: 5 }).then(response => {
      this.setState({
        topTracks: response.items
      });
    });
  };

  getMyTopArtists = () => {
    spotifyApi.getMyTopArtists({ limit: 5 }).then(response => {
      this.setState({
        topArtists: response.items
      });
    });
  };

  componentDidMount() {
    this.getMyTopArtists();
    this.getMyTopTracks();
  }


  render() {
    const { topArtists, topTracks } = this.state;
    return (
      <div>
        <div className={styles.home}>
          <h1 style={{ fontSize: "100px" }}>HOME</h1>
        </div>
        <div style={{ marginTop: "50px" }} className={useStyles.root}>

          <p style={{color: 'teal', fontWeight:'bold', textAlign:'left'}}> Your Top Songs </p>
          
          <GridList className={useStyles.gridList} cols={5}>
            {topTracks.map(track => (
              <GridListTile key={track.id}>
                <img src={track.album.images[0].url}  />
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

          <p style={{color: 'teal', fontWeight:'bold', textAlign:'left'}}> Your Top Artists </p>
          <GridList className={useStyles.gridList} cols={5}>

            {topArtists.map(artist => (
              <GridListTile key={artist.id}>
                <img src={artist.images[0].url} style={{borderRadius: '50%', padding: '16px'}} />
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
