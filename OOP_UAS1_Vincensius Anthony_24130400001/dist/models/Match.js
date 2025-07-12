"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
class Match {
    constructor(matchId, homeTeamId, awayTeamId, matchDate, matchTime, stadiumId, competition, seasonId) {
        this.homeScore = 0;
        this.awayScore = 0;
        this.matchId = matchId;
        this.homeTeamId = homeTeamId;
        this.awayTeamId = awayTeamId;
        this.matchDate = matchDate;
        this.matchTime = matchTime;
        this.stadiumId = stadiumId;
        this.competition = competition;
        this.seasonId = seasonId;
    }
    recordScore(homeScore, awayScore) {
        this.homeScore = homeScore;
        this.awayScore = awayScore;
    }
    generateReport() {
        const report = new Map();
        report.set("matchId", this.matchId);
        report.set("homeTeam", this.homeTeamId);
        report.set("awayTeam", this.awayTeamId);
        report.set("score", `${this.homeScore} - ${this.awayScore}`);
        return report;
    }
    getMatchDate() {
        return this.matchDate;
    }
}
exports.Match = Match;
