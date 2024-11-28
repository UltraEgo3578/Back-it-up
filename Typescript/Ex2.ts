class Animal{
    //
    nome:string
    idade:number
    //constructor para inicializar o nome e idade
    constructor(nome:string, idade:number){
        this.nome = nome
        this.idade = idade
        public emitirSom():void{
            console.log(`${this.nome} está fazendo um som`)
        }
        public exibirInfo():void{
            console.log(`Nome: ${this.nome}, Idade: ${this.idade} anos`)
        }
    }
    
}
class Cachorro extends Animal{
    private raca:string
    constructor(nome:string, idade:number, raca:string){
        super(nome,idade)
        this.raca = raca
    }
    public emitirSom():void{
        super.exibirInfo
        console.log(`Raça: ${this.raca}`)
    }
}
const meuCachorro = new Cachorro("Leleco", 5, "pincher")
meuCachorro.exibirInfo()
meuCachorro.emitirSom()