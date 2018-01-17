const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/public/build/',
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
        {
            test: /\.(js|jsx)?$/,
            loader: 'babel-loader',
            exclude: [/node_modules/, /public/],
	        query: {
  	             presets: ["react", "es2015"],
                 compact: false
            }
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader' ]
            }),
            exclude: [/node_modules/, /public/]
        },
        {
            test: /\.json?$/,
            loader: 'json-loader'
        }
      ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
	new ExtractTextPlugin('bundle.css')
    ]
}