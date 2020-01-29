import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
//import "./Search.css";
import SpotifyWebAPI from "spotify-web-api-js";
import { SearchList } from "./SearchList";
import {token, rtoken} from "./App"
const spotifyApi = new SpotifyWebAPI();
//spotifyApi.setPromiseImplementation(Q);
let prev = null;

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: false,
      query: ""
    };
    // this.cancel = "";
    // this.handleOnInputChange = this.handleOnInputChange.bind(this);
  }

  if (token) {
    spotifyApi.setAccessToken(token);
  }
  

  handleOnInputChange = event => {
    const newQuery = event.target.value;
    this.fetchResults(newQuery);
    this.setState({ query: event.target.value });
  };

  fetchResults = query => {
    let currentComponent = this;
    this.setState({ loading: true });
    // abort previous request, if any
    if (prev !== null) {
      prev.abort();
    }
    // store the current promise in case we need to abort it
    prev = spotifyApi.searchTracks(query, { limit: 10 });
    prev.then(function(response) {
        // clean the promise so it doesn't call abort
        prev = null;
        console.log(response.tracks.items);
        const results = response.tracks.items;
        currentComponent.setState({ results, loading: false });
        // ...render list of search results...
      },
      function(err) {
        console.error(err);
        //this set state is supposed to be here
      }
    );
  };

  renderReturned = () => {
    let found = <h1>Find me</h1>;
    if(this.state.results) {
      found = <SearchList list={this.state.results} />
    }
    return found;
  }

  render() {
    return (
      <div className="container">
      {/* <div> */}
        <input
          value={this.state.query}
          onChange={e => this.handleOnInputChange(e)}
          placeholder="Search"
        />
        {this.renderReturned()}
      </div>
    );
  }
}

export default Search;
