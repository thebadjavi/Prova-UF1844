const express = require('express');
const dniValidator = require('spain-id');
 
 
console.log('Funciones de este módulo:', dniValidator);

const app = express();
app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/formulario.html");
})

app.post('/', (req, res) => {
    const dni = req.body.DNI;
    
     console.log("dni "+dni)
     verdadero=dniValidator.validateSpanishId(dni)
     console.log("verdadero "+verdadero)

     
    if (dniValidator.validateSpanishId(dni)) {
        res.send("El número de identificación es válido");
    }

    else {
        res.send("El número de identificación <strong>NO</strong> es válido");
    }
})
app.listen(3000, () => {
    console.log("Servidor funcionando correctamente.");
});