"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Heir_1 = require("./Classes/Heir");
const Baratheon_1 = require("./Classes/Houses/Baratheon");
let houses = ['Baratheon', 'Greyjoy', 'Lannister', 'Stark', 'Targaryen'];
let soldirer = [200, 125, 36, 888, 322];
function BattleOfTheHouses() {
    if (houses.length != soldirer.length) {
        throw new Error("check the participants of the battles. Every house and every army must participate ");
    }
    let maxValue = 0;
    let strongHouse = "";
    for (let i = 0; i < soldirer.length; i++) {
        if (soldirer[i] > maxValue) {
            maxValue = soldirer[i];
            strongHouse = houses[i];
        }
    }
    console.log(`The house's winner is ${strongHouse}`);
}
let newBaratheonHouse = new Baratheon_1.Baratheon("Baratheon", "Nossa é a Fúria!");
newBaratheonHouse.addHeir(new Heir_1.Heir('MArcelo', 2, 1));
newBaratheonHouse.informationHouse();
BattleOfTheHouses();
//# sourceMappingURL=Battle.js.map