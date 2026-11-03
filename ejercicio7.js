let n = 5;

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
