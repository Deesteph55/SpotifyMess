import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Search from "./Search";
import Tracks from "./Tracks";
import Playing from "./Playing";
import SpotifyWebAPI from "spotify-web-api-js";
import { token, rtoken } from "./App";

import * as serviceWorker from "./serviceWorker";

// const spotifyApi = new SpotifyWebAPI();

// if (token) {
//   spotifyApi.setAccessToken(token);
// }

// const routing = (
//   <Router>
//     <div>
//       <Route path="/" component={App} />
//       <Route path="/Search/:token/:rtoken" component={Search} />
//       <Route path="/Tracks/:token/:rtoken" component={Tracks} />
//       <Route path="/Playing/:token/:rtoken" component={Playing} />
//     </div>
//   </Router>
// );

ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(routing, document.getElementById("root"));
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
