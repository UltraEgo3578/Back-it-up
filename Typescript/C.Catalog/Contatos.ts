export class Contatos{
    private nome: string
    private telefone: number
    private email: string
    constructor(nome: string, telefone: number, email: string){
        this.nome = nome
        this.telefone = telefone
        this.email = email
    }
    private getNome(): string{
        return this.nome
    }
    private setNome(nome:string):void{
        this.nome = nome
    }

    private getTelefone(): number{
        return this.telefone
    }
    private setTelefone(telefone:number):void{
        this.telefone = telefone
    }

    private getEmail(): string{
        return this.email
    }
    private setEmail(email:string):void{
        this.email = email
    }

    editarContato(nome: string, telefone: number, email: string){
        let editar:boolean = true 
        switch(editar){
            case true:
        }
    }
    mostrarContato(){
        
    }

}