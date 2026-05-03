import { Personagem } from "./Personagem.js";

export class Guerreiro extends Personagem { // Guerreiro HERDA tudo de Personagem
    #armadura;// atributo privado exclusivo do Guerreiro

    constructor(nome, vidaMaxima, forca, armadura = 10) {
        super(nome, vidaMaxima, forca);// chama o constructor da classe base
        this.#armadura = armadura;// inicializa a armadura
    }

    get armadura() {// getter para acessar a armadura
        return this.#armadura;
    }

    //  ataque mais forte
    atacar(alvo) {
        const dano = this.forca * 1.2;// dano maior que o padrão
        console.log(`🛡️ ${this.nome} desferiu um golpe poderoso!`);
        alvo.receberDano(dano);
    }

    //  reduz dano recebido
    receberDano(dano) {
        // reduz o dano com base na armadura
        const danoFinal = Math.max(0, dano - this.#armadura);
        console.log(`🛡️ ${this.nome} reduziu o dano para ${danoFinal}`);
        super.receberDano(danoFinal);// chama o método da classe base para aplicar o dano real
    }

    //  habilidade especial do guerreiro: defesa
    defesa() {
        this.#armadura *= 2;
        console.log(`🧱 ${this.nome} entrou em posição de defesa! Armadura dobrada.`);
    }
}