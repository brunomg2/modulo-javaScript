console.log(this === global) // em node o this aponta para module.exports
console.log(this === module) //false
console.log(this === module.exports) //true
console.log(this === exports) //true

function logThis() {
    console.log('Dentro de uma função ....')
    console.log(this === exports) //dentro de uma função o this não aponta para exports
    //dentro da função o this aponta para o objeto global do node
    console.log(this === module.exports)
    console.log(this === global)
    //this.perigo = '...' //dentro do escopo global
}

//this.perigo = '...' //aponta para module.exports podendo ser esportado
logThis()
