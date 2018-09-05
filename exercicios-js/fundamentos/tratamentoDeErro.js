//lançando exceções
function tratarErroELancar(error) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'message'
    throw {
        nome: error.name,
        msg: error.message,
    }
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){
        tratarErroELancar(e)
    }finally {
        console.log('final')
    }
}

const obj = {name : 'roberto'}
imprimirNomeGritado(obj)