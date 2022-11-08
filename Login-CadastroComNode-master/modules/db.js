const mongoose = require('mongoose')
const conectarBanco = async () => {
    await mongoose.connect("mongodb+srv://admin:12345678admin@cursonodejs.ohpe48v.mongodb.net/?retryWrites=true&w=majority", (error) => {
        if(error){return console.log("Erro ao se conectar com o banco de dados")}
        return console.log("Conexão com o banco de dados feita com sucesso")
    })
}
module.exports = conectarBanco;