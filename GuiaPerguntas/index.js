const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")
const Pergunta = require("./database/Pergunta") //roda automaticamente sem precisar chamar
const Resposta = require("./database/Resposta")

//Database
connection
    .authenticate()
    //ESTRUTURA PROMISSE
    //vai fazer se der certo a conexão com banco de dados
    .then(() => {
        console.log("Conexão feita com banco de dados")
    })
    //se nao der certo
    .catch((msgErro) => {
        console.log("A conexao com banco de dados nao foi feita")
    })

//Estou dizendo para express usar o ejs como View Engine
app.set("view engine", "ejs")

//Arquivos estáticos
app.use(express.static("public"))

//instalar body parser, ele permite pegar informações e trazer para o backend
//Configurando bodyparser
app.use(bodyParser.urlencoded({urlencoded: false}))
//ler em forma json
app.use(bodyParser.json())


//rotas
app.get("/", (req, res) => {
    Pergunta.findAll({raw: true, order: [
        ['id','DESC'] //ASC = CRESCENTE || DESC = DECRESCENTE
    ]}).then(perguntas => {
        res.render("index", {
            perguntas: perguntas
        })
    })
   

})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

app.post("/salvarpergunta", (req, res) => {
    const titulo = req.body.titulo
    const descricao = req.body.descricao
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        //quando fazer a pergunta vai ser redirecionado para home
        res.redirect("/")
    })
})

app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id
    Pergunta.findOne({
        //Onde id na pergunta for igual o id da var
        where: {id: id}
    }).then( pergunta => {
        if (pergunta != undefined){ //Pergunta achada

            Resposta.findAll({
                where: {perguntaID: pergunta.id},
                order: [
                    ['id','DESC']
                ]
            }).then(respostas => {
                res.render("pergunta", {
                    pergunta: pergunta,
                    respostas: respostas
                })
            })
        }else{ //Pergunta nao encontrada
            res.redirect("/")
        }
    })
})

app.post("/responder", (req, res) => {
    let corpo = req.body.corpo
    let perguntaId = req.body.pergunta
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect("/pergunta/"+ perguntaId)
    })
})

app.listen(8080,() =>{
    console.log("App rodando!")
})
