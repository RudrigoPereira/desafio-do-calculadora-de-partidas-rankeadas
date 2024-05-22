function calcularVitorias(vitorias, derrotas) {
    // Calculando o saldo de vitórias
    return vitorias - derrotas;
}

function calcularRank(saldoDeVitorias) {
    // Determinando o nível do jogador
    if (saldoDeVitorias <= 10) {
        return 'Ferro';
    } else if (saldoDeVitorias <= 20) {
        return 'Bronze';
    } else if (saldoDeVitorias <= 50) {
        return 'Prata';
    } else if (saldoDeVitorias <= 80) {
        return 'Ouro';
    } else if (saldoDeVitorias <= 90) {
        return 'Diamante';
    } else if (saldoDeVitorias <= 100) {
        return 'Lendário';
    } else {
        return 'Imortal';
    }
}

// Exemplo de uso da função
const vitorias = 45;
const derrotas = 10;
const saldoDeVitorias = calcularVitorias(vitorias, derrotas)
const nivel = calcularRank(saldoDeVitorias);

// Exibindo a mensagem final
console.log(`O Herói tem saldo de ${saldoDeVitorias} está no nível de ${nivel}`);
