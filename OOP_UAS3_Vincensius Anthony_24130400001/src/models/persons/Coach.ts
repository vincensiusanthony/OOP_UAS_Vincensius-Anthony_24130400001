import { Person } from './Person';

export class Coach extends Person {
    constructor(
        personId: string,
        firstName: string,
        lastName: string,
        dateOfBirth: Date,
        nationality: string,
        public teamId: string,
        public role: string,
        public licenseLevel: string
    ) {
        super(personId, firstName, lastName, dateOfBirth, nationality);
    }

    conductTraining(): void {
        console.log(`Coach ${this.getFullName()} is conducting a training session.`);
    }

    selectSquad(): void {
        console.log(`Coach ${this.getFullName()} is selecting the squad for the next match.`);
    }
}