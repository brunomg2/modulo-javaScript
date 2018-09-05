/**
 * Um operador ternario é composto por três partes
 * a primeira parte é uma expressão que retornará 
 * verdadeiro ou falso,a segunda e uma ? retornando o resultado 
 * após a ? se for verdadeiro e a terceira parte :
 * que retornará o resultado após os : se a expressão for falsa
 * expressão_logica_ou_teste ? resultado_se_a_expressão_for_verdadeiro : resultado_se_a_expressão_for_falsa
 */

 //utilizando arrow function
const resultado = nota => nota >= 7 ?  'Aprovado' : 'Reprovado'
console.log(resultado(5))