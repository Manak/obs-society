const path = require('path');
const webpack = require('webpack');
module.exports = {
	module: {
		rules: [
		{
	        test: /\.scss$/,
			use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                    sourceMap: true
                }
            }]
		}
		]
	},
	context: path.resolve(__dirname, './precompile/'),
	entry: {
		index: './js/index.js',
	},
	output: {
		path: path.resolve(__dirname, './dist/'),
		filename: '[name].bundle.js',
	},
};

