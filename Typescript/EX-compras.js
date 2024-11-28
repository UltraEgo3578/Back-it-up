/*const ask = require("readline-sync")

let num1 = Number(ask.question("Digite um numero: "))
console.log(num1,typeof num1)
*/
class Produtos{
    constructor(valor,quantidade){
        this.valor = valor
        this.quantidade = quantidade
    }
    comprarProduto(){

    }
    verCarrinho(){

    }
    calcularValorTotal(){

    }
    pagar(){

    }
}

class Livro extends Produtos{
    constructor(valor,quantidade){
        super(valor,quantidade)

    }
}

class Eletronico extends Produtos{
    constructor(valor,quantidade){
        super(valor,quantidade)

    }
}

class Alimento extends Produtos{
    constructor(valor,quantidade){
        super(valor,quantidade)

    }
}