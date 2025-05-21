function gerarSenha(tamanho) {
   const caracteres = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%"];
   let senha = "";

   for (let i = 0; i < tamanho; i++) {
    const index = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[index];
   }
   return senha;
}
console.log(gerarSenha(10));