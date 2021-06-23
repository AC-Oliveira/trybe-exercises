const gamble = (bet) => {
  if ( bet >= 1 && bet < 6 ) {
    if ( bet === number() ) {
      return 'Congrats You Win!';
    } else {
      return 'You lose, Try Again!';
    }
  }
  return 'Número Inválido';
}

const number = () => Math.ceil(Math.random()*5);

console.log(gamble(6))