var http = require("http")

http.createServer(function(requisiçao, resposta) {
    resposta.end("<h1>Bem vindo ao meu site!</h1><h4>Andrey gostoso</h4>")
}).listen(50)
console.log('Meu servidor está rodando')
