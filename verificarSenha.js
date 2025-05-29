function verificarSenha(senha) {
    if (senha.length < 8) {
        return "Senha muito curta (mínimo 8 caracteres)";
    } else {
        return "Senha muito grande";
    }
}

console.log(verificarSenha("Kmzwa8awaa"));
