import webpack from 'webpack';
import config  from '../config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const paths   = config.get('utils_paths');
const globals = config.get('globals');

const webpackConfig = {
  name    : 'client',
  target  : 'web',
  devtool : 'source-map',
  entry   : {
    app : [
      paths.src('index')
    ]
  },
  output : {
    filename   : '[name].[hash].js',
    path       : paths.dist(),
    publicPath : ''
  },
  plugins : [
    new webpack.DefinePlugin(config.get('globals')),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new HtmlWebpackPlugin({
      template : paths.src('index.html'),
      hash     : true,
      filename : 'index.html',
      minify   : globals.__PROD__,
      inject   : 'body'
    })
  ],
  resolve : {
    extensions : ['', '.js', '.jsx'],
    alias : config.get('utils_aliases')
  },
  module : {
    loaders : [
      // loads bootstrap's css.
      { test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=10000&mimetype=image/svg+xml' },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test : /\.(js|jsx)$/,
        include :  paths.project(config.get('dir_src')),
        loaders : ['babel?optional[]=runtime']
      },
      {
        test    : /\.scss$/,
        loaders : [
          'style-loader',
          'css-loader',
          'autoprefixer?browsers=last 2 version',
          'sass-loader?includePaths[]=' + paths.src('styles')
        ]
      }
    ]
  },
  eslint : {
    configFile  : paths.project('.eslintrc'),
    failOnError : globals.__PROD__,
    emitWarning : globals.__DEV__
  }
};

// ----------------------------------
// Vendor Bundle Configuration
// ----------------------------------
webpackConfig.entry.vendor = config.get('vendor_dependencies');

const commonChunkPlugin = new webpack.optimize.CommonsChunkPlugin(
  'vendor', '[name].[hash].js'
);

webpackConfig.plugins.push(commonChunkPlugin);

// ----------------------------------
// Environment-Specific Defaults
// ----------------------------------
if (globals.__DEV__) {
  webpackConfig.entry.app.push(
    `webpack-dev-server/client?${config.get('webpack_public_path')}`,
    `webpack/hot/dev-server`
  );

  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );
}

if (globals.__PROD__) {
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress : {
        'unused'    : true,
        'dead_code' : true
      }
    })
  );
}

// ------------------------------------
// Optional Configuration
// ------------------------------------
if (
  !globals.__DEV__ ||
  (globals.__DEV__ && config.get('webpack_lint_in_dev'))
) {
  webpackConfig.module.preLoaders = [
    {
      test : /\.(js|jsx)$/,
      loaders : ['eslint-loader'],
      include : paths.project(config.get('dir_src'))
    }
  ];
}

export default webpackConfig;
