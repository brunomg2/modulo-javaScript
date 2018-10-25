function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
        if(!frase){
            reject('Error Não foi enviada a frase!!')
        }
    })
}

falarDepoisDe(2, 'Que legal!!!')
    .then(frase => frase.concat('!!!'))
    .then(novaFrase => console.log(novaFrase))
    .catch(error => console.log(error))