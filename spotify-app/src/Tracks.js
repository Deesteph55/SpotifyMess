import React, { Component } from "react";
import SpotifyWebAPI from "spotify-web-api-js";
import {
  List,
  Image,
  Container,
  Table,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell
} from "semantic-ui-react";
import styles from "./everything.module.css";
import { Link } from "@material-ui/core";
import { ArtistDetail } from "./ArtistDetail";
import {Dashboard} from './Dashboard';

const spotifyApi = new SpotifyWebAPI();

// const script = document.createElement("script");
// script.src = "https://d23jutsnau9x47.cloudfront.net/back/v1.0.8/viewer.js";
// script.async = true;
// document.body.appendChild(script);

export class Tracks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      total: 0,
      artistName: "",
    };
  }

  getMyTracks = () => {
    spotifyApi.getMySavedTracks({ limit: 50 }).then(response => {
      this.setState({
        tracks: response.items,
        total: response.total
      });
    });
  };

  openArtist = name => {
     this.props.setCurrentArtist(name);
     this.props.switchView("ADetail");
  };

  componentDidMount() {
    this.getMyTracks();
  }

  render() {
    const songs = this.state.tracks.filter(item => item.track);
    const { currentArtist } = this.state;
    // console.log(songs);

    return (
      <div>
        <div className={styles.sticky}>
          <h1 style={{ fontSize: "50px", textAlign: "left" }}>Tracks</h1>
          <p style={{ fontWeight: "bold", textAlign: "left" }}>
            {this.state.total} songs
          </p>
        </div>
        <div>
          <Table color="teal" celled selectable style={{background: 'none'}}>
            <Table.Header>
              <TableRow>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Artist</Table.HeaderCell>
                <Table.HeaderCell>Album</Table.HeaderCell>
              </TableRow>
            </Table.Header>

            <TableBody>
              {songs.map(song => (
                <TableRow key={song.track.id}>
                  <TableCell>
                    <Image
                      src={song.track.album.images[0].url}
                      rounded
                      size="mini"
                    />{" "}
                    {song.track.name}
                  </TableCell>
                  <TableCell>
                    <Link onClick={() => {
                      this.openArtist(song.track.artists[0].name);
                    }}>
                      {song.track.artists[0].name}
                    </Link>
                  </TableCell>
                  <TableCell>{song.track.album.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Tracks;
