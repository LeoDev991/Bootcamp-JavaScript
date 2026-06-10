async function connectToDatabase(dataName) {
    // lógica de conexão ao banco de dados
    console.log(`Conectando ao banco de dados ${dataName}`)
}

async function disconnectDatabase() {
    console.log(`Desconectando do banco de dados`)
}

export {
    connectToDatabase,
    disconnectDatabase,
}  