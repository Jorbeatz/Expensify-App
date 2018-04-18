const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
	const isProduction = env === 'production';
	const CSSExtract = new ExtractTextPlugin('styles.css');

	console.log('env', env);
	return {
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
				use: CSSExtract.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						},
					]
				})
			}]
		},
		plugins: [
			CSSExtract
		],
		// A source map maps compressed code back to original pojsition insource filł
		devtool: isProduction ? 'source-map' : 'inline-source-map', // This only maps the original lines
		devServer: {
			contentBase: path.join(__dirname, 'public'), // Where to serve server content from
			historyApiFallback: true // Move back to the homepage on a not found error
		}	
	}
};