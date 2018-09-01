const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0],valores[3])

//adcionando valores atraves do indice
valores[4] = 10
console.log(valores)

//retorna o tamanho do array
console.log(valores.length)

//adciona dados no array
valores.push({id:3},false,null,'teste')
console.log(valores)

//remove itens do array
console.log(valores.pop())

//deleta itens do array
delete valores[0]

console.log(valores)

//um array em js é um object
console.log(typeof valores)