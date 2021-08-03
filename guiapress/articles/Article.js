const Sequelize = require("sequelize")
const connection = require("../database/database")
const Category = require("../categories/Category")

const Article = connection.define("articles", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

//Relacionamento ou Join no Sequelize
//Serve para dar performance para o código 
Category.hasMany(Article) //Uma categoria tem muitos artigos / 1 - PARA - MUITOS
Article.belongsTo(Category) //Um artigo pertence a uma categoria / 1 - PARA - 1

//Cria tabela sempre que executar o programa
// Article.sync({force: true})
//DEPOIS QUE EXECUTAR O PROGRAMA E ELE CRIAR A TABELA APAGAR o SYNC PARA NAO TENTAR CRIAR TODA VEZ QUE EXEC

module.exports = Article