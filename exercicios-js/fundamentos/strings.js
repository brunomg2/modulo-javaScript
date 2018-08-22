const escola = 'Cod3r'
//retorna o caractere que está no indice passado entre parenteses
console.log(escola.charAt(4))
//retorna o caractere que está no indice passado entre parenteses na tabela asc
console.log(escola.charCodeAt(3))
//retorna o indice do caractere passado entre aspas
console.log(escola.indexOf('3'))
//corda string o primeiro paramentro é onde vai começar e o segunda onde acontecera o corte
console.log(escola.substring(0,4))
//concatenação 
console.log('escola '.concat(escola))
//substitui um digito dentro da string
console.log(escola.replace('3','e'))
//transforma uma string em um array
console.log('ana,maria,pedro'.split(','))
//retorna a quantidade de caracteres de uma string
console.log(escola.length)

