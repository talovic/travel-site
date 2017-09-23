module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: __dirname + "/app/temp/scripts",
    filename: "[name].js"
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
