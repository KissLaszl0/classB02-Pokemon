const AttackSkill = require('./AttackSkill')

class Pokemon {
    #attacks = [];

    constructor(name, health, magic) {
        this.name = name;
        this.health = health;
        this.magic = magic;
    }

    learnAttackSkill(skill) {
        if (skill instanceof AttackSkill) {
            this.#attacks.push(skill);
        }
        else {
            console.log("Attack nicht vorgeben..");
        }
    }
    showSkills() {
        this.#attacks.forEach(element => {
            console.log("Gelernte Skills: " + element.showAttack());
        })
    }
    getZufallSkill()
    {
       const index =  Math.floor(Math.random() * this.#attacks.length ) 
       return this.#attacks[index];
    }
    getHealth() {
        return this.health;
    }

    setHealth(health) {
        this.health = health;
    }
    getMagic() {
        return this.magic;
    }
    setMagic(magic) {
        this.magic = this.magic+magic;
    }
    getName() {
        return this.name;
    }
    showPokemon() {
        return `
        Pokemon name: ${this.name}
        Healt : ${this.health}
        magic: ${this.magic}
        `
    }
    showStatus() {
        return `
        ${this.name}
        Healt left: ${this.health}
        Magic left: ${this.magic}
        `
    }

    attack(skill, attacked) {        
        this.#attacks.forEach(element => {
            if (skill === element.name) {  
                
                // zufällig gewahlte skill von array nehmen
                console.log(this.showStatus());     //aktuell status immer von attacker( weil sie tauschen um in game.js)
                console.log(attacked.showStatus()); //aktuel status von attacked
                
                console.log("-".repeat(30));
                console.log("\n" + this.getName()
                    + " launched skill " + element.name + " mit "
                    + element.getATTDamage() + " damage and "
                    + element.getATTMagic() + " magic succesfully!\n"
                );
                // this setmagic stellt magic von attacker um
                this.setMagic(this.getMagic() - element.getATTMagic());  
                // und attacked set healt rechnet mit healt beim attacked um       
                attacked.setHealth(attacked.getHealth() - element.getATTDamage());
                // so lange wie lange wir nicht genug magic haben ausschreiben und updaten die magic
                while (element.getATTDamage() > this.getMagic())
                {       
                    console.log("not enough magic, cannot launch attack!"); 
                    console.log("-".repeat(30));
                    this.setMagic(20);
                    console.log(this.getName()+ "got 20 magic back");
                }
                // attacked ausgeben was und wie viel damage bekommen
                console.log(attacked.getName()
                    + " got "
                    + element.getATTDamage()
                    + " damage."
                );
                
                console.log(this.showStatus());
                console.log(attacked.showStatus());
                console.log("-".repeat(30));  

            }
        })
    }

}

module.exports = Pokemon;