removerDuplicados([1, 2, 2, 3, 4, 4, 5]); 
// Deve retornar [1, 2, 3, 4, 5]

function removerDuplicados(array) {
    return [...new Set(array)];
}

console.log(removerDuplicados([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removerDuplicados(["a", "b", "a", "c", "b"])); // ["a", "b", "c"]