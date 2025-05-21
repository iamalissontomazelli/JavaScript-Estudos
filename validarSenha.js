function validarSenha(senha) {
    if (senha.length < 8){
        return "Senha inválida";
    }
    const temMaiuscula = /[A-Z]/.test(senha);
    if (!temMaiuscula) {
        return "Senha inválida";
    }
    const temNumero = /\d/.test(senha);
    if (!temNumero){
        return "Senha inválida";
    }
    return "Senha válida";
}
console.log(validarSenha("Teste1"));    // Senha inválida (menos de 8 caracteres)
console.log(validarSenha("Senha123"));  // Senha válida
console.log(validarSenha("senha"));     // Senha inválida
console.log(validarSenha("SENHA"));     // Senha inválida
console.log(validarSenha("senha123"));  // Senha inválida

