let mageMana = 125;
let mageManaDamage = function() {
  const obj = {mageDamage: () => 44 + Math.ceil(Math.random()*46) , mana: () => {
    if ( mageMana < 15) {
      console.log('Mana insuficiente o ataque do Mago não pode ser realizado.')
      return mageMana;
    }
    mageMana -= 15;
    return mageMana;
  }}
  return obj
}

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: mageManaDamage()['mana'],
  damage: mageManaDamage().mageDamage(),
};

const warriorDamage = () => 29 + Math.ceil(Math.random()*31);
const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: warriorDamage(),
};

const dragonDamage = () => 14 + Math.ceil(Math.random()*36);
const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: dragonDamage(),
};

const battleMembers = { mage, warrior, dragon };

const gameActions = {
  warriorAtack: () => {
    if (warrior.healthPoints <= 0) {
      return console.log('Guerreiro foi derrotado e não poderá atacar!');
    }
    dragon.healthPoints = dragon.healthPoints - warrior.damage;
    if (dragon.healthPoints <= 0 ) {
      return console.log('O Dragão morreu!');
    }
    return console.log(`Guereiro ataca causa ${warrior.damage} de dano ao Dragão possui ${dragon.healthPoints} pontos de vida restantes!`);
  },
  mageAtack: () => {
    if (mage.healthPoints <= 0) {
      return console.log('Mago foi derrotado e não poderá atacar!');
    }
    dragon.healthPoints = dragon.healthPoints - mage.damage;
    mage.mana();
    if (dragon.healthPoints <= 0 ) {
      return console.log('O Dragão morreu!');
    }
    return console.log(`Mago ataca causa ${mage.damage} de dano ao Dragão. Dragão possui ${dragon.healthPoints} pontos de vida restantes! Mana restante ${mageMana}`);
  },
  dragonAtack: () => {
    if (dragon.healthPoints <= 0) {
      return console.log('Dragão foi derrotado e não poderá atacar!')
    }
    warrior.healthPoints = warrior.healthPoints - dragon.damage;
    mage.healthPoints = mage.healthPoints - dragon.damage;
    if(mage.healthPoints <= 0 && warrior.healthPoints <= 0) {
      return console.log('O Dragão venceu!')
    }
    if(mage.healthPoints <= 0) {
      console.log('O mago foi derrotado!');
    }
    return console.log(`Dragão ataca causa ${dragon.damage} de dano ao Mago e Guerreito. Mago possui ${mage.healthPoints} pontos de vida restantes e o Guerreiro possui ${warrior.healthPoints} pontos de vida restantes!`);
  }
};

gameActions.warriorAtack()
gameActions.dragonAtack()
gameActions.mageAtack()
gameActions.warriorAtack()
gameActions.dragonAtack()
gameActions.mageAtack()
gameActions.warriorAtack()
gameActions.dragonAtack()
gameActions.mageAtack()
