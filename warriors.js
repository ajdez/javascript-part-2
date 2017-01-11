//Warriors document

function Warrior(name, gender, level, weapon){
    this.name = name;
    this.gender = gender;
    this.level = level;
    this.weapon = weapon;
    this.power = Math.floor(Math.random()*101);
    this.fight = function(){
        console.log("Rushes to the arena")
    };
    this.faceoff = function(oponent){
        if (this.power < oponent.power){
            console.log("How can it be? " + oponent.name + " wrecked you! His power level of " + oponent.power + " was too much for your little muscles to handle");
        }
        else if (this.power > oponent.power){
            console.log("You have destroyed the little girl they call " + oponent.name +". Perhaps now they will trully understand the power of the force.");
        }
        else if (this.power === oponent.power){
            console.log("It was a draw, good fight kids. NOW GET OUT OF MY HOUSE.");
        }
    }
};

var conan = new Warrior("Conan the barbarian", "M", 1, "wooden sword");
var mario = new Warrior("Mario", "M", 1, "fist");
var link = new Warrior("Link", "M", 1, "Sword");
var kevin = new Warrior("Kevin Spacey", "M", 20, "Space Attack");
var yoshi = new Warrior("Yoshi", "F", 1, "Eggs");

yoshi.faceoff(conan);
mario.faceoff(yoshi);
kevin.faceoff(link);