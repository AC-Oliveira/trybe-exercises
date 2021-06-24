let mageMana = 125;
let mageManaDamage = function() {
  const obj = {mageDamage: () => 44 + Math.ceil(Math.random()*46) , mana: () => {
    if ( mageMana < 15) {
      console.log('Não possui mana suficiente"')
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

