const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

//apartir do bind podemos referencia qual objeto estamos referenciando ao this
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()