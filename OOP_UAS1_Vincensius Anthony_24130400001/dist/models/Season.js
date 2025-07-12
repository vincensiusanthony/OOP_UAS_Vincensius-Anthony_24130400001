"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Season = void 0;
class Season {
    constructor(seasonId, year, league, startDate, endDate) {
        // Relationship: contains 0..* Matches
        this.matches = [];
        this.seasonId = seasonId;
        this.year = year;
        this.league = league;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    addMatch(match) {
        this.matches.push(match);
    }
    getMatches() {
        return this.matches;
    }
    getStandings() {
        // In a real app, logic to calculate standings from match results would go here
        console.log(`Generating standings for the ${this.year} ${this.league} season.`);
        return new Map();
    }
}
exports.Season = Season;
