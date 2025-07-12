"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const Club_1 = require("./core/Club");
const Team_1 = require("./core/Team");
const Coach_1 = require("./models/Coach");
const Contract_1 = require("./models/Contract");
const Match_1 = require("./models/Match");
const Player_1 = require("./models/Player");
const Season_1 = require("./models/Season");
const Sponsor_1 = require("./models/Sponsor");
const Stadium_1 = require("./models/Stadium");
const Staff_1 = require("./models/Staff");
const enums_1 = require("./types/enums");
const enums_2 = require("./types/enums");
// Export all types and enums
__exportStar(require("./types/enums"), exports);
// Export all core classes
__exportStar(require("./core/Person"), exports);
__exportStar(require("./core/Club"), exports);
__exportStar(require("./core/Team"), exports);
// Export all models
__exportStar(require("./models/Player"), exports);
__exportStar(require("./models/Coach"), exports);
__exportStar(require("./models/Staff"), exports);
__exportStar(require("./models/Contract"), exports);
__exportStar(require("./models/Match"), exports);
__exportStar(require("./models/Season"), exports);
__exportStar(require("./models/Sponsor"), exports);
__exportStar(require("./models/Stadium"), exports);
__exportStar(require("./models/TrainingSession"), exports);
// --- OBJECT CREATION AND LINKING ---
console.log("🚀 Initializing FC Cakrawala...");
// 1. Create the Stadium
const cakrawalaStadium = new Stadium_1.Stadium('STD-001', 'Cakrawala Stadium', 82000, 'Jl. Kemang Timur, Jakarta, Indonesia');
// 2. Create the Club
const fcCakrawala = new Club_1.Club('CLUB-FC01', 'FC Cakrawala', '01', new Date('2023-01-01'), 500000, "Liga 1");
// 3. Create the Head Coach
const headCoach = new Coach_1.Coach("PER-004", "Alex", "Ferguson", new Date('1975-08-15'), "Scottish", "TEAM-SM-01", enums_2.CoachRole.HeadCoach, "UEFA Pro License");
// 4. Create a Team for the Club
const seniorMensTeam = new Team_1.Team('TEAM-SM-01', 'Professional', "Senior Men's", 'Liga 1', 'Division 1', // <-- Replace with the correct division if needed
headCoach // Pass the Coach object here
);
fcCakrawala.addTeam(seniorMensTeam);
// 5. Create Players (as Persons, then as Players) 
const player1 = new Player_1.Player("PER-001", "Budi", "Santoso", new Date('1998-05-20'), "Indonesian", "10", enums_1.PlayerPosition.Forward, 12, 75000, enums_1.PlayerStatus.Active);
// 6. Add players to the team
seniorMensTeam.addPlayer(player1);
// 7. Create a Staff member
const physio = new Staff_1.Staff("PER-005", "Dr. Anisa", "Rahmawati", new Date('1988-01-30'), "Indonesian", "CLUB-FC-01", enums_1.StaffRole.Physiotherapist, "Medical");
/* 8. Create Contracts for personnel
   private contractId: string;
    private clubId: string;   // FK
    private personId: string; // Generic FK to Person
    private startDate: Date;
    private endDate: Date;
    private salary: number;
    private clauses: string;
*/
const contractPlayer1 = new Contract_1.Contract("CTR-001", "Professional", "PER-001", new Date('2024-07-01'), new Date('2027-06-30'), 12000000, "Buy Back");
const contractCoach = new Contract_1.Contract("CTR-002", "Professional", "PER-004", new Date('2024-01-01'), new Date('2026-12-31'), 45000000, "Extend");
// 9. Create a Sponsor
const mainSponsor = new Sponsor_1.Sponsor("SPN-001", "Garuda Digital", "Bima", "081234567891", "bima@garudadg.com", 5000000, new Date('2024-01-01'), new Date('2025-12-31'));
// 10. Create a Season and a Match
const currentSeason = new Season_1.Season("SZN-2425", 2024 / 2025, "Liga 1", new Date('2024-08-01'), new Date('2025-05-30'));
/*

    constructor(matchId: string, homeTeamId: string, awayTeamId: string, matchDate: Date, matchTime: string, stadiumId: string, competition: string, seasonId: string) {
        this.matchId = matchId;
        this.homeTeamId = homeTeamId;
        this.awayTeamId = awayTeamId;
        this.matchDate = matchDate;
        this.matchTime = matchTime;
        this.stadiumId = stadiumId;
        this.competition = competition;
        this.seasonId = seasonId;
*/
const firstMatch = new Match_1.Match("MATCH-001", "TEAM-HOME-01", // Home Team
"TEAM-OPPONENT-02", // Away Team ID
new Date('2024-08-10T19:00:00'), "01.00", "STD-001", "Liga 1", "SZN-2425");
// --- LOGGING THE FINAL STRUCTURE ---
console.log("\n✅ Initialization Complete! Here is the final Club structure:");
console.log("==========================================================");
console.log(JSON.stringify(fcCakrawala, null, 2));
console.log("\n--- Associated Objects ---");
console.log("Head Coach:", headCoach.getFullName());
console.log("Main Sponsor:", mainSponsor.name);
console.log("First Match Date:", firstMatch.getMatchDate());
