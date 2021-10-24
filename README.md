## Pokemon Lite with many skills, and random play.

1. Array für Pokemons und AttackSkills erstellen.
        +Pokemon Array enthält nur die namen, skill array enthält die alle datei ab anfang.
2. Pokemon class erstellen  
    * constructor für Pokemon objects
    * array für attack Objekt speichern
    * learnattack skill method attack zulernen- attacke in attack array speichern
    * getZufallskill gibt ein attackskill zufällig zurück
    * setMagic mit Magic werten Arbeiten
    * getMagic mit Magic werten ausgeben
    * showStatus method erstellen zeigt aktuelle status von Pokemons
       
3. AttackSkill class erstellen
    * constructor name, damage, magic
    * getHealth, getMagic, getName, und showAttack methoden.
        
#### Einige Methoden wurde nur für Arbeit verleichtern ertsellt.

Elemente require, damit Arbeiten können.\
Objekte genau so.\ 

Iteriere durch in jede skill, und erstelle davon Objekte. Objekte nach erstellung wird in array gespeichert.
```
const attack = [];

for (const key in skills) { erstellen//
    attack.push(
        new AttackSkill(skills[key].name,
            skills[key].damage,
            skills[key].magic,
            skills[key].description,
        )
    )
}
```
```getRandomNumbers``` function für random zahlen bekommen. Ergebniss zwei zahl in array.
```
function getRandomNummers() {       
    health und magic //
    const nummers = [];
    const health = Math.floor(Math.random() * 175 + 10);
    const bunch = Math.floor(Math.random() * 175 + 5);
    nummers.push(health);
    nummers.push(bunch);

    return nummers
}
```
Pokemon heroes ertesllen. Name array iterieren durch und von jede name\ bekommen damage und magic werten, benutzt wird getRandomNummers für die damage und\ magic werten erstellen.
```
const pokemons = [];                    

pokemonNames.forEach(pokemon => {       
    const nummers = getRandomNummers()  
    pokemons.push({
        name: pokemon,
        damage: nummers[0],
        magic: nummers[1]
    });
})
```
Jede von diesem wird Objekt erstellen:
```
const pokemonHeroes = pokemons.map(pokemon => {    
    return new Pokemon(pokemon.name, pokemon.damage, pokemon.magic)
})
```
Zufallige attack function gibt eine attacke zufällig aus.
```
function zufalligeAttack() {      
    let zahl = Math.floor(Math.random() * attack.length)
    return attack[zahl]
}
```
Lernphase so wird implementiert, und nach attackZahl wird so viele\ attack lernen. Jede Pokemon lernt die attacke zufällig von attack skills.
```
const attackZahl= 10;
pokemonHeroes.forEach(heros => {
    for (let i = 0; i < attackZahl; i++) {
        heros.learnAttackSkill(zufalligeAttack())
    }
})
```
Wieder zufällig.... Heroes für Kampf wird auch zufällig generiert, und\ mit diese function wird immer ein zufällige heroes zurückgeben.
```
function zufalligeHeroes() {
    let zahl = Math.floor(Math.random() * pokemonHeroes.length)
    return pokemonHeroes[zahl]
}
```

Heroes für Kampf:
```
const attacker = zufalligeHeroes();   
const attacked = zufalligeHeroes();

```
Nach erste attack muss die heroes tauschen und gegen Kampfen dafür\
wird die swapper function gut nutzbar. Die tauscht die elemente eifach um. (A,B) (B,A)
```
function swapper(heroes) {
    let swap = heroes[0];
    heroes[0] = heroes[1];
    heroes[1] = swap;

    return heroes;
}
```

1. Und das spiel wir dso lange in eine while wie lange eine Elemente health von beide runter 0 geht.

    * Diese function nimmt zwei Objekt element
    * DavVon diese elementen array ertellt so wird später element1 gegen element2 taushen.
    * if falls irgendwann zufällig zewi gleiche kommen.
    * while so lange wie lange die elemente mehr als 0 health
    * heroes tauschen
    * Wenn eine hero wenige als 0 health hat programm kommen von while aus
    * da prüfen wenn attacker mehr ? als null dann andere nicht : sonst attacker selber nicht
```
function startGame(attacker, attacked) {
    const heroes = [attacker, attacked];  
    if(attacker === attacked)
    {
        console.log("Selbstkampf nicht möglich");
        return;
    }
    while (heroes[0].getHealth() > 0 && heroes[1].getHealth() > 0) {        
        heroes[0].attack((heroes[0].getZufallSkill().name), heroes[1])      

        swapper(heroes);            entgegen attacker
    }
    return heroes[0].getHealth() > 0 ? heroes[1].name + " is killed!" : heroes[0].name + " is killed!" 

}

console.log(startGame(attacker, attacked));
```
## Pokemon class attack method:

1. attack method prüfen, healt rechnen, und elementen zurückgeben.



## Wie mehr als 370 skill, und mehr als 2240 Name bekommen?
### Wie die Pokemons, und Skills bekommen und davon sofort gespeicherte object File erstellen kann?
