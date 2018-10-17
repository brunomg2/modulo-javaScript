const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//como em instancia nova estamos retornando uma função precisamos usar o parentese no final do require
//para que a função seja invocada e o seu valor de retorno seja atribuito a constante criada
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
