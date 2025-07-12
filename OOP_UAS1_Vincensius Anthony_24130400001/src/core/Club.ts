import { Team } from "./Team";
import { Staff } from "../models/Staff";
import { Sponsor } from "../models/Sponsor";
import { Contract } from "../models/Contract";

export class Club {
    private clubId: string;
    private name: string;
    private stadiumId: string; // FK
    private foundingDate: Date;
    private budget: number;
    private league: string;
    
    // Relationships & Multiplicity
    private teams: Team[] = [];             // manages: 0..*
    private staff: Staff[] = [];            // employs: 0..*
    private sponsors: Sponsor[] = [];       // has: 0..*
    private contracts: Contract[] = [];     // issues: 0..*

    constructor(clubId: string, name: string, stadiumId: string, foundingDate: Date, budget: number, league: string) {
        this.clubId = clubId;
        this.name = name;
        this.stadiumId = stadiumId;
        this.foundingDate = foundingDate;
        this.budget = budget;
        this.league = league;
    }

    public manageBudget(): void {
        console.log(`Managing budget for ${this.name}.`);
    }

    public signSponsor(sponsor: Sponsor): void {
        this.sponsors.push(sponsor);
        console.log(`${this.name} signed a new sponsor: ${sponsor.name}.`);
    }

    public getTeams(): Team[] {
        return this.teams;
    }
    
    public addTeam(team: Team): void {
        this.teams.push(team);
    }

    public hireStaff(staffMember: Staff): void {
        this.staff.push(staffMember);
    }

    public issueContract(contract: Contract): void {
        this.contracts.push(contract);
    }
}