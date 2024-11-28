export interface Persona{
    nome:string
    vida:number
    força:number
    defesa:number

    atacar(inimigo: Persona): void
    receberDano(dano: number): void
}
