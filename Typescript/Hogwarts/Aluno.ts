export class Aluno{
    nome: string
    idade: number
    nacionalidade: string
    casa: string|null
    classeMagica: string
    constructor(nome: string,idade: number,nacionalidade: string){
        this.nome = nome
        this.idade = idade
        this.nacionalidade = nacionalidade
        this.casa = ""
        this.classeMagica = ""
    }
    
    private getNome(): string{
        return this.nome
    }
    private setNome(nome: string){
        this.nome = nome
    }

    private getIdade():number{
        return this.idade
    }
    private setIdade(idade: number):void{
        this.idade = idade
    }

    private getNacionalidade():string{
        return this.nacionalidade
    }
    private setNacionalidade(nacionalidade: string):void{
        this.nacionalidade = nacionalidade
    }

    private getCasa():string|null{
        return this.casa
    }
    private setCasa(casa: string):void{
        this.casa = casa
    }

    private getCMagica():string{
        return this.classeMagica
    }
    private setCMagica(classeMagica: string):void{
        this.classeMagica = classeMagica
    }

    sortearCasa(){
        let sortear: Array<string> = ["Gryffindor","Hufflepuff","Ravenclaw","Slytherin"]
        let sorteioCasas: string = sortear[Math.floor(Math.random() * sortear.length)]

        switch(sorteioCasas){
            case "Gryffindor":
                console.log("Sua Casa Será: Gryffindor!!!")
                break
            case "Hufflepuff":
                console.log("Sua Casa Será: Hufflepuff!!!")
                break
            case "Ravenclaw":
                console.log("Sua Casa Será: Ravenclaw!!!")
                break
            case "Slytherin":
                console.log("Sua Casa Será: Slytherin!!!")
                break        
        }
    }

    exibirInformaçoes():void{
        console.log(`|Nome: ${this.nome}\n|Idade: ${this.idade}\n|Nacionalidade: ${this.nacionalidade}\n|Casa: ${this.casa}\n|Classe: ${this.classeMagica}`)
    }

    
}