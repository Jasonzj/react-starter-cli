const webpack = require('webpack')
const base = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

// config
const { config } = base

config.entry = [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${base.DEFAULT_HOST}:${base.DEFAULT_PORT}`,
    'webpack/hot/only-dev-server',
    base.APP_PATH
]

config.output =  {
    path: base.BUILD_PATH,
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js'
}

config.module.rules.push(
    {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: base.NODE_MODULES_PATH,
        include: base.SRC_PATH
    },
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: base.NODE_MODULES_PATH,
        include: base.SRC_PATH
    }
)

config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html'
    }),
    new webpack.SourceMapDevToolPlugin({
        filename: '[file].map'
    }),
    new OpenBrowserPlugin({ url: `http://${base.DEFAULT_HOST}:${base.DEFAULT_PORT}` })
)

module.exports = base