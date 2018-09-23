const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

const filho1 = Object.create(pai)
filho1.nome = 'Ana'
console.log(filho1.corCabelo)

const filho2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true },
    idade: {value: 18, writable: true, enumerable: true}
})
console.log(filho2.idade)
console.log(filho2.nome)
filho2.nome = 'Carla' //não pode ser alterado
console.log(`${filho2.nome} tem cabelo ${filho2.corCabelo}`)

console.log(Object.keys(filho1))
console.log(Object.keys(filho2))

for(let key in filho2) {
    filho2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}