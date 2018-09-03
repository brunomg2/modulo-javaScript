//novo recurso do ES2015
//operador de desistruturação, extrai elementos de uma estrutura

const pessoa = {
    nome: 'Bruno',
    idade: 22,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

//outra sintaxe de extrair
const { nome: n, idade: i } = pessoa
console.log(n, i)

//se tentarmos retirar algo que não existe ele nos retorna undefined
//podemos fazer também atribuições se os valores não existirem
//exemplo em bemHumorada 
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

/**
 * como extrair de objetos que estão aninhados
 * possuindo outros objetos dentro dele
 */
const { endereco: { logradouro, numero } } = pessoa
console.log(logradouro, numero)

/**
 * devemos ter cuidado ao tentar acessar atributos de forma aninhada
 * exemplo abaixo
 * const { conta: { ag, numero } } = pessoa
 * console.log(ag,numero)
 */
