/* eslint-disable */
const path = require("path");
const webpack = require("webpack");

const PATHS = {
  presentation: [
    path.join(__dirname, 'index.js'),
    path.join(__dirname, 'images', 'index.js'),
    path.join(__dirname, 'presentation'),
    path.join(__dirname, 'node_modules', 'react-tweet-embed')
  ]
};

module.exports = {
  devtool: "source-map",
  entry: [
    "webpack-hot-middleware/client",
    "babel-polyfill",
    "./index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  resolveLoader: {
    alias: {
      content: path.join(__dirname, 'loaders', 'content')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false"
    }, {
      test: /\.(js|jsx)$/,
      loader: "babel-loader",
      query: {
        plugins: [
          [
            "react-transform", {
              transforms: [{
                transform: "react-transform-hmr",
                imports: ["react"],
                locals: ["module"]
              }, {
                transform: "react-transform-catch-errors",
                imports: ["react", "redbox-react"]
              }]
            }
          ]
        ]
      },
      include: PATHS.presentation
    }, {
      test: /\.css$/,
      loaders: ["style-loader", "raw-loader"],
      include: __dirname
    }, {
      test: /\.gif$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml"
    }, {
      test: /\.svg$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml"
    }, {
      test: /\.png$/,
      loader: "url-loader?limit=10000mimetype=image/png"
    }, {
      test: /\.jpg$/,
      loader: "url-loader?limit=10000mimetype=image/jpg"
    }]
  }
};
