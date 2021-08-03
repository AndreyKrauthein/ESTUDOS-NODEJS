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

enviarEmail("Olá pessoal!", "Andrey@gmail.com").then(({time, to}) => {
    console.log("OPAAA, VOCE CONSEGUIU FAZER O QUE ME PROMETEU!!!")
    console.log(`
        time: ${time}
        to: ${to}
    `)
}).catch((error) => {
    console.log(error)
})


//PROMISSE ANINHADA (NÃO USAR COM FREQUENCIA)

// function pegarId(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(5)
//         }, 1500)
//     })
// }

// function buscarEmailNoBanco(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             //Lógica para buscar no banco de dados

//             resolve("andrey@gmail.com")
//         }, 2000)
//     })
// }


// function enviarEmail(corpo, para){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
            
//             var deuErro = false

//             if(!deuErro){
//                 resolve({time: 6, to: "Andrey@gmail.com"}) //promessa OK!!
//             } else {
//                 reject("Fila cheia!") //promessa FALHOU!
//             }


//         }, 4000)
//     })
// }

// pegarId().then((id) => {
//     buscarEmailNoBanco(id).then((email) => {
//         enviarEmail("Olá, como vai?", email).then(() => {
//             console.log("Email enviado, para usuario com id: " + id)
//         }).catch(err => {
//             console.log("Erro")
//         })
//     })
// })