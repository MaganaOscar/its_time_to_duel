class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target) {
        if (target instanceof Unit){
            target.resilience -= this.power;
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if (target instanceof Unit) {
            if (this.stat === "power") {
                target.power += this.magnitude;
            } else if (this.stat === "resilience") {
                target.resilience += this.magnitude;
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgo = new Effect ("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const unPromRej = new Effect ("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pairProgr = new Effect ("Pair Programming", 3, "increase target's power by 2", "power", 2);

console.log("RedBelt res: " + redBeltNinja.resilience);
hardAlgo.play(redBeltNinja);
console.log("RedBelt res: " + redBeltNinja.resilience);
console.log("RedBelt pow: " + redBeltNinja.power);
pairProgr.play(redBeltNinja);
console.log("RedBelt pow: " + redBeltNinja.power);

console.log("BlackBelt res: " + blackBeltNinja.resilience);
redBeltNinja.attack(blackBeltNinja);
console.log("BlackBelt res: " + blackBeltNinja.resilience);

