"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coach = void 0;
const Person_1 = require("../core/Person");
class Coach extends Person_1.Person {
    constructor(personId, firstName, lastName, dateOfBirth, nationality, teamId, role, licenseLevel) {
        super(personId, firstName, lastName, dateOfBirth, nationality);
        this.teamId = teamId;
        this.role = role;
        this.licenseLevel = licenseLevel;
    }
    conductTraining() {
        console.log(`Coach ${this.getFullName()} is conducting training.`);
    }
    selectSquad() {
        console.log(`Coach ${this.getFullName()} is selecting the squad.`);
    }
}
exports.Coach = Coach;
