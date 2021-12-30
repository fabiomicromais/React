
module.exports = {
    
    presets:  [ '@babel/preset-env',
               ['@babel/preset-react', { 
                   runtime: 'automatic' //configuração para não precisa importar o react em todas os arquivos
               } ]
            ]
   }