const Sequelize = require("sequelize")
const connection = require("./database.js")

//Model representar a tabela com javascript
const Resposta = connection.define("resposta", {
    corpo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

//sincronizar Pergunta com o banco de dados
//Force serve pra nao criar a tabela se caso ela ja existir
Resposta.sync({force: false})
module.exports = Resposta