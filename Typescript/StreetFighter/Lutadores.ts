import { Personagem } from "./Personagem";


export class Ryu extends Personagem{
    constructor(){
        super("Ryu", 100, "Japão", "Karate")
    }
    golpeLeve(): number { return calcularDano(5, 15, 'leve') }
    golpePesado(): number { return calcularDano(15, 30, 'pesado') }
    golpeEspecial(): number { return calcularDano(30, 50, 'especial') }
}

export class Ken extends Personagem{
    constructor(){
        super("Ken", 100, "EUA", "Karate")
    }
    golpeLeve(): number { return calcularDano(5, 15, 'leve') }
    golpePesado(): number { return calcularDano(15, 30, 'pesado') }
    golpeEspecial(): number { return calcularDano(30, 50, 'especial') }
}

export class Blanca extends Personagem{
    constructor(){
        super("Blanka", 100, "BR", "Capoeira")
    }
    golpeLeve(): number { return calcularDano(5, 15, 'leve') }
    golpePesado(): number { return calcularDano(15, 30, 'pesado') }
    golpeEspecial(): number { return calcularDano(30, 50, 'especial') }
}

export class Zangief extends Personagem{
    constructor(){
        super("Zangief", 100, "Russia", "Luta de rua")
    }
    golpeLeve(): number { return calcularDano(5, 15, 'leve') }
    golpePesado(): number { return calcularDano(15, 30, 'pesado') }
    golpeEspecial(): number { return calcularDano(30, 50, 'especial') }
}

export class Honda extends Personagem{
    constructor(){
        super("Honda", 100, "Japão", "Sumo")
    }
    golpeLeve(): number { return calcularDano(5, 15, 'leve') }
    golpePesado(): number { return calcularDano(15, 30, 'pesado') }
    golpeEspecial(): number { return calcularDano(30, 50, 'especial') }
}

export class Bison extends Personagem{
    constructor(){
        super("Bison", 100, "Tailandia", "Psycho Power")
    }
    golpeLeve(): number { return calcularDano(5, 15, 'leve') }
    golpePesado(): number { return calcularDano(15, 30, 'pesado') }
    golpeEspecial(): number { return calcularDano(30, 50, 'especial') }
}

export class Cammy extends Personagem{
    constructor(){
        super("Cammy", 100, "inglaterra", "Treinamento Delta Red")
    }
    golpeLeve(): number { return calcularDano(5, 15, 'leve') }
    golpePesado(): number { return calcularDano(15, 30, 'pesado') }
    golpeEspecial(): number { return calcularDano(30, 50, 'especial') }

}
export class DeeJay extends Personagem{
    constructor(){
        super("Dee Jay", 100, "Jamaica", "Kickboxing")
    }
    golpeLeve(): number { return calcularDano(5, 15, 'leve') }
    golpePesado(): number { return calcularDano(15, 30, 'pesado') }
    golpeEspecial(): number { return calcularDano(30, 50, 'especial') }
}
