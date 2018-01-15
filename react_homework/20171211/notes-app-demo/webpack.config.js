const webpack = require('webpack');
const path = require('path');

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
            test: /\.css?$/,
            loader: 'style-loader!css-loader',
            exclude: [/node_modules/, /public/]
        },
        {
            test: /\.json?$/,
            loader: 'json-loader'
        }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
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
    ]
}