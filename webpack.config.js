module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: __dirname + "/app/temp/scripts",
    filename: "App.js"
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
