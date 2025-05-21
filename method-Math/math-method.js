function gerarEmail(nome) {
    const email = nome.toLowerCase().replace(" ",".") + "@hotmail.com";
    return email;
    }

console.log(gerarEmail("Alisson Tomazelli"));