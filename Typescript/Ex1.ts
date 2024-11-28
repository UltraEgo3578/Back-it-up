// criando uma class "Pessoa"
class  Pessoa{
    nome:string
    idade:Number
    constructor(nome:string, idade:Number){
        this.nome = nome
        this.idade = idade
    }
    apresentar():void{
        console.log(`Olá cpx, meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
        
    }
}
const pessoal = new Pessoa("Ichigo",78)
pessoal.apresentar()