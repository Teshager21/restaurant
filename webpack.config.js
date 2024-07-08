const path= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports={
    mode:'development',
    entry:'./src/index.js',
    devtool:'inline-source-map',
    devServer:{
        static:'./dist',
    },
    plugins:[
    new HtmlWebpackPlugin({
        title:'Restaurant',
        template:'./src/index.html'
    })
    ],
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist'),
        clean:true
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader']
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset/resource',
            },
           

        ],
        
    }
    ,
  optimization: {
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            encodeOptions: {
              // Your options for `sharp`
              // https://sharp.pixelplumbing.com/api-output
            },
          },
        },
      }),
    ],
  },
    

}