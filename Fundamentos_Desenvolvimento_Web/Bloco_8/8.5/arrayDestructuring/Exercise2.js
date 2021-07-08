let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
let array = [bebida, comida, animal]
console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let [comida1, animal1, bebida1] = array;
console.log(comida1,animal1,bebida1);