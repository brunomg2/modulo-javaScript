function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    },1000)
}

new Pessoa

//usando arrowfunction o this não varia tendo contexto fixo