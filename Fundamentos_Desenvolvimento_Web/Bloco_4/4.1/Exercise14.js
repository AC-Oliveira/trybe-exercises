let costValue = 1000, sellValue = 2000, totalCostValue;
totalCostValue = costValue +  costValue*20/100;
if(costValue < 0 || sellValue < 0){
  throw 'ERROR';
}else {
  console.log('The profit was: '+'$'+(sellValue-totalCostValue));
}