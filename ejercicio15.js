let n = 5;

for (let i = 0; i < 2 * n - 1; i++) {
    let fila = i < n ? i : 2 * n - 2 - i;
    let linea = "";

    for (let e = 0; e < n - fila - 1; e++) {
        linea += " ";
    }

    for (let j = 0; j < 2 * fila + 1; j++) {
        linea += "*";
    }

    console.log(linea);
}