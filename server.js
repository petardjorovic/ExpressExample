const express = require('express');
const { authentification, sayMiddleware } = require('./middleware');

const PORT = 3000;

const app = express();

// app.use('/', express.static(__dirname + '/public')); 
app.use(express.static(__dirname + '/public')); // ne treba ti cak ni ruta kad definises public dir

// app.use('/', express.static(__dirname + '/public')); // moze * umesto /
app.use(express.urlencoded({extended:true}));

app.get('*',sayMiddleware) // na svaku rutu

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.get('/contact', (req,res)=>{
    res.sendFile(__dirname + '/contact.html');
})

app.post('/contact', authentification,(req,res)=>{    // mozes da imas iste rute ali pristupas njima razlicitim metodama
    res.send('<h1>Uspesno ste se logovali</h1>');
})

app.listen(PORT, ()=>{
    console.log(('Listening on PORT ' + PORT + '....'));
})