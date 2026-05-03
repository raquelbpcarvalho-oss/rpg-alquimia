import { Personagem } from "./Personagem.js";

export class Mago extends Personagem {// Mago HERDA de Personagem
    // atributos privados exclusivos do Mago
    #mana;
    #manaMaxima;

    constructor(nome, vidaMaxima, forca, manaMaxima = 50) {
        super(nome, vidaMaxima, forca);// chama a classe base
        this.#manaMaxima = manaMaxima; // inicializa mana cheia
        this.#mana = manaMaxima;
    }

    // getters para acessar mana
    get mana() {
        return this.#mana;
    }

    get manaMaxima() {
        return this.#manaMaxima;
    }

    // ataque mágico
    atacar(alvo) {
        if (this.#mana < 10) { // validação de recurso
            throw new Error("Mana insuficiente");
        }

        this.#mana -= 10;

        const dano = this.forca * 1.5;
        console.log(`🔮 ${this.nome} lançou uma magia poderosa!`);
        alvo.receberDano(dano);
    }

    // habilidade exclusiva: cura
    lancarCura(alvo) {
        if (this.#mana < 15) {
            throw new Error("Mana insuficiente");
        }


        this.#mana -= 15;
        console.log(`✨ ${this.nome} curou ${alvo.nome}!`);
        alvo.curar(20);// reutiliza método da classe base
    }

    //  recuperar mana
    meditar() {
        this.#mana = Math.min(this.#mana + 20, this.#manaMaxima);
        console.log(`🧘 ${this.nome} recuperou mana.`);
    }
}