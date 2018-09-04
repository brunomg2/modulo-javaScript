//vamos receber um objeto e atraves do destructuring
//teremos acesso ao valor min e o max
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))

//se não passarmos um objeto vazio ira gerar um erro