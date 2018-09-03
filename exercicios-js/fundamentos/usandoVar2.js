/**
 * mesmo estando em escopos diferentes utilizando var 
 * podemos sobrescrever as variáveis, no exemplo em questão
 * tanto o console log dentro quanto fora ira imprimir o numero 2
 */
var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)
