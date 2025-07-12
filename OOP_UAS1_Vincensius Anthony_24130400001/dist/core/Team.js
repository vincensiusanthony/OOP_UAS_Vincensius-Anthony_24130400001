"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
class Team {
    constructor(teamId, clubId, name, league, division, coach) {
        // Relationships & Multiplicity
        this.players = []; // includes: 0..*
        this.trainingSessions = []; // conducts: 0..*
        this.teamId = teamId;
        this.clubId = clubId;
        this.name = name;
        this.league = league;
        this.division = division;
        this.coach = coach; // A team must have one coach
    }
    addPlayer(player) {
        this.players.push(player);
        console.log(`Player ${player.getFullName()} added to team ${this.name}.`);
    }
    removePlayer(playerToRemove) {
        this.players = this.players.filter(p => p !== playerToRemove);
        console.log(`Player ${playerToRemove.getFullName()} removed from team ${this.name}.`);
    }
    scheduleTraining(session) {
        this.trainingSessions.push(session);
        console.log(`New training session scheduled for team ${this.name}.`);
    }
}
exports.Team = Team;
