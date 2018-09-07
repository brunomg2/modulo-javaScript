//crie uma função que receba dois números e retorno a soma dos mesmos
function soma(a, b) {
    return a + b
}
console.log(soma(3, 3))

//Crie uma função que receba um dado e imprima o seu tipo
const imprimirTipo = a => console.log(typeof a)

imprimirTipo('s')

//Crie uma função que receba uma string e retorne todos os caracteres em maisculos

const stringMaiusculas = a => a.toUpperCase()

console.log(stringMaiusculas('nome'))

//1.crie uma função que receba um nome e imprima as 4 primeiras letras do nome.

const imprimirNome = nome =>  nome.substring(0, 4)

console.log(imprimirNome('carlson'))

//3. Crie uma função que receba um nome, calcule e retorne quantas letras tem esse nome.

function contarLetras(nome) {
    if (nome.indexOf(' ')) {
        return nome.length - 1
    } else {
        return nome.length
    }
}
console.log(contarLetras('Bruno Gabriel'))

//4. crie uma função que receba com um nome e imprimir o nome somente se a primeira letra do nome for ”a”(maiuscula ou minuscula).

const imprimirNomeA = nome => {
    if (nome.indexOf('a') == 0 || nome.indexOf('A') == 0) {
        return nome
    } else {
        const retorno = "Seu nome não começa com a"
        return retorno
    }
}
console.log(imprimirNomeA('ana'))

//. crie uma função que leia nome, sexo e idade, se sexo for feminino e idade menor que 25. Imprime o nome da pessoa e a palavra ACEITA, caso contrario imprimir N ´ AO ACEITA. 

const aceita = (nome, sexo, idade) => {
    if (sexo == 'feminino' && idade < 25) {
        return `${nome} ACEITO`
    } else {
        return 'Não aceito'
    }
}
console.log(aceita('carla', 'feminino', 21))

//5. Crie uma função que receba uma palavra e imprima de tras-para-frente.

function stringTrasPraFrente(palavra) {
    let novaPalavra

    for (i = palavra.length; i >= 0; i--) {
        if (novaPalavra == undefined) {
            novaPalavra = palavra[i]
        } else {
            novaPalavra += palavra[i]
        }
    }
    return novaPalavra
}
console.log(stringTrasPraFrente('bruno'))

//6.crie uma função que receba uma palavra, calcule quantas vogais (a, e, i, o, u) possui essa palavra.

const contarVogais = (palavra) => {
    let contador = 0
    for (i = 0; i < palavra.length; i++) {
        if (palavra[i] == 'a' || palavra[i] == 'e' || palavra[i] == 'i' || palavra[i] == 'o' || palavra[i] == 'u') {
            contador++
        }
    }
    return `A palavra ${palavra} tem ${contador} vogais`
}
console.log(contarVogais('ana carla'))

