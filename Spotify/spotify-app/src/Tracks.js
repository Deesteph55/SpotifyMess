import React, { Component } from "react";
import SpotifyWebAPI from "spotify-web-api-js";
import { List, Image, Container } from "semantic-ui-react";
import styles from "./everything.module.css";
const spotifyApi = new SpotifyWebAPI();

export class Tracks extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    const header = document.getElementById("tracked");
    this.state = {
      tracks: []
    };
  }

  getMyTracks = () => {
    spotifyApi.getMySavedTracks({ limit: 50 }).then(response => {
      this.setState({
        tracks: response.items
      });
    });
  };

  componentDidMount() {
    this.getMyTracks();
  }

  render() {
    const songs = this.state.tracks.filter(item => item.track);
   
    return (
      <div>
        <div className={styles.sticky}>
          <h1 style={{fontSize: '50px'}}>Tracks</h1>
        </div>
        <div>
        <List selection >
          {songs.map(song => (
            <List.Item key={song.track.id}>
              <Image
                avatar
                src={song.track.album.images[0].url}
              />
              <List.Content>
                <List.Header color="red" as="a">{song.track.name}</List.Header>
                <List.Description>
                  By{" "}
                  <a>
                    <b>{song.track.artists[0].name}</b>
                  </a>
                  {" "}
                </List.Description>
              </List.Content>
            </List.Item>
          ))}
        </List>
        </div>
        
      </div>
    );
  }
}

export default Tracks;

