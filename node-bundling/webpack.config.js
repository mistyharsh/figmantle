import path from 'node:path';

export default {
  entry: './src/main.js',
  output: {
    module: true,
    filename: 'webpack-out.js',
    path: path.resolve(process.cwd(), 'dist'),
    chunkFormat: 'module',
  },
  target: 'node',
  mode: 'development',
  devtool: 'source-map',
  experiments: {
    outputModule: true,
  },
};
