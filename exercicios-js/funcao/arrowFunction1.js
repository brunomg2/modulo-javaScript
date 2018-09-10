let drobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return implicito

console.log(dobro(8))

const quadrado = a => a ** 2

console.log(quadrado(8))

let ola = function () {
    return 'Óla'
}

ola = () => 'Óla' //funções  sem parametro

ola = _ => 'Óla' //possui um paramentro

console.log(ola())