let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], count=0;
for(let number of numbers){
  if(number%2!=0){
    count += 1;
  }
}
if(count > 0){
  console.log('The amount of odd numbers is: '+count);
}else {
  console.log('Não existem números ímpares.')
}