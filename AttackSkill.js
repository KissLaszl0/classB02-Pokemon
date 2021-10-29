class AttackSkill
{
    constructor(name, damage, magic, eigenschaft)
    {
    this.name = name;
    this.damage = damage;
    this.magic = magic;
    this.eigenschaft = eigenschaft;
    }

    getATTDamage()
    {
        return this.damage;
    }
    getATTMagic()
    {
        return this.magic;
    }
    getATTName()
    {
        return this.name;
    }
    showAttack()
    {
        return `
        skill name: ${this.name}
        damage: ${this.damage}
        magic: ${this.magic}
        eigenschaft: ${this.eigenschaft}
        `
    }

}


module.exports = AttackSkill;
