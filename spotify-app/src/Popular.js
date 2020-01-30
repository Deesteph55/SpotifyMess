import React, { Component } from "react";
import { Grid, Image, Container, Button } from "semantic-ui-react";
import SpotifyWebAPI from "spotify-web-api-js";
import { Suggestions } from "./Suggestions";
import { Compare } from "./Compare";
const spotifyApi = new SpotifyWebAPI();

export class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsOne: [],
      resultsTwo: [],
      queryOne: "",
      queryTwo: "",
      popularityOne: 0,
      popularityTwo: 0,
      nameOne: "name1",
      nameTwo: "name2"
    };
  }

  getArtistOne = queryOne => {
    spotifyApi.searchArtists(queryOne).then(response => {
      this.setState({
        resultsOne: response.artists.items
      });
    });
  };

  getArtistTwo = queryTwo => {
    spotifyApi.searchArtists(queryTwo).then(response => {
      this.setState({
        resultsTwo: response.artists.items
      });
    });
  };

  handleInputOneChange = event => {
    const newQuery = event.target.value;
    this.setState(
      {
        queryOne: event.target.value
      },
      () => {
        if (this.state.queryOne && this.state.queryOne.length > 1) {
          if (this.state.queryOne.length % 2 === 0) {
            this.getArtistOne(newQuery);
          }
        }
      }
    );
  };

  handleInputTwoChange = event => {
    const newQuery = event.target.value;
    this.setState(
      {
        queryTwo: event.target.value
      },
      () => {
        if (this.state.queryTwo && this.state.queryTwo.length > 1) {
          if (this.state.queryTwo.length % 2 === 0) {
            this.getArtistTwo(newQuery);
          }
        }
      }
    );
  };

  getPopOne = (pop, name) => {
    this.setState({
      popularityOne: pop,
      nameOne: name
    });
  };

  getPopTwo = (pop, name) => {
    this.setState({
      popularityTwo: pop,
      nameTwo: name
    });
  };

  // compareThem = () => {
  //   {
  //     <h1>HAHHAHA</h1>;
  //   }
  //   // return (

  //   // )
  // };

  render() {
    return (
      <div>
        <div>
          <h1>Which one of your favorite artists is the most popular</h1>
        </div>
        <Grid columns={2} padded>
          <Grid.Column>
            <form>
              <input
                value={this.state.queryOne}
                onChange={this.handleInputOneChange}
                placeholder="Artist 1"
                // ref={input => (this.search = input)}
              />
              {this.state.queryOne.length < 1 ? null : (
                <Suggestions
                  results={this.state.resultsOne}
                  getPop={this.getPopOne}
                />
              )}
            </form>
          </Grid.Column>
          <Grid.Column>
            <form>
              <input
                value={this.state.queryTwo}
                onChange={this.handleInputTwoChange}
                placeholder="Artist 2"
              />
              {this.state.queryTwo.length < 1 ? null : (
                <Suggestions
                  results={this.state.resultsTwo}
                  getPop={this.getPopTwo}
                />
              )}
            </form>
          </Grid.Column>
        </Grid>
        <Container>
          <h1>The results</h1>
          Artist 1: {this.state.nameOne}
          <br></br>
          <br></br>
          Artist 2: {this.state.nameTwo}
          {this.state.popularityTwo != 0 ? (
            <Compare
              pop1={this.state.popularityOne}
              pop2={this.state.popularityTwo}
              name1={this.state.nameOne}
              name2={this.state.nameTwo}
            />
          ) : null}
          {this.state.popularityTwo != 0 ? (<Suggestions/> == null) : (<Suggestions/> == null)}
        </Container>
      </div>
    );
  }
}
