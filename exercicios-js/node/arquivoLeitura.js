const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono (cuidado se o arquivo for muito grande pode travar o event loop do node)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono... envia uma callback que recebe dois parametros o erro e o contudo de leitura que sera executada após a leitura do arquivo 
//se não conseguir ler retorna um erro
fs.readFile(caminho, 'utf-8',(err, conteudo) => {
    if(!err){ //verificando se a erro
        const config = JSON.parse(conteudo) //para transformar a string em um objeto
        console.log(`host: ${config.db.host}, port: ${config.db.port}`)
    }
})

//para ler um json
const config = require('./arquivo.json') //já retorna um objeto
console.log(config.db)

//para ler uma pasta... retorna um array
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudos da pasta....')
    console.log(arquivos)
})