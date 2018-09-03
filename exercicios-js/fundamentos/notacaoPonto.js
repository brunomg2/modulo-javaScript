/**
 * ataves da notação ponto conseguimos acessar funções e atributos de objetos e funções
 * exemplos abaixo
 */

 //console dentro de javaScript é um objeto conseguimos acessar 
 //suas funções através do ponto
 console.log(typeof console)

 console.log(Math.ceil(6.1))
 console.log(Math.floor(6.1))

 const obj1 = {}
 obj1.nome = 'Bola'
 //obj1['nome'] = 'Bola1' outra notação para se trabalhar com atributos de um objeto
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    
    this.exec = function() {
        console.log(`Exec....${nome}`)
    }
}

const produto = new Obj('Cadeira')
console.log(produto.nome)
const produto2 = new Obj('Mesa')
console.log(produto2.nome)
produto.exec()
produto2.exec()



class Pessoa {
    constructor() {
        this.nome;
        this.setNome = function (nome) {
            this.nome = nome;
        };
        this.getNome = function () {
            return this.nome;
        }
    }
}

const pessoa = new Pessoa;
pessoa.setNome('Bruno')
console.log(pessoa.getNome())