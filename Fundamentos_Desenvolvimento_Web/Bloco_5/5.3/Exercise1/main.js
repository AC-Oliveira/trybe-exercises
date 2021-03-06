const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
  1. Copie esse arquivo e edite apenas ele;
*/

/*
  2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
  2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
*/

function addClassTech(event){
  let classTech = 'tech';
  let count = document.querySelectorAll('.'+classTech);
  if (count.length > 0) {
    for (let index = 0; index < count.length; index += 1) {
      count[index].classList.remove(classTech);
    }
  }
  event.target.classList.toggle(classTech);
}

divUm.addEventListener('click', addClassTech);
divDois.addEventListener('click', addClassTech);
divTres.addEventListener('click', addClassTech);

/* 
  3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
  com a classe 'tech';
*/
input.addEventListener('keyup', changeTechElement)
function changeTechElement(){
  let classChange = document.querySelector('.tech');
  let textChange = document.querySelector('input')
  classChange.innerText = textChange.value;
}
/* 
  4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
  redirecione para alguma página;
  4.1. Que tal redirecionar para seu portifólio?
*/
myWebpage.addEventListener('dblclick', function(){
  window.open("https://ac-oliveira.github.io/");
});

/* 
  5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
  a cor do mesmo;
*/
myWebpage.addEventListener('mouseover', function(event){
  event.target.style.color = '#2fc18c';
})
/* 
  Segue abaixo um exemplo do uso de event.target:
*/


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.