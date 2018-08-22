//formas de se declarar number
const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1)
console.log(Number.isInteger(peso1))

const avaliacao = 9.871
const avaliacao2 = 6.871

const total = avaliacao * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))

//como converter um number em string
console.log(media.toString())
//transformando em binario
console.log(media.toString(2))
//verificando o tipo
console.log(typeof media)