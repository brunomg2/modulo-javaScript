const notas = [7.7, 8.8, 6.3, 5.2, 8.9, 5.8, 9.9]

//sem calback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//usando calback
const notasBaixas2 = notas.filter(function (notas) {
   return notas < 7
})
console.log(notasBaixas2)

//usando arrowFunction
const notasBaixas3 = notas.filter(notas => notas < 7)
console.log(notasBaixas3)

const verificaNotasMenor7 = notas => notas < 7
const notasBaixas4 = notas.filter(verificaNotasMenor7)
console.log(notasBaixas4)