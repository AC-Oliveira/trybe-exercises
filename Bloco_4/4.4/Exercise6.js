/*  Abstração:
    Definir se o início de uma palavra é igual ao seu final.
    Incrementar o início e decrementar o fim. 
    Continuar incrementando e decrementado e checando até chegar ao meio da palavra.
*/

function isPalindrome(word){
  word = word.toUpperCase();
/* 
  Para fazer menos iterações um simples for se faria necessário. 
  Utilizando Length da palavra dividido por dois como critério de parada. 
  Ex: for(let index = 0, index<word.length/2, index += 1).
*/
  for(let index in word){
    if(word[index] === word[word.length -1 -index]){
      continue;
    }else {
      return false;
    }
  }
  return true;
}

// Função que retorna o índice do maior número dentro do Array.
/* 
  Guardar o valor do primeiro índice para comparadação
  Passar por todos os índices de um array. (loop: for/in)
  Comparar se o valor dentro do índice atual é maior dos que vieram antes. (Condicional: If)
  Se o valor do íncide atual for maior que o valor do índice guardado  o índice guardado sera o índice atual. (Indíce Guardado = Índice Atual.
*/

function majorIndex(arr){
  let mIndex = 0;
  for(let index in arr){
    if (arr[index] > arr[mIndex]){
      mIndex = index;
    }
  }
  return mIndex
}

// Criar uma função que passa por um array e devolve o índice do menor valor.
/* 
  Mesma lógica do exercício anterior, só inverte o sinal de maior por menor.
*/

function minorIndex(arr){
  let mIndex = 0;
  for(let index in arr){
    if (arr[index] < arr[mIndex]){
      mIndex = index;
    }
  }
  return mIndex
}

// Criar uma função que analisa uma lista de nomes e retorna o nome com a maior quantidade de carácteres.
/* 
  Criar uma váriavel que guarda o íncide do primeiro nome do array. (let storedIndex)
  Percorrer o array (for/in)
  Comparar se o length da palavra do índice atual é maior que o length da palavra guardada (If)
  Se maior a palavra guardada receberá a palavra do índice atual. (storedIndex = index)
  Retorna a maior palavra dentro do array. (arr[storedIndex])
*/
function majorWordLength(arr){
  let storedIndex = 0;
  for (let index in arr){
    if(arr[index].length > arr[storedIndex].length)
    storedIndex = index;
  }
  return arr[storedIndex];
}

// Função que recebe um array de inteiros e retorna o inteiro que mais se repete.
  /* 
  Olha Ordenar o array pode ser uma ótima ideia.
  Array de teste: [2, 3, 2, 5, 8, 2, 3];
  Percorrer o array até não restar nenhum número dentro dele. (arr === [])
  Criar um contador que já inicia com um pois a primeira que o núnero aparece no array ele já sera contado.
  Remover o número atual. 
  Perccorrer o array procurando por números idênticos.
  Se houver correspondência remova o número correspondente.

  Método Switch Case: 
    Casos: 
      Objeto vazio ínicio da iteração objeto recebe primeiro número do array como Key e 1 como valor.
      Key do objeto igual ao índice do array.
        Caso igual valor do objeto rebece +1.
      Key do objeto diferente ao índice do array.
        Caso diferente contador inicia.
          Se a Key Diferente se repetir contador recebe +1 para cada repetição.
          Se contador maior que valor do objeto
            Objeto recebe Key Diferente e valor.
      Terminado 
  */


// Array de teste: [2, 3, 2, 5, 8, 2, 3];
  function majorNumberMatches(array){
    let numberAndMatches = Object.create(null);
    let mustMatches=0,mustMatchesNumber;
    for (let index of array){
      if(!numberAndMatches[index]){
        numberAndMatches[index] = 1;
      }else {
        numberAndMatches[index] += 1;
      }
    }
    for (let index2 in numberAndMatches){
      if(numberAndMatches[index2] > mustMatches){
        mustMatches = numberAndMatches[index2];
        mustMatchesNumber = index2;
      }
    }
    return mustMatchesNumber;
  }
console.log(majorNumberMatches([2, 3, 2, 5, 8, 2, 3,]))
