/**
 * utilizando o let para declarar variáveis conseguimos ter apenas o escopo do bloco
 * ou seja variáveis declaradas dentro de blocos de código são visíveis apenas dentro do bloco
 * onde ela foi declarada
 * variáveis declaradas com let pode ter escopo global, escopo de bloco e escopo de função
 * então dentro de uma função podemos ter variáveis declaradas com mesmo nome de varáveis declaradas em escopo global
 */
let numero = 1
{
    let numero = 2
    console.log('dentro = ',numero)
}

console.log('fora = ',numero)