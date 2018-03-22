const commonConfig = require("./webpack.common");
const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require("webpack-merge");

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = merge(commonConfig, {
  output: {
    filename: "[name].bundle.min.js"
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
        fallback: "style-loader"
      })
    }]
  },
  plugins: [
    new UglifyJsWebpackPlugin(),
    extractSass,
    new CopyWebpackPlugin([
      { from: "src/public/_redirects", to: "dist" }// , // Copy everything from src/public/static to dist folder
      //{ from: require.resolve("workbox-sw"), to: "workbox-sw.prod.js" }
    ])
  ]
});