let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}

comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)
//em uma arrowfunction o this aponta para o modulo que ela foi consruida

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)//mesmo utilizando o bind a arrow function não muda o contexto
comparaComThisArrow(module.exports)//this de uma função arrow é associada ao contexto que ela foi criado não sendo alterado