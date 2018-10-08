const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
//no forEach e passado uma função callback que recebe três parametros
//indice, dados do array e proprio array, se for passado um quarto parametro retorna undefined referente a esse parametro
aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
console.log('-----------------------------')
//usando arrow function
aprovados.forEach(nome => console.log(nome))
console.log('-----------------------------')
//arrow function com dois atributos
const exibirAprovados = (aprovado, indice) => console.log(`${indice + 1}) ${aprovado}`)
aprovados.forEach(exibirAprovados)