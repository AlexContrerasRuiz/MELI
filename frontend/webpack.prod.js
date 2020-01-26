const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const basePath = __dirname;
const distPath = 'dist';
 
const indextInput = './src/index.html';
const indexOutput = 'index.html';
const webpackInitConfig = {
    mode: 'development',
    resolve: {
        extensions: ['.js']
    },
    entry: {
        app: ['@babel/polyfill', './src/index.js'],
    },
    output: {
        path: path.join(basePath, distPath),
        filename: '[chunkhash][name].js'
    },
    module: {
      rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-react']
                }
              }
            },
            { // CSS / SASS & Css.module Support
              test: /\.scss$/,
              use: [
                'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    modules: true
                  }
                },
                'sass-loader'
              ]
            },
            { // IMG Support
              test: /\.(png|jpg|gif)$/,
              use: [
                {
                  loader: 'file-loader'
                }
              ]
            },
            { // Font Support
              test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                  }
                }
              ]
            },
            { // SVG Support
              test: /\.svg$/,
              loader: 'svg-inline-loader'
            }
          ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: indexOutput, 
            template: indextInput,
        })
    ]
};
module.exports = webpackInitConfig;