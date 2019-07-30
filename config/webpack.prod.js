const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    mode: 'production',
    entry: {
        main: [path.resolve(process.cwd(), 'src/index.js')],
    },
    output: {
        path: path.resolve(process.cwd(), 'build'),
        pathinfo: true,
        publicPath: '/',
        filename: './assets/js/bundle.js',
        chunkFilename: './assets/js/[name].chunk.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        modules: [path.resolve(process.cwd(), 'src'), 'node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: path.resolve(process.cwd(), 'src/index.html'),
        }),
    ],
};

module.exports = config;