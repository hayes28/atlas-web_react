const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '../dist'),
        },
        compress: true,
        hot: true,
        host: '0.0.0.0',
        port: 8080,
        open: true,
    },
    devtool: "inline-source-map",
    };
