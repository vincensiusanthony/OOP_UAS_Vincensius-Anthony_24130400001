"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stadium = void 0;
class Stadium {
    getStadiumId() {
        throw new Error('Method not implemented.');
    }
    constructor(stadiumId, name, capacity, address) {
        this.stadiumId = stadiumId;
        this.name = name;
        this.capacity = capacity;
        this.address = address;
    }
    hostMatch(match) {
        console.log(`Stadium ${this.name} is hosting match ${match.matchId}.`);
    }
}
exports.Stadium = Stadium;
