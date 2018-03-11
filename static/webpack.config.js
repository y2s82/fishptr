const config = {
    entry: __dirname + '/js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module : {
        loaders : [
          {
            test : /\.js?/,
            include : /js/,
            loader : 'babel-loader'
          },
          { 
              test: /\.css$/, 
              loader: 'style-loader!css-loader' 
          }
        ]
      }
};
module.exports = config;