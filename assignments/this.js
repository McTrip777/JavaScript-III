/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - is when you are bound to the browser information and objects.
* 2. Implicit Binding - is when you call a variable within your object with a (this) refering to the object
* 3. Explicit Binding - is when you call a variable outside of your object using (this).
* 4. New Binding - is when you identify your attributes with a (this) calling another object. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function Window(){
    console.log(this);
}
//Window();


// Principle 2
// code example for Implicit Binding
const AttackOnTitan = {
    name:'levi',
    gear:'swords',
    enemy:'titans',
    attack: function(){
        return`${this.name} uses ${this.gear} to kill ${this.enemy}`;
    }
};
 console.log(AttackOnTitan);
 console.log(AttackOnTitan.attack());


// Principle 3
// code example for New Binding
function League (attributes){
    this.character = attributes.character;
    this.ability = attributes.ability;
    this.ult = attributes.ult;
    this.attack = function() {
        console.log(`${this.character} has a ultimate move called ${this.ult}`)
}}
    const fizz = {
        character: 'Fizz',
        ability: 'poison',
        ult: 'shark',
        attack: function(){
            return `${character} likes to send his ${ult} to eat people`
        }
    }
    console.log(fizz.attack());


// Principle 4
// code example for Explicit Binding
const Jedi = {
    name: 'Luke',
}
const skills = ['force','lightsaber', 'mindcontrol'];

function introduce(skills){
    return `${this.name} has many skills, some of which include using the ${skills}`
};
console.log(introduce.call(Jedi, skills));
