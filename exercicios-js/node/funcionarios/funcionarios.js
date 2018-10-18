const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
//exercicio mulher chinesa com menor salario
const chinesas = funcionario => funcionario.pais === 'China'
const filtrarSexo = funcionario => funcionario.genero === 'F'
const menorSalario = (funcionarioAtual, proximoFuncionario) => {
    return proximoFuncionario.salario < funcionarioAtual.salario ? proximoFuncionario : funcionarioAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios
        .filter(chinesas)
        .filter(filtrarSexo)
        .reduce(menorSalario)
    console.log(func)
    //console.log(funcionarios)
})

//exercicio maior Salario
const funcionarios = [
    { nome: 'Bruno', salario: 20500 },
    { nome: 'João', salario: 1000 },
    { nome: 'Gabriel', salario: 4000 },
    { nome: 'Alex', salario: 2500 },
    { nome: 'Ana', salario: 2000 },
    { nome: 'Lane', salario: 5500 }
]

const maiorSalario = (funcionarioAtual, funcionarioProximo) => {
    return funcionarioProximo.salario > funcionarioAtual.salario ? funcionarioProximo : funcionarioAtual
}
const funcionario = funcionarios.reduce(maiorSalario)
console.log(funcionario)

//logica aplicada dentro do reduce
// const salario = function (funcionarios) {
//     let acumulador = funcionarios[0]
//     let proximo = funcionarios
//     for (let i = 0; i < funcionarios.length; i++) {
//         if (acumulador.salario < proximo[i].salario) {
//             acumulador = proximo[i]
//         }
//     }
//     return acumulador
// }

// console.log(salario(funcionarios))