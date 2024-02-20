"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NobleHouse = void 0;
class NobleHouse {
    constructor(house, motto) {
        this.listHeir = [];
        this.house = house;
        this.motto = motto;
    }
    addHeir(heir) {
        this.listHeir.push(heir);
    }
    informationHouse() {
        console.log(`Name of the house: ${this.house}`);
        console.log(`Motto of the house: ${this.motto}`);
        for (let i = 0; i < this.listHeir.length; i++) {
            let heirs = this.listHeir[i];
            console.log(`${i + 1} - Name: ${heirs.nameHeir} - Age: ${heirs.ageHeir} - Succession Ranking ${heirs.successionRanking}`);
        }
    }
}
exports.NobleHouse = NobleHouse;
//# sourceMappingURL=NobleHouse.js.map