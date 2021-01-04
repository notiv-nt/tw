const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: path.resolve(__dirname, 'src/client.ts'),

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    port: 3010,
    open: true,
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html',
    }),
  ],
};
