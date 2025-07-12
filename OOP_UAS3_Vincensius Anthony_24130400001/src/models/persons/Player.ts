import { Person } from './Person';

export class Player extends Person {
    constructor(
        personId: string,
        firstName: string,
        lastName: string,
        dateOfBirth: Date,
        nationality: string,
        public teamId: string,
        public position: string,
        public jerseyNumber: number,
        public marketValue: number,
        public status: string
    ) {
        super(personId, firstName, lastName, dateOfBirth, nationality);
    }

    train(): void {
        console.log(`${this.getFullName()} is training hard. ⚽`);
    }

    playMatch(): void {
        console.log(`${this.getFullName()} (No. ${this.jerseyNumber}) is playing the match.`);
    }
}