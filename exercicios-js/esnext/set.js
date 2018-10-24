//não aceita repetição/ não indexada

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthias')
times.add('Flamengo')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Flamengo')

const nomes = ['Raquel', 'Lucas', 'Júlia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)