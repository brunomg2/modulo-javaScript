// Arrow Function
const soma = (a, b) => a + b
console.log(soma(3, 2))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametro default
const log = (texto = 'Node') => console.log(texto)
log()
log('Bruno')

//Operador rest
const total = (...numeros) => {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))