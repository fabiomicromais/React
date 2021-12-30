// webpack converte arquivos para serem entendidos pelos browsers

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV != 'production';

module.exports = {   //pega a saida do index e joga no bundle.js
   mode: isDevelopment ?  'development' : 'production',
   devtool: isDevelopment ? 'eval-source-map' : 'source-map',   //para visualizar o codigo original da aplicação, para mostrar a linha certa

    entry:  path.resolve(__dirname,  'src', 'index.jsx'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
   resolve: { 
       extensions: ['.js', '.jsx'],
   },
   devServer: { //para não ficar rodando o yarn toda hora
       static: path.resolve(__dirname, 'public'),
       open: true,
       port: 3000 
   },

   plugins: [ //para injetar os arquivos do bundle.js
       new HtmlWebpackPlugin({
           template: path.resolve(__dirname, 'public','index.html')
       })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,  //converte todos arquivos terminados em .js ou .jsx fora do node-modules
                exclude: /node_modules/, //usando o babel-loader para converter
                use:  
                      'babel-loader',
            },  
            {        
                test: /\.scss$/,  //converte todos arquivos css 
                exclude: /node_modules/, //usando style e css-loader
                use:  ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    },
};


