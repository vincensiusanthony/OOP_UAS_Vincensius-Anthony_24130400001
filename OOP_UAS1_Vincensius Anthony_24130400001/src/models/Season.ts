import { Match } from "./Match";

export class Season {
    private seasonId: string;
    private year: number;
    private league: string;
    private startDate: Date;
    private endDate: Date;
    
    // Relationship: contains 0..* Matches
    private matches: Match[] = [];

    constructor(seasonId: string, year: number, league: string, startDate: Date, endDate: Date) {
        this.seasonId = seasonId;
        this.year = year;
        this.league = league;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public addMatch(match: Match): void {
        this.matches.push(match);
    }

    public getMatches(): Match[] {
        return this.matches;
    }

    public getStandings(): Map<string, number> {
        // In a real app, logic to calculate standings from match results would go here
        console.log(`Generating standings for the ${this.year} ${this.league} season.`);
        return new Map<string, number>();
    }
}