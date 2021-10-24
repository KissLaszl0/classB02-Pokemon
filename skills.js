const skills = [
    {
        "name": "Assist",
        "damage": 113,
        "magic": 39,
        "description": "The user is inspired by another Pokémon in the trainer’s team. Using this attack causes the user to use a move chosen at random from the moves known by the other Pokémon on the trainer’s team."
    },
    {
        "name": "Attract",
        "damage": 15,
        "magic": 28,
        "description": "The attacker flirts with or otherwise makes itself attractive to the target. If the target is the opposite gender, this inflicts the Attracted status ailment, which has a 50% chance of paralyzing the victim with indecision every turn. (This effect ends when either Pokémon is knocked out or switched out of the battle.) This attack never works when used on and cannot be learned by genderless Pokémon (such as the asexual Staryu and mechanical Magnemite). Also does not affect those with the Oblivious ability.eigenschaft"
    },
    {
        "name": "Barrage",
        "damage": 98,
        "magic": 12,
        "description": "The attacker batters the foe with flung coconuts. This move, exclusive to Exeggcute/Exeggutor, is fairly weak, but strikes two to five times consecutively every turn it’s used.eigenschaft"
    },
    {
        "name": "Baton Pass",
        "damage": 91,
        "magic": 53,
        "description": "The attacker “passes the baton,” in a figurative sense, switching out for another Pokémon while passing along its momentum. Unlike a normal switch, this gives any positive/negative stat adjustments to the Pokémon being switched in. Also passes certain status effects such as Leech Seed.eigenschaft"
    },
    {
        "name": "Belly Drum",
        "damage": 110,
        "magic": 32,
        "description": "The user bangs on its belly, weakening it but hyping it up to battle. This cuts the user’s hit points in half, but raises its attack by six levels (i.e. a 400% increase)."
    },
    {
        "name": "Bide",
        "damage": 68,
        "magic": 10,
        "description": "Endures attacks for two to three turns and then retaliates double the damage it has received."
    },
    {
        "name": "Bind",
        "damage": 26,
        "magic": 29,
        "description": "Binds the opponent for two to five turns."
    },
    {
        "name": "Block",
        "damage": 119,
        "magic": 26,
        "description": "Prevents opponent’s escape by blocking all possible escape paths."
    },
    {
        "name": "Body Slam",
        "damage": 107,
        "magic": 23,
        "description": "Throws all the user’s weight around and slams into the foe powerfully. Has a 30% chance of making the opponent paralyzed."
    },
    {
        "name": "Camouflage",
        "damage": 10,
        "magic": 52,
        "description": "Exclusive to Staryu, this changes Staryu’s type depending on the location of the battle."
    },
    {
        "name": "Charm",
        "damage": 119,
        "magic": 24,
        "description": "The user acts cute to reduce enemy attack by two stages."
    },
    {
        "name": "Comet Punch",
        "damage": 115,
        "magic": 37,
        "description": "The user strikes the foe repeatedly with punches. Hits 2 to 5 times in one turn."
    },
    {
        "name": "Constrict",
        "damage": 49,
        "magic": 51,
        "description": "The user reaches out and squeezes the foe, either by entangling it with tentacles or closing its shell on the foe. This is one of the weakest attacks, but it has a slight chance of lowering the speed of the foe."
    },
    {
        "name": "Conversion",
        "damage": 39,
        "magic": 21,
        "description": "Changes the user’s type into a type of a move it knows. Notably used by Porygon."
    },
    {
        "name": "Conversion2",
        "damage": 75,
        "magic": 49,
        "description": "Changes the user’s type to one that is ineffective or resistant to the type of the last attack used on it. Also used by Porygon."
    },
    {
        "name": "Covet",
        "damage": 77,
        "magic": 8,
        "description": "The user cutely begs the foe for an item. If the opponent is holding an item, and the user has none, the user will obtain the opponent’s item and can then use it in battle. Effect is temporary for opponent trainers."
    },
    {
        "name": "Crush Claw",
        "damage": 36,
        "magic": 13,
        "description": "The user crushes the foe with sharp claws in a vice-like manner. It may lower the opponent’s defense by one level`."
    },
    {
        "name": "Cut",
        "damage": 23,
        "magic": 52,
        "description": "Slices the enemy. Used in the field as an HM to chop down certain trees."
    },
    {
        "name": "Defense Curl",
        "damage": 65,
        "magic": 43,
        "description": "Curls up into a ball to hide weak spots, increasing defense. Doubles the power of the attacks Rollout and Ice Ball when used immediately preceding said moves."
    },
    {
        "name": "Disable",
        "damage": 110,
        "magic": 42,
        "description": "The user uses its mind to prevent the opponent from attacking with the move it used last."
    },
    {
        "name": "Dizzy Punch",
        "damage": 50,
        "magic": 27,
        "description": "The user punches the foe with a dizzying punch."
    },
    {
        "name": "Double Team",
        "damage": 141,
        "magic": 19,
        "description": "Illusory copies are created by the user to raise the user’s evasiveness one stage."
    },
    {
        "name": "Double-Edge",
        "damage": 131,
        "magic": 27,
        "description": "A reckless move in which the user rams the foe with a powerful attack. Causes 1/3 damage recoil to the user."
    },
    {
        "name": "Doubleslap",
        "damage": 62,
        "magic": 52,
        "description": "The user slaps the foe multiple times. Attacks two to five times in a single turn."
    },
    {
        "name": "Egg Bomb",
        "damage": 27,
        "magic": 27,
        "description": "A powerful but inaccurate attack which involves launching an egg at the opponent. Upon contact, the egg explodes, damaging the foe. Can be learned primarily by those Pokémon with eggs or egg-like parts, such as Chansey, Blissey, Exeggcute, and Exeggutor."
    },
    {
        "name": "Encore",
        "damage": 120,
        "magic": 46,
        "description": "The user claps and demands an encore from the foe. If successful, the foe must use the same move it used last for two to six turns. The effect ends if the Pokémon is switched out. In a double battle, a Pokémon under the effect of an Encore cannot choose a target for its attacks. The target is a randomly selected foe."
    },
    {
        "name": "Endeavor",
        "damage": 14,
        "magic": 10,
        "description": "The user performs a strategic maneuver which lowers the level of the foe’s HP to that of its own. Does not affect Pokémon with lower HP at the time of the attack."
    },
    {
        "name": "Endure",
        "damage": 39,
        "magic": 32,
        "description": "The user braces itself for impact from the foe’s attack. When attacked, the user will always keep at least 1 of its HP."
    },
    {
        "name": "Explosion",
        "damage": 78,
        "magic": 45,
        "description": "The user explodes, severely damaging the opponent (all other Pokémon in double battles). This is the strongest attack in any of the Pokémon games. However, once it is used, the user faints. Cannot be used if a Pokémon with the ability Damp is on the field."
    },
    {
        "name": "Extremespeed",
        "damage": 134,
        "magic": 5,
        "description": "Twice as powerful as Quick Attack (though with much less PP), this move also strikes first in a turn. If two or more Pokémon use a first-strike attack on the same turn, the one with higher speed will attack first."
    },
    {
        "name": "Facade",
        "damage": 96,
        "magic": 39,
        "description": "An attack introduced in the third-generation games, this attack grows more powerful when the user is poisoned, paralyzed, or burned."
    },
    {
        "name": "Fake Out",
        "damage": 112,
        "magic": 34,
        "description": "The user “fakes out” the foe, causing the user to move first and the foe to flinch (unless the target has the ability Inner Focus or Shield Dust). This attack may only be used on the first turn that the attacking Pokémon is switched in."
    },
    {
        "name": "False Swipe",
        "damage": 73,
        "magic": 23,
        "description": "The user slashes at the foe with a controlled swipe. This attack will always leave the foe with at least 1 HP."
    },
    {
        "name": "Flail",
        "damage": 106,
        "magic": 22,
        "description": "The user thrashes about, hitting the foe. This move becomes stronger as the user’s HP gets lower."
    },
    {
        "name": "Flash",
        "damage": 37,
        "magic": 19,
        "description": "The user lets loose a brilliantly bright flash of light to lower the opponent’s accuracy by one level. However, unlike the more accurate Sand-Attack, this move does not always work. Also, this is an HM move that is used to light up dark places outside of battle."
    },
    {
        "name": "Focus Energy",
        "damage": 108,
        "magic": 24,
        "description": "The user focuses its energy, allowing it to deal a critical hit more often."
    },
    {
        "name": "Follow Me",
        "damage": 126,
        "magic": 13,
        "description": "The user attracts attention to itself, causing opponent’s attacks to redirect towards it. This move is useful only in double battles, in which the Pokémon would not necessarily have been targeted by the opponent’s attack, and, instead, may have saved its partner."
    },
    {
        "name": "Foresight",
        "damage": 123,
        "magic": 51,
        "description": "The user senses the foe and reduces its accuracy back to normal. This attack causes ghost types to be affected by normal/fighting-type attacks."
    },
    {
        "name": "Frustration",
        "damage": 85,
        "magic": 17,
        "description": "A move in which the user’s complete dislike for its trainer takes the form of an attack on the opponent. It grows more powerful the more the Pokémon dislikes the trainer."
    },
    {
        "name": "Fury Attack",
        "damage": 34,
        "magic": 12,
        "description": "The user strikes the foe furiously with a sharp horn or beak, hitting it two to five times in one turn."
    },
    {
        "name": "Fury Swipes",
        "damage": 73,
        "magic": 36,
        "description": "The user slashes the foe furiously, hitting it two to five times in one turn. This attack is slightly more powerful than Fury Attack, although it has slightly lower accuracy and fewer PP."
    },
    {
        "name": "Glare",
        "damage": 21,
        "magic": 23,
        "description": "The user glares menacingly at the foe, causing the foe to become paralyzed in terror. Learned only by snake-like Pokémon such as Ekans, Arbok, Dunsparce, and Seviper."
    },
    {
        "name": "Growl",
        "damage": 22,
        "magic": 35,
        "description": "A cute growl that lowers the opponent’s attack statistic and does no damage. Affects both opponents in double battles."
    },
    {
        "name": "Growth",
        "damage": 110,
        "magic": 20,
        "description": "The user forces its body to grow, raising the user’s Special Attack by one level. (In the first generation games, this attack raised the user’s Special, which was factored into both Special Attack and Special Defense.)"
    },
    {
        "name": "Guillotine",
        "damage": 48,
        "magic": 29,
        "description": "A one-hit KO attack, although inaccurate."
    },
    {
        "name": "Harden",
        "damage": 48,
        "magic": 48,
        "description": "The user tightens its muscles, raising its defense."
    },
    {
        "name": "Headbutt",
        "damage": 36,
        "magic": 31,
        "description": "The user rams its head into the foe, dealing damage. Upon being hit, the foe may flinch. This attack was also used to find Pokémon in certain trees in the second-generation games and was a TM in those games."
    },
    {
        "name": "Heal Bell",
        "damage": 144,
        "magic": 38,
        "description": "Heals all persistent status problems of the party. (Sleep, Poison, etc.) Heal Bell does not heal confusion, attraction, or any other nonpersistent status ailments."
    },
    {
        "name": "Helping Hand",
        "damage": 93,
        "magic": 33,
        "description": "This attack is used in double battles to increase the strength of the partner’s attack. Always moves first."
    },
    {
        "name": "Hidden Power",
        "damage": 52,
        "magic": 6,
        "description": "Though not technically a Normal attack, this move was classified as such. The move’s power and type vary among each individual Pokémon (based on IVs, or Individual Values), or random numbers assigned to each individual Pokémon upon encountering them."
    },
    {
        "name": "Horn Attack",
        "damage": 86,
        "magic": 46,
        "description": "The user rams the foe with a sharp horn, dealing middling damage."
    },
    {
        "name": "Horn Drill",
        "damage": 63,
        "magic": 30,
        "description": "The user drills into the foe with its horn, causing instant knockout. Compare to Guillotine."
    },
    {
        "name": "Howl",
        "damage": 60,
        "magic": 47,
        "description": "Added in the third-generation, this attack is used by the user, who howls to raise its battle spirit, which increases its attack by one level."
    },
    {
        "name": "Hyper Beam",
        "damage": 127,
        "magic": 10,
        "description": "One of the strongest attacks in the game. A devastating beam is fired, but it will tire the user for one turn after its use, making it lose a turn."
    },
    {
        "name": "Hyper Fang",
        "damage": 23,
        "magic": 53,
        "description": "A powerful move learned by Rattata and Raticate. Has a higher chance to inflict a critical hit."
    },
    {
        "name": "Hyper Voice",
        "damage": 115,
        "magic": 10,
        "description": "Learned mainly by Pokémon who use their voices to attack (such as Whismur/Loudred/Exploud), this attack is a sharp scream by the user. Strikes both opponent’s in double battles. Is negated by the ability Soundproof."
    },
    {
        "name": "Leer",
        "damage": 101,
        "magic": 32,
        "description": "An attack that lowers the opponents defense statistic and does no damage."
    },
    {
        "name": "Lock On",
        "damage": 42,
        "magic": 28,
        "description": "The user targets the foe, allowing its next move to strike regardless of accuracy. May be passed on by Baton Pass."
    },
    {
        "name": "Lovely Kiss",
        "damage": 61,
        "magic": 21,
        "description": "One of the most accurate sleep-inducing moves in the game. This mischievous kiss can only be learned by Jynx, her signature move. This attack has a 75% chance of laying the Sleep condition on other Pokémon."
    },
    {
        "name": "Mean Look",
        "damage": 28,
        "magic": 38,
        "description": "The user stares angrily at the foe, preventing its escape."
    },
    {
        "name": "Mega Kick",
        "damage": 111,
        "magic": 10,
        "description": "The user deals a powerful blow to the foe using a kick. Although powerful, its accuracy isn’t that great."
    },
    {
        "name": "Mega Punch",
        "damage": 30,
        "magic": 9,
        "description": "The user punches the foe with great force. Although weaker than Mega Kick, this attack has slightly better accuracy and more PP."
    },
    {
        "name": "Metronome",
        "damage": 108,
        "magic": 14,
        "description": "The user rhythmically forces its brain to use a random attack. Could be learned by TM in the first-generation games."
    },
    {
        "name": "Milk Drink",
        "damage": 94,
        "magic": 26,
        "description": "An attack exclusive to Miltank, this attack allows the user to restore half of its HP in battle. Outside of battle, however, this attack can transfer 1/5 of the user’s HP to another party member."
    },
    {
        "name": "Mimic",
        "damage": 21,
        "magic": 42,
        "description": "This attack is used to copy the opponent’s last-used move during the course of a single battle."
    },
    {
        "name": "Mind Reader",
        "damage": 63,
        "magic": 36,
        "description": "This attack allows the user to “read the foe’s mind” and causes its next attack to hit without fail. Can be passed on with Baton Pass."
    },
    {
        "name": "Minimize",
        "damage": 114,
        "magic": 17,
        "description": "The user compresses its cells, effectively shrinking itself. This lowers the foe’s accuracy; however, the user becomes more vulnerable to Stomp."
    },
    {
        "name": "Moonlight",
        "damage": 34,
        "magic": 15,
        "description": "The user absorbs moonlight, regaining HP. Affected by weather."
    },
    {
        "name": "Morning Sun",
        "damage": 78,
        "magic": 22,
        "description": "The user absorbs sunlight, regaining HP. Affected by weather."
    },
    {
        "name": "Nature Power",
        "damage": 85,
        "magic": 22,
        "description": "The user uses the power of nature to attack with a different move depending on the terrain. In the grass - Stun Spore, tall grass - Razor Leaf, on water - Surf, in caves - Shadow Ball, underwater - BubbleBeam, rocky ground - Rock Slide, sandy ground - Earthquake, roads/other - Swift."
    },
    {
        "name": "Odor Sleuth",
        "damage": 108,
        "magic": 49,
        "description": "Reduces the opponent’s evasion to normal levels. Allows ghosts to be affected by normal/fighting attacks. Compare to Foresight."
    },
    {
        "name": "Pain Split",
        "damage": 29,
        "magic": 25,
        "description": "The user’s HP is combined with that of the opponent, then the cumulative HP is split equally between both Pokémon."
    },
    {
        "name": "Pay Day",
        "damage": 44,
        "magic": 28,
        "description": "An attack learned notably by Meowth, this attack creates money which can be picked up by the trainer if he/she wins the battle. In the first-generation games, this attack could be learned by TM."
    },
    {
        "name": "Perish Song",
        "damage": 29,
        "magic": 10,
        "description": "This attack causes all who hear it (unheard by those with Soundproof) to faint in three turns. The effect is ended for any Pokémon that switch out."
    },
    {
        "name": "Pound",
        "damage": 124,
        "magic": 20,
        "description": "The user “pounds” the foe with a part such as a tail or hand. A low-powered attacked learned at low levels."
    },
    {
        "name": "Present",
        "damage": 17,
        "magic": 53,
        "description": "An attack learned exclusively by Delibird (also its only level-up move), although it may be learned by other Pokémon through breeding. This attack randomly deals damage to or heals the opponent at varying strengths."
    },
    {
        "name": "Protect",
        "damage": 11,
        "magic": 42,
        "description": "The user protects itself from attacks for one turn. During that time, no attacks will affect it. Can be learned by nearly all Pokémon that learn TMs (in the third-generation games)."
    },
    {
        "name": "Psych Up",
        "damage": 98,
        "magic": 7,
        "description": "The user copies all stat changes of the opponent."
    },
    {
        "name": "Quick attack",
        "damage": 120,
        "magic": 48,
        "description": "Always gets the first hit, irrespective of the Pokémon’s relative speeds. However, if two Pokémon both use Quick Attack (or another first-strike attack), the one with the higher speed stat will attack first."
    },
    {
        "name": "Rage",
        "damage": 135,
        "magic": 39,
        "description": "The user attacks the foe. If hit, the user’s attack will increase. This attack has different effects in the first-generation games. In those games, this attack would continue until the Pokémon either was prevented from attacking or was knocked out. In the other generations, however, this attack allows you to select it (or not) each turn."
    },
    {
        "name": "Rapid Spin",
        "damage": 126,
        "magic": 10,
        "description": "The user performs a high-speed spin, knocking away all things nearby. (i.e. Leech Seed, Spikes, and restriction attacks such as wrap) Also deals a small amount of damage to the foe."
    },
    {
        "name": "Razor Wind",
        "damage": 22,
        "magic": 37,
        "description": "The user whips up a whirlwind in the first turn, launching it at the foe the second. Hits both opponents in a double battle."
    },
    {
        "name": "Recover",
        "damage": 18,
        "magic": 22,
        "description": "The user recovers strength, restoring its HP. Notably learned by Kadabra/Alakazam."
    },
    {
        "name": "Recycle",
        "damage": 23,
        "magic": 33,
        "description": "The user “recycles” the item it used in the battle previously, regaining the item."
    },
    {
        "name": "Refresh",
        "damage": 50,
        "magic": 26,
        "description": "The user heals itself of poison, burn, or paralysis."
    },
    {
        "name": "Return",
        "damage": 102,
        "magic": 24,
        "description": "Similar to Frustration, but based on how much the Pokémon likes its trainer."
    },
    {
        "name": "Roar",
        "damage": 81,
        "magic": 6,
        "description": "Roars at the foe, forcing it to switch (in wild Pokémon battles, ends the battle) to another Pokémon at random. Always strikes last, even after last-strike moves such as Vital Throw and Counter. Does not affect those with the Soundproof or Suction Cups ability."
    },
    {
        "name": "Safeguard",
        "damage": 10,
        "magic": 12,
        "description": "Protects the user’s team from status effects for 5 turns."
    },
    {
        "name": "Scary Face",
        "damage": 81,
        "magic": 25,
        "description": "The user makes a face, scaring the foe and lowering its speed by 2 levels."
    },
    {
        "name": "Scratch",
        "damage": 18,
        "magic": 24,
        "description": "A low-powered attack learned by Pokémon with claws/talons at a low level. The user scratches the foe."
    },
    {
        "name": "Secret Power",
        "damage": 105,
        "magic": 16,
        "description": "Introduced in the third-generation games, this attack may have an added effect based on the location."
    },
    {
        "name": "Selfdestruct",
        "damage": 102,
        "magic": 32,
        "description": "Like Explosion, the user explodes, damaging the opponent and fainting the user; it also cannot be used when a Pokémon on the field has the Damp ability. However, it is less powerful than Explosion."
    },
    {
        "name": "Sharpen",
        "damage": 111,
        "magic": 40,
        "description": "The user “sharpens” its body, raising its attack by one level."
    },
    {
        "name": "Sing",
        "damage": 80,
        "magic": 26,
        "description": "This attack is used to put the foe to sleep. Does not affect those with the Soundproof ability."
    },
    {
        "name": "Sketch",
        "damage": 132,
        "magic": 52,
        "description": "Only learned by Smeargle. This unique attack is permanently replaced with the move that was used last by the targeted Pokémon when this attack occurs. Does not work when used on Sketch or Transform."
    },
    {
        "name": "Skull Bash",
        "damage": 21,
        "magic": 15,
        "description": "The user lowers its head in the first turn (raising its defense); on the second turn, the user rams the foe with a powerful and accurate headbutt."
    },
    {
        "name": "Slack Off",
        "damage": 119,
        "magic": 11,
        "description": "The user loafs around, restoring half its HP. Learned notably by Slakoth/Slaking"
    },
    {
        "name": "Slam",
        "damage": 109,
        "magic": 39,
        "description": "The user rams its body into the foe. Slightly powerful, but inaccurate."
    },
    {
        "name": "Slash",
        "damage": 31,
        "magic": 8,
        "description": "The user “slashes” the foe with sharp claws/talons. This attack has a high chance of dealing a critical hit."
    },
    {
        "name": "Sleep Talk",
        "damage": 47,
        "magic": 34,
        "description": "The user may only use this attack when sleeping. The user then uses a random one of its other attacks."
    },
    {
        "name": "Smellingsalt",
        "damage": 106,
        "magic": 50,
        "description": "The user uses bitter “smelling salts” on the opponent. If the opponent was paralyzed, this attack does double damage and heals the foe."
    },
    {
        "name": "Smokescreen",
        "damage": 73,
        "magic": 18,
        "description": "This attack lowers the opponent’s accuracy by one level."
    },
    {
        "name": "Snore",
        "damage": 20,
        "magic": 29,
        "description": "An attack useful only when asleep, the user makes a loud snoring noise, dealing damage and possibly causing the foe to flinch. Does not affect those with the Soundproof ability."
    },
    {
        "name": "Softboiled",
        "damage": 12,
        "magic": 41,
        "description": "An attack originally learnable by TM (in the first-generation), this attack can heal the user by half its HP in battle. Outside of battle, the user can give 1/5 of its HP to another Pokémon. Notably learned by Chansey/Blissey."
    },
    {
        "name": "Sonicboom",
        "damage": 107,
        "magic": 49,
        "description": "The user creates a shockwave which always causes 20 damage if it connects."
    },
    {
        "name": "Spike Cannon",
        "damage": 91,
        "magic": 25,
        "description": "The user launches spikes from its body to strike the foe. Hits two to five times in one turn. Learned notably by Cloyster."
    },
    {
        "name": "Spit up",
        "damage": 20,
        "magic": 42,
        "description": "If a Stockpile is stored, spits it out to deal damage. The more Stockpiles, the more damage."
    },
    {
        "name": "Splash",
        "damage": 97,
        "magic": 22,
        "description": "This attack does nothing."
    },
    {
        "name": "Stockpile",
        "damage": 24,
        "magic": 38,
        "description": "Stores a charge for later use for the moves Spit Up and Swallow. Can store up to three charges."
    },
    {
        "name": "Stomp",
        "damage": 129,
        "magic": 15,
        "description": "The user stomps the foe, dealing middling damage and possibly causing the foe to flinch. Deals more damage to Pokémon who have used Minimize."
    },
    {
        "name": "Strength",
        "damage": 67,
        "magic": 12,
        "description": "Learned by HM. Can be used outside of battle to move large boulders."
    },
    {
        "name": "Struggle",
        "damage": 126,
        "magic": 53,
        "description": "The attacker struggles feebly at the foe. This rather weak attack is only used when the Pokémon has exhausted all of its other attacks. This attack is unusual, however, in that it ignores the usual type modifications; Pokémon normally resistant or immune to Normal-type attacks take full damage from this attack."
    },
    {
        "name": "Substitute",
        "damage": 121,
        "magic": 14,
        "description": "The user creates a Substitute to take attacks for it using 1/4 of its max HP (fails if it has less). Can be learned by almost all Pokémon who learn TMs. Can be passed on with Baton Pass."
    },
    {
        "name": "Super Fang",
        "damage": 38,
        "magic": 36,
        "description": "Halves the opponent’s current HP. Used notably by Rattata/Raticate."
    },
    {
        "name": "Supersonic",
        "damage": 21,
        "magic": 21,
        "description": "The user emits a high-pitched sound that may confuse the foe. Does not affect those with the ability Soundproof."
    },
    {
        "name": "Swagger",
        "damage": 41,
        "magic": 31,
        "description": "The user enrages the foe; the foe then becomes confused, and its attack is raised by two levels."
    },
    {
        "name": "Swallow",
        "damage": 138,
        "magic": 8,
        "description": "If a Stockpile is stored, swallows it to gain some HP. The more Stockpiles, the more HP gained."
    },
    {
        "name": "Sweet Kiss",
        "damage": 16,
        "magic": 12,
        "description": "Learned primarily by baby Pokémon, with a couple of exceptions, this move may confuse the foe."
    },
    {
        "name": "Sweet Scent",
        "damage": 107,
        "magic": 45,
        "description": "The user emits a pheromone, causing the foe’s evasion to lower. Affects both opponents in double battles."
    },
    {
        "name": "Swift",
        "damage": 26,
        "magic": 32,
        "description": "The user sends out stars to hit the foe. This attack never misses and strikes both opponents in double battles."
    },
    {
        "name": "Swords Dance",
        "damage": 28,
        "magic": 36,
        "description": "The user performs a swords dance, raising its attack by two levels."
    },
    {
        "name": "Tackle",
        "damage": 52,
        "magic": 43,
        "description": "The user tackles the foe. This attack is learned by many Pokémon, and is the first (and consequently weakest) attack that most Pokémon learn."
    },
    {
        "name": "Tail Whip",
        "damage": 32,
        "magic": 44,
        "description": "Similar to Leer, but affects both Pokémon in double battles."
    },
    {
        "name": "Take Down",
        "damage": 124,
        "magic": 37,
        "description": "Similar to Double-Edge, although weaker."
    },
    {
        "name": "Teeter Dance",
        "damage": 99,
        "magic": 53,
        "description": "Confuses all Pokémon other than the user."
    },
    {
        "name": "Thrash",
        "damage": 51,
        "magic": 13,
        "description": "The user violently thrashes about, damaging another Pokémon in battle (in double battles, the target is random). After two or three turns, the user becomes confused."
    },
    {
        "name": "Tickle",
        "damage": 23,
        "magic": 30,
        "description": "Tickles the foe, lowering its attack and defense by one level each."
    },
    {
        "name": "Transform",
        "damage": 68,
        "magic": 44,
        "description": "The user transforms into the opponent, copying stats and moves, but not HP. Learned notably by Ditto, it is the only move that Ditto may learn."
    },
    {
        "name": "Tri Attack",
        "damage": 39,
        "magic": 12,
        "description": "The user attacks the foe with three beams. May paralyze, freeze, or burn the opponent."
    },
    {
        "name": "Uproar",
        "damage": 96,
        "magic": 19,
        "description": "The user causes an uproar, preventing other Pokémon from falling asleep. Damages a random other Pokémon for two to five turns."
    },
    {
        "name": "Vice Grip",
        "damage": 44,
        "magic": 30,
        "description": "The user grips the opponent, dealing damage."
    },
    {
        "name": "Weather Ball",
        "damage": 137,
        "magic": 14,
        "description": "Exclusive to Castform, this attack changes type based on the weather."
    },
    {
        "name": "Whirlwind",
        "damage": 38,
        "magic": 5,
        "description": "Compare to Roar."
    },
    {
        "name": "Wish",
        "damage": 140,
        "magic": 8,
        "description": "On the next turn, the user (or whichever Pokémon replaces the user) restores half its HP."
    },
    {
        "name": "Wrap",
        "damage": 15,
        "magic": 48,
        "description": "Wraps the foe, damaging it each turn. Compare to Bind."
    },
    {
        "name": "Yawn",
        "damage": 98,
        "magic": 48,
        "description": "The user yawns, lulling the foe into yawning also and falling asleep the next turn."
    },
    {
        "name": "Blaze Kick",
        "damage": 34,
        "magic": 31,
        "description": "The user sets its foot alight and attacks the foe with a burning kick. This fairly powerful attack is exclusive to Combusken and Blaziken, and has a greater chance than most attacks to deal double damage with a critical hit."
    },
    {
        "name": "Blast Burn",
        "damage": 65,
        "magic": 43,
        "description": "The user blasts flame at the enemy, tiring itself out. This extremely powerful attack (tied for the most powerful with Eruption) strikes on the turn it is used, but, like Hyper Beam, the user has to spend a turn recharging afterward. This move is extremely rare; it is only learned by Charizard (a mysterious woman in Pokémon FireRed and LeafGreen can teach it to a Charizard if the player brings their starter to her and certain other conditions are met), or by Cyndaquil/Quilava/Typhlosion (the player can win a Cyndaquil that knows Blast Burn by winning colosseum matches in Pokémon XD)."
    },
    {
        "name": "Ember",
        "damage": 120,
        "magic": 35,
        "description": "The user blows hot embers at the foe. This is a weak fire attack, learned at a low level by many Pokémon, but superseded later by more-powerful attacks."
    },
    {
        "name": "Eruption",
        "damage": 79,
        "magic": 5,
        "description": "The attacker triggers a volcanic eruption. This is tied with Blast Burn for the most powerful fire attack, but its power goes down as the user is damaged. It is only learned by Groudon, as Groudon dwells in a volcanic caldera, and Numel/Camerupt and Torkoal, both of whom are volcanic in form. This attack, like Water Spout, strikes both opponents in double battles."
    },
    {
        "name": "Fire Blast",
        "damage": 130,
        "magic": 34,
        "description": "The attacker fires a scorching burst of flame at the foe, in a manner appropriate to the user. One of the most powerful fire attacks, Fire Blast was indeed the most powerful attack in the first-generation games. (Overheat, Blast Burn, and Eruption, the three of which were introduced in the third-generation games, are the only more-powerful fire attacks.) Fire Blast has an increased chance of burning the defending Pokémon."
    },
    {
        "name": "Fire Punch",
        "damage": 93,
        "magic": 24,
        "description": "The user attacks the enemy with a fiery punch. This middling-powerful fire attack is the most powerful fire attack most non-fire and non-draconic Pokémon can learn."
    },
    {
        "name": "Fire Spin",
        "damage": 38,
        "magic": 34,
        "description": "The attacker traps the victim in a whirlwind of flame. The enemy is disabled for two to five turns, taking slight damage. This attack has different effects in different games: in first-generation games, the target cannot attack but the attacker can only use Fire Spin, but in second- and later-generation games, both the victim and attacker can act normally while Fire Spin is in effect, but the victim cannot retreat or be switched out for another Pokémon."
    },
    {
        "name": "Flame Wheel",
        "damage": 112,
        "magic": 32,
        "description": "The attacker spins, flinging flame in all directions. This is a middling-powerful fire attack, but it can be used while the attacker is frozen. Using Flame Wheel will thaw the attacker in this case."
    },
    {
        "name": "Flamethrower",
        "damage": 46,
        "magic": 41,
        "description": "The attacker breathes or otherwise blasts a sustained tongue of flame. Learned by most fire Pokémon in the games, Flamethrower is the most powerful Fire attack without significant drawbacks (such as inaccuracy)."
    },
    {
        "name": "Heat Wave",
        "damage": 92,
        "magic": 15,
        "description": "The attack blasts the foe with hot air, potentially causing a burn. This is a fairly powerful fire attack, but its slightly greater power over Flamethrower doesn’t offset its margin of inaccuracy. Also, it hits both opponents in a double battle."
    },
    {
        "name": "Overheat",
        "damage": 53,
        "magic": 49,
        "description": "The attacker charges up either its rage or its flame power and blasts fire at its foe. Overheat is the second-most-powerful fire attack, but using it weakens the attacking Pokémon, lowering that Pokémon’s special attack statistic by two levels (which makes future fire attacks that much weaker). No Pokémon learn this attack naturally; it can only be learned from a Technical Machine, and is generally only available to fire Pokémon or Pokémon noted for their out-of-control rage (such as Mankey/Primeape)."
    },
    {
        "name": "Sacred Fire",
        "damage": 37,
        "magic": 26,
        "description": "Ho-Oh charges up its natural brilliance, and blasts its foe with it. This attack is as powerful as Heat Wave, but it is 100% accurate and has a 50% chance of causing a burn. Some would argue that if you take into account the lack of negative effects and the highest burn rate of any attack(other than Will-o-Wisp) it is the best fire attack in the games. Due to its incredible power without any drawbacks it is exclusive to Ho-oh, which can only be obtained through Nintendo in the Third Generation games and is banned from competitive play. Like Flame Wheel, this attack can be used while Ho-Oh is frozen, and will thaw it. "
    },
    {
        "name": "Sunny Day",
        "damage": 97,
        "magic": 29,
        "description": "One of the weather attacks introduced in Pokémon Gold and Silver, this attack does not affect the opponent or the user, but instead intensifies the sun’s rays, lasting for five turns. During this drought, fire attacks (and attacks that rely on the sun, like Synthesis, Morning Sun, and Moonlight-[due to the fact that the people in Nintendo know that Moonlight is just a reflection of Sunlight]) are more powerful, SolarBeam doesn’t require the turn spent charging, water attacks are less powerful, and Thunder is even less accurate."
    },
    {
        "name": "Will-o-Wisp",
        "damage": 37,
        "magic": 28,
        "description": "The attacker flicks or blows a tiny spark at the foe, which sets the target alight. This status attack is as often learned by ghostly Pokémon as fiery ones. If this attack hits, instead of doing damage it inflicts the Burned status condition on the opponent. Because of its mysterious, haunting nature, this attack is one of Dusclops and Banette’s signature attacks. The Fire Pokémon Vulpix and Ninetales also learn it, but this is due to their numerous otherwordly powers."
    },
    {
        "name": "Bubble",
        "damage": 126,
        "magic": 16,
        "description": "The user blows a stream of bubbles at the foe, suffocating, soaking, or battering the target. Bubble is extremely weak, even at the low levels at which it is learned. It can, in addition to dealing a small amount of damage, lower the victim’s speed. Hits both opponents in double battles"
    },
    {
        "name": "BubbleBeam",
        "damage": 121,
        "magic": 31,
        "description": "The user blows a solid beam of bubbles at the foe, soaking and battering the target. Essentially a stronger form of Bubble, this middling-powerful water attack can (but will not always) reduce the victim’s speed in addition do dealing damage."
    },
    {
        "name": "Clamp",
        "damage": 15,
        "magic": 39,
        "description": "The attacker clamps the foe in its shell. The enemy is disabled for two to five turns, taking slight damage. Clamp is exclusive to clam-like Pokémon, including Shellder/Cloyster and Clamperl. This attack, like Wrap, has different effects in different games: in first-generation games, the target cannot attack but the attacker can only use Clamp, but in second- and later-generation games, both the victim and attacker can act normally while Clamp is in effect, but the victim cannot retreat or be switched out for another Pokémon."
    },
    {
        "name": "Crabhammer",
        "damage": 136,
        "magic": 5,
        "description": "Exclusive to crustacean-like Pokémon (including Krabby/Kingler and Corphish/Crawdaunt), this attack is a powerful blow with a crab-claw. It is fairly powerful and has a greater chance of dealing double damage with a critical hit, but is somewhat inaccurate."
    },
    {
        "name": "Dive",
        "damage": 91,
        "magic": 41,
        "description": "The user hides beneath the water, then bursts out, striking the foe by surprise. A middling-powerful attack, like Dig and Fly, that sends the user out of the reach of enemies’ attacks for one turn, then strikes on the second turn. (The user can still be struck by Surf, however, on the first turn.) In third-generation Pokémon games, it can be taught to Pokémon with HM #8, and used to dive to the bottom of the sea in special areas in Pokémon Ruby and Sapphire, and Emerald."
    },
    {
        "name": "Hydro Cannon",
        "damage": 105,
        "magic": 5,
        "description": "One of the most powerful water moves, only learned by Blastoise. Inflicts heavy damage but the user needs to rest after the attack is used, like Hyper Beam. By completing the in-game Mount Battle in Pokémon XD, however, you can obtain a Totodile with this move as well."
    },
    {
        "name": "Hydro Pump",
        "damage": 94,
        "magic": 45,
        "description": "Initially the most powerful water attack (overtaken only by Water Spout and Hydro Cannon, in the third-generation games), this attack’s power is offset by its less-than-perfect accuracy."
    },
    {
        "name": "Muddy Water",
        "damage": 22,
        "magic": 54,
        "description": "The user douses the foe with water fouled with silt. A middling-powerful water attack, this is exclusive to Marshtomp and Swampert and may lower an opponent’s accuracy if it hits. Strikes both opponent’s in a double battle."
    },
    {
        "name": "Octazooka",
        "damage": 104,
        "magic": 36,
        "description": "The user sprays a blast of inky water at the foe. Exclusive to Octillery, this middling powerful attack may lower the target's accuracy if it hits."
    },
    {
        "name": "Rain Dance",
        "damage": 43,
        "magic": 9,
        "description": "One of the weather attacks introduced in Pokémon Gold and Silver, this attack does not affect the opponent or the user, but instead begins a rainstorm that lasts for five turns. During this rain, water attacks are more powerful, fire attacks (and attacks that rely on the sun, like Solar Beam, Synthesis, Morning Sun, and Moonlight) are less powerful, and Thunder always strikes with perfect accuracy."
    },
    {
        "name": "Splash",
        "damage": 125,
        "magic": 18,
        "description": "The user splashes around uselessly. Nearly exclusive to Magikarp (though a handful of other Pokémon can learn it), this attack does absolutely nothing (despite rumors that it will knock out an enemy with a single hit some astronomically small percentage of the time)."
    },
    {
        "name": "Surf",
        "damage": 117,
        "magic": 25,
        "description": "The attacker conjures up a massive wave, then rides it into the foe. The most powerful water attack without less-than-perfect accuracy or other drawbacks. In the video games, it can be taught to Pokémon with HM #3, and used to travel over water. A Pikachu that knows Surf has at different times been given away (in the form of transferring the Pokémon onto a player’s copy of a Pokémon game) as a special promotional Pokémon in (real-life) Pokémon events, or included as a special unlockable extra in certain games. Hits both opponents in double battles."
    },
    {
        "name": "Water Gun",
        "damage": 52,
        "magic": 25,
        "description": "The user sprays a blast of water at the foe. The typical beginner water attack. Nearly every water Pokémon with an oriface from which to spray or spit water can perform this attack in the anime, and it has been used in accuracy contests and fire-fighting efforts as well as an attack."
    },
    {
        "name": "Water Pulse",
        "damage": 40,
        "magic": 7,
        "description": "The user blasts sonic waves through the water at the foe. A middling-powerful water attack which can (but will not always) inflict the Confused status ailment on the victim."
    },
    {
        "name": "Water Sport",
        "damage": 62,
        "magic": 12,
        "description": "The user soaks itself in water. This isn’t an attack per se; instead, it makes the user more resistant to fire attacks."
    },
    {
        "name": "Water Spout",
        "damage": 57,
        "magic": 17,
        "description": "The user blasts water at the foe from a blowhole. Exclusive to whale-like Pokémon (including Wailmer/Wailord and Kyogre), this is the most powerful water attack. Like Eruption, however, this attack’s power decreases in effectiveness as the user takes damage."
    },
    {
        "name": "Waterfall",
        "damage": 27,
        "magic": 21,
        "description": "The user rides a waterfall high up, then rides it down onto the foe. A middling-powerful water attack. Initially, this was exclusive to Goldeen/Seaking, but in second- and third-generation Pokémon games, it can be taught to Pokémon with HM #7, and used to climb waterfalls."
    },
    {
        "name": "Whirlpool",
        "damage": 65,
        "magic": 39,
        "description": "The attacker traps the foe in a whirlpool. Like Wrap and Clamp, the enemy is disabled for two to five turns, taking slight damage. This attack, like Wrap, has different effects in different games: in first-generation games, the target cannot attack but the attacker can only use Whirlpool, but in second- and later-generation games, both the victim and attacker can act normally while Whirlpool is in effect, but the victim cannot retreat or be switched out for another Pokémon. In second-generation Pokémon games, it can be taught to Pokémon with HM #6, and used to neutralize obstructing whirlpools. Affects both opponent’s in double battles."
    },
    {
        "name": "Withdraw",
        "damage": 75,
        "magic": 6,
        "description": "The user withdraws into its shell. This move, which isn’t technically an attack, increases the user’s defense against physical attacks by 50%."
    },
    {
        "name": "Charge",
        "damage": 31,
        "magic": 7,
        "description": "Charges up voltage so that electric type moves will have double the power the next turn."
    },
    {
        "name": "Shock Wave",
        "damage": 92,
        "magic": 34,
        "description": "An attack, given to you as a TM when you defeat the Electric gym leader in 3rd generation games (Wattson in Ruby, Sapphire and Emerald and Lt. Surge in FireRed and LeafGreen). The attack always attacks and never misses, therefore a good move to use if the opponent Pokémon is constantly lowering your accuracy stat."
    },
    {
        "name": "Spark",
        "damage": 33,
        "magic": 8,
        "description": "An electrified tackle. It may Paralyze the target."
    },
    {
        "name": "Thunder",
        "damage": 133,
        "magic": 19,
        "description": "A very powerful electric type move that you can obtain a TM for from the Celadon/Lilycove Dept. Store. If the technique Rain Dance is used in battle, this attack will have 100 accuracy. Also, in the later-generation games, a Pokémon using Fly can be stricken by this attack. Many Pokémon that are not electric type can learn this attack by the use of TM. In the 3rd generation games, this TM may be purchased at the Lilycove Department Store."
    },
    {
        "name": "Thunder Wave",
        "damage": 127,
        "magic": 25,
        "description": "An attack that induces paralysis. Pikachu’s Thundershock is often confused with this attack."
    },
    {
        "name": "Thunderbolt",
        "damage": 91,
        "magic": 14,
        "description": "A rather good electric attack that has a very high accuracy and power. This can be taught to a Pokémon with TM24. One can be received for free by Watson in RSE and it can be bought at the Game Corner in all 3rd Gen. games for 4000 tokens($80,000). This is Pikachu’s signature attack."
    },
    {
        "name": "Thunderpunch",
        "damage": 75,
        "magic": 39,
        "description": "A very strong electric attack. As this attack is a punch, many fighting type Pokémon can also learn this attack. There is no longer a TM for this technique, although a move tutor can teach this attack. Electabuzz notably uses this attack, although many free standing electric Pokémon learn this."
    },
    {
        "name": "Thundershock",
        "damage": 107,
        "magic": 7,
        "description": "One of the weakest electric moves, learned by many electric Pokémon at a low level. Formerly Pikachu’s signature attack but it was forgotten after it learned Iron Tail."
    },
    {
        "name": "Volt Tackle",
        "damage": 18,
        "magic": 37,
        "description": "Equal in power to thunder yet having 100 accuracy, this attack is ridiculously powerful. However, the user takes recoil damage. Exclusive to the Pikachu line, this attack must be learned in a special way; a player must use Emerald and breed a Pikachu: you must attach the light ball to Pikachu and the Pichu that hatches from the egg will know Volt Tackle. However, Pikachu is rare and can only be caught in the Safari Zone and it will only be holding a Light Ball 5% of the time, and this is the only way to get a light ball."
    },
    {
        "name": "Zap Cannon",
        "damage": 91,
        "magic": 21,
        "description": "Rather similar to Dynamicpunch, this attack is powerful but inaccurate, and will definitely cause paralysis if it hits. There used to be a TM for this attack, now only a few Pokémon can learn it that are usually not electric."
    },
    {
        "name": "Aromatherapy",
        "damage": 76,
        "magic": 50,
        "description": "A sweet, soothing scent heals all party’s status problems. Learned by Paras, Vileplume and Roselia"
    },
    {
        "name": "Absorb",
        "damage": 135,
        "magic": 42,
        "description": "Similar to Leech Life, this move inflicts damage and ‘absorbs’ half the damage inflicted. The weakest of the ‘absorption’ attacks. Learned by most grass type Pokémon at a low level."
    },
    {
        "name": "Bullet Seed",
        "damage": 85,
        "magic": 53,
        "description": "User rapidly spits seeds at the opponent. Attacks the opponent 2-5 times each turn. Learned by TM09 in the Advance generation games."
    },
    {
        "name": "Cotton Spore",
        "damage": 65,
        "magic": 11,
        "description": "Dandelion seeds envelop the foe, lowering the opponent’s speed two stages. Pokémon who learn this include Mareep, Hoppip and Cacnea."
    },
    {
        "name": "Frenzy Plant",
        "damage": 49,
        "magic": 54,
        "description": "A very powerful attack, the Grass equivalent to Blast Burn and Hydro Cannon. Inflicts a very high amount of damage and is unable to move next turn. This attack is a very special move only learned by Venusaur by the Move tutor at Cape Brink. On Pokémon XD, a player can also obtain a Chikorita that knows Frenzy Plant by completing the in-game Mount Battle challenge."
    },
    {
        "name": "Giga Drain",
        "damage": 22,
        "magic": 33,
        "description": "Inflicts a middling amount of damage on the foe and recovers half the damage inflicted. The most powerful ’absorbation’ attack. Learned by TM19 in the Gold, Silver, Crystal, Ruby, Sapphire, Emerald, FireRed, and LeafGreen versions, though some Pokémon learn this move naturally, such as Treecko."
    },
    {
        "name": "Grasswhistle",
        "damage": 116,
        "magic": 49,
        "description": "Induces sleep by singing a ‘pleasant melody’. Learned by Roselia by level up but a handful of other Pokémon can learn it by breeding. Negated by the Soundproof ability."
    },
    {
        "name": "Ingrain",
        "damage": 84,
        "magic": 52,
        "description": "Lays roots that restore the users HP each turn. The user cannot switch out."
    },
    {
        "name": "Leaf Blade",
        "damage": 19,
        "magic": 49,
        "description": "Exclusively learned by Grovyle and Sceptile only, the user slashes the foe with leaves on its forearms. Has a greater chance to cause a critical hit. Compare to Slash."
    },
    {
        "name": "Leech Seed",
        "damage": 71,
        "magic": 19,
        "description": "Seeds of a parasitic plant are fired and automatically sprout on the enemy itself. It absorbs hit points from the defending Pokémon over a number of turns and transpirates it to the user; ends when the defending Pokémon switches out or uses a move such as Rapid Spin. Does not affect Grass Pokémon."
    },
    {
        "name": "Magical Leaf",
        "damage": 88,
        "magic": 11,
        "description": "A special Grass attack in which the user throws mysterious leaves that do not miss. Compare to Swift and Shock Wave."
    },
    {
        "name": "Mega Drain",
        "damage": 48,
        "magic": 54,
        "description": "A more powerful version of Absorb, the user inflicts damage on the opponent and then restores HP equivalent to a half of the damage inflicted. The base power of Mega Drain is more powerful than Absorb and less powerful than Giga Drain."
    },
    {
        "name": "Needle Arm",
        "damage": 85,
        "magic": 29,
        "description": "A grass attack only learned by Cacnea and Cacturne that may cause flinching."
    },
    {
        "name": "Petal Dance",
        "damage": 95,
        "magic": 52,
        "description": "Rather similar to Thrash and Outrage, the user dances while enveloped in petals, constantly dealing damage for 2-3 turns. The user is then inflicted with confusion. When used in double battles, it attacks a random Pokémon besides itself and the ally Pokémon."
    },
    {
        "name": "Razor Leaf",
        "damage": 135,
        "magic": 39,
        "description": "A middling-powerful attack that damages the enemy with a storm of leaves. Has a greater chance to deal a critical hit to foe. Attacks both opponents when used in double battles."
    },
    {
        "name": "Solarbeam",
        "damage": 90,
        "magic": 7,
        "description": "Widely considered to be the most powerful grass attack. This attack requires two turns: One to absorb solar energy (does not attack on that turn) and the second to attack. However, using the Sunny Day technique (or Groudon’s Drought ability) will cause this move to only require one turn. Its accuracy is 100, and it has more PP than its counterparts (e.g. Fire Blast, Hydro Pump etc.) This attack can be used with TM 22 but there are a few Pokémon that learn this attack naturally. When raining (by Rain Dance or Kyogre’s Drizzle), this attack does half damage."
    },
    {
        "name": "Sleep Powder",
        "damage": 75,
        "magic": 52,
        "description": "Puts the opponent to sleep with a cloud of green powder. This move is similar to PoisonPowder and Stun Spore; learned mainly by grass type Pokémon and moth- and butterfly-like Pokémon, such as Butterfree and Venomoth."
    },
    {
        "name": "Spore",
        "damage": 49,
        "magic": 30,
        "description": "Puts the opponent to sleep with a cloud of mushroom spores. This is different to most sleep-inducing techniques: it has 100 accuracy, making it easy to put the opponent to sleep with this attack. Paras, Parasect and Shroomish are the only ones to learn this attack."
    },
    {
        "name": "Stun Spore",
        "damage": 94,
        "magic": 10,
        "description": "Paralyzes the opponent with a cloud of yellow powder. This move is learnt mostly by Grass Pokémon such as Bellsprout and Oddish."
    },
    {
        "name": "Synthesis",
        "damage": 59,
        "magic": 48,
        "description": "The user goes through the process of photosynthesis in order to restore the user’s HP. The amount depends upon the weather (if it is sunny, the user restores 2/3; if it is normal/sandstorm/hail it restores 1/2; if raining, the user restores 1/3)."
    },
    {
        "name": "Vine Whip",
        "damage": 28,
        "magic": 17,
        "description": "Notably learned by Bulbasaur, whips the opponent with vines. In the animé, Ash's Bulbasaur has a high level of control over his vines, using them to retrieve objects and throw other characters around (most notably Team Rocket)."
    },
    {
        "name": "Aurora Beam",
        "damage": 16,
        "magic": 44,
        "description": "Fires an aurora at the foe to reduce Attack."
    },
    {
        "name": "Blizzard",
        "damage": 115,
        "magic": 11,
        "description": "Widely considered the most powerful ice attack. A sharp blizzard is summoned, causing extreme damage. Can be taught by TM14. In double battles, it hits both of the opponent’s Pokémon."
    },
    {
        "name": "Hail",
        "damage": 52,
        "magic": 8,
        "description": "Summons a hailstorm that hurts every Pokémon over five turns except Pokémon that are ice type, as their bodies are composed of ice. Can be taught to with TM07."
    },
    {
        "name": "Haze",
        "damage": 110,
        "magic": 40,
        "description": "All reductions and increases of abilities will be reset to the standard. Oddly, this move is mostly learned by poison type Pokémon such as Ekans, Koffing and Zubat."
    },
    {
        "name": "Ice Ball",
        "damage": 132,
        "magic": 45,
        "description": "The user repeatedly tosses chunks of ice that get progressively larger, causing more damage each turn."
    },
    {
        "name": "Ice Beam",
        "damage": 28,
        "magic": 23,
        "description": "Fires a chilling beam of ice at the foe. Inflicts a very high amount of damage with a high accuracy."
    },
    {
        "name": "Ice Punch",
        "damage": 95,
        "magic": 28,
        "description": "Punches the foe with an icy fist. Despite being Ice type, this attack is learned by the fighting type Pokémon Hitmonchan and Medicham, as well as Jynx."
    },
    {
        "name": "Icicle Spear",
        "damage": 43,
        "magic": 18,
        "description": "Spears the foe with icicles at the foe 2-5 times in one turn. Exclusive to Shellder and Cloyster."
    },
    {
        "name": "Icy Wind",
        "damage": 121,
        "magic": 29,
        "description": "An icy gust of wind is blown in the foe’s direction, reducing Speed every time it hits. This move also hits both Pokémon in double battles."
    },
    {
        "name": "Mist",
        "damage": 73,
        "magic": 48,
        "description": "The user envelops itself in a shroud of mist in order to stop the reduction of its stats."
    },
    {
        "name": "Powder Snow",
        "damage": 140,
        "magic": 26,
        "description": "Blasts the foe with snowy gust."
    },
    {
        "name": "Sheer Cold",
        "damage": 49,
        "magic": 27,
        "description": "Chills the battlefield to below freezing temperature, causing the foe to become encased in a block of ice and resulting in a one-hit K.O. Has a 30% accuracy."
    },
    {
        "name": "Arm Thrust",
        "damage": 100,
        "magic": 19,
        "description": "The user attacks with straight arm punches 2-5 times in one turn. This attack is learned only by Makuhita and Hariyama."
    },
    {
        "name": "Brick Break",
        "damage": 12,
        "magic": 54,
        "description": "A powerful attack, learned by TM31. This attack defeats the effects of Light Screen and Reflect."
    },
    {
        "name": "Bulk Up",
        "damage": 81,
        "magic": 9,
        "description": "The user bulks up its body to raise both Attack and Defense by one Stage. The TM for this attack is given to you by Brawly in Pokémon Ruby and Sapphire."
    },
    {
        "name": "Counter",
        "damage": 61,
        "magic": 14,
        "description": "If the user is hit with a physical attack, it deals back double the damage received. Although fighting type, many Pokémon not fighting type learn this move. On the floor of Video Games in Celadon Department store, the man will teach it to your Pokémon (or give you a TM in 1st Generation games)."
    },
    {
        "name": "Cross Chop",
        "damage": 55,
        "magic": 15,
        "description": "A very powerful fighting move which has a high critical hit ratio. Machop/Machoke/Machamp and Mankey/Primeape learn this attack, although many Pokémon learn this via breeding."
    },
    {
        "name": "Detect",
        "damage": 108,
        "magic": 42,
        "description": "Rather similar to Protect, this attack causes the user to be immune to any attack that turn."
    },
    {
        "name": "Double Kick",
        "damage": 122,
        "magic": 52,
        "description": "An attack that does as the name implies: Attacks twice with a low power. Many non-fighting Pokémon learn this attack."
    },
    {
        "name": "DynamicPunch",
        "damage": 22,
        "magic": 43,
        "description": "A strong punch, but hits only 50% of the time. Guaranteed to cause confusion if it hits."
    },
    {
        "name": "Focus Punch",
        "damage": 76,
        "magic": 12,
        "description": "An attack, taught to a Pokémon by TM01, given to you when you defeat your in-game dad in Ruby, Sapphire, and Emerald. The move prepares at the start of the turn, and attacks at the end, regardless of the Pokémon’s speed. However, if it is hit by an attack, it will flinch and not attack (cannot be prevented with the Inner Focus ability). This attack causes extreme damage if hit and is guaranteed to hit if the user hasn’t already been hit and flinched. This attack is commonly used as a combination attack with Substitute, which prevents the user from being hit, in competitive play often referred to as the sub-punch. This attack is learned naturally by only Vigoroth."
    },
    {
        "name": "Hi Jump Kick",
        "damage": 144,
        "magic": 37,
        "description": "A move learned by kicking Pokémon such as Hitmonlee and Meditite. The user jumps high into the air. However, the user takes 1/16 recoil damage if it fails to hit. The attack is quite powerful and fairly accurate."
    },
    {
        "name": "Jump Kick",
        "damage": 50,
        "magic": 16,
        "description": "Very similar to Hi Jump Kick, the user jumps in the air and if the attack fails to hit the opponent, the user takes 1/16 of the recoil damage. Hitmonlee and Meditite are known for this attack."
    },
    {
        "name": "Karate Chop",
        "damage": 78,
        "magic": 38,
        "description": "The user ’chops’ the opponent using the very popular martial art karate. This attack is widely used in the anime, being popular with the Pokémon Machop."
    },
    {
        "name": "Low Kick",
        "damage": 144,
        "magic": 21,
        "description": "The Pokémon delivers a kick to the opponent’s ankle, therefore making him fall to the floor with all his body weight. This attack does not have a set amount of damage: the heavier the Pokémon that is stricken by this move, the more damage it will cause."
    },
    {
        "name": "Mach Punch",
        "damage": 37,
        "magic": 49,
        "description": "A punch attack, most notably learned by Hitmonchan, that always attacks first. Breloom is also often seen using Mach Punch."
    },
    {
        "name": "Revenge",
        "damage": 83,
        "magic": 54,
        "description": "A special attack that always strikes last (with exceptions, of course). This attack will inflict a middling powerful attack unless the user was attacked in that turn, in which case it will do more damage. Amongst the Pokémon that learn this are Machop/Machoke/Machamp and the Hitmons."
    },
    {
        "name": "Reversal",
        "damage": 55,
        "magic": 38,
        "description": "Very similar to Flail, this attack does more damage when the user’s HP is lower (it “reverses” the battle)."
    },
    {
        "name": "Rock Smash",
        "damage": 75,
        "magic": 21,
        "description": "This attack is obtained only by use of HM06. The user smashes a rock, inflicting minimal damage and also having a fairly high chance of lowering the opponent’s defense. However, this attack is vital for adventure as this attack can be used out of battle to smash rocks."
    },
    {
        "name": "Rolling kick",
        "damage": 114,
        "magic": 22,
        "description": "A special attack only learned by the specialist kicking Pokémon: Hitmonlee and Hitmontop. May cause flinching and does a middling amount of damage."
    },
    {
        "name": "Seismic toss",
        "damage": 107,
        "magic": 38,
        "description": "The user twirls the foe over its head then drops it forcefully onto the ground, inflicting damage equal to the user’s level."
    },
    {
        "name": "Sky Uppercut",
        "damage": 113,
        "magic": 35,
        "description": "Strikes the opponent with a full uppercut that can jump high in the air. Pokémon that learn this attack include Breloom, Hitmonchan and Blaziken. This move possesses a quality to hit Pokémon that are using fly. This attack does a fairly high amount of damage."
    },
    {
        "name": "Submission",
        "damage": 48,
        "magic": 15,
        "description": "Grapples the opponent by attempting to making him submit. Takes recoil damage, although powerful."
    },
    {
        "name": "Superpower",
        "damage": 30,
        "magic": 26,
        "description": "Unique to the legendary braille Pokémon (Regirock, Regice and Registeel) and Deoxys, and as of FireRed and LeafGreen, Nidoqueen, this attack is one of the most powerful fighting attacks and also accurate. As well as lowering the users attack and defence one stage, the attack also inflicts an extremely high amount of damage."
    },
    {
        "name": "Triple Kick",
        "damage": 94,
        "magic": 51,
        "description": "Kicks the opponent for three turns, similarly to Rollout except for 2 less turns, but it starts out with more power. Exclusive to only Hitmontop."
    },
    {
        "name": "Vital Throw",
        "damage": 55,
        "magic": 41,
        "description": "This move never misses, despite the fact that it automatically goes last. The attack is most likely a hurdling throw in which the user picks up the opponent after the opponent has performed its move. Learned by Machop/Machoke/Machamp and Makuhita/Hariyama. Inflicts a middling powerful amount of damage."
    },
    {
        "name": "Acid",
        "damage": 22,
        "magic": 43,
        "description": "The most commonly used Pokémon attack, this attack is learned by Pokémon at low levels and does a fairly low amount of damage. Squirts acid at the opponent therefore irritating him. It may lower the foe’s defense. Also, it attacks both opponent’s in double battles."
    },
    {
        "name": "Acid Armor",
        "damage": 58,
        "magic": 30,
        "description": "The user liquefies its body. This attack ups defence by two points. Grimer and Muk are most commonly seen using this attack."
    },
    {
        "name": "Poison Fang",
        "damage": 21,
        "magic": 45,
        "description": "The user bites the opponent with its sharp fangs. Learned by Pokémon with sharp fangs such as Zubat, Seviper, and Ekans. It may badly poison the foe (similar to the effects of Toxic)."
    },
    {
        "name": "Poison Gas",
        "damage": 76,
        "magic": 47,
        "description": "Inflicts the opponent with the poison condition through toxic gases entering the atmosphere. Learned notably by Koffing and Weezing."
    },
    {
        "name": "Poison Sting",
        "damage": 141,
        "magic": 45,
        "description": "Stings the opponent with barbs or other means. Usually learned by bug type Pokémon like Weedle and Wurmple."
    },
    {
        "name": "Poison Tail",
        "damage": 67,
        "magic": 34,
        "description": "An attack, exclusive to Seviper, that whacks the opponent with its poisonous tail. The attack has a high critical hit ratio and may poison."
    },
    {
        "name": "Poisonpowder",
        "damage": 68,
        "magic": 18,
        "description": "Scatters the opponent with toxic powder that inflicts poison. Learned by most grass type Pokémon like Bulbasaur and Oddish"
    },
    {
        "name": "Sludge",
        "damage": 66,
        "magic": 26,
        "description": "Sludge inflicts damage to the opponent that may cause poison."
    },
    {
        "name": "Sludge Bomb",
        "damage": 19,
        "magic": 18,
        "description": "Fires a hurdling bomb of sludge at the opponent. This attack is obtained via use of TM36."
    },
    {
        "name": "Smog",
        "damage": 49,
        "magic": 6,
        "description": "A weak poison attack. This attack is more useful towards the start of the game but becomes weak when Pokémon begin to learn techniques such as Sludge Bomb."
    },
    {
        "name": "Toxic",
        "damage": 107,
        "magic": 26,
        "description": "A rather special poison technique taught by TM06 which is usually gained by beating a gym leader. The poison caused by this move inflicts more damage as the battle progresses. Toxic is unique among poison attacks in that even types and specific Pokémon that have absolutely nothing in common with Poison types can learn it (e.g. the Normal/Flying type Swellow, among many others)."
    },
    {
        "name": "Bone Club",
        "damage": 123,
        "magic": 22,
        "description": "The user clubs the foe with a bone. This attack is exclusive to the bone holding Pokémon: Cubone and Marowak"
    },
    {
        "name": "Bone Rush",
        "damage": 13,
        "magic": 27,
        "description": "The user strikes the foe with a bone in the hand 2-5 times. This attack is exclusive to Cubone and Marowak as they hold a bone in their hand."
    },
    {
        "name": "Bonemerang",
        "damage": 20,
        "magic": 45,
        "description": "Throws a bone that acts as a boomerang that inflicts damage twice on the opponent. Exclusive to Cubone and Marowak."
    },
    {
        "name": "Dig",
        "damage": 126,
        "magic": 42,
        "description": "The user digs underneath the ground and then attacks, the attack lasting two turns: one to retreat to underneath the ground and one to attack. The user can, however, be stricken by Swift in the first generation games, Earthquake and Magnitude in other games during the first turn. Despite being learned by almost every Pokémon with TM28, this attack is most commonly seen being used by Digletts and Dugtrios as digging is what they practice as a hobby."
    },
    {
        "name": "Earthquake",
        "damage": 137,
        "magic": 47,
        "description": "The most powerful ground attack, wherein the user creates an earthquake. This attack has an extremely high attack as well as a high accuracy. The damage is doubled if opponent is using Dig. In 2-on-2 battles, this attack hits everyone on the field except the user, therefore it is better to be allied with a Flying-type or a Pokémon with the ability to Levitate during 2-on-2 battles so you do not cause them to faint using this technique"
    },
    {
        "name": "Fissure",
        "damage": 126,
        "magic": 7,
        "description": "Drops the foe in a fissure. Though inaccurate, this attack is a guaranteed one-hit K.O. if it hits. It is teachable by TM27 in Pokémon Red and Blue, and naturally learned by Diglett, Barboach and Groudon. Flying type Pokémon are immune to it, as well as Pokémon with the ability Sturdy."
    },
    {
        "name": "Magnitude",
        "damage": 86,
        "magic": 17,
        "description": "Summons an earthquake. This earthquake is randomly given a number of 1-10 on the Moment Magnitude Scale. This attack will inflict a very high amount of damage if it is assigned 10, or an extremely low power if it is assigned 1."
    },
    {
        "name": "Mud Slap",
        "damage": 98,
        "magic": 34,
        "description": "An extremely weak ground attack in which the user slaps mud into the foe’s eyes, lowering the foe’s accuracy. Despite being a ground attack, this move can be taught to almost every Pokémon via a TM or the Move Tutor."
    },
    {
        "name": "Mud Shot",
        "damage": 14,
        "magic": 46,
        "description": "Hurls a ball of mud at the foe which may lower speed."
    },
    {
        "name": "Mud Sport",
        "damage": 100,
        "magic": 15,
        "description": "Covers the user in mud to raise electrical resistance. This attack lowers the power of Electric moves. In the third-generation games, this attack is generally considered useless, as almost every Pokémon that learns it is a Ground type, and are immune to Electric attacks anyway. The only exceptions in Ruby & Sapphire are Zigzagoon, Linoone, and a few Pokémon that obtain it through breeding. It is a bit underused in Double Battles, though, as it will protect your other Pokémon as well."
    },
    {
        "name": "Sand Tomb",
        "damage": 95,
        "magic": 40,
        "description": "Rather similar in terms of effects to Whirlpool, this attack hurls quicksand at the foe, causing it to lose HP for 5 turns due to the resistance. The attack also prevents the opponent from switching Pokémon or running away. The attack itself does very little damage."
    },
    {
        "name": "Sand Attack",
        "damage": 14,
        "magic": 25,
        "description": "Lowers the foe’s accuracy and has no other effect. Learned by many non-ground Pokémon including Pidgey and Zigzagoon."
    },
    {
        "name": "Spikes",
        "damage": 117,
        "magic": 49,
        "description": "Scatters the arena with spikes, not having any present effect but hurting the foe every time he switches Pokémon. May be used up to three times, each time increasing the number of spikes, and therefore the amount of damage dealt. Does not affect flying types or those with the ability Levitate. Learned by Pokémon that have bodies containing spikes such as Cloyster, Cacnea and Pineco."
    },
    {
        "name": "Aerial Ace",
        "damage": 83,
        "magic": 32,
        "description": "A special attack, similar to Swift and Shock Wave, that never misses. The TM for this attack, TM40, is given by the trainer when he/she defeats Winona."
    },
    {
        "name": "Aeroblast",
        "damage": 75,
        "magic": 19,
        "description": "Launches a vacuumed gust of wind. Learned only by the legendary Pokémon Lugia, this attack is extremely powerful as well as having a high critical-hit ratio."
    },
    {
        "name": "Air Cutter",
        "damage": 84,
        "magic": 38,
        "description": "Hacks the opponent with a punishing wind. Exclusive to Zubat/Golbat/Crobat and Skarmory. This attack has a middling power but a high-critical hit ratio. In double battles, it hits both of the opponent's Pokémon."
    },
    {
        "name": "Bounce",
        "damage": 22,
        "magic": 39,
        "description": "An attack similar to Fly in which the user bounces up in the air in one turn and then bounces down, therefore consuming two turns. This attack is most notably used by Spoink, although it can be learned by Ponyta/Rapidash."
    },
    {
        "name": "Drill Peck",
        "damage": 30,
        "magic": 44,
        "description": "The user uses its beak as a drill and forcefully pecks the foe. Does a high amount of damage."
    },
    {
        "name": "Featherdance",
        "damage": 93,
        "magic": 43,
        "description": "The user performs a graceful dance using its feathers to cover the foe in them. This attack lowers the opponents attack by two. It is learned by the Pidgey line, and Natu/Xatu."
    },
    {
        "name": "Fly",
        "damage": 15,
        "magic": 15,
        "description": "This is a very special HM move. This move allows the player to fly to any location he has already visited (for gameplay purposes). As far as battle is concerned, the user consumes two turns: one to fly up into the air and one to attack. It can, however, be hit by many moves such as: Sky Uppercut, Thunder, Twister, and Gust."
    },
    {
        "name": "Gust",
        "damage": 144,
        "magic": 5,
        "description": "Summons a gust of wind that does low power, but that can hit opponents that are using Fly for double damage. In the first-generation games, this attack was a normal-type one."
    },
    {
        "name": "Mirror Move",
        "damage": 47,
        "magic": 49,
        "description": "Counters the opponent with the move that the opponent last used to hit the foe."
    },
    {
        "name": "Peck",
        "damage": 124,
        "magic": 31,
        "description": "Pecks the opponent with a beak, naturally. A low-level Flying attack, although Goldeen learns it."
    },
    {
        "name": "Sky Attack",
        "damage": 33,
        "magic": 30,
        "description": "The user shines brightly as a result of its power and flies into the foe forcefully. The most powerful Flying attack, it inflicts an extremely large amount of damage. However, this attack requires two turns, like SolarBeam. It is learned by Moltres and Altaria."
    },
    {
        "name": "Wing Attack",
        "damage": 139,
        "magic": 8,
        "description": "Strikes the foe with stiff wings. Learned by most flying Pokémon at low levels."
    },
    {
        "name": "Agility",
        "damage": 28,
        "magic": 27,
        "description": "Relaxes the body to sharply raise speed. Learned by many non-psychic Pokémon."
    },
    {
        "name": "Amnesia",
        "damage": 128,
        "magic": 6,
        "description": "Forgets about something to sharply raise Special Defense."
    },
    {
        "name": "Barrier",
        "damage": 60,
        "magic": 27,
        "description": "Creates a barrier that raises defense by two stages. This barrier can be penetrated by the technique Brick Break, however. This attack is the move most commonly used by Mr. Mime."
    },
    {
        "name": "Calm Mind",
        "damage": 131,
        "magic": 13,
        "description": "By deeply focusing the mind, this move raises the stats Special defense and Special Attack. This move is taught by TM04 which is obtained by beating the Gym leaders Liza and Tate in Ruby, Sapphire and Emerald and in Pokémon FireRed and LeafGreen the TM is given to by Sabrina."
    },
    {
        "name": "Confusion",
        "damage": 127,
        "magic": 47,
        "description": "The attack attempts to confuse the opponent, damaging it as well, although it doesn’t necessarily inflict the status ailment confusion. This attack is learned by most psychic Pokémon at low levels."
    },
    {
        "name": "Cosmic Power",
        "damage": 59,
        "magic": 35,
        "description": "Raises defence and special defense by one stage each. Learned by Pokémon from the cosmos such as Clefairy, Lunatone and Jirachi."
    },
    {
        "name": "Dream Eater",
        "damage": 117,
        "magic": 10,
        "description": "This attack only works while the status ailment sleep is in effect on the opponent. The attack does a very high amount of damage to the foe and recovers half of it for the user."
    },
    {
        "name": "Extrasensory",
        "damage": 106,
        "magic": 32,
        "description": "This attack inflicts a high amount of damage that may cause flinching. The attack is described as “attacking with a peculiar power”. It is most often used by Shiftry.[citation needed]"
    },
    {
        "name": "Future Sight",
        "damage": 108,
        "magic": 41,
        "description": "Places an omen into the future that inflicts damage two turns later, even if the opponent trainer switches Pokémon. A straight special attack, it is not affected by weakness, resistance, or invulnerability (dark types), much like Doom Desire."
    },
    {
        "name": "Hypnosis",
        "damage": 47,
        "magic": 5,
        "description": "Hypnotizes the foe, inflicting sleep. This attack is learned by many non-psychic Pokémon such as Poliwag and Exeggcute, although it is Hypno’s signature move, as he holds a pendulum that allures sleep."
    },
    {
        "name": "Imprison",
        "damage": 27,
        "magic": 15,
        "description": "After using this move, the opponent is forbidden to use any moves that the user knows. For example, if they both know the move Tackle, then the opponent will not be able to use it. Learned by Vulpix and Ralts/Kirlia/Gardevoir"
    },
    {
        "name": "Kinesis",
        "damage": 46,
        "magic": 33,
        "description": "Inflicts kinetic energy (the energy to move, that a body has as a result of its speed) upon a spoon. This move distracts the foe and lowers its accuracy. This move is exclusive to the spoon bearing Pokémon Kadabra and Alakazam. Also, unlike similar attacks such as Flash, Smokescreen, and Sand-Attack, this attack is not reflected by the use of Magic Coat."
    },
    {
        "name": "Light Screen",
        "damage": 63,
        "magic": 32,
        "description": "Creates a wall that causes special attacks to deal 50% of the damage they would normally inflict. May be destroyed by Brick Break."
    },
    {
        "name": "Luster Purge",
        "damage": 74,
        "magic": 9,
        "description": "This attack is exclusive to Latios. This move attacks with a sharp burst of light that may lower special defense. Although it is weaker and has less PP than Psychic, which has a similar effect, the probability for the activation of its effect is greater than that of Psychic."
    },
    {
        "name": "Magic Coat",
        "damage": 142,
        "magic": 54,
        "description": "Exclusive to Spoink/Grumpig, this move creates a coat which makes all special attacks reflect back to the attacker."
    },
    {
        "name": "Meditate",
        "damage": 99,
        "magic": 22,
        "description": "Meditates peacefully, therefore building it up to a challenge and raising attack one stage."
    },
    {
        "name": "Mirror Coat",
        "damage": 135,
        "magic": 19,
        "description": "Providing the move used by the opponent is of a special nature, this attack will deal double the damage to the attacker."
    },
    {
        "name": "Mist Ball",
        "damage": 102,
        "magic": 23,
        "description": "The Latias equivalent to Luster Purge. Inflicts damage that may lower special attack."
    },
    {
        "name": "Psybeam",
        "damage": 39,
        "magic": 12,
        "description": "Fires a peculiar wave and inflicts a middling amount of damage on the foe."
    },
    {
        "name": "Psychic",
        "damage": 37,
        "magic": 43,
        "description": "One of the most powerful, accurate, and commonly used psychic-type attacks. Fires a blast of psychic energy. May lower Special Defense."
    },
    {
        "name": "Psycho Boost",
        "damage": 75,
        "magic": 31,
        "description": "A super-strong psychic attack, but lowers special attack by two stages. Compare to Overheat. Notably used by Deoxys and the Lugia XD001 in Pokémon XD: Gale of Darkness."
    },
    {
        "name": "Reflect",
        "damage": 130,
        "magic": 33,
        "description": "Creates a wall of light that causes physical attacks to have 50% of the power they would normally have."
    },
    {
        "name": "Rest",
        "damage": 37,
        "magic": 43,
        "description": "Goes into a deep sleep (inflicts the status ailment sleep) and restores all HP and replaces any existing status ailments with sleep. This move is a very convenient move to use if you have moves such as Snore and Sleep Talk, but is also risky if the opponent is a ghost and knows moves such as Dream Eater and Nightmare."
    },
    {
        "name": "Role Play",
        "damage": 64,
        "magic": 22,
        "description": "Plays the role of the opponent and copies its ability (rather like skill swap, except it does not exchange, it copies). Learned by the miming Pokémon Mr. Mime for obvious reasons and Kadabra. Similar to Skill Swap, this move will fail on Wonder Guard."
    },
    {
        "name": "Skill Swap",
        "damage": 59,
        "magic": 16,
        "description": "Taught by TM 48, this attack swaps the ability with the opponent. However, it is impossible to copy Shedinja’s ability, Wonder Guard. In double battles this attack can swap the ability with any other Pokémon on the field."
    },
    {
        "name": "Teleport",
        "damage": 120,
        "magic": 22,
        "description": "Teleports out of battle with a wild Pokémon; does not work in trainer battles. Outside of battle, this move allows the player to transport to the last Pokémon center visited. This is the only attack Abra learns by level up."
    },
    {
        "name": "Trick",
        "damage": 99,
        "magic": 50,
        "description": "Tricks the opponent into exchanging the item held by the user with that of the opponent’s."
    },
    {
        "name": "Fury Cutter",
        "damage": 96,
        "magic": 23,
        "description": "Slashes the foe with claws or barbs, increasing damage dealt every time it hits. This attack is given to you in a TM when you defeat Bugsy from Azalea Town in Gold, Silver and Crystal. Although this move no longer remains contained in a TM throughout the 3rd generation, it can be taught by a Battle Frontier move tutor."
    },
    {
        "name": "Leech Life",
        "damage": 114,
        "magic": 53,
        "description": "Latches onto the foe and bites it, draining it of a small amount of HP. Like Absorb, it deals damage and recovers HP equal to half the damage inflicted. Learned by a lot of bug Pokémon at a low level."
    },
    {
        "name": "Megahorn",
        "damage": 80,
        "magic": 5,
        "description": "Rams the foe with a superbly powerful horn to deal an extreme amount of damage. The most powerful bug attack, this attack is learned by Pokémon with extremely powerful horns such as Rhyhorn/Rhydon and Heracross"
    },
    {
        "name": "Pin Missile",
        "damage": 25,
        "magic": 12,
        "description": "Fires sharp pins at the foe 2-5 times a turn. Learned by Pokémon with quills and barbs, such as Cacnea, Beedrill, Jolteon and Qwilfish."
    },
    {
        "name": "Signal Beam",
        "damage": 126,
        "magic": 25,
        "description": "Fires a strange red and green beam that may confuse the foe. Commonly used by Volbeat and Ariados. Oddly, the Water/Ice Pokémon Dewgong can also learn the attack naturally."
    },
    {
        "name": "Silver Wind",
        "damage": 115,
        "magic": 45,
        "description": "A brilliant silvery powder wafts through the air, dealing damage to the foe. Like Ancientpower, it has a small chance of increasing all stats by one. The Pokémon that learn this attack are all flying insects: Venomoth, Butterfree, Dustox, Masquerain and Beautifly."
    },
    {
        "name": "Spider Web",
        "damage": 33,
        "magic": 21,
        "description": "Wraps the opponent in a web that is impossible to escape from. Learned by the spider Pokémon Spinarak and Ariados."
    },
    {
        "name": "String Shot",
        "damage": 136,
        "magic": 50,
        "description": "Envelops the foe with a blast of silk to reduce speed. It became famous early on, as it was one of Caterpie and Weedle’s only attacks. Later, Spinarak and Wurmple would use it."
    },
    {
        "name": "Tail Glow",
        "damage": 139,
        "magic": 36,
        "description": "This attack is exclusive to Volbeat. Volbeat makes its tail glow brightly, sharply raising Special Attack."
    },
    {
        "name": "Twineedle",
        "damage": 56,
        "magic": 38,
        "description": "This attack was designed for Beedrill, and therefore is exclusive to Beedrill. Beedrill shoots a twin set of poisonous barbs to damage the foe and possibly poison it."
    },
    {
        "name": "Ancientpower",
        "damage": 110,
        "magic": 36,
        "description": "The user uses all the power of the ancient world using skills which existed long ago. This attack does a middling amount of damage but also has a secondary effect of raising all stats (attack, defence, speed, special defence and special attack.) This attack, as suggested by the name, is learned by Pokémon that existed long ago, including Kabuto, Omanyte, Aerodactyl, Baltoy, Anorith and Lileep, and all three Regis. However, it may also be learned by some Pokémon as an egg move."
    },
    {
        "name": "Rock Blast",
        "damage": 35,
        "magic": 34,
        "description": "Blasts multiple heavy boulders at the foe, and attacking 2-5 times in one turn."
    },
    {
        "name": "Rock Slide",
        "damage": 34,
        "magic": 54,
        "description": "Hurls large boulders at the foe. Also has a chance at making the opponent flinch. Strikes both opponents in double battles."
    },
    {
        "name": "Rock Throw",
        "damage": 102,
        "magic": 16,
        "description": "Throws large boulders at the foe."
    },
    {
        "name": "Rock Tomb",
        "damage": 11,
        "magic": 43,
        "description": "Uses rocks to stop the foe from moving. This attack always causes the foe to lose speed by one level. "
    },
    {
        "name": "Rollout",
        "damage": 79,
        "magic": 29,
        "description": "This attack continuously attacks with rising power automatically using this attack for 5 turns. Learned by Pokémon with spherical bodies, which include, but are not limited to: Jigglypuff, Geodude, Phanpy, Donphan, Voltorb and Marill."
    },
    {
        "name": "Sandstorm",
        "damage": 130,
        "magic": 10,
        "description": "Summons a sandstorm for 5 turns which inflicts damage each one of those turns to Pokémon that are every type except Rock, Ground and Steel. In Ruby, Sapphire and Emerald there is a desert region in which this move is automatically in effect. Rather similar to Hail. This attack can be taught to many Pokémon that are not Rock, Ground, or Steel via TM37, although it will still inflict damage on them."
    },
    {
        "name": "Astonish",
        "damage": 15,
        "magic": 35,
        "description": "Shocks the foe somehow and possibly causing flinching. Many non-ghost type Pokémon learn this."
    },
    {
        "name": "Confuse Ray",
        "damage": 56,
        "magic": 15,
        "description": "A very peculiar ray confuses the foe. Learned by mostly non-ghost type Pokémon."
    },
    {
        "name": "Destiny Bond",
        "damage": 55,
        "magic": 13,
        "description": "An attack with a special purpose; if the Pokémon who uses it is defeated by an opponent’s direct attack on the same turn, the opponent will also be knocked out. :Native users include: Wobbuffet, Misdreavus, Gengar, and (in Pokémon Trading Card Game base set) Gastly."
    },
    {
        "name": "Grudge",
        "damage": 44,
        "magic": 16,
        "description": "A special ghost type attack in which the user builds up a grudge on the opponent Pokémon. If the user faints, the PP of the last move the opponent did will become 0 PP. Amongst the users are Vulpix, Misdreavus and Shedinja."
    },
    {
        "name": "Lick",
        "damage": 80,
        "magic": 49,
        "description": "Licks the opponent with the large tongue he may possess. It does little damage, but often paralyzes the foe. In the first-generation games, it was the only attack that took advantage of the Ghost type to deal damage."
    },
    {
        "name": "Night Shade",
        "damage": 55,
        "magic": 14,
        "description": "Cloaks the foe in darkness and inflicts damage equal to the user’s level."
    },
    {
        "name": "Nightmare",
        "damage": 17,
        "magic": 15,
        "description": "The user causes the foe to have nightmares while the opponent is inflicted with the sleep condition, dealing a small amount of damage until the foe awakens."
    },
    {
        "name": "Shadow Ball",
        "damage": 61,
        "magic": 41,
        "description": "Hurls a black blob at the opponent which may lower special defense. Learned with the use of TM30."
    },
    {
        "name": "Shadow Punch",
        "damage": 75,
        "magic": 16,
        "description": "A punch, described as being thrown from shadows, which does not miss and therefore is a perfect attack to use if the foe is constantly lowering your accuracy."
    },
    {
        "name": "Spite",
        "damage": 140,
        "magic": 38,
        "description": "The user’s spite towards the foe causes the last move the opponent used to lose 2-5 PP."
    },
    {
        "name": "Dragon Claw",
        "damage": 138,
        "magic": 29,
        "description": "Hooks and slashes the foe with the fantastic claws it has. Although learned by Salamence and Rayquaza, this attack can be taught to dragons through TM02."
    },
    {
        "name": "Dragon Dance",
        "damage": 99,
        "magic": 36,
        "description": "Performs a mystical dance that raises attack and speed one stage."
    },
    {
        "name": "Dragon Rage",
        "damage": 79,
        "magic": 20,
        "description": "This attack ignores stats, type advantages etc. and always inflicts 40HP damage. This was the only dragon type move in the 1st generation games."
    },
    {
        "name": "Dragonbreath",
        "damage": 144,
        "magic": 37,
        "description": "Often depicted, the dragon breathes special flames. Deals a middling amount of damage and may cause paralysis."
    },
    {
        "name": "Meteoric Swarm",
        "damage": 58,
        "magic": 31,
        "description": "The first announced move for the upcoming games on the Nintendo DS, Pokémon Diamond and Pearl. A powerful move, but sharply lowers special attack. Compare to Overheat and Psycho Boost."
    },
    {
        "name": "Outrage",
        "damage": 109,
        "magic": 17,
        "description": "Similarly to Thrash, the user inflicts a high amount of damage consecutively over two to three turns due to extreme anger; the user then becomes confused due to fatigue."
    },
    {
        "name": "Twister",
        "damage": 61,
        "magic": 17,
        "description": "Whips up a vicious twister, tearing the foe and everything in its path. The damage is doubled if opponent is using fly and may cause opponent to flinch. In double battles, it hits both of the opponent’s pokémon."
    },
    {
        "name": "Beat Up",
        "damage": 118,
        "magic": 31,
        "description": "All ally Pokémon in the party gang up on the foe, using their own attack statistic. A handful of Pokémon can learn this by breeding, but Sneasel is the only Pokémon that learns this attack by level up."
    },
    {
        "name": "Bite",
        "damage": 23,
        "magic": 54,
        "description": "Bites the opponent and may cause flinching. Deals a middling amount of damage."
    },
    {
        "name": "Crunch",
        "damage": 31,
        "magic": 54,
        "description": "Viciously crunches the opponent with sharp fangs. This attack inflicts a fairly high amount of damage and may lower the opponent’s special defense by 2 levels."
    },
    {
        "name": "Faint Attack",
        "damage": 96,
        "magic": 44,
        "description": "This attack does not miss, as the user sneaks on the foe and strikes when the foe lets its guard down. Deals a middling amount of damage."
    },
    {
        "name": "Fake Tears",
        "damage": 48,
        "magic": 52,
        "description": "Pretends to cry and makes the foe sad, reducing its Special Defense."
    },
    {
        "name": "Flatter",
        "damage": 19,
        "magic": 18,
        "description": "Acts very kindly to the foe and flatters it. It becomes confused, but also believes in itself more, which raises its special attack. Pokémon that are obviously feminine learn this move, such as Nidoran♀ and Illumise."
    },
    {
        "name": "Knock Off",
        "damage": 36,
        "magic": 28,
        "description": "Knocks off the item the foe is holding, forbidding its use. The attack also causes a small amount of damage."
    },
    {
        "name": "Memento",
        "damage": 81,
        "magic": 53,
        "description": "The user causes itself to faint and leaves behind its fury, lowering the foes Special Attack and base Attack sharply. Among the users are Grimer, Koffing and Latios."
    },
    {
        "name": "Pursuit",
        "damage": 87,
        "magic": 40,
        "description": "Ruthlessly hunts down the foe, dealing a large amount of damage if it is switched out."
    },
    {
        "name": "Snatch",
        "damage": 55,
        "magic": 28,
        "description": "Waits for the foe to use an attack and snatches its self-benefial uses for itself."
    },
    {
        "name": "Taunt",
        "damage": 48,
        "magic": 41,
        "description": "Taunts the foe so that it will only produce attack moves and refuse to use moves that have any other kind of effect."
    },
    {
        "name": "Thief",
        "damage": 20,
        "magic": 34,
        "description": "Strikes the foe and steals its held item for itself using expert thieving skills."
    },
    {
        "name": "Torment",
        "damage": 104,
        "magic": 42,
        "description": "Torments the foe, ensuring that the foe will not be able to use the same move twice in a row."
    },
    {
        "name": "Doom Desire",
        "damage": 79,
        "magic": 38,
        "description": "A very special attack only learned by the Pokémon Jirachi. Brilliant rays of sunlight are summoned and shone onto the enemy to deal a large amount of damage 2 turns later . A straight physical attack, it is not affected by weakness or resistance (much like Future Sight)."
    },
    {
        "name": "Iron Defense",
        "damage": 29,
        "magic": 43,
        "description": "Hardens the body’s metallic surface to raise defense by two levels."
    },
    {
        "name": "Iron Tail",
        "damage": 13,
        "magic": 31,
        "description": "Attacks with a tail as hard as iron and may lower defense. Learned by TM23."
    },
    {
        "name": "Metal Claw",
        "damage": 96,
        "magic": 10,
        "description": "Scrapes with a claw and may raise the users attack."
    },
    {
        "name": "Metal Sound",
        "damage": 50,
        "magic": 38,
        "description": "Emits a screech that lowers special defense by two stages."
    },
    {
        "name": "Meteor Mash",
        "damage": 29,
        "magic": 14,
        "description": "Mashes meteors that inflict a lot of damage and may raise attack. This attack is nearly exclusive to Metang/Metagross although it is possible that Clefairy can learn it."
    },
    {
        "name": "Steel Wing",
        "damage": 57,
        "magic": 11,
        "description": "Attacks with a steel wing that may raise defense one stage. This attack can be taught via TM47 to many birds, and Skarmory is the only Pokémon that learns the move by level up."
    },
    {
        "name": "Curse",
        "damage": 80,
        "magic": 27,
        "description": "The effects of this attack are different  depending on the type of Pokémon that uses it. Ghost-type Pokémon lose half of their maximum HP, and the opponent is Cursed. While Cursed, the opponent loses a quarter of its maximum HP each successive turn. Any other type of Pokémon that uses Curse has its Attack and Defense stats raised at the expense of Speed."
    },
    {
        "name": "Shadow Rush",
        "damage": 49,
        "magic": 42,
        "description": "A strong shadow attack. In Pokémon Colosseum, the user takes a fraction of the damage dealt."
    },
    {
        "name": "Shadow Blast",
        "damage": 110,
        "magic": 48,
        "description": "A powerful shadow attack. Exclusive to Shadow Lugia."
    },
    {
        "name": "Shadow Blitz",
        "damage": 123,
        "magic": 46,
        "description": "A one-target, common shadow attack."
    },
    {
        "name": "Shadow Bolt",
        "damage": 73,
        "magic": 8,
        "description": "A powerful shadow attack that can paralyze the opponent. Exclusive to Shadow Zapdos."
    },
    {
        "name": "Shadow Break",
        "damage": 85,
        "magic": 52,
        "description": "A powerful shadow attack that only a few Pokémon learn."
    },
    {
        "name": "Shadow Chill",
        "damage": 121,
        "magic": 8,
        "description": "A powerful shadow attack that can freeze the opponent. Exclusive to Shadow Articuno."
    },
    {
        "name": "Shadow Down",
        "damage": 121,
        "magic": 22,
        "description": "Greatly lowers both opponents’ defense statistic."
    },
    {
        "name": "Shadow End",
        "damage": 83,
        "magic": 7,
        "description": "An extremely powerful shadow attack that inflicts a recoil damage to the user equal to half their current HP."
    },
    {
        "name": "Shadow Fire",
        "damage": 16,
        "magic": 50,
        "description": "A powerful shadow attack that can burn the opponent. Exclusive to Shadow Moltres."
    },
    {
        "name": "Shadow Half",
        "damage": 117,
        "magic": 21,
        "description": "On the first turn, all Pokémon in the field have their HP cut in half, and the user misses their second turn, like Hyper Beam."
    },
    {
        "name": "Shadow Hold",
        "damage": 24,
        "magic": 32,
        "description": "Prevents opponents from switching out."
    },
    {
        "name": "Shadow Mist",
        "damage": 108,
        "magic": 24,
        "description": "Drops opponents’ evasiveness one stage."
    },
    {
        "name": "Shadow Panic",
        "damage": 83,
        "magic": 51,
        "description": "Confuses both opponents."
    },
    {
        "name": "Shadow Rave",
        "damage": 67,
        "magic": 39,
        "description": "A moderately powerful attack that damages both opponents."
    },
    {
        "name": "Shadow Shed",
        "damage": 138,
        "magic": 45,
        "description": "Removes the effects of Light Screen and Reflect from both sides of the field."
    },
    {
        "name": "Shadow Sky",
        "damage": 14,
        "magic": 14,
        "description": "Causes “Shadow Weather” in which all non-Shadow Pokémon lose 1/16th of their maximum HP each turn."
    },
    {
        "name": "Shadow Storm",
        "damage": 58,
        "magic": 52,
        "description": "A very powerful shadow attack that hits both opponents."
    },
    {
        "name": "Shadow Wave",
        "damage": 53,
        "magic": 13,
        "description": "A shadow attack that hits both opponents."
    }
]
module.exports = skills;