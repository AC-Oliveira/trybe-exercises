const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];





let string1 = 'abcde'
string1 = string1.toUpperCase()
console.log(string1);





function flatten() {
  const flat = arrays.reduce((acc, curr) => {
  curr.forEach(element => acc.push(element))
  return acc;
  },[])
  return flat;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);