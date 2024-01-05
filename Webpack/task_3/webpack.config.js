const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        header: "./modules/header/header.js",
        body: "./modules/body/body.js",
        footer: "./modules/footer/footer.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public"),
    },
    devtool: "inline-source-map",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                // type: 'asset/resource', the logo shows up with this line
                use: [
                    // the logo does not show up with this line
                    {
                        loader: "file-loader",
                    },
                    {
                        loader: "image-webpack-loader",
                    },
                ],
            },
        ],
    },
    devServer: {
        contentBase: './public',
        compress: true,
        port: 8564,
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Output",
        }),
        new CleanWebpackPlugin(),
    ],
};
