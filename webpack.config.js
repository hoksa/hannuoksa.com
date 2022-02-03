require("dotenv").config();
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: "./" + process.env.INPUT_DIR + "/js/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist/js"),
  },
  plugins: [new ESLintPlugin()],
  mode: "development",
};
