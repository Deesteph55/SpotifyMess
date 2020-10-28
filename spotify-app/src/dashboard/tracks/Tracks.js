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
  TableCell,
} from "semantic-ui-react";
import styles from "./Track.module.css";
import { Link } from "@material-ui/core";

const spotifyApi = new SpotifyWebAPI();

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
    spotifyApi.getMySavedTracks({ limit: 50 }).then((response) => {
      this.setState({
        tracks: response.items,
        total: response.total,
      });
    });
  };

  openArtist = (id) => {
    this.props.history.push(`/artist/${id}`);
  };

  openAlbum = (id) => {
    this.props.history.push(`/album/${id}`);
  };

  componentDidMount() {
    this.getMyTracks();
  }

  render() {
    const songs = this.state.tracks.filter((item) => item.track);
    const { currentArtist } = this.state;
    // console.log(songs);

    return (
      <div>
        <div className={styles.sticky}>
          <h1 style={{ fontSize: "50px", textAlign: "left" }}>Tracks</h1>
          <p
            style={{
              fontWeight: "bold",
              textAlign: "left",
              paddingBottom: "20px",
            }}
          >
            {this.state.total} songs
          </p>
        </div>

        <div>
          <Table
            singleLine
            fixed
            basic="very"
            selectable
            style={{ background: "none" }}
          >
            <Table.Header>
              <TableRow>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Artist</Table.HeaderCell>
                <Table.HeaderCell>Album</Table.HeaderCell>
              </TableRow>
            </Table.Header>

            <TableBody>
              {songs.map((song) => (
                <TableRow key={song.track.id}>
                  <TableCell className={styles.row}>
                    <div className={styles.column}>
                      <Image
                        src={song.track.album.images[0].url}
                        rounded
                        size="mini"
                      />
                    </div>
                    <div className={styles.column}>
                      <p>{song.track.name} </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    {song.track.artists.map((unit, index) => [
                      index > 0 && ", ",
                      <Link
                        onClick={() => {
                          this.openArtist(unit.id);
                        }}
                      >
                        {" "}
                        {unit.name}
                      </Link>,
                      // unit.name
                    ])}
                  </TableCell>
                  <TableCell>
                    <Link
                      onClick={() => {
                        this.openAlbum(song.track.album.id);
                      }}
                    >
                      {song.track.album.name}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          chahahahah cahahhaha caahahah
        </div>
      </div>
    );
  }
}

export default Tracks;
