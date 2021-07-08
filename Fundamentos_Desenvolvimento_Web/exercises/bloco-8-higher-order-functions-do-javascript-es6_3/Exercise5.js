const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const aCounter = names.reduce((acc,curr) =>{
    if (curr.match(/a/g)) {
      acc += curr.match(/a/g).length ;
    }
    if (curr.match(/A/g)) {
      acc += curr.match(/A/g).length;
    }
    return acc;
  },0)
  return aCounter;
}

assert.deepStrictEqual(containsA(), 20);