const tecnologias = new Map()
tecnologias.set('react', { framework: false }) // pode ter valores como objetos funções e outros tipos de dados
tecnologias.set('angular', { framework: true })

console.log(tecnologias.get('react'))
console.log(tecnologias.get('angular').framework)

//outra forma de criar um map já com chaves e valores
const chavesVariadas = new Map([
    [function(){}, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

console.log(chavesVariadas)

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123) //função que deleta um item no map retorna verdadeiro ou falso
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) //retorna o tamanho do map

chavesVariadas.set(123, 'a') //não pode ter elementos com o mesmo nome de chave
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)