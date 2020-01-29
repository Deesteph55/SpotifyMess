import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import "./Search.css";
import SpotifyWebAPI from "spotify-web-api-js";
const spotifyApi = new SpotifyWebAPI();
//spotifyApi.setPromiseImplementation(Q);
let prev = null;

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      loading: false,
      query: ""
    };
    this.cancel = "";
    this.handleOnInputChange = this.handleOnInputChange.bind(this);
  }

  handleOnInputChange = (event) => {
    const query = event.target.value;
    if (!query) {
      this.setState({ query, results: {} });
    } else {
      this.setState({ query, loading: true, message: "" }, () => {
        this.fetchResults(query);
      });
    }
  };
  
  fetchResults = query => {
    // abort previous request, if any
    if (prev !== null) {
      prev.abort();
    }
    // store the current promise in case we need to abort it
    prev = spotifyApi.searchTracks(query, { limit: 20 });
    prev.then(
      function(response) {
        // clean the promise so it doesn't call abort
        prev = null;
        console.log(response.tracks.items);
        // this.setState({
        //   results: response.tracks.items,
        //   message: "IT worked i think",
        //   loading: false
        // });
        // ...render list of search results...
      },
      function(err) {
        console.error(err);
        //this set state is supposed to be here
      }
    );
  };

  /*renderSearchResults = () => {
    const { results } = this.state.results;
    if (Object.keys(results).length && results.length) {
      return (
        <div className="results-container">
          {results.map(track => {
            return (
              <a
                key={track.id}
                href={track.preview_url}
                className="result-items"
              >
                <h6 className="image-username">{track.name}</h6>
                <div className="image-wrapper">
                  <img
                    className="image"
                    src={track.album.images[0].url}
                    alt={track.name}
                  />
                </div>
              </a>
            );
          })}
        </div>
      );
    }
  };
*/
  render() {
    return (
      <div className="container">
        <input
          value={this.state.query}
          onChange={e => this.handleOnInputChange(e)}
          placeholder="Search"
        />
      </div>
    );
  }
}

export default Search;
