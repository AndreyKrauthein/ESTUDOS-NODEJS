const Sequelize = require("sequelize")
const connection = require("./database.js")

//Model representar a tabela com javascript
const Pergunta = connection.define("perguntas", {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

//sincronizar Pergunta com o banco de dados
//Force serve pra nao criar a tabela se caso ela ja existir
Pergunta.sync({force: false}).then(() => {})

module.exports = Pergunta