function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 1500)
    })
}

function buscarEmailNoBanco(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            //Lógica para buscar no banco de dados

            resolve("andrey@gmail.com")
        }, 2000)
    })
}


function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            var deuErro = false

            if(!deuErro){
                resolve({time: 6, to: "Andrey@gmail.com"}) //promessa OK!!
            } else {
                reject("Fila cheia!") //promessa FALHOU!
            }


        }, 4000)
    })
}

function pegarUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: "Andrey", lang:"JS"},
                {name: "Vic", lang:"C#"},
                {name: "Daniel", lang:"Python"}
            ])
        }, 3000);
    })
}

async function principal(){
   var id = await pegarId()
   var email = await buscarEmailNoBanco(id)
//    enviarEmail("Olá pessoal", email).then(() => {
//     console.log("Email enviado, para usuario com id: " + id)
//    }).catch((err) => {
//        console.log(err)
//    })
    try {
        await enviarEmail("Olá, como vai?", email)
    } catch(erro) {
        console.log(erro)
    }
  
}

principal()
