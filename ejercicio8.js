const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el tamaño de la pirámide: ", function (respuesta) {

    let n = Number(respuesta);


for (let i = 1; i <= n; i++) {
    let linea = "";

    for (let e = n - i; e > 0; e--) {
        linea += " ";
    }

    for (let j = 1; j <= i; j++) {
        linea += j;
    }

    for (let j = i - 1; j >= 1; j--) {
        linea += j;
    }

console.log(linea);
}

rl.close();
});