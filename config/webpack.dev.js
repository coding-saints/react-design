const webpack = require('webpack');
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
    mode: "development",

  output: {
    filename: "[name].bundle.js"
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }]
    },
    {
      test: /\.(png|jpe?g|gif|svg|ttf|eot|woff|woff2)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            // path where the images will be saved
            name: "assets/[name].[ext]"
          }
        },
  
        {
          loader: "image-webpack-loader",
          options: {
            mozjpeg: {
              quality: 65
            },
            pngquant: {
              quality: "10-20",
              speed: 4
            },
            svgo: {
              plugins: [
                {
                  removeViewBox: false
                },
                {
                  removeEmptyAttrs: false
                }
              ]
            },
            gifsicle: {
              optimizationLevel: 7,
              interlaced: false
            },
            optipng: {
              optimizationLevel: 7,
              interlaced: false
            }
          }
        }
      ]
    }, 
  ]
  },
 
  devServer: {
    port: 3333,
    hot: true,
    inline: true,
    open: true,
    compress: true,
    historyApiFallback: true,
    // It might be necessary to set a contentBase.
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});