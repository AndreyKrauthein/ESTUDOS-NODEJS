function adminAuth(req, res, next){
    //Se o usuario está logado e autenticado
    if(req.session.user != undefined){
        next()
    }else{ 
        //se o usuario nao estiver logado e autenticado
        res.redirect("/login")
    }
}

module.exports = adminAuth