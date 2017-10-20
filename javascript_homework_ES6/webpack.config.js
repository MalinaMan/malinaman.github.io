const path = require('path');

webpackConfig = {
    context: __dirname,
    entry: ['./src/functions.js'],
    output: {filename: 'bundle.js'},
    module: {
       loaders: [
        { test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
              presets: ['es2015']
          }
        },
        { test: /\.css$/, loader: "style!css" },
        { test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'url?limit=8192' },
        { test: /\.(otf|eot|ttf)$/, loader: "file?prefix=font/" },
        { test: /\.svg$/, loader: "file" },
      ]
  }
}

module.exports = webpackConfig;