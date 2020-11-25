import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { createBrowserHistory } from "history";
import { Home } from "./dashboard/home/Home";
import Login from "./Login";
import SpotifyWebAPI from "spotify-web-api-js";
import Navbar from "./Navbar";
import Tracks from "./dashboard/tracks/Tracks";
import { Error } from "./Error";
import { SearchE } from "./dashboard/search/SearchE";
import { Popular } from "./dashboard/popular/Popular";
import { Playlist } from "./Playlist";
import nav from "./everything.module.css";
import dash from "./everything.module.css";
import footer from "./everything.module.css";
import cx from "classnames";
import { ArtistDetail } from "./dashboard/artistdetail/ArtistDetail";
import { Album } from "./dashboard/albumdetail/Album";
import { PlaylistDetail } from "./dashboard/playlistdetail/PlaylistDetail";
import { Credentials, gotParams } from './Credentials';
import App from './App';

// const spotifyApi = new SpotifyWebAPI();
const customHistory = createBrowserHistory();

// var param = gotParams();
// var token = param.access_token;


export default class TheApp extends Component {
  render() {
    //how are we gonna handle the login if its inside the dashboard.
    //the answer might be nesting. checj react router official page
    //we need to decouple login logic from App.js
    //gethashparams is not being recognised
    //heroku might not agree with the routing.
    //need to figure out to put tokens in route path
    //can actually have a dashboard component and put routes in there
   // console.log(token);
    return (
      <div className="Routingpoint">
        {/* <Router basename="/callback"> */}
        <Router history={customHistory}>
          <>
            <div className={dash.container}>
              <div id="app nav div" className={nav.nav}>
                <Navbar />
              </div>
              <div id="dashboard" className={cx(dash.background, dash.dash)}>
                <Switch>
                  <Route exact path="/" component={Login} />
                  {/* <IndexRoute component={Login} /> */}
                  <Route path="/home" component={Home} />
                  <Route path="/tracks" component={Tracks} />
                  <Route path="/search" component={SearchE} />
                  <Route path="/popular" component={Popular} />
                  <Route path="/playlist" component={Playlist} />
                  <Route path="/ar tist/:id" component={ArtistDetail} />
                  <Route path="/album/:id" component={Album} />
                  <Route
                    exact
                    path="/playlist/:id"
                    component={PlaylistDetail}
                  />
                  {/* <Route path="" component={Error} /> */}
                </Switch>
              </div>
              <div className={footer.footer}>
                <h1>Made by *******</h1>
              </div>
            </div>
          </>
        </Router>
      </div>
    );
  }
}

//<route login
