module.exports = {
  entry: './src/app.ts',
  target: 'node',
  mode: 'production',
  // mode: 'development',
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  node: false,
  output: {
    filename: 'app.js',
    path: `${__dirname}/dist-minified`,
  },
};
