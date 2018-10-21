const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 21 * * 6', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1')
}, 20000)

//temporizadores js
//setImmediate
//setTimeout
//setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 6)]
regra.hour = 21
regra.minute = 17
regra.second = 10

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2', new Date().getSeconds())
})