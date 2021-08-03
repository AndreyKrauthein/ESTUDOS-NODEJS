function enviarEmail(corpo, para, callback){
    setTimeout(() => {


        var deuErro = false
        if (deuErro){
            callback(12, "O Envio do e-mail falhou!");
        } else {
            callback(12);
        }

        
    }, 2000);
}

console.log("Inicio do envio do email")
enviarEmail("Oi, seja bem vindo ao guia", "andrey.lemos@hotmail.com.br", (time, erro) => {
    if (erro == undefined){ // OK!
        console.log("TUDO OK!")
        console.log("TEMPO: " + time)
    } else { // DEU ERRO!
        console.log("Ocorreu um erro: " + erro)
    }
})


