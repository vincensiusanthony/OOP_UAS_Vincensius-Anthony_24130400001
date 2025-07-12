import { Person } from "../core/Person";
import { CoachRole } from "../types/enums";

export class Coach extends Person {
    private teamId: string; // FK
    private role: CoachRole;
    private licenseLevel: string;

    constructor(
        personId: string, 
        firstName: string, 
        lastName: string, 
        dateOfBirth: Date, 
        nationality: string, 
        teamId: string, 
        role: CoachRole, 
        licenseLevel: string
    ) {
        super(personId, firstName, lastName, dateOfBirth, nationality);
        this.teamId = teamId;
        this.role = role;
        this.licenseLevel = licenseLevel;
    }

    public conductTraining(): void {
        console.log(`Coach ${this.getFullName()} is conducting training.`);
    }

    public selectSquad(): void {
        console.log(`Coach ${this.getFullName()} is selecting the squad.`);
    }
}