//o array em javaScript é um objeto porem organizado apartir de indices começando com zero
console.log(typeof Array, typeof new Array, typeof [])
let aprovados = new Array('Bia','Carlos','Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

//se o indice não existir não gera erro mas retorna undefined
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])

//adcionando um novo elemento em um array
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)

//ordena o array e causa alteração no array original
aprovados.sort()
console.log(aprovados)

//deleta um indice de um array, mas não reordena o array o elemento depois de deletado se torna undefined
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,1)//metodo que vc consegue excluir incluir, adcionar e excluir elementos
console.log(aprovados.length)

aprovados.forEach

