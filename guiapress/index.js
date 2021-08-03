// npm install --save express sequelize mysql2 body-parser ejs slugify
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")
const session = require("express-session")

const categoriesController = require("./categories/CategoriesController")
const articlesController = require("./articles/ArticlesController")
const usersController = require("./users/UsersController")

const Article = require("./articles/Article")
const Category = require("./categories/Category")
const User = require("./users/User")

//view engine
app.set('view engine', 'ejs')


//Sessions
app.use(session({
    secret: "qualquercoisa",
    cookie: {maxAge: 30000000} //definindo o tempo do cookie em milisegundos (expiraçao da sessao)
}))

//file static
app.use(express.static('public'))

//body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso")
    }).catch((error) => {
        console.log("Conexão nao foi feita")
    })

//rotas
app.use("/", categoriesController)
app.use("/", articlesController)
app.use("/", usersController)


app.get("/", (req, res) => {
    Article.findAll({
        order: [['id','DESC']],
        limit: 4
    }).then(articles => {
        Category.findAll().then(categories => {
            res.render("index", {articles: articles, categories: categories})
        })
    }) 
})

app.get("/:slug", (req, res) => {
    let slug = req.params.slug
    Article.findOne({
        where: {
            //Procurar um artigo que tenha o slug informado
            slug: slug
        }
    }).then(article => {
        if (article != undefined){
            Category.findAll().then(categories => {
                res.render("article", {article: article, categories: categories})
            })
        }else{
            res.redirect("/")
        }
    }).catch(err => {
        res.redirect("/")
    })
})

app.get("/category/:slug", (req, res) => {
    let slug = req.params.slug
    Category.findOne({
        where: {
            slug: slug
        },
        include: [{model: Article}]
    }).then( category => {
        if (category != undefined) {
            
            Category.findAll().then(categories => {
                res.render("index", {articles: category.articles, categories: categories})
            })

        }else{
            res.redirect("/")
        }
    }).catch (err => {
        res.redirect("/")
    })

})

app.listen(8080, () => {
    console.log("Server is the working")
})