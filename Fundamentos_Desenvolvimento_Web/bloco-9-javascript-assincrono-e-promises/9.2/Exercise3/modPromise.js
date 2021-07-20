new Promise((resolve,reject) => {
  let array = [];
  for(let index = 0; index < 10; index += 1) {
    array.push(Math.floor(Math.random()*51)**2)
  }
  const total = array.reduce((acc, curr) => acc += curr);
  if (total < 8000) {
    let divArray = [(total / 2).toPrecision(6), (total / 3).toPrecision(6), (total / 5).toPrecision(6), (total / 10).toPrecision(6)]
    return resolve(divArray).then(divArray => divArray.reduce(
      (acc,curr) => acc += curr),0)
  }
  return reject();
}).then((resolveResult) => console.log(resolveResult)).catch(() => console.log('É mais de 8 mil essa Promise deve estar quebrada.'));