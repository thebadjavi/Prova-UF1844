const express = require('express');
const path = require('path');

// https://www.npmjs.com/package/is-odd
const esNumeroImpar = require('is-odd');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

//app.set('view engine', 'pug');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'formulario.html'));
});

app.post('/', (req, res) => {
    const esImpar = esNumeroImpar(req.body.numero);
    const{numero}=req.body;
    var tagline =" ";
    
    if(esImpar){
    tagline =" Impar";
    }else{
        tagline =" Par";

    }

    res.render("index", {
        tagline: tagline,

        numero: numero
    });
});

app.listen(3000);