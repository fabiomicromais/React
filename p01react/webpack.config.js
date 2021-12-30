// webpack converte arquivos para serem entendidos pelos browsers

const path = require('path');



module.exports = {   //pega a saida do index e joga no bundle.js
   mode: 'development',
    entry:  path.resolve(__dirname,  'src', 'index'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
   resolve: {
       extensions: ['.js', '.jsx'],
   },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,  //converte todos arquivos terminados em .js ou .jsx fora do node-modules
                exclude: /node_modules/, //usando o babel-loader para converter
                use:  
                      'babel-loader',
                     
            }
        ],
    },
};


