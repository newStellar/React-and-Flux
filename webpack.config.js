
var webpack = require('webpack');


module.exports = {
  //devtool: 'source-map',
  entry: "./Controller/main_script.js",
  module: {
    loaders: 
      [{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }]
  },
  output: {
    path: "./Production/",
    filename: "./bundle.js"
  },
  plugins: [   /*  VERY VERY IMPORTANT
                  files for optimizing the bundle.js.
                  without these plugins bundle.js will be a very large file
                */
      new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap:false }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
  ]
  
};
/* IMPORTANT !!!!!!!!!!!!!!!!!!!!!!!!!!!!  
    After development  please RUN webpack -p for the  minimized bundle.js.
    Otherwise you will be in trouble with a large budle.js file :p
*/