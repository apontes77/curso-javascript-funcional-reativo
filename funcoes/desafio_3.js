const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(conteudo){
    return new Promise(function(resolve){
        fs.readFile(conteudo, function(_, conteudo){
            resolve(conteudo.toString())
        })
    })   
}
exibirConteudo(caminho)
            .then(console.log)
