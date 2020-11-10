const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
module.exports = {
    context: __dirname + "/spotify-app",
    entry: {
      javascript: "./index.js",
      html: "index.html",
      publicPath: '/',
    }, 
    output: {
      filename: "main.js",
      path: __dirname + "/dist",
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"],
          },
          {
            test: /\.html$/,
            loader: "file?name=[name].[ext]",
          }
        ],
      },
  }