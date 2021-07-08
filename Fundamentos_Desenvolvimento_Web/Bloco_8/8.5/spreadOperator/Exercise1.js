// Faça uma lista com as suas frutas favoritas
const specialFruit = ['laranja', 'tangerina', 'limão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['bacon', 'macarrão', 'linguiceta'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));