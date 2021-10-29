## Pokemon Lite with many skills, and a random play.

1. Array für Pokemons und AttackSkills erstellen.
        *Pokemon Array enthält nur die Namen, skills array enthält die alle datei ab anfang.
2. Pokemon class erstellen  
    * constructor für Pokemon objects
    * ein array um erlernte attack skills als Objekte zu speichern
    * learnattack skill method, um neue attacks zu lernen
    * getZufallskill Methode gibt ein zufällig ein attackskill zurück
    * setMagic - um Magic Werte zu setzen
    * getMagic - um Magic werten auszugeben
    * showStatus Methode - diese zeigt den aktuellen Status des Pokemons an
       
3. AttackSkill class erstellen
    * constructor name, damage, magic
    * getHealth, getMagic, getName, und showAttack Methoden.
        
#### Einige Methoden wurden erstellt, um uns die Arbeit zu erleichtern.

Elemente require, um damit arbeiten zu können.\
Objekte genau so.\ 

Iteriere durch jedes skill, und erstelle daraus ein Objekt. Objekte werden dann in einem array gespeichert.
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
```getRandomNumbers``` function um random Zahlen zu erhalten. Als Ergebniss erhalten wir zwei Zahlen in einem array.
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
Pokemon heroes erstellen. Durch das Namensarray iterieren um von jedem Pokemon\ damage und magic Werte zu erhalten, Um magic und damage Werte zu erstellen, wird getRandomNummers genutzt
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
Zufaellige attack function gibt eine attacke zufaellig aus.
```
function zufalligeAttack() {      
    let zahl = Math.floor(Math.random() * attack.length)
    return attack[zahl]
}
```
Lernphase implementiert, nach der attackZahl. Dieses bestimmt wieviele \ attack skills ein Pokemon lernt. Jeder Pokemon lernt die attacks zufällig vom attack skills array.
```
const attackZahl= 10;
pokemonHeroes.forEach(heros => {
    for (let i = 0; i < attackZahl; i++) {
        heros.learnAttackSkill(zufalligeAttack())
    }
})
```
Wieder zufällig.... Heroes für den Kampf werden auch zufällig generiert,\ diese function gibt immer ein zufälligen heroe zurück.
```
function zufalligeHeroes() {
    let zahl = Math.floor(Math.random() * pokemonHeroes.length)
    return pokemonHeroes[zahl]
}
```

Heroes für den Kampf:
```
const attacker = zufalligeHeroes();   
const attacked = zufalligeHeroes();

```
Nach der ersten attack muessen die heroes tauschen, dafür\
wird die swapper function genutzt. Diese tauscht die Elemente eifach um. (A,B) (B,A)
```
function swapper(heroes) {
    let swap = heroes[0];
    heroes[0] = heroes[1];
    heroes[1] = swap;

    return heroes;
}
```

1. Das Spiel wird so lange in eine while Schleife durchgespielt, bis die health von beiden runter auf 0 geht.

    * Diese function nimmt zwei Objekt Elemente
    * Von diesen Elementen wird ein array ertellt. Hier wird später einfach element1 gegen element2 getauscht.
    * if falls irgendwann zufällig zwei gleiche kommen.
    * while so lange wie health > 0 ist
    * heroes tauschen
    * Wenn ein hero weniger als 0 health hat, beendet das Programm die while Schleife
    * danach prüfen wenn attacker mehr ? als null dann andere nicht : sonst attacker selber nicht
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

1. attack method prüfen, healt rechnen, und elemente zurückgeben.



## Wie mehr als 370 skill, und mehr als 2240 Name bekommen?
### Wie die Pokemons, und Skills bekommen und davon sofort gespeicherte object File erstellen kann?
