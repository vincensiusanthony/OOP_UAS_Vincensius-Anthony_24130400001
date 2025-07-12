import { Club } from './core/Club';
import { Team } from './core/Team';
import { Coach } from './models/Coach';
import { Contract } from './models/Contract';
import { Match } from './models/Match';
import { Player } from './models/Player';
import { Season } from './models/Season';
import { Sponsor } from './models/Sponsor';
import { Stadium } from './models/Stadium';
import { Staff } from './models/Staff';
import { PlayerPosition, PlayerStatus, StaffRole } from './types/enums';
import { CoachRole } from './types/enums';

// Export all types and enums
export * from './types/enums';

// Export all core classes
export * from './core/Person';
export * from './core/Club';
export * from './core/Team';

// Export all models
export * from './models/Player';
export * from './models/Coach';
export * from './models/Staff';
export * from './models/Contract';
export * from './models/Match';
export * from './models/Season';
export * from './models/Sponsor';
export * from './models/Stadium';
export * from './models/TrainingSession';

// --- OBJECT CREATION AND LINKING ---

console.log("🚀 Initializing FC Cakrawala...");

// 1. Create the Stadium
const cakrawalaStadium = new Stadium(
    'STD-001',
    'Cakrawala Stadium',
    82000,
    'Jl. Kemang Timur, Jakarta, Indonesia'
);

// 2. Create the Club
const fcCakrawala = new Club(
  'CLUB-FC01',
  'FC Cakrawala',
  '01',
  new Date('2023-01-01'),
  500000,
  "Liga 1",
);

// 3. Create the Head Coach
const headCoach = new Coach(
    "PER-004", "Alex", "Ferguson", new Date('1975-08-15'), "Scottish", 
    "TEAM-SM-01", CoachRole.HeadCoach, "UEFA Pro License" 
);

// 4. Create a Team for the Club
const seniorMensTeam = new Team(
    'TEAM-SM-01',
    'Professional',
    "Senior Men's",
    'Liga 1',
    'Division 1', // <-- Replace with the correct division if needed
    headCoach // Pass the Coach object here
);
fcCakrawala.addTeam(seniorMensTeam);

// 5. Create Players (as Persons, then as Players) 

const player1 = new Player(
    "PER-001", "Budi", "Santoso", new Date('1998-05-20'), "Indonesian",
    "10", PlayerPosition.Forward, 12, 75000, PlayerStatus.Active  
);

// 6. Add players to the team
seniorMensTeam.addPlayer(player1);


// 7. Create a Staff member

const physio = new Staff(
    "PER-005", "Dr. Anisa", "Rahmawati", new Date('1988-01-30'), "Indonesian",
    "CLUB-FC-01", StaffRole.Physiotherapist, "Medical"
);

/* 8. Create Contracts for personnel 
   private contractId: string;
    private clubId: string;   // FK
    private personId: string; // Generic FK to Person
    private startDate: Date;
    private endDate: Date;
    private salary: number;
    private clauses: string;
*/
const contractPlayer1 = new Contract("CTR-001", "Professional", "PER-001", new Date('2024-07-01'), new Date('2027-06-30'), 12000000, "Buy Back" );
const contractCoach = new Contract("CTR-002", "Professional", "PER-004", new Date('2024-01-01'), new Date('2026-12-31'), 45000000, "Extend");

// 9. Create a Sponsor
const mainSponsor = new Sponsor(
    "SPN-001", "Garuda Digital", "Bima", "081234567891", "bima@garudadg.com", 5000000, new Date('2024-01-01'), new Date('2025-12-31')
);

// 10. Create a Season and a Match
const currentSeason = new Season("SZN-2425", 2024/2025, "Liga 1", new Date('2024-08-01'), new Date('2025-05-30'));

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
const firstMatch = new Match(
    "MATCH-001",
    "TEAM-HOME-01", // Home Team
    "TEAM-OPPONENT-02",    // Away Team ID
    new Date('2024-08-10T19:00:00'),
    "01.00",
    "STD-001",
    "Liga 1",
    "SZN-2425"
);


// --- LOGGING THE FINAL STRUCTURE ---
console.log("\n✅ Initialization Complete! Here is the final Club structure:");
console.log("==========================================================");
console.log(JSON.stringify(fcCakrawala, null, 2));
console.log("\n--- Associated Objects ---");
console.log("Head Coach:", headCoach.getFullName());
console.log("Main Sponsor:", mainSponsor.name);
console.log("First Match Date:", firstMatch.getMatchDate());