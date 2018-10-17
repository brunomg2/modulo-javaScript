//escopo global do node
//usando o Object.freeze para evitar que esses dados sejam modificados
//OBS o uso do escopo global não é recomendado
global.MinhaApp = Object.freeze ({
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Legal'
})