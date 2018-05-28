const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
	entry: [
		'babel-polyfill',
		'react-hot-loader/patch',
		'./src/index.jsx',
	],
	output: {
		path: path.resolve('public'),
		filename: 'bundle.js',
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' }
				]
			}
		],
	},
	resolve: {
		alias: {
			helper: path.resolve('src/helper'),
			component: path.resolve('src/component'),
			store: path.resolve('src/store'),
		},
		extensions: ['.js', '.jsx'],
	},
	
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html', filename: 'index.html', inject: 'body' }),
		new CopyWebpackPlugin([{ from: 'src/images', to: 'images' }]),
	],
};