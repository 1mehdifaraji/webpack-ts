const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    extensions: [".ts"],
    fallback: {
      fs: false,
      path: false,
      os: false,
    },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
    open: true,
  },
};
