const pokemonNames = require('./pokemons.js');  
const skills = require('./skills.js');
const AttackSkill = require('./AttackSkill.js')
const Pokemon = require('./Pokemon.js')

const attack = [];

for (const key in skills) { 
    attack.push(
        new AttackSkill(skills[key].name,
            skills[key].damage,
            skills[key].magic,
            skills[key].description,
        )
    )
} 

const pokemons = [];                    

pokemonNames.forEach(pokemon => {       
    const nummers = getRandomNummers() 
    pokemons.push({
        name: pokemon,
        damage: nummers[0],
        magic: nummers[1]
    });
})
//console.log(pokemons);
function getRandomNummers() {      
    const nummers = [];
    const health = Math.floor(Math.random() * 175 + 10);
    const bunch = Math.floor(Math.random() * 175 + 5);
    nummers.push(health);
    nummers.push(bunch);

    return nummers
}
//console.log(getRandomNummers());
const pokemonHeroes = pokemons.map(pokemon => {     
    return new Pokemon(pokemon.name, pokemon.damage, pokemon.magic)
})


function zufalligeAttack() {    
    let zahl = Math.floor(Math.random() * attack.length)
    return attack[zahl]
}

const attackZahl= 10;

pokemonHeroes.forEach(heros => {
    for (let i = 0; i < attackZahl; i++) {
        heros.learnAttackSkill(zufalligeAttack())
    }
})

function zufalligeHeroes() {
    let zahl = Math.floor(Math.random() * pokemonHeroes.length)
    return pokemonHeroes[zahl]
}
//console.log(zufalligeHeroes());
const attacker = zufalligeHeroes();   
const attacked = zufalligeHeroes();   

function swapper(heroes) {
    let swap = heroes[0];
    heroes[0] = heroes[1];
    heroes[1] = swap;

    return heroes;
}

function startGame(attacker, attacked) {
    const heroes = [attacker, attacked];  
    if(attacker === attacked)
    {
        console.log("Selbstkampf nicht möglich");
        return;
    }
    while (heroes[0].getHealth() > 0 && heroes[1].getHealth() > 0) {        
        heroes[0].attack((heroes[0].getZufallSkill().name), heroes[1])     
        swapper(heroes);           
    }
    return heroes[0].getHealth() > 0 ? heroes[1].name + " is killed!" : heroes[0].name + " is killed!"    
}

console.log(startGame(attacker, attacked));