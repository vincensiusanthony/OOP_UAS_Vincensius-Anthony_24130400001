// Base abstract class for any person
export abstract class Person {
    constructor(
        public personId: string,
        public firstName: string,
        public lastName: string,
        public dateOfBirth: Date,
        public nationality: string
    ) {}

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}