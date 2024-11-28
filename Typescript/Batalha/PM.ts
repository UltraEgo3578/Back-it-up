import { Persona } from "./Personagem";

export class PM implements Persona{
    nome:string
    vida:number
    força:number
    defesa:number
    constructor(nome:string){
        this.nome = nome
        this.vida = 2000
        this.força = 15
        this.defesa = 20
    }
    atacar(inimigo: Persona): void {
        const dano = this.força - inimigo.defesa
        if(dano>0){
            inimigo.receberDano(dano)
        }
    }
    receberDano(dano: number): void {
        this.vida -= dano
        if(this.vida < 0) this.vida = 0
    }
}