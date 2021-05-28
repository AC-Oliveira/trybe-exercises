player = {
  name : 'Marta',
  lastame : 'Silva',
  age : 34,
  medals : { golden: 2, silver: 3 },
};
player.fullName = player.name+' '+player.lastame;
console.log('A jogadora '+player.fullName+' tem '+player.age+' anos de idade.');
bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
player['bestInTheWorld'] = bestInTheWorld;
console.log('A jogadora '+player.fullName+' foi eleita a melhor do mundo por '+player.bestInTheWorld.length+' vezes.')
// "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata"
console.log('A jogadora possui '+player.medals.golden+' medalhas de ouro e '+player.medals.silver+' medalhas de prata') 