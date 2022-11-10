const express = require('express');

function rollDice(caras = 6){
    const min = 1;
    const max = caras;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const app = express();

app.get('/rollDice', (req, res) => {
    res.json({tirada : rollDice()});
})

app.get('/rollDice/:caras', (req, res) => {
    const caras = req.params.caras
    res.json({tirada : rollDice(caras)});
})

app.listen(3000, console.log("Estoy ecuchando en el puerto 3000"));


