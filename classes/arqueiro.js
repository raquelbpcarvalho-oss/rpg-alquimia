import { Personagem } from "./Personagem.js";

export class Arqueiro extends Personagem {// Arqueiro HERDA de Personagem
    // atributos privados exclusivos do Arqueiro
    #flechas;
    #chanceCritico;

    constructor(nome, vidaMaxima, forca, flechas = 20) {
        super(nome, vidaMaxima, forca);
        this.#flechas = flechas; // quantidade inicial de flechas
        this.#chanceCritico = 0.25;// chance de crítico (25%)
    }

    get flechas() {
        return this.#flechas;
    }

    get chanceCritico() {
        return this.#chanceCritico;
    }

    // sobrescrita do ataque
    atacar(alvo) {
        if (this.#flechas <= 0) {
            throw new Error("Sem flechas");
        }

        this.#flechas--;

        let dano;

        // chance de crítico
        if (Math.random() < this.#chanceCritico) {
            dano = this.forca * 2;
            console.log("💥 CRÍTICO!");
        } else {
            dano = this.forca;
        }

        console.log(`🏹 ${this.nome} disparou uma flecha!`);
        alvo.receberDano(dano);
    }

    //  método exclusivo para recarregar flechas
    recarregarFlechas(qtd) {
        this.#flechas += qtd;
        console.log(`🏹 ${this.nome} recarregou ${qtd} flechas.`);
    }
}