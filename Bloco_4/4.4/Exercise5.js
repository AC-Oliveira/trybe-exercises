let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
// Printing character info.name and greeting.
console.log('Bem vinda,',info.personagem);
// Adding a key to info and printing it.
info.recorrente = 'Sim';
console.log(info);
// Printing all info keys one at a time.
  for (let key in info){
    console.log(key);
  }
  // Printing all info values one at a time.
  for (let key in info){
    console.log(info[key]);
  }

  let info2 = {};
  info2.personagem = 'Tio Patinhas';
  info2.origem = 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178';
  info2.nota = 'O último MacPatinhas';
  info2.recorrente = 'Sim';
  for (let key in info){
    console.log(info[key]+' '+info2[key]);
  }