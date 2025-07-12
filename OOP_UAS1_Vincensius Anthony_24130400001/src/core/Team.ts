import { Player } from "../models/Player";
import { Coach } from "../models/Coach";
import { TrainingSession } from "../models/TrainingSession";

export class Team {
    private teamId: string;
    private clubId: string; // FK
    private name: string; // e.g., Senior Men, U18
    private league: string;
    private division: string;
    
    // Relationships & Multiplicity
    private players: Player[] = [];                     // includes: 0..*
    private coach: Coach;                               // ledBy: 1
    private trainingSessions: TrainingSession[] = [];   // conducts: 0..*

    constructor(teamId: string, clubId: string, name: string, league: string, division: string, coach: Coach) {
        this.teamId = teamId;
        this.clubId = clubId;
        this.name = name;
        this.league = league;
        this.division = division;
        this.coach = coach; // A team must have one coach
    }

    public addPlayer(player: Player): void {
        this.players.push(player);
        console.log(`Player ${player.getFullName()} added to team ${this.name}.`);
    }

    public removePlayer(playerToRemove: Player): void {
        this.players = this.players.filter(p => p !== playerToRemove);
        console.log(`Player ${playerToRemove.getFullName()} removed from team ${this.name}.`);
    }

    public scheduleTraining(session: TrainingSession): void {
        this.trainingSessions.push(session);
        console.log(`New training session scheduled for team ${this.name}.`);
    }
}