import { NobleHouse } from "../NobleHouse";
import { Heir } from "../Heir";
import { HouseRoles } from "../../Interface/HouseRules";
import { HouseHeir } from "../../Interface/HouseHeir";

class Baratheon extends NobleHouse {
    name: string
    motto: string

    constructor(name: string, motto: string){
        super(name, motto)
    }
}
export { Baratheon }