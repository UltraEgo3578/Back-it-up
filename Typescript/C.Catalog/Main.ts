const ask = require('readline-sync');

let sustentaMenu = true;
while (sustentaMenu) {
  console.log("Escolha uma opção:");
  console.log("1 - Adicionar contato");
  console.log("2 - Remover contato");
  console.log("3 - Listar todos os contatos");
  console.log("4 - Buscar contato");
  console.log("5 - Editar contato");
  console.log("6 - Sair");
  
  const opcao = ask.question("Digite a opção desejada: ");
  
  switch (opcao) {
    case "1":
      // Lógica para adicionar um contato
      break;
    case "2":
      // Lógica para remover um contato
      break;
    case "3":
      // Lógica para listar todos os contatos
      break;
    case "4":
      // Lógica para buscar um contato
      break;
    case "5":
      // Lógica para editar um contato
      break;
    case "6":
      sustentaMenu = false;
      console.log("Saindo do sistema...");
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
      break;
  }
}