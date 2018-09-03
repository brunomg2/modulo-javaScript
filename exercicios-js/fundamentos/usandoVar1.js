/**
 * variaveis declaradas com o var se não estiverem no escopo de uma função
 * ela é global dentro do objeto window
 * variáveis declaradas com var só deixam de ser globais no escopo de uma função
 */

{
    {
        {
            {
                var sera = 'Sera'
            }
        }
    }
}

console.log(sera)

//dentro do escopo de uma função variáveis declaradas com var não são visíveis
function teste() {
    var local = 123
}
teste()
//console.log(local) gera um erro variável local is not defined

