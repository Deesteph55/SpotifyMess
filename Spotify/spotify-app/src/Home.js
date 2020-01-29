import React, { Component } from "react";
import SpotifyWebAPI from "spotify-web-api-js";
import { Grid, Image, Card, Icon, Header, Container, List } from "semantic-ui-react";
import styles from "./everything.module.css";
const spotifyApi = new SpotifyWebAPI();

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
          <h1 style={{fontSize: '100px'}}>HOME</h1>
          </div>
        <Container style={{ marginTop: "50px" }}>
          <Grid columns={5}>
            <Header>Your top songs</Header>
            <Grid.Row>
              {topTracks.map(track => (
                <Grid.Column>
                  <Card key={track.id}>
                    <Image src={track.album.images[0].url} wrapped ui={false} />
                    <Card.Content inverted>
                    <Card.Header>{track.name}</Card.Header>
                    <Card.Meta>{track.artists[0].name} </Card.Meta>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              ))}
            </Grid.Row>

            <Header>Your top artists</Header>
            <Grid.Row>
              {topArtists.map(artist => (
                <Grid.Column>

             {/* <Card key={artist.id}> */}
                    <Image src={artist.images[0].url} circular />
                    <Header>{artist.name}</Header>
                     {/* <img
                      src={artist.images[0].url}
                      class="ui medium circular image"
                      width="50px"
                    />  */}
                    {/* <Card.Content>
                      <Card.Header>{artist.name}</Card.Header>
                    </Card.Content>
                  </Card>  */}
                    
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

//export default Home;
