/**
 * utilizando let as variáveis não são sobrescritas respeitando assim o escopo que foi definida
 */
const funcs = []
for(let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()