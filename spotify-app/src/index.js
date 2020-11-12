import React from "react";
//import ReactDOM from "react-dom";
import { hydrate } from "react-dom";
import { Route, Link, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import { token, rtoken } from "./App";

import * as serviceWorker from "./serviceWorker";

//localhost:3000/access token/refreshtoken/

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

hydrate(<App/>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
