ehPalindromo("arara"); // true
ehPalindromo("banana"); // false
ehPalindromo("Radar"); // true (mesmo com letra maiúscula)


function ehPalindromo(palavra) {
    let original = palavra.toLowerCase()
    let invertida = original.split("").reverse().join("")


    return original === invertida;
}

console.log(ehPalindromo("arara"));   // true
console.log(ehPalindromo("banana"));  // false
console.log(ehPalindromo("Radar"));   // true