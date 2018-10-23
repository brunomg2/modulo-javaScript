// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.keys(obj)) //chaves
console.log(Object.values(obj)) //valores
console.log(Object.entries(obj)) //matriz com chave e valores 

// Melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au Au!'
    }
}

console.log(new Cachorro().falar())