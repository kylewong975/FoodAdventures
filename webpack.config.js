var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
	// base directory for resolving entry
	context: __dirname,
	// entry point
	entry: './assets/js/index',
	// compiled bundle, location and naming convention
	output: {
		path: path.resolve('./assets/bundles/'),
		filename: '[name]-[hash].js',
	},
	// plugins for the website
	plugins: [
		// tell webpack where to store data about the bundle
		new BundleTracker({
			filename: './webpack-stats.json'
		}),
		// make jQuery available in every module
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		})
	],
	module: {
		// instruct webpack to use the following loaders on all js/jsx files
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/, // exclude node_modules when asking babel to transpile
				loader: 'babel-loader', // use babel loader
				query: {
					presets: ['react'] // using React
				}
			}
		]
	},
	resolve: {
		modules: ['node_modules'], // look for modules at node_modules
		extensions: ['.js', '.jsx'] // these are the extensions to be used to resolve modules
	},
};
