import React, { Component } from "react";
import { Grid, Image, Container, Button } from "semantic-ui-react";
import SpotifyWebAPI from "spotify-web-api-js";
import { Suggestions } from "./Suggestions";
import { Compare } from "./Compare";
const spotifyApi = new SpotifyWebAPI();
/*You're gonna be popular as some kind of backgroynd*/

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
      nameOne: "",
      nameTwo: ""
    };
  }

  getArtistOne = queryOne => {
    spotifyApi.searchArtists(queryOne, { limit: 5 }).then(response => {
      this.setState({
        resultsOne: response.artists.items
      });
    });
  };

  getArtistTwo = queryTwo => {
    spotifyApi.searchArtists(queryTwo, { limit: 5 }).then(response => {
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

  render() {
    return (
      <div>
        <div>
          <h1>Who amongst your favorite artists is the most popular</h1>
        </div>
        <Grid columns={2} padded>
          <Grid.Column>
            <form>
              <input
                value={this.state.queryOne}
                onChange={this.handleInputOneChange}
                placeholder="Artist 1"
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
        {this.state.nameOne != "" ? (
          <p>Artist 1: {this.state.nameOne} </p>
        ) : null}

        {this.state.nameTwo != "" ? (
          <p>Artist 2: {this.state.nameTwo} </p>
        ) : null}

        {this.state.popularityTwo != 0 ? (
          <Compare
            pop1={this.state.popularityOne}
            pop2={this.state.popularityTwo}
            name1={this.state.nameOne}
            name2={this.state.nameTwo}
          />
        ) : null}
      </div>
    );
  }
}
