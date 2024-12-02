import { Aluno } from "./Aluno";
const ask = require ("readline-sync")

function Menu(){
    let alunos = []
    let sustentaMenu: boolean = true
    while(sustentaMenu){
        console.clear()
        console.log(`
        Bem Vindo a HogWarts!

        [1] Cadastrar Aluno
        [2] Ver Alunos Cadastrados
        [3] Editar Alunos
        [4] Deletar Alunos
        [0] Sair
        `)
        let opcaoUsuario = ask.question("Escolha uma opção: ")
        switch(opcaoUsuario){
            case 1:
                //
                break
            case 2:
                //
                break
            case 3:
                //
                break
            case 4:
                //
                break
            default:
                ask.question("Opção Invalida")                
        }
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
function cadastrarAluno(){
    console.clear()
    const classesMagicas = ["Feitiçaria e Encantamentos", "Poções", "Transfiguração", "Defesa Contra as Artes das Trevas", "Herbologia", "Astronomia", "História da Magia", "Cuidado de Criaturas Mágicas", "Voo", "Magia Experimental", "Divinação", "Runas Antigas".]
    
    let nome: string = ask.question("Qual o nome do Aluno que gostaria de inscrever?")
    let idade: string = ask.question("Qual a Idade deste Aluno?")
    let nacionalidade: string = ask.question("E sua Nacionalidade?")
    console.clear()
    
    let sustentamenuClasse = true
    while(sustentamenuClasse){
        console.log("Escolha a classe magica do aluno:")
        let enumeracao = 1
        for(let classe of classesMagicas){
            console.log(`${enumeracao} - ${classe}`)
            enumeracao++
        }
        let classeUsuario = Number(ask.question("Escolha uma opcao: "))
        let classeMagica: string

        switch (classeUsuario) {
            case 1:
                classeMagica = classesMagicas[0];
                break;
            case 2:
                classeMagica = classesMagicas[1];
                break;
            case 3:
                classeMagica = classesMagicas[2];
                break;
            case 4:
                classeMagica = classesMagicas[3];
                break;
            case 5:
                classeMagica = classesMagicas[4];
                break;
            case 6:
                classeMagica = classesMagicas[5];
                break;
            case 7:
                classeMagica = classesMagicas[6];
                break;
            case 8:
                classeMagica = classesMagicas[7];
                break;
            case 9:
                classeMagica = classesMagicas[8];
                break;
            case 10:
                classeMagica = classesMagicas[9];
                break;
            case 11:
                classeMagica = classesMagicas[10];
                break;
            case 12:
                classeMagica = classesMagicas[11];
                break;
            default:
                console.log("Opção inválida! Tente novamente.");
    }
    sustentamenuClasse = false;
}
    console.log("\nAluno cadastrado com sucesso!");
    console.log(`Nome: ${nome}`);
    console.log(`Idade: ${idade}`);
    console.log(`Nacionalidade: ${nacionalidade}`);
    console.log(`Classe Mágica Escolhida: ${classesMagicas}`);

function verAluno() {
    let ver: string = ask.question("Digite o nome do Aluno que você quer ver")
}

function editarAluno(){
    
}