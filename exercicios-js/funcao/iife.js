//IIFE -> imediately invoked function expression
//todas as variaveis criadas seja com var let ou const fica apenas dentro do escopo da função
//não sendo visivel no escopo mais anbrangente
(function(){
    var nome = 'Bruno'
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')
})()
