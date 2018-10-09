//o concat concatena varios arrays em um novo array
const filhos = ['Ana', 'Clara']
const filhas = ['Bruno', 'Gabriel']
const todos = filhas.concat(filhos, 'Fulano') //pode se passar parametros variados
console.log(todos, filhos, filhas)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))