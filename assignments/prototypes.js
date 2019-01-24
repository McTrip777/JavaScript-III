/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/ 
  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
function GameObject(gameAttr){
  this.createdAt = gameAttr.createdAt;
  this.dimensions = gameAttr.dimensions;
}
GameObject.prototype.destroy = function(){
  return "Object was removed from the Game"
};
/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(charAttr){
  this.healthPoints = charAttr.healthPoints;
  this.name = charAttr.name;
  GameObject.call(this, charAttr);
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage`
};
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(humanAttr){
  this.team = humanAttr.team;
  this.weapons = humanAttr.weapons;
  this.language = humanAttr.language;
  CharacterStats.call(this, humanAttr);

} 
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}`
};
Humanoid.prototype.kill = function(){
  return `${this.name} was removed from the Game`
};
Humanoid.prototype.attack = function(victim, attacker){
  victim.healthPoints = victim.healthPoints - attacker.damage;
    if (victim.healthPoints > 0)
      return victim.healthPoints;
    else
      return victim.kill();
}
Humanoid.prototype.train = function(trainee){
      return trainee.damage *= 2;
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

function Hero(heroAttr){
  // this.team = heroAttr.team;
  // this.weapons = heroAttr.weapons;
  this.damage = heroAttr.damage;
  Humanoid.call(this, heroAttr);
} 
Hero.prototype = Object.create(Humanoid.prototype);

function Villian(villianAttr){
  // this.team = villianAttr.team;
  // this.weapons = villianAttr.weapons;
  this.damage = villianAttr.damage;
  Humanoid.call(this, villianAttr);
} 
Villian.prototype = Object.create(Humanoid.prototype);


// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({                                                            
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const  God = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 7,
      width: 7,
      height: 7,
    },
    healthPoints: 77700,
    name: 'Mike',
    team: 'Grace',
    weapons: [
      'K-Bar Tactical knife',
    ],
    language: 'All',
    damage: 1000,
  });

  const Demon = new Villian({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 4,
      height: 10,
    },
    healthPoints: 26000,
    name: 'Satan',
    team: 'The Ten Commandments',
    weapons: [
      'Spear',
    ],
    language: 'All',
    damage: 1000,
  });
  
  
  
  console.log(God.attack(Demon, God));
  console.log(God.train(God));
  console.log(Demon.train(Demon));
  console.log(Demon.attack(God, Demon));
  console.log(Demon.train(Demon));
  console.log(God.train(God));
  console.log(God.train(God));
  console.log(God.attack(Demon, God));
  console.log(God.attack(Demon, God));
  console.log(Demon.attack(God, Demon));
  console.log(Demon.attack(God, Demon));
  console.log(God.attack(Demon, God));
  console.log(God.attack(Demon, God));

  

  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.healthPoints); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.team); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
