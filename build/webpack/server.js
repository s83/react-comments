import webpack from 'webpack';
import config  from '../../config';

const paths   = config.get('utils_paths'),
      globals = config.get('globals');

const webpackConfig = {
  name    : 'server',
  target  : 'node',
  entry   : {
    app : [
      paths.src('entry-points/server')
    ]
  },
  output : {
    filename : 'index.js',
    path     : paths.dist('server'),
    libraryTarget : 'commonjs2'
  },
  plugins : [
    new webpack.DefinePlugin(Object.assign(config.get('globals'), {
      __SERVER__ : true
    })),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ],
  resolve : {
    extensions : ['', '.js', '.jsx'],
    alias : config.get('utils_aliases')
  },
  module : {
    preLoaders : [
      {
        test : /\.(js|jsx)$/,
        loaders : ['eslint-loader'],
        include : paths.project(config.get('dir_src'))
      }
    ],
    loaders : [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test    : /\.(js|jsx)$/,
        include :  paths.project(config.get('dir_src')),
        loaders : ['babel?optional[]=runtime&stage=0']
      },
      {
        test    : /\.scss$/,
        loaders : [
          'css/locals?module&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader?includePaths[]=' + paths.src('styles')
        ]
      },
      // loads bootstrap's css.
      { test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,   loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  },
  eslint : {
    configFile  : paths.project('.eslintrc'),
    failOnError : globals.__PROD__
  }
};

// ----------------------------------
// Environment-Specific Defaults
// ----------------------------------
if (globals.__PROD__) {
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      output : {
        'comments'  : false
      },
      compress : {
        'unused'    : true,
        'dead_code' : true
      }
    })
  );
}

export default webpackConfig;
