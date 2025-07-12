import { Person } from "../core/Person";
import { PlayerPosition, PlayerStatus } from "../types/enums";

export class Player extends Person {
    private teamId: string; // FK
    private position: PlayerPosition;
    private jerseyNumber: number;
    private marketValue: number;
    private status: PlayerStatus;

    constructor(
        personId: string, 
        firstName: string, 
        lastName: string, 
        dateOfBirth: Date, 
        nationality: string, 
        teamId: string, 
        position: PlayerPosition, 
        jerseyNumber: number, 
        marketValue: number, 
        status: PlayerStatus
    ) {
        super(personId, firstName, lastName, dateOfBirth, nationality);
        this.teamId = teamId;
        this.position = position;
        this.jerseyNumber = jerseyNumber;
        this.marketValue = marketValue;
        this.status = status;
    }

    public train(): void {
        console.log(`Player ${this.getFullName()} is training.`);
    }

    public playMatch(): void {
        console.log(`Player ${this.getFullName()} is playing a match.`);
    }
}