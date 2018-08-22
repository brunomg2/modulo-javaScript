const nome = 'Bruno'
const contac = `Olá 
    ${nome}!`
console.log(contac)
/**
 * com o uso do template string podemos utilizar
 * variaveis dentro de uma string. Usamos o sinal de ``
 * e antes da variavel o $, devemos colocar a variável dentro de {}
 * O template string também considera quebra de linhas e espaços
 * também podemos fazer operações matematicas
 * também podemos utilizar funções
 */
 console.log(`1 + 1 = ${1+1}`)

 const up = text => text.toUpperCase()
 console.log(`Ei ${up('cuidado')}`)