const prompt = require('prompt-sync')();
const numeroSecreto = 1;
let tentativas = 0;

while (tentativas < 5) {
    const chute = parseInt(prompt("Digite um número entre 1 e 10:"));
    
    // Validação do input
    if (isNaN(chute) || chute < 1 || chute > 10) {
        console.log("Por favor, digite um número válido entre 1 e 10.");
        continue; // Volta ao início do loop sem contar como tentativa
    }
    
    tentativas++; // Incrementa antes para calcular tentativas restantes corretamente
    
    if (chute === numeroSecreto) {
        console.log("Parabéns! Você acertou o número secreto.");
        break;
    } else {
        console.log(`Tente novamente! Você ainda tem ${5 - tentativas} tentativas restantes.`);
    }
}

// Verifica se o usuário esgotou as tentativas sem acertar
if (tentativas >= 5) {
    console.log(`Game over! O número secreto era ${numeroSecreto}.`);
}