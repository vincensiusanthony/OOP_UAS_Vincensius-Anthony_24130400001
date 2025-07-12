"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const Person_1 = require("../core/Person");
class Player extends Person_1.Person {
    constructor(personId, firstName, lastName, dateOfBirth, nationality, teamId, position, jerseyNumber, marketValue, status) {
        super(personId, firstName, lastName, dateOfBirth, nationality);
        this.teamId = teamId;
        this.position = position;
        this.jerseyNumber = jerseyNumber;
        this.marketValue = marketValue;
        this.status = status;
    }
    train() {
        console.log(`Player ${this.getFullName()} is training.`);
    }
    playMatch() {
        console.log(`Player ${this.getFullName()} is playing a match.`);
    }
}
exports.Player = Player;
