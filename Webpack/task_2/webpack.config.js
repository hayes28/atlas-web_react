const path = require('path')

module.exports = {
    entry: './js/dashboard_main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {

                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                // type: 'asset/resource', the logo shows up with this line
                use: [ // the logo does not show up with this line
                    {
                        loader: 'file-loader',
                    },
                    {
                        loader: 'image-webpack-loader',
                    }
                ]
            },
        ],
    },
};
