const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  context: __dirname + "/spotify-app",
  entry: {
    javascript: "./src/index.js",
    //   html: "index.html",
    //   publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  output: {
    filename: "main.js",
    path: __dirname + "/dist",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
  ],
};
