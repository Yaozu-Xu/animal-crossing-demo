const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function resolve(relatedPath){
    return path.join(__dirname, relatedPath)
}

module.exports = {
    mode: 'development',
    entry:{
        app: ['react-hot-loader/patch', resolve('../src/index.js')]
    },
    output: {
        filename: '[name].[hash].js',
        path: resolve('../dist')
    },
    devServer: {
        hot: true,
        host: 'localhost',
        stats: 'errors-only',
        port: 3333,
        overlay: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
               test: /\.s[ac]ss$/i,
               use: [
                   'style-loader',
                   'css-loader',
                   'sass-loader'
               ] 
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/i,
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                },
            },
        ]
    },
    resolve: {
        alias: {
          '@assets': resolve('../src/assets'),
          '@components': resolve('../src/components'),
          '@api': resolve('../src/apis'),
          '@store': resolve('../src/store'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve('../public/index.html')
        }),
        new CleanWebpackPlugin()
    ]
}