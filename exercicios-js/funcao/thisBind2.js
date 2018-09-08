//Quando usamos o bind dentro de um contexto como funções e objetos referenciamos usando o this
//não o nome da função
function Pessoa() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa

//outra maneira

function Produto() {
    this.preco = 0

    const self = this
    setInterval(function () {
        self.preco++
        console.log(self.preco)
    }, 1000)
}

new Produto