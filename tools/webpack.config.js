import path from 'path';
import extend from 'extend';

const isDebug = !process.argv.includes('--release');
const isVerbose = process.argv.includes('--verbose');

//
// Common configuration chunk to be used for both
// client-side (client.js) and server-side (server.js) bundles
// -----------------------------------------------------------------------------
const config = {
  context: path.resolve(__dirname, '../src'),

  output: {
    path: path.resolve(__dirname, '../build/public/assets'),
    publicPath: '/assets/',
    sourcePrefix: '    ',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              //
              cacheDirectory: isDebug,

              //
              babelrc: false,

              presets: [
                // JSX, Flow
                // https://github.com/babel/babel/tree/master/packages/babel-preset-react
                'react',
                //
                // https://github.com/babel/babel/tree/master/packages/babel-preset-env
                'env',
              ],
              plugins: [
                // Externalise references to helpers and builtins,
                // automatically polyfilling your code without polluting globals.
                // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-runtime
                'transform-runtime',
                ...isDebug ? [
                  // Adds component stack to warning messages
                  // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx-source
                  'transform-react-jsx-source',
                  // Adds __self attribute to JSX which React will use for some warnings
                  // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx-self
                  'transform-react-jsx-self',
                ] : [
                  // Remove unnecessary React propTypes from the production build
                  // https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types
                  'transform-react-remove-prop-types',
                  // Treat React JSX elements as value types and hoist them to the highest scope
                  // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-constant-elements
                  'transform-react-constant-elements',
                  // Turn JSX elements into exploded React objects
                  // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-inline-elements
                  'transform-react-inline-elements',
                ],
              ],
            },
          },
        ],
        include: [
          path.resolve(__dirname, '../src'),
        ],
      },
    ],
  },

  resolve: {
    modules: [
      path.join(__dirname, '../src'),
      'node_modules',
    ],
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx', '.json'],
  },

  cache: isDebug,

  stats: {
    colors: true,
    reasons: isDebug,
    hash: isVerbose,
    version: isVerbose,
    timings: true,
    chunks: isVerbose,
    chunkModules: isVerbose,
    cached: isVerbose,
    cachedAssets: isVerbose,
  },
};

//
// Configuration for the client-side bundle (client.js)
// -----------------------------------------------------------------------------
const clientConfig = extend(true, {}, config, {
  entry: {
    app: './client.js',
  },

  output: {
    filename: isDebug ? '[name].js?[chunkhash]' : '[name].[chunkhash].js',
    chunkFilename: isDebug ? '[name].[id].js?[chunkhash]' : '[name].[id].[chunkhash].js',
  },

  target: 'web',

  devtool: isDebug ? 'source-map' : false,
});

//
// Configuration for the server-side bundle (server.js)
// -----------------------------------------------------------------------------
const serverConfig = extend(true, {}, config, {
  entry: {
    app: './server.js',
  },

  output: {
    filename: '../../server.js',
    libraryTarget: 'commonjs2',
  },

  target: 'node',

  devtool: 'source-map',
});

export default [clientConfig, serverConfig];
