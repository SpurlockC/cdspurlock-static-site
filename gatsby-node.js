// gatsby-node.js
exports.onCreateWebpackConfig = ({ stage, actions }) => {
    actions.setWebpackConfig({
      resolve: {
        fallback: {
          fs: false,                // Disable 'fs' for browser use
          path: require.resolve("path-browserify"),
          crypto: require.resolve("crypto-browserify"),
          stream: require.resolve("stream-browserify"),
          zlib: require.resolve("browserify-zlib"),
          querystring: require.resolve("querystring-es3"),
          url: require.resolve("url"),
          util: require.resolve("util"),
          net: false,               // Disable 'net' for browser use
          http: require.resolve("stream-http"),
        },
      },
    });
  };
  