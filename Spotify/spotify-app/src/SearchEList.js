import React from "react";
import { Button, Card, Image, Icon, Grid } from "semantic-ui-react";

export const SearchEList = ({ track, artist, album, playlist }) => {
  return (
    <div>
      <Grid columns={3} divided centered>
        <Grid.Row>
          <Grid.Column>
            Songs
            <Card.Group centered itemsPerRow={2} >
              {track.map(unit => (
                <Card key={unit.id} color="purple" >
                  <Image src={unit.album.images[0].url} size="mini" />
                  <Card.Content>
                    <Card.Header>{unit.name}</Card.Header>
                  </Card.Content>
                  <Card.Meta>
                    {unit.artists[0].name}
                  </Card.Meta>
                </Card>
              ))}
            </Card.Group>
          </Grid.Column>
          <Grid.Column>
            Album
            <Card.Group centered itemsPerRow={2}>
              {album.map(unit => (
                <Card key={unit.id} color="pink" size="mini">
                  <Image src={unit.images[0].url} size="mini" />
                  <Card.Content>
                    <Card.Header>{unit.name}</Card.Header>
                  </Card.Content>
                  <Card.Meta>
                    {unit.artists[0].name}
                  </Card.Meta>
                </Card>
              ))}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            Artist
            <Card.Group centered itemsPerRow={2}>
              {artist.map(unit => (
                <Card key={unit.id} color="teal" size="small">
                  <Image src={unit.images[0].url} size="mini" />
                  <Card.Content>
                    <Card.Header>{unit.name}</Card.Header>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </Grid.Column>
          <Grid.Column>
            Playlist
            <Card.Group centered itemsPerRow={2}>
              {playlist.map(unit => (
                <Card key={unit.id} color="olive" size="mini">
                  <Image src={unit.images[0].url} size="mini" />
                  <Card.Content>
                    <Card.Header>{unit.name}</Card.Header>
                  </Card.Content>
                  <Card.Meta>
                    Owner:
                    {unit.owner.display_name}
                  </Card.Meta>
                </Card>
              ))}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );

};
