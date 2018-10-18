const fs = require('fs')
const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

//gravando um arquivo
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo!')
})

//lendo um arquivo
fs.readFile(__dirname + '/arquivoGerado.json', 'utf-8', (err, conteudo) => {
    console.log(conteudo)
})