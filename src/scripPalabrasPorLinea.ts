declare var require: any
const fs = require('fs');
let texto:String = "";

fs.readFile('../ficheros/fichero.txt', (err:string, data:string) => {
  if (err) throw err;
  texto = data.toString();
  const textoSeparado: string[] = texto.split(" ");
  texto = textoSeparado.join("\n");
  console.log(texto);
})