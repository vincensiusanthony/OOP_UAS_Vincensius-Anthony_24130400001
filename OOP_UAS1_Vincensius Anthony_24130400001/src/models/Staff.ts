import { Person } from "../core/Person";
import { StaffRole } from "../types/enums";

export class Staff extends Person {
    private clubId: string; // FK
    private role: StaffRole;
    private department: string;

    constructor(
        personId: string, 
        firstName: string, 
        lastName: string, 
        dateOfBirth: Date, 
        nationality: string, 
        clubId: string, 
        role: StaffRole, 
        department: string
    ) {
        super(personId, firstName, lastName, dateOfBirth, nationality);
        this.clubId = clubId;
        this.role = role;
        this.department = department;
    }

    public performDuties(): void {
        console.log(`Staff member ${this.getFullName()} is performing duties in the ${this.department} department.`);
    }
}