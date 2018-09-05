//para ter varias sentenças dentro de uma condição devemos usar {}
function teste1(num) {
    if (num > 7)
        console.log(num)
    console.log('Final')
}
teste1(6)
teste1(8)

//não use ponto virgula em struturas de controle em JS
//devido ao ponto e virgula ele executar apenas o ponto e virgula que é uma sentença vazia e ira para a proxima linha
function teste2(num) {
    if (num > 7); {
        console.log(num)
    }
}

teste2(6)
teste2(8)