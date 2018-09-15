//usando a notação literal
const obj = {}
console.log(obj)

//object em js

console.log(typeof Object, typeof new Object)
const obj2 = new Object

console.log(obj2)


//Funções contrutoras

function produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new produto('caneta', 7.99, 0.15)
const p2 = new produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

f1 = criarFuncionario('Joao', 7980, 4)
f2 = criarFuncionario('Maria', 11400, 1)

console.log(f1.getSalario(), f2.getSalario())

//object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função que retorna um objeto
const fromJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJson.info)