let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], sumNumbers=0, mean;
for(let number of numbers){
  sumNumbers+=number;
}
mean = sumNumbers/numbers.length;
console.log(mean);
if(mean > 20){
  console.log('Valor maior que 20.');
}else {
  console.log('Valor menor ou igual a 20.')
}