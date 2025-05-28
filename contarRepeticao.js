

function contar(palavra) {
    let resultado = {};
    for (let letra of palavra) {
        if (resultado[letra]) {
            resultado[letra]++;
        } else {
            resultado[letra] = 1;
        }
    }
    return resultado;
}

console.log(contar("banana")); 
// Esperado: { b: 1, a: 3, n: 2 }