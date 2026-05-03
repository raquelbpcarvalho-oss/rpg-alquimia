export class Personagem {
    // Atributos privados: só podem ser acessados dentro desta classe
    #nome;
    #vida;
    #vidaMaxima;
    #nivel;
    #forca;

    constructor(nome, vidaMaxima, forca) {
        // trim() remove espaços antes/depois do nome
        this.#nome = nome.trim();
        this.#vidaMaxima = vidaMaxima; // vida máxima define o limite de vida do personagem
        this.#vida = vidaMaxima; // vida começa cheia
        this.#nivel = 1;// todo personagem começa no nível 1
        this.#forca = forca;// força será usada para calcular dano
    }

    // Getters: permitem ler os atributos privados com segurança
    get nome() { return this.#nome; }
    get vida() { return this.#vida; }
    get vidaMaxima() { return this.#vidaMaxima; }
    get nivel() { return this.#nivel; }
    get forca() { return this.#forca; }

    // apenas calcula se a vida é maior que zero
    get estaVivo() {
        return this.#vida > 0;
    }
    // Nas classes filhas, esse método será sobrescrito
    atacar(alvo) {
        alvo.receberDano(this.#forca);
        console.log(`⚔️ ${this.#nome} atacou ${alvo.nome} com energia espiritual.`);
    }

    // Reduz a vida do personagem
    receberDano(dano) {
        this.#vida = Math.max(0, this.#vida - dano);// Math.max impede que a vida fique negativa

        if (!this.estaVivo) {
            console.log(`💀 ${this.#nome} caiu em batalha.`);
        }
    }

    // Recupera vida sem passar do limite da vida máxima
    curar(quantidade) {
        this.#vida = Math.min(this.#vida + quantidade, this.#vidaMaxima);
        console.log(`✨ ${this.#nome} recuperou ${quantidade} de vida.`);
    }

    // Aumenta nível, vida máxima e força
    subirNivel() {
        this.#nivel++;
        this.#vidaMaxima += 10;
        this.#forca += 2;
        this.#vida = this.#vidaMaxima;// Ao subir de nível, a vida volta ao máximo

        console.log(`🌙 ${this.#nome} elevou seu poder espiritual para o nível ${this.#nivel}.`);
    }

    // Mostra o estado atual do personagem no console
    exibirStatus() {
        console.log(
            `🌌 ${this.#nome} | Vida: ${this.#vida}/${this.#vidaMaxima} | Nível: ${this.#nivel} | Força: ${this.#forca}`
        );
    }
}