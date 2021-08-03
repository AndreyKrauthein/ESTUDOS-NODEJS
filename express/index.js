const express = require("express") //importando o express
const app = express() //iniciando o expres

//criando as rotas
app.get("/", function(requisiçao, resposta) { 
    resposta.send('Bem vindo a minha aplicaçao')
}) 

app.get("/blog/:artigo?", function(req, res){
    //PARAMETRO OPCIONAl
    
    const artigo = req.params.artigo
    if (artigo){
        res.send("Artigo: " + artigo)
    } else {
        res.send("Bem vindo ao meu blog")
    }
})

app.get("/canal/youtube", function(req, res){
    const canal = req.query['canal']
    if (canal){
        res.send(canal)
    }else{
        res.send("nenhum canal")
    }
    
})

app.get("/ola/:nome/:empresa", function (req, res) {
    //PARAMETRO OBRIGATÓRIO
    //REQ => SAO DADOS ENVIADOS PELO USUARIO
    //RES => RESPOSTA ENVIADA PARA O USUARIO

    nome = req.params.nome
    empresa = req.params.empresa
    res.send("<h1> Oi " + nome + " da " + empresa + " </h1>")
    
})


//Criar um servidor
app.listen(5000, function(erro){ 
    if(erro){
        console.log("aconteceu um erro")
    } else {
        console.log ("servidor iniciado")
    }
})


