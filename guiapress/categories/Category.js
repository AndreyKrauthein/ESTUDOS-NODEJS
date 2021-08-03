const Sequelize = require("sequelize")
const connection = require("../database/database")

const Category = connection.define("categories", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

//Cria tabela sempre que executar o programa
// Category.sync({force: true})
//DEPOIS QUE EXECUTAR O PROGRAMA E ELE CRIAR A TABELA APAGAR o SYNC PARA NAO TENTAR CRIAR TODA VEZ QUE EXEC
module.exports = Category