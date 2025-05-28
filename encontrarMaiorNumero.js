/* maiorNumero([3, 7, 1, 9, 4]); // Deve retornar 9
maiorNumero([-10, -5, -2, -20]); // Deve retornar -2


function encontrarMaior(numero) {
    let maior = numero[0];

    for (let i = 1; i < numero.length; i++) {
        if (numero[i] > maior) {
            maior = numero[i];
        }
    } return maior;
}

console.log(encontrarMaior([3, 7, 1, 9, 4])); */


function encontrarMaior(numero) {
    let maior = numero[0];

    for (let i = 1; i < numero.length; i++) {
        if (numero[i] > maior) {
            maior = numero[i];
        }
    }
    return maior;
}

// Testes:
console.log(encontrarMaior([3, 7, 1, 9, 4]));       // Deve retornar 9
console.log(encontrarMaior([-10, -5, -2, -20]));    // Deve retornar -2
