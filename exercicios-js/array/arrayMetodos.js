const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //adciona  um elemento na ultima posição do array
console.log(pilotos)

pilotos.shift()//remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //adciona um elemento no inicio do array
console.log(pilotos)

//splice pode adicionar e remover elementos

//adcionar
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

//remover

pilotos.splice(3,1) //removendo um unico elemento apartir do indice três
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Cria um novo array apartir de um indice
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) //limitando a criação de um novo array indo do indice 1 até o indice 3 limitando ao indice passado
console.log(algunsPilotos2)

