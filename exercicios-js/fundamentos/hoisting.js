/**
 * hoisting em javaScript é um comportamento padrão
 * onde variáveis declaradas com var sofrem o içamento
 * para o topo do escopo seja ele global ou de uma função
 */

 /**
  * No exemplo abaixo podemos ver  o conceito de hoisting
  * sendo aplicado, onde imprimimos no console a variável a
  * mesmo sem ter sido declarada, em seguida declaramos a variavel
  * então o javaScript faz o içamento da declaração da variável
  * imprimindo undefined (existe mas indefinida)
  * em tese basicamente o interpretador do javaScript faz o código abaixo
  * var a
  * console.log('a = ',a)
  * a = 2
  * console.log('a = ',a)
  */
console.log('a = ',a)
var a = 2
console.log('a = ',a)