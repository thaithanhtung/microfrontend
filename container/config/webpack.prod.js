const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@https://mfe-dashboard-tn.s3.ap-southeast-1.amazonaws.com/marketing/lastest/remoteEntry.js`,
      },
      shared: [
        packageJson.dependencies.react,
        packageJson.dependencies["react-dom"],
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  output: {
    filename: "[name].[contenthash].js",
  },
};

module.exports = merge(commonConfig, prodConfig);
