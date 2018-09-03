/**
 * usando var dentro do escopo de um laço de repetição ele continua global
 */
for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i = ', i)