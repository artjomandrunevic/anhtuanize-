'use strict'

const path = require('path')
const webpack = require('webpack')
const glob = require('glob')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin')

let pathTo = require('./package.json').sourcePath
let pathFrom = require('./package.json').sourcePath

let entry = {}

const webpackPath = require(`./webpack.path.json`)

webpackPath.forEach(e => {
    entry[e.title] = glob.sync(`./${e.path}`)
})

module.exports = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, `./public/assets/`),
        filename: 'js/[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                loader: 'babel-loader',
                options: {
                    presets: ['es2015'],
                },
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        // { loader: 'css-loader', options: { sourceMap: true } },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function() {
                                    return [
                                        require('precss'),
                                        require('autoprefixer')(),
                                        //require('cssnano'),
                                    ]
                                },
                                minimize: true,
                                sourceMap: 'inline',
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [
                                    path.resolve(
                                        './node_modules/materialize-css/sass/materialize.scss'
                                    ),
                                ],
                                importLoaders: 2,
                                modules: true,
                                minimize: true,
                                sourceMap: true,
                                outputStyle: 'compressed',
                            },
                        },
                    ],
                }),
            },
            {
                test: /\.vue$/,
                loader: "vue"
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                },
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    resolveLoader: {
        moduleExtensions: ['-loader'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            excludeAssets: [/style.*.js/],
        }),
        new HtmlWebpackExcludeAssetsPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true,
            },
        }),
        new ExtractTextPlugin({
            allChunks: true,
            filename: 'css/[name].css',
        }),
        new WebpackShellPlugin({
            onBuildEnd: 'yarn cleanup:scripts',
            onBuildExit: 'yarn cleanup:scripts',
        }),
    ],
}
