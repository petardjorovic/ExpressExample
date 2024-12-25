const users = require('./users.json');

function authentification(req,res,next){
    let { username, password } = req.body;
    let checkedUser = users.find(user => user.username === username && user.password === password);
    if(checkedUser){
        next()
    }else{
        res.redirect('/')
    }
}

function sayMiddleware(req,res,next){
    console.log("Hello from Middleware!");
    next()
}

module.exports = { authentification, sayMiddleware };