import path from 'path';
import webpack from 'webpack';
import extend from 'extend';
import AssetsPlugin from 'assets-webpack-plugin';

const INTL_REQUIRE_DESCRIPTIONS = true;

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
                'latest',
                'stage-0',
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

                // https://github.com/yahoo/babel-plugin-react-intl#options
                ['react-intl',
                  {
                    enforceDescriptions: INTL_REQUIRE_DESCRIPTIONS,
                  },
                ],
              ],
            },
          },
        ],
        include: [
          path.resolve(__dirname, '../src'),
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'isomorphic-style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              // CSS Loader https://github.com/webpack/css-loader
              importLoaders: 1,
              sourceMap: isDebug,
              // CSS Modules https://github.com/css-modules/css-modules
              modules: true,
              localIdentName: isDebug ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]',
              // CSS Nano http://cssnano.co/options/
              minimize: !isDebug,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                  // Transfer @import rule by inlining content,
                  // e.g. @import 'normalize.css'
                  // https://github.com/jonathantneal/postcss-partial-import
                  require('postcss-partial-import'),
                  // Allow you to fix url() according to postcss to and/or from options
                  // https://github.com/postcss/postcss-url
                  // require('postcss-url'), // delete by rorivers
                  // W3C variables,
                  // e.g. :root { --color: red; } div { background: var(--color); }
                  // https://github.com/postcss/postcss-custom-properties
                  require('postcss-custom-properties'),
                  // W3C CSS Custom Media Queries,
                  // e.g. @custom-media --small-viewport (max-width: 30em);
                  // https://github.com/postcss/postcss-custom-media
                  require('postcss-custom-media'),
                  // CSS4 Media Queries,
                  // e.g. @media screen and (width >= 500px) and (width <= 1200px) { }
                  // https://github.com/postcss/postcss-media-minmax
                  require('postcss-media-minmax'),
                  // W3C CSS Custom Selectors,
                  // e.g. @custom-selector :--heading h1, h2, h3, h4, h5, h6;
                  // https://github.com/postcss/postcss-custom-selectors
                  require('postcss-custom-selectors'),
                  // W3C calc() function, e.g. div { height: calc(100px - 2em); }
                  // https://github.com/postcss/postcss-calc
                  require('postcss-calc'),
                  // Allows you to nest one style rule inside another
                  // https://github.com/jonathantneal/postcss-nesting
                  require('postcss-nesting'),
                  // Unwraps nested rules like how Sass does it
                  // https://github.com/postcss/postcss-nested
                  require('postcss-nested'),
                  // W3C color() function, e.g. div { background: color(red alpha(90%)); }
                  // https://github.com/postcss/postcss-color-function
                  require('postcss-color-function'),
                  // Convert CSS shorthand filters to SVG equivalent,
                  // e.g. .blur { filter: blur(4px); }
                  // https://github.com/iamvdo/pleeease-filters
                  require('pleeease-filters'),
                  // Generate pixel fallback for "rem" units,
                  // e.g. div { margin: 2.5rem 2px 3em 100%; }
                  // https://github.com/robwierzbowski/node-pixrem
                  require('pixrem'),
                  // W3C CSS Level4 :matches() pseudo class,
                  // e.g. p:matches(:first-child, .special) { }
                  // https://github.com/postcss/postcss-selector-matches
                  require('postcss-selector-matches'),
                  // Transforms :not() W3C CSS Level 4 pseudo class to :not() CSS Level 3 selectors
                  // https://github.com/postcss/postcss-selector-not
                  require('postcss-selector-not'),
                  // Postcss flexbox bug fixer
                  // https://github.com/luisrudge/postcss-flexbugs-fixes
                  require('postcss-flexbugs-fixes'),
                  // Add vendor prefixes to CSS rules using values from caniuse.com
                  // https://github.com/postcss/autoprefixer
                  require('autoprefixer'),
              ],
            },
          },
        ],
      },
      {
        test: /\.json$/,
        use: [
          {
            loader: 'json-loader',
          },
        ],
      },
      {
        test: /\.txt$/,
        use: [
          {
            loader: 'raw-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: isDebug ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: isDebug ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
            },
          },
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
    app: './clientLoader.js',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-intl',
      'fastclick',
      'universal-router',
      'query-string',
      'serialize-javascript',
      'bluebird',
      'whatwg-fetch',
      'react-waypoint',
    ],
  },

  output: {
    filename: isDebug ? '[name].js?[chunkhash]' : '[name].[chunkhash].js',
    chunkFilename: isDebug ? '[name].[id].js?[chunkhash]' : '[name].[id].[chunkhash].js',
  },

  target: 'web',

  plugins: [
    // Define free variables
    // https://webpack.github.io/docs/list-of-plugins.html#defineplugin
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
      'process.env.BROWSER': true,
      __DEV__: isDebug,
    }),

    // Emit a file with assets paths
    // https://github.com/sporto/assets-webpack-plugin#options
    new AssetsPlugin({
      path: path.resolve(__dirname, '../build'),
      filename: 'assets.js',
      processOutput: x => `module.exports = ${JSON.stringify(x)};`,
    }),

    ...isDebug ? [] : [
      // Minimize all JavaScript output of chunks
      // https://github.com/mishoo/UglifyJS2#compressor-options
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: isVerbose,
        },
        sourceMap: isDebug,
      }),

      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
      }),
    ],
  ],

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

  externals: [
    /^\.\/assets$/,
    (context, request, callback) => {
      const isExternal =
        request.match(/^[@a-z][a-z/.\-0-9]*$/i) &&
        !request.match(/\.(css|less|scss|sss)$/i);
      callback(null, Boolean(isExternal));
    },
  ],

  plugins: [
    // Define free variables
    // https://webpack.github.io/docs/list-of-plugins.html#defineplugin
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
      'process.env.BROWSER': false,
      __DEV__: isDebug,
    }),

    // Adds a banner to the top of each generated chunk
    // https://webpack.github.io/docs/list-of-plugins.html#bannerplugin
    // new webpack.BannerPlugin({
    //   banner: 'require("source-map-support").install();',
    //   raw: true,
    //   entryOnly: false,
    // }),

    // Do not create separate chunks of the server bundle
    // https://webpack.github.io/docs/list-of-plugins.html#limitchunkcountplugin
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
  ],

  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },

  devtool: 'source-map',
});

export default [clientConfig, serverConfig];
