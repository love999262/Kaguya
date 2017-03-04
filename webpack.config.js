var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: [
        './src/js/kaguya.js'
    ],
    output: {
        path: './',
        filename: 'kaguya.min.js'
    },
    module: {
        loaders: [{
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader"
        }, {
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=40000'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
