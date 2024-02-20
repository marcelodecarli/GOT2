import { HouseHeir } from "../Interface/HouseHeir";

/*

This class Heir belongs to interface HouseHeir.
In this case HouseHeir have required atributes,
but if you need other atributes you can includ

*/

class Heir implements HouseHeir {

    nameHeir: string
    ageHeir: number
    successionRanking: number

    constructor(nameHeir: string, ageHeir: number, successionRanking: number) {

        this.nameHeir = nameHeir
        this.ageHeir = ageHeir
        this.successionRanking = successionRanking

    }

}

export {Heir}