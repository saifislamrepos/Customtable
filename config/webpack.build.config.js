const merge = require('webpack-merge');

const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('../config/webpack.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const outputpath = "./"
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");
const webpackConfig = merge(baseWebpackConfig, {
  output: {
      publicPath: outputpath,
      filename: 'assets/js/[name].js',
      chunkFilename: 'assets/js/[name].[contenthash:8].js',
      path: path.resolve(__dirname, '../dist')
  },
  mode: 'production',
  devtool: 'source-map',
  optimization: {
      minimizer: [new UglifyJsPlugin({  test: /\.js(\?.*)?$/i,sourceMap: true }), new OptimizeCSSAssetsPlugin({})],
      splitChunks: {
          chunks: 'all',
          minSize: 50000,
          cacheGroups: {
              default: {
                  minChunks: 2,
                  priority: -20,
                  reuseExistingChunk: true
              },
              styles: {
                  name: 'styles',
                  test: /\.s?css$/,
                  chunks: 'all',
                  minChunks: 100,
                  reuseExistingChunk: true,
                  enforce: true,
              },
          }
      }
  },
  plugins: [
      new CleanWebpackPlugin({
          root: path.resolve(__dirname, '../'),
          verbose: true,
          dry: false
      }),
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index_tem.html',
          inject: true,
          hash: true,
          minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true
          },
          chunksSortMode: 'dependency'
      }),
      new MiniCssExtractPlugin({
          filename: "assets/css/[name].css"
      }),
      //new BundleAnalyzerPlugin(),
      new CompressionPlugin({
          test: /\.js(\?.*)?$/i,
          minRatio: 0.7
      }),
      new BrotliPlugin({
          test: /\.js(\?.*)?$/i,
          minRatio: 0.7
      })
  ],
  module: {
      rules: [{
              test: /\.(sa|sc|c)ss$/,
              use: [{
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                          publicPath: '../../'
                      },

                  },
                  'css-loader',
                  'sass-loader',

              ]
          },
          {
              test: /\.(png|jpe?g|gif)$/i,
              use: [{
                      loader: 'file-loader',
                      options: {
                          name: '[name]-[contenthash].[ext]',
                          outputPath: (url, resourcePath, context) => {
                              let imgpath = path.relative(context, resourcePath).replace("resources", "assets");
                              let seperator = imgpath.indexOf('/') > -1 ?"/":"\\";
                              imgpath = imgpath.split(seperator);
                              imgpath[imgpath.length - 1] = url;
                              return imgpath.join('/');
                          }
                      }
                  }/* ,
                  {
                      loader: 'image-webpack-loader',
                      options: {
                          mozjpeg: {
                              progressive: true,
                              quality: 50
                          },
                          // optipng.enabled: false will disable optipng
                          optipng: {
                              bitDepthReduction: true
                          },
                          pngquant: {
                              quality: '70-100',
                              speed: 1,
                              strip: true
                          },
                          gifsicle: {
                              interlaced: false,
                          }
                      }
                  } */
              ]
          },
          {
              test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
              loader: 'file-loader',
              options: {
                  name: '[name]-[contenthash].[ext]',
                  outputPath: (url, resourcePath, context) => {
                      let imgpath = path.relative(context, resourcePath).replace("resources", "assets");
                      let seperator = imgpath.indexOf('/') > -1 ?"/":"\\";
                      imgpath = imgpath.split(seperator);
                      imgpath[imgpath.length - 1] = url;
                      return imgpath.join('/');
                  }
              }
          }
      ]
  }
});
webpackConfig.entry.push("react-hot-loader/patch")
webpackConfig.entry.push("webpack-hot-middleware/client?path=/__webpack_hmr&timeout=200&reload=true");
module.exports = webpackConfig;