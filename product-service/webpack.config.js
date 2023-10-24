const path = require("path");

module.exports = {
  mode: "production",
  entry: "./handler.mjs",
  output: {
    libraryTarget: "commonjs",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".mjs", ".json", ".jsx", ".js"],
  },
};
