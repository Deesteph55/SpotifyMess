const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const htmlPlugin = new HtmlWebPackPlugin({
  // template: "./src/index.html",
  //template: path.resolve( __dirname, "/spotify-app/public/index.html"),
  template: path.resolve(__dirname, "spotify-app", "public", "index.html"),
  filename: "./index.html",
});
module.exports = {
  entry: "/spotify-app/src/index.js",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/"
  }, // NEW Ends
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        //test: /\.(js|jsx)$/,
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            {
              plugins: ["@babel/plugin-proposal-class-properties"],
            },
          ],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: "file-loader",
      },
    ],
  },
};
