const path = require('path');

module.exports = {
	entry: 	'./src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		// These loaders transforms the files before bundling it
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		}, {
			test:/\.s?css$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}]
	},

	// A source map maps compressed code back to original pojsition insource filł
	devtool: 'cheap-module-eval-source-map', // This only maps the original lines
	devServer: {
		contentBase: path.join(__dirname, 'public'), // Where to serve server content from
		historyApiFallback: 					true // Movwe back to the homepage on a not found error
	}
};