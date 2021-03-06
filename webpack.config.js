const path = require("path");

module.exports = {
  mode: 'production',
  entry: "./src/components/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "vp-ui.react.js"
  },
  resolve: {
    extensions: ['.tsx', ".ts", ".js", ".jsx"]
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: "awesome-typescript-loader"
    }]
  },
  externals: {
    "react": 'react',
    'react-dom': 'ReactDOM'
  },
  plugins: []
};