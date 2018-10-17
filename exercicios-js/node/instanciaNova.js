//usando uma função factory para gerar novas instancias

module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}