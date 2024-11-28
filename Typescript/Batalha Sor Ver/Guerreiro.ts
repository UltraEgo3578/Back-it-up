import { Personagem } from "./Personagem";

export class Guerreiro implements Personagem{
    private nome: string
    private vida: number
    private força: number
    private defesa: number
    constructor(nome:string){
        this.nome = nome
        this.vida = 20
        this.força = 10
        this.defesa = 5
    }

    public getNome(): string{
        return this.nome
    }

    public setNome(nome: string){
        this.nome = nome
    }

    public getForça(): number {
        return this.força
    }

    public setForça(forca: number): void {
        this.força = forca
    }

    public getVida(): number {
        return this.vida
    }

    public setVida(vida: number): void {
        this.vida = vida
    }

    public getDefesa(): number {
        return this.defesa
    }

    public setDefesa(defesa: number): void {
        this.defesa = defesa
    }

    public receberDano(dano: number): void {
        this.vida -= dano
    }

    public atacar(inimigo: Personagem): void {
        inimigo.receberDano(this.força - inimigo.getDefesa())
    }
}