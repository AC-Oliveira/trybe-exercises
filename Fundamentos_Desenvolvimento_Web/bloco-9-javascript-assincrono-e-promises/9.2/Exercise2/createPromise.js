new Promise((resolve,reject) => {
  let array = [];
  for(let index = 0; index < 10; index += 1) {
    array.push(Math.floor(Math.random()*51)**2)
  }
  const total = array.reduce((acc, curr) => acc += curr);
  if (total < 8000) {
    let divArray = [total / 2, total / 3, total / 5, total / 10]
    return resolve(divArray)
  }
  return reject();
}).then(() => console.log('Promise Resolvida.')).catch(() => console.log('Promise Rejeitada.'));