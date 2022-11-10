const fs = require('fs');
let texto = "";

fs.readFile('../ficheros/fichero.txt', (err, data) => {
  if (err) throw err;
  texto = data.toString();
  texto = texto.split(" ");
  texto = texto.join("\n");
  console.log(texto);
})