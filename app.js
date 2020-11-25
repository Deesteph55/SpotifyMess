
 var PORT = process.env.PORT || 8888;
//var PORT = process.env.PORT || 3000;
var express = require("express"); // Express web server framework
var request = require("request"); // "Request" library
var cors = require("cors");
var querystring = require("querystring");
var cookieParser = require("cookie-parser");
var path = require("path");
var dotenv = require("dotenv");
var Spotify = require('spotify-web-api-js');
const spotifywrap = new Spotify();
dotenv.config({ path: path.resolve(__dirname + "/.env") });
//console.log(process.env);
//possible redirect https://accounts.spotify.com:8000/authorize
var client_id = process.env.API_ID; // Your client id
var client_secret = process.env.API_KEY; // Your secret
var redirect_uri = "http://localhost:8888/callback"; // Your redirect uri
//var redirect_uri = "https://spotifyreactash.herokuapp.com/callback";
//var redirect_uri = 'http://localhost:3000/callback';

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function (length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = "spotify_auth_state";

var app = express();

app
  .use(express.static(path.join(__dirname, "spotify-app/build")))
  .use(cors())
  .use(cookieParser());
// app
//   .use(express.static(path.join(__dirname, "dist")))
//   .use(cors())
//   .use(cookieParser());

app.get("/login", function (req, res) {
  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope =
    "user-read-private user-read-email user-read-playback-state user-library-read user-library-modify user-modify-playback-state user-read-currently-playing user-top-read playlist-read-private playlist-read-collaborative";
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
});

app.get("/callback", function (req, res) {
  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect(
      "/#" +
        querystring.stringify({
          error: "state_mismatch",
        })
    );
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code",
      },
      headers: {
        Authorization:
          "Basic " +
          new Buffer(client_id + ":" + client_secret).toString("base64"),
      },
      json: true,
    };

    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var access_token = body.access_token,
          refresh_token = body.refresh_token;
          console.log(access_token);

        // var options = {
        //   url: 'https://api.spotify.com/v1/me',
        //   headers: { 'Authorization': 'Bearer ' + access_token },
        //   json: true
        // };

        // // use the access token to access the Spotify Web API
        // request.get(options, function(error, response, body) {
        //   console.log(body);
        // });//this was a request coming from the backend
        spotifywrap.setAccessToken(access_token);

        // we can also pass the token to the browser to make requests from there
        res.redirect(
          "http://localhost:3000/#" +
            // res.redirect('https://spotifyreactash.herokuapp.com/#'+
            querystring.stringify({
              access_token: access_token,
              refresh_token: refresh_token,
            })
        ); //this allows requests to come from front end

        // res.redirect('/#'+
        // querystring.stringify({
        //   access_token: access_token,
        //   refresh_token: refresh_token
        // }));
      } else {
        res.redirect(
          "/#" +
            querystring.stringify({
              error: "invalid_token",
            })
        );
      }
    });
  }
});

app.get("/refresh_token", function (req, res) {
  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        access_token: access_token,
      });
    }
  });
});

// app.get('*', function(req, res) {
//   res.sendFile('index.html', {root: path.join(__dirname, 'spotify-app/build')});
// });

//  app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "path/to/index.html"));
// });

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, 'spotify-app/build'));
// });

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "spotify-app/build", "index.html"));
// });

console.log("Listening on 8888");
app.listen(PORT);
