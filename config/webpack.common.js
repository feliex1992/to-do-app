const path = require('path');
const HtmlWebpckPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          "babel-loader"
        ]
      },{
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, '..', 'build'),
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpckPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/favicon.ico', to: 'favicon.ico' },
        { from: 'public/service-worker.js', to: 'service-worker.js' }
      ]
    }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: ''
    }),
    new WebpackPwaManifest({
      name: "Todo App",
      short_name: "Todo App",
      description: "List your planing don't miss a litle thing.",
      start_url: "/index.html",
      display: "standalone",
      background_color: "#321fdb",
      theme_color: "#321fdb",
      fingerprints: false,
      publicPath: '.',
      icons: [
        {
          src: path.resolve("public/icon-512.png"),
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: path.resolve("public/icon-192.png"),
          sizes: "192x192",
          type: "image/png",
          purpose: "any maskable"
        }
      ]
    })
  ]
}