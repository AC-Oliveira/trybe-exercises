// Array contendo a lista de emails.
const emailList = [
  "isa@myemail.com",
  "lipe@myemail.com",
  "digo@myemail.com",
  "greg@myemail.com"
];

// Função callback que recebe o array emailList como parâmetro.
const showEmailList = (list) => {
  const div = document.querySelector("#email-list");
  div.innerHTML = '';
// Para cada e-mail da lista, a função cria uma tag <p> com a frase '${email}: Enviado com sucesso'
  list.forEach((email) => {
    const p = document.createElement("p");
    p.innerHTML = `${email} : Enviado com sucesso!`;
    div.appendChild(p);
  });
}

const btnFilter = document.querySelector("#btn-filter");
btnFilter.addEventListener("click", () => showEmailList(emailList));

/*
Código Explicado:
1: Criação do array emailList que contém a lista de emails.
2: Criação da função showEmailList que faz os próximos passos.
3: Seleciona a div com o ID email-list.
4: Apaga o conteúdo tudo dentro dessa div.
5: Começa um forEach no array de emails que faz o próximo passo:
6: Cria uma tag p e coloca dentro dela um template literals com os emails do array e coloca essa tag dentro da div selecionada anteriormente.
7: Fim da função showEmailList
8: Seleciona o botão com id btn-filter.
9: Adcionar um eventListener ao botão passando a função showEmailList como callback.
*/