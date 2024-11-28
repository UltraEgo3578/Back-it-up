import { Persona } from "./Personagem";
import { Capoeirista } from "./Capoeirista";
import { PM } from "./PM";
const ask = require ("readline-sync")

let batalha = true
let oponente1 = new Capoeirista("Eddy Gordo")
let oponente2 = new PM("Capitão Nascimento")



while(batalha){
    oponente2.atacar(oponente1)
    while(oponente1.vida>0){
        oponente1.atacar(oponente2)
    }
    while(oponente2.vida>0){
        oponente2.atacar(oponente1)
    }
    
    if(oponente1.vida <= 0){
        console.log(`${oponente1} perdeu para ${oponente2}`)
    } else if(oponente2.vida <= 0){
        console.log(`${oponente2} perdeu para ${oponente1}`)
    }
}