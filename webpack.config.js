const prod = process.env.NODE_ENV === "production";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
	mode: prod ? "production" : "development",
	entry: "./src/index.tsx",
	output: {
		// eslint-disable-next-line n/no-path-concat
		path: `${ __dirname }/dist/`,
		publicPath: "/"
	},
	devServer: {
		hot: true,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				resolve: {
					extensions: [".ts", ".tsx", ".js", ".json"]
				},
				use: "ts-loader"
			},
			{
				test: /\.(png|jpg|gif)$/i,
				dependency: { not: ["url"] },
				use: [
					{
						loader: "url-loader"
					}
				]
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			}
		]
	},
	devtool: prod ? undefined : "source-map",
	plugins: [
		new HtmlWebpackPlugin({
			template: "index.html"
		}),
		new MiniCssExtractPlugin()
	]
};
