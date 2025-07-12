"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Club = void 0;
class Club {
    constructor(clubId, name, stadiumId, foundingDate, budget, league) {
        // Relationships & Multiplicity
        this.teams = []; // manages: 0..*
        this.staff = []; // employs: 0..*
        this.sponsors = []; // has: 0..*
        this.contracts = []; // issues: 0..*
        this.clubId = clubId;
        this.name = name;
        this.stadiumId = stadiumId;
        this.foundingDate = foundingDate;
        this.budget = budget;
        this.league = league;
    }
    manageBudget() {
        console.log(`Managing budget for ${this.name}.`);
    }
    signSponsor(sponsor) {
        this.sponsors.push(sponsor);
        console.log(`${this.name} signed a new sponsor: ${sponsor.name}.`);
    }
    getTeams() {
        return this.teams;
    }
    addTeam(team) {
        this.teams.push(team);
    }
    hireStaff(staffMember) {
        this.staff.push(staffMember);
    }
    issueContract(contract) {
        this.contracts.push(contract);
    }
}
exports.Club = Club;
