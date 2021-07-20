const sum = require("./Scripts/sum");
const {myRemoveArray} = require("./Scripts/myRemoveArray");
const {myRemoveWithoutCopy} = require("./Scripts/myRemoveWithoutCopy");
const myFizzBuzz = require("./Scripts/myFizzBuzz");
const { obj1, obj2, obj3 } = require("./Scripts/objectsCompare");

describe("Função sum", () => {
  it("sum(a, b) deve retornar a + b", () => {
    expect(sum(0,0)).toBe(0);
    expect(sum(4,5)).toBe(9);
  })
  it("string como parâmetro deve retornar um erro", () => {

    expect(() => sum(4,'12310')).toThrow();
    expect(() => sum(4,'0')).toThrow(Error);
    expect(() => sum(4,'12310')).toThrow(/parameters must be numbers/);
    expect(() => sum(4,'12310')).toThrow("parameters must be numbers");
  })
})

describe("Função myRemoveArray", () => {
  const array = [ 1, 2, 3, 4 ], result = myRemoveArray(array, 3);
  it("Deve retornar novo array sem o item", () => {

    expect(result).toEqual([1, 2, 4]);

    expect(myRemoveArray([1, 2, 3, 4], 3)[1]).not.toEqual([1, 2, 3, 4]);
  })
  it("Não deve modificar array passado como parâmetro", () => {
    expect(myRemoveArray([1, 2, 3, 4], 3))
    .toEqual(expect.arrayContaining([ 1, 2, 4 ]));
  })
  it("Se o item não existir o array deve permanecer o mesmo", () => {
    expect(myRemoveArray([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})

describe("Função myRemoveWithoutCopy", () => {
  let array = [ 1, 2, 3, 4 ];
  const arrayCopy = array.slice();
  const result = myRemoveWithoutCopy(array,3);
  const expected = [ 1, 2, 4 ];

  it("Chamada de myRemoveWithoutCopy([1, 2, 3, 4], 3) deve retornar o array esperado", () => {
    expect(result).toEqual(expected);
  })
  it("Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]", () => {
    expect(result).not.toEqual(arrayCopy);
  })
  it("Faz uma chamada para a função myRemoveWithoutCopy e verifica se o array passado por parâmetro sofreu alterações", () => {
    expect(array).not.toEqual(arrayCopy);
  })
  it("Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado", () => {
    expect(myRemoveWithoutCopy(arrayCopy,5)).toEqual([ 1, 2, 3, 4 ]);
    expect(myRemoveWithoutCopy(arrayCopy,5)).toEqual(arrayCopy);
  })
})

describe("A função myFizzBuzz", () => {
  it("Faz uma chamada com um número divisível por 3 e 5 e verifica se o retorno é o esperado", () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
    expect(myFizzBuzz(30)).toBe("fizzbuzz");
    expect(myFizzBuzz(45)).toBe("fizzbuzz");
  })
  it("Faz uma chamada com um número divisível por 3 e verifica se o retorno é o esperado", () => {
    expect(myFizzBuzz(3)).toBe("fizz");
    expect(myFizzBuzz(6)).toBe("fizz");
    expect(myFizzBuzz(12)).toBe("fizz");
  })
  it("Faz uma chamada com um número divisível por 5 e verifica se o retorno é o esperado", () => {
    expect(myFizzBuzz(5)).toBe("buzz");
    expect(myFizzBuzz(25)).toBe("buzz");
    expect(myFizzBuzz(50)).toBe("buzz");
  })
  it("Faz uma chamada com um número que não é divisível por 3 ou 5 e verifica se o retorno é o esperado", () => {
    expect(myFizzBuzz(14)).toBe(14);
    expect(myFizzBuzz(22)).toBe(22);
    expect(myFizzBuzz(37)).toBe(37);
  })
  it("Faz uma chamada com um parâmetro que não é um número e verifica se o retorno é o esperado", () => {
    expect(myFizzBuzz("30")).toBe(false);
    expect(myFizzBuzz("30")).toBeFalsy();
  })
})

describe("Compare dois objetos para verificar se são idênticos ou não", () => {
  it("Verifica se dois objetos são iguais", () => {
    expect(obj1).toEqual(obj2);
    expect(obj2).not.toEqual(obj3);
    expect(obj3).not.toEqual(obj1);
  })
})