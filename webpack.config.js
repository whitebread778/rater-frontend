const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
});
module.exports = {
    mode: "development",
    output: {
        publicPath: '/'
    },
    module: {
        rules: [{
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader"
    }
    },
    {
    test: /\.css$/,
    use: ["style-loader", "css-loader"]
    }
    ]},
    plugins: [htmlPlugin],
    devServer: {
        port: 3000,
        historyApiFallback: true
    }
};