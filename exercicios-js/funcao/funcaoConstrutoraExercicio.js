function Produto(nome, preco) {

    this.getNome = function () {
        return nome;
    }

    this.getPreco = function () {
        return preco
    }
}

const maca = new Produto('maçã',2)
console.log(maca.getNome())
console.log(maca.getPreco())
