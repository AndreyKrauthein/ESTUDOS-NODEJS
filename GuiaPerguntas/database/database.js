const Sequelize = require('sequelize')

const connection = new Sequelize('guiaperguntas', 'root', 'Krauthein2005',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection