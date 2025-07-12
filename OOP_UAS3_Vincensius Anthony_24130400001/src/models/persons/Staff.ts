import { Person } from './Person';

export class Staff extends Person {
    constructor(
        personId: string,
        firstName: string,
        lastName: string,
        dateOfBirth: Date,
        nationality: string,
        public clubId: string,
        public role: string,
        public department: string
    ) {
        super(personId, firstName, lastName, dateOfBirth, nationality);
    }

    performDuties(): void {
        console.log(`${this.getFullName()} from the ${this.department} department is performing their duties.`);
    }
}