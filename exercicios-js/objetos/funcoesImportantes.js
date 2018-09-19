const pessoa = {
    nome: 'Ana',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

//usando destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const dest = { a: 1 }
const a1 = { b: 2 }
const a2 = { c: 3, a: 4 }
const obj = Object.assign(dest, a1, a2)
console.log(obj)
//se o atributo já existir o valor sera sobrescrito

Object.freeze(obj)
obj.c = 1234
console.log(obj)