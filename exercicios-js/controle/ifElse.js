const imprimirResultado = function(nota) {
    if(Number(nota)){
        if(nota >= 7){
            console.log('Aprovado')
        }else{
            console.log('reprovado')
        }
    }else{
        console.log('dados invalidos')
    }
}

imprimirResultado(7.5)
imprimirResultado(4.9)
imprimirResultado('epa') //cuidado retorna reprovado se não for tratado