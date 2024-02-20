import { NobleHouse } from "./Classes/NobleHouse";
import { Heir } from "./Classes/Heir";
import { HouseHeir } from "./Interface/HouseHeir";
import { HouseRoles } from "./Interface/HouseRules";
import { Baratheon } from "./Classes/Houses/Baratheon";
import { Greyjoy } from "./Classes/Houses/Greyjoy";
import { Lannister } from "./Classes/Houses/Lannister";
import { Stark } from "./Classes/Houses/Stark";
import { Targaryen } from "./Classes/Houses/Targaryen";

let houses: string[] = ['Baratheon', 'Greyjoy', 'Lannister', 'Stark', 'Targaryen']
let soldirer = [200, 125, 36, 888, 322]

function BattleOfTheHouses(): void {
    if (houses.length != soldirer.length) {
        throw new Error("check the participants of the battles. Every house and every army must participate ");
    }

    let maxValue = 0;
    let strongHouse: string = "";

    for (let i = 0; i < soldirer.length; i++) {
        if(soldirer[i] > maxValue){
            maxValue = soldirer[i];
            strongHouse = houses[i]
        }
    }

    console.log(`The house's winner is ${strongHouse}`)
}



let newBaratheonHouse = new Baratheon("Baratheon", "Nossa é a Fúria!")

newBaratheonHouse.addHeir(new Heir('MArcelo', 2, 1))

newBaratheonHouse.informationHouse()

BattleOfTheHouses()