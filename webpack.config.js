'use strict';

var webpack = require('webpack');
var appRoot = __dirname + '/public';

var webpackConfig = {
    context: appRoot,
    entry: './entry.js',

    output: {
        path: appRoot,
        publicPath: '/',
        filename: 'dist/bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.(css|scss)$/,
                loaders: ['css', 'sass']
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],

    // Options affecting the resolving of modules
    resolve: {
        // Enable resolving modules relative to these paths
        root: [appRoot]
    }
};

module.exports = webpackConfig;
