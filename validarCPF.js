// GERAR OS 9 DÍGITOS INICIAIS DO CPF
function gerarCPFBase() {
    const cpf = []; 
    for (let i = 0; i < 9; i++) {
        cpf.push(Math.floor(Math.random() * 10));
    }
    return cpf;
}

// CALCULAR O 1º DÍGITO VERIFICADOR
function calcularPrimeiroDigito(cpf) {
    let soma = 0; 
    for (let i = 0; i < 9; i++) {
        soma += cpf[i] * (10 - i);
    }
    const resto = soma % 11; 
    return resto < 2 ? 0 : 11 - resto; 
}

// CALCULAR O 2º DÍGITO VERIFICADOR
function calcularSegundoDigito(cpf) {
    let soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += cpf[i] * (11 - i);
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
}

// GERAR CPF COMPLETO
function gerarCPFCompleto() {
    const cpfBase = gerarCPFBase(); 
    const d1 = calcularPrimeiroDigito(cpfBase); 
    cpfBase.push(d1); 
    const d2 = calcularSegundoDigito(cpfBase); 
    cpfBase.push(d2);

    return cpfBase.join(""); // retorna como string
}

console.log("CPF Gerado:", gerarCPFCompleto());


 