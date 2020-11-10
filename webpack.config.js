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
    publicPath: '/',
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
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
  ],
};
