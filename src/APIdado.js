const express = require('express')

function rollDice(){
    const min = 1;
    const max = 6;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const app = express();

app.get('/rollDice', (req, res) => {
    res.json({tirada : rollDice()})
})

app.listen(3000, console.log("Estoy ecuchando en el puerto 3000"))

