//Simulando forEach

Array.prototype.foreach2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Bruno', 'Fabio', 'Misael', 'Jonatan']

aprovados.foreach2(function(nome, indice){
    console.log(`${indice}) ${nome}`)
})
