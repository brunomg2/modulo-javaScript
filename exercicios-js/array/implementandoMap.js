Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map2(function (e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const convertReal = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map2(soma10).map2(triplo).map2(convertReal)
console.log(resultado)

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]
resultado = carrinho.map2(function(value){
    return JSON.parse(value)['preco']
})

console.log(resultado)