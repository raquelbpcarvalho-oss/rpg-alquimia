import { Guerreiro } from "./classes/Guerreiro.js";
import { Mago } from "./classes/Mago.js";
import { Arqueiro } from "./classes/Arqueiro.js";

// Criação dos objetos/personagens
const jangUk = new Guerreiro("Jang Uk", 100, 20, 15);
const inimigo = new Guerreiro("Inimigo", 200, 10, 5);
const naksu = new Mago("Naksu", 80, 15, 100);
const dangGu = new Arqueiro("Dang-gu", 90, 18, 5);

// TESTE DO GUERREIRO
console.log("=== TESTE DO GUERREIRO ==="); //

jangUk.exibirStatus();

jangUk.atacar(inimigo);
inimigo.exibirStatus();

inimigo.atacar(jangUk);
jangUk.exibirStatus();

jangUk.defesa();
inimigo.atacar(jangUk);
jangUk.exibirStatus();

// TESTE DO MAGO
console.log("=== TESTE DO MAGO ==="); //divisão visual para facilitar os testes

naksu.exibirStatus();

naksu.atacar(inimigo);
inimigo.exibirStatus();

naksu.lancarCura(jangUk);
jangUk.exibirStatus();

naksu.meditar();

console.log("Mana atual:", naksu.mana);

// TESTE DO ARQUEIRO
console.log("=== TESTE DO ARQUEIRO ==="); //difisal visual de testar por causa das flechas limitadas

dangGu.exibirStatus();

try {
    while (true) {// força o arqueiro atacar até acabar as flechas
        dangGu.atacar(inimigo);
    }
} catch (erro) {
    console.log("Erro:", erro.message);
}

console.log("Flechas restantes:", dangGu.flechas);

dangGu.recarregarFlechas(10);

console.log("Flechas após recarga:", dangGu.flechas);