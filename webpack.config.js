'use strict';

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var atImport = require('postcss-import');
var postcssSimpleVars = require('postcss-simple-vars');
var ExtractText = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    require.resolve('./polyfills'),
    './node_modules/watson-ui-components/dist/watson-ui-components.css',
    path.join(__dirname, 'src/index.jsx')
  ],
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    root: [
      __dirname,
      path.resolve(__dirname, '/src'),
      path.resolve(__dirname, '/node_modules')
    ],
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["react", "es2015", "stage-0", "react-hmre"]
      }
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.css$/,
        loader: 'style-loader!css-loader?sourceMap&modules&' +
          'importLoaders=1' +
          '&localIdentName=[name]---[local]---[hash:base64:5]' +
          '!postcss-loader',
    }]
  },
  postcss: function() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ]
      }),
      // This is to include global paths of other modules.
      // It is important that this comes before precss
      atImport({
        addDependencyTo: webpack,
        path: [path.resolve(__dirname + '/node_modules')]
      }),
      postcssSimpleVars({
        variables: () => require('./src/shared_styles/index.js')
      }),
      precss
    ];
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
};
