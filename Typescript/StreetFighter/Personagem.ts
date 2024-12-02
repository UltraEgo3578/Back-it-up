export class Personagem{
    nome: string
    vida: number
    nacionalidade: string
    estiloDeLuta: string
    golpeEspecialUsadoFlag: boolean
    constructor(nome: string, vida: number, nacionalidade: string, estiloDeLuta: string){
        this.nome = nome
        this.vida = vida
        this.nacionalidade = nacionalidade
        this.estiloDeLuta = estiloDeLuta
        this.golpeEspecialUsadoFlag = false
    }
    getNome(): string{
        return this.nome
    }
    setNome(nome: string){
        this.nome = nome
    }

    getVida(): number{
        return this.vida
    }
    setVida(vida: number){
        this.vida = vida
    }
    
    getNacionalidade(): string{
        return this.nacionalidade
    }
    setNacionalidade(nacionalidade: string){
        this.nacionalidade = nacionalidade
    }
    
    getEstiloDeLuta(): string{
        return this.estiloDeLuta
    }
    setEstiloDeLuta(estiloDeLuta: string){
        this.estiloDeLuta = estiloDeLuta
    }


    golpeLeve(): number { return calcularDano(5, 15, 'leve') }
    golpePesado(): number { return calcularDano(15, 30, 'pesado') }
    golpeEspecial(): number { return calcularDano(30, 50, 'especial') }

    usarGolpeEspecial(): void { this.golpeEspecialUsadoFlag = true }
    golpeEspecialUsado(): boolean { return this.golpeEspecialUsadoFlag }
}