const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /srctest/,
        // include: [path.resolve(this.cwd, 'src')],
        // exclude: [path.resolve(this.cwd, 'src/pages/Bpmn/bpmnEditor/CustomPropertiesPanel')],
        use: {
          // loader: 'babel-loader?cacheDirectory=true',
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  // useBuiltIns: 'usage' 会导致 "export 'default' (imported as 'md5') was not found in 'md5'
                  // 以及__webpack_require__(...) is not a function  index.html:23876 Module../node_modules/webpack/buildin/harmony-module.js
                  // useBuiltIns: 'usage',
                  corejs: 3,
                },
              ],
              // '@babel/preset-react',
            ],
          },
        },
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     { loader: 'style-loader' },
      //     {
      //       loader: 'css-loader',
      //       // options: {
      //       //     modules: true,
      //       //     localIdentName: '__[name]-[local]-[hash:5]__',
      //       // }
      //     },
      //     { loader: 'sass-loader' },
      //   ],
      // },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, './src/index.html'),
    // }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // devtool: 'none',
  // devtool: 'source-map',
  // devServer: {
  //   // static: './dist',
  //   compress: true,
  //   // open: {
  //   //   target: 'http://localhost:4000',
  //   // },
  //   // https: true,
  //   port: 4000,
  //   proxy: {
  //     '/testipi': {
  //       target: 'https://test.com',
  //       changeOrigin: true,
  //     },
  //   },
  //   allowedHosts: ['localhost'],
  // },
};
