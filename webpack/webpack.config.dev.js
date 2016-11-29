import webpack from 'webpack'
import path from 'path'

const config = {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    noInfo: false,
    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client?reload=true'
    ],
    target: 'web',
    output: {
        path: `${__dirname}/dist`,
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: ''
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.scss$/, loader: 'style!css!sass'},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
            {test: /(\.css)$/, loaders: ['style', 'css']},
            {test: /\.(jpg|png)$/, loader: 'file'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader'},
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
  },
}

export default function(project) {
    config.contentBase = `./src/${project}`
    config.entry.push(`./src/${project}/index`)
    return config
}