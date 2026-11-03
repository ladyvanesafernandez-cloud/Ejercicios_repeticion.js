let n = 5;

for (let i = 1; i <= n; i++) {
    let linea = "";
    for (let e = n - i; e > 0; e--) {
        linea += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        linea += "*";
    }
console.log(linea);
}


for (let i = n - 1; i >= 1; i--) {
    let linea = "";
    for (let e = n - i; e > 0; e--) {
        linea += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        linea += "*";
    }
 console.log(linea);
}