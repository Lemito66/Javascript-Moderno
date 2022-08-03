const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode: 'development',
    output: {
        clean: true
    },
    module: {
        rules: [{
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.(css)$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']

            }
        ]
    },
    optimization: {},

    plugins: [
        new HtmlWebpack({
            title: 'Mi Webpack App',
            //filename:'index.html',
            template: './src/index.html',

        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
            ignoreOrder: false
        })
    ],
}