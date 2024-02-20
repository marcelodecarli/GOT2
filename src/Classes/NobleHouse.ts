import { HouseHeir } from "../Interface/HouseHeir"
import { Heir } from "./Heir"
import { HouseRoles } from "../Interface/HouseRules"
import { Baratheon } from "./Houses/Baratheon"
import { Greyjoy } from "./Houses/Greyjoy"
import { Lannister } from "./Houses/Lannister"
import { Stark } from "./Houses/Stark"
import { Targaryen } from "./Houses/Targaryen"


//Create class of noble houses

class NobleHouse {

    house: string //name of the house
    motto: string//motto of the house
    listHeir: any[] = []

    constructor(house: string, motto: string) {
        this.house = house
        this.motto = motto
    }


    addHeir(heir: Heir): void {
        this.listHeir.push(heir)
    }


    informationHouse() {
        console.log(`Name of the house: ${this.house}`)
        console.log(`Motto of the house: ${this.motto}`)

        for (let i = 0; i < this.listHeir.length; i++) {
            let heirs = this.listHeir[i]
            console.log(`${i + 1} - Name: ${heirs.nameHeir} - Age: ${heirs.ageHeir} - Succession Ranking ${heirs.successionRanking}`)
        }

    }


}





export { NobleHouse }