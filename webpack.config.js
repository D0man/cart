const path = require( 'path' );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const isDev = false

module.exports = {
    entry:  path.resolve( __dirname, 'src/index.ts' ),
    devtool: 'source-map',
    mode: isDev ? 'development' : 'production',

    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: '[name].[contenthash]'.js,
    },

    // file resolutions
    resolve: {
        extensions: [ '.ts', '.js' ],
    },

    module: {
        rules: [
            {
                test: /\.ts?/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],

              },
              {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]'
                  }
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
        ]
    },

    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles/style.css',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: 'index.html'
        }),
    ],
};