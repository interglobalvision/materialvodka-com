const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const glob = require('glob');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'main.js'
  },
  externals: {
    "jquery": "jQuery" // We declare jQuery as an externa dependency because we add it thru worpdress enqueue
  },
  resolve: {
    extensions: ['.js', '.css', '.styl', '.svg'],
    alias: {
      'TweenMax': path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
      'TimelineMax': path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
      'ScrollMagic': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
      'animationGsap$': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
    }
  },

  module: {
    loaders: [{
      test: /\.js$/, // include .js files
      enforce: 'pre', // preload the jshint loader
      exclude: /node_modules/, // exclude any and all files in the node_modules folder
      use: [
        {
          loader: 'jshint-loader'
        }
      ]
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
        retainLines: true,
      },
    }, {
      test: /\.styl/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            minimize: true,
            url: false,
          },
        }, {
          loader: 'stylus-loader',
          options: {
            preferPathResolver: 'webpack', // Faster
            'resolve url': true,
          },
        }],
      })
    }, {
      test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
      loader: 'file-loader',
    }],
  },

  plugins: [
    new ExtractTextPlugin('../css/site.css'),
    // Copy the images folder and optimize all the images
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/img/'),
        to: path.resolve(__dirname, 'dist/img/'),
      },
    ]),
  ],

  stats: {
    colors: true
  },

  devtool: 'source-map',
  watch: true,
};
