const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductsIndex": "./src/index.js",
      },
      shared: ["faker"],
    }),
    new HtmlWebpackPlugin({
      // plugins array basically require to add extra plugins, here htmlWebpackPlugin will add emitted js files by
      // webpack automatically to provided index.html file.
      template: "./public/index.html",
    }),
  ],
};
