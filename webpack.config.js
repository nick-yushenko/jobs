
// import { DefinePlugin } from "webpack";

const path = require("path");

const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SizePlugin = require("size-plugin");
const ProgressPlugin = require("progress-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

/**
 * Webpack configuration.
 *
 * @see https://webpack.js.org/configuration/
 * @param {Record<string, boolean> | undefined} env
 * @param {{ mode: "production" | "development" }} options
 * @returns {import("webpack").Configuration}
 */
module.exports = function config(env, { mode }) {
  const isProduction = mode === "production";
  console.log("env: ", env);
  console.log("mode: ", mode);

  return {
    entry: "./src/index.tsx",
    output: {
      clean: true,
      filename: "[name].[chunkhash].js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /.([j|t]sx?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  ["@babel/preset-env"],
                  ["@babel/preset-react", { runtime: "automatic" }],
                  ["@babel/preset-typescript"],
                ],
                plugins: [
                  [
                    "import",
                    {
                      libraryName: "antd",
                      libraryDirectory: "es",
                      style: "css",
                    },
                  ],
                  ["@babel/plugin-proposal-class-properties", { loose: true }],
                  ["@babel/plugin-proposal-private-methods", { loose: true }],
                  [
                    "@babel/plugin-proposal-private-property-in-object",
                    { loose: true },
                  ],
                  ["@babel/plugin-transform-runtime"],
                  !isProduction && require.resolve("react-refresh/babel"),
                ].filter(Boolean),
              },
            },
          ],
        },

        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    isProduction &&
                      require("cssnano")({
                        preset: [
                          "default",
                          { discardComments: { removeAll: true } },
                        ],
                      }),
                  ].filter(Boolean),
                },
              },
            },
            "sass-loader",
          ],
        },

        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          include: path.resolve(__dirname, "src/assets/images"),
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          include: path.resolve(__dirname, "src/assets/fonts"),
          type: "asset/resource",
        },

        {
          test: /\.svg$/,
          include: path.resolve(__dirname, "src/assets/icons"),
          use: [
            {
              loader: "svg-sprite-loader",
              options: {
                symbolId: "[name]",
              },
            },
            "svgo-loader",
          ],
        },
        {
          test: /.html$/,
          use: ["html-loader"],
        },
      ],
    },
    plugins: [
      new ProgressPlugin(),
      new Dotenv({
        path: `.env.${env.development ? "development" : "production"}`,
      }),
      isProduction && new SizePlugin({}),
      !isProduction && new ReactRefreshWebpackPlugin(),
      new SpriteLoaderPlugin(),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
        inject: "body",
        favicon: path.resolve(__dirname, "public", "favicon.ico"),
      }),
      // new DefinePlugin({
      //   "process.env.IP_INFO_TOKEN": JSON.stringify(process.env.IP_INFO_TOKEN),
      // }),
    ].filter(Boolean),
    stats: "errors-only",
    optimization: {
      runtimeChunk: "single",
      splitChunks: { name: "vendor", chunks: "all" },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    cache: {
      type: "filesystem",
    },
    devServer: {
      hot: true,
      port: 8080,
      client: {
        overlay: false,
      },
      static: {
        directory: path.join(__dirname, "public"),
      },
      historyApiFallback: true,
    },
  };
};
