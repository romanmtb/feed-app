var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      },
      {
        test: [/\.css$/, /\.scss$/],
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "sass-loader",}
        ]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  devServer: {
    contentBase: "public",
    stats: "errors-only",
    open: true
  }
}
