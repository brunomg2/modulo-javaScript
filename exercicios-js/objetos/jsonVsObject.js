//criando json apartir de um objeto
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))

//criando objeto apartir de um json
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"nome": "Bruno", "idade": 22, "triste": false, "object": {}, "array": []}'))

const pessoas = '{"nome": "Bruno","idade": 22, "filhos":[{ "id":1, "nome": "Junior", "idade": 18 }, { "id":12, "nome": "Ana", "idade": 5 }], "possuiAnimal": false}'
const pessoa = JSON.parse(pessoas)
console.log(`${pessoa.nome} tem ${pessoa.idade} anos, possui ${pessoa.filhos.length} filho(s) ${pessoa.possuiAnimal === true ? 'Possui Animal' : 'Não possui Animal'}`)
