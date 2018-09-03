//par nome/valor
const saudacao = 'opa' //contexto léxico 1

function exec() {
    const saudacao = 'falaaaa' //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'bruno',
    idade:32,
    peso: 60,
    endereco:{
        logradouro: 'rua muito legal',
        numero: 132
    }
}

console.log(cliente.endereco.logradouro)
console.log(saudacao)
console.log(exec())
console.log(cliente)