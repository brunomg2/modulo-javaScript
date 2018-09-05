//programa que ira receber o nome de um aluno três notas e se a media das notas for maior ou igual a sete retorne aprovado
// se não retorna reprovado, as notas são passadas atráves de um array

const verificaAprovacao = function(nome, notas){
    
    if(notas.length === 3 && typeof nome === 'string'){
        const [n1,n2,n3] = notas
        const media = (n1 + n2 + n3) / notas.length
        
        if(media >= 7){
            console.log(`O Aluno ${nome} foi Aprovado`)
        }else{
            console.log(`O Aluno ${nome} foi Reprovado`)
        }
    }else{
        console.log('Valores informados estão invalidos')
    }
}

const notas = [7.0,8.0,7.5]
verificaAprovacao('bruno',notas)